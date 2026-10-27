/**
 * Capture hover-preview screenshots for collection items that lack one.
 *
 * Targets tools, inspiration, and personal entries (landings/books/launch-videos
 * reuse existing hero/cover/poster assets). Writes:
 *   public/assets/images/collections/previews/<id>.webp
 *
 * Usage:
 *   node scripts/capture-previews.mjs
 *   node scripts/capture-previews.mjs tool-cursor inspo-dribbble
 *   node scripts/capture-previews.mjs --force
 */
import { chromium } from 'playwright';
import { access, mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
let sharp = null;
try {
  sharp = require('sharp');
} catch {
  // ok — fall back to playwright jpeg/png write
}

const VIEWPORT = { width: 1280, height: 800 };
const OUT_DIR = path.resolve(
  import.meta.dirname,
  '../public/assets/images/collections/previews'
);
const META_OUT = path.resolve(import.meta.dirname, 'preview-capture-meta.json');
const DATA_FILES = [
  path.resolve(import.meta.dirname, '../src/data/collections/tools.ts'),
  path.resolve(import.meta.dirname, '../src/data/collections/inspiration.ts'),
  path.resolve(import.meta.dirname, '../src/data/collections/personal.ts'),
];

const args = process.argv.slice(2);
const force = args.includes('--force');
const idFilter = args.filter((arg) => !arg.startsWith('-'));

/**
 * Parse collection item id/title/url triples from a TypeScript data module.
 *
 * Args:
 * - filePath (string): Absolute path to a collections data .ts file.
 *
 * Returns:
 * - Array<{id: string, title: string, url: string}>: Parsed items.
 */
async function parseCollectionItems(filePath) {
  const text = await readFile(filePath, 'utf8');
  const items = [];
  const blockRe = /\{\s*([\s\S]*?)\n\s*\},?/g;
  let match;
  while ((match = blockRe.exec(text)) !== null) {
    const block = match[1];
    const id = block.match(/\bid:\s*['"]([^'"]+)['"]/)?.[1];
    const title = block.match(/\btitle:\s*['"]([^'"]+)['"]/)?.[1];
    const url = block.match(/\burl:\s*['"]([^'"]+)['"]/)?.[1];
    if (id && title && url && /^https?:\/\//.test(url)) {
      items.push({ id, title, url });
    }
  }
  return items;
}

/**
 * Whether a file exists at the given path.
 *
 * Args:
 * - filePath (string): Absolute path.
 *
 * Returns:
 * - boolean: True when the file is readable.
 */
async function fileExists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

/**
 * Compress a PNG buffer to a ~640px-wide webp under ~60KB when possible.
 *
 * Args:
 * - buffer (Buffer): PNG screenshot bytes.
 * - dest (string): Destination .webp path.
 *
 * Returns:
 * - Promise<{path: string, bytes: number}>: Saved file path and size.
 */
async function toPreviewWebp(buffer, dest) {
  if (!sharp) {
    const fallback = dest.replace(/\.webp$/, '.png');
    await writeFile(fallback, buffer);
    return { path: fallback, bytes: buffer.length };
  }

  let quality = 72;
  let out = await sharp(buffer)
    .resize({ width: 640, withoutEnlargement: true })
    .webp({ quality })
    .toBuffer();

  while (out.length > 60 * 1024 && quality > 40) {
    quality -= 8;
    out = await sharp(buffer)
      .resize({ width: 640, withoutEnlargement: true })
      .webp({ quality })
      .toBuffer();
  }

  await writeFile(dest, out);
  return { path: dest, bytes: out.length };
}

/**
 * Click common cookie / consent dismiss controls when visible.
 *
 * Args:
 * - page (import('playwright').Page): Active Playwright page.
 *
 * Returns:
 * - Promise<void>
 */
async function dismissCookies(page) {
  const selectors = [
    'button:has-text("Accept")',
    'button:has-text("Accept all")',
    'button:has-text("Accept All")',
    'button:has-text("Accept cookies")',
    'button:has-text("Aceptar")',
    'button:has-text("Aceptar todas")',
    'button:has-text("I agree")',
    'button:has-text("Got it")',
    'button:has-text("OK")',
    'button:has-text("Allow all")',
    'button:has-text("Allow All")',
    'button:has-text("Consent")',
    '[aria-label="Close"]',
    '[aria-label="Dismiss"]',
    '#onetrust-accept-btn-handler',
    '.cc-btn.cc-dismiss',
  ];
  for (const sel of selectors) {
    try {
      const el = page.locator(sel).first();
      if (await el.isVisible({ timeout: 350 })) {
        await el.click({ timeout: 800 }).catch(() => {});
        await page.waitForTimeout(150);
      }
    } catch {
      // ignore
    }
  }
}

/**
 * Heuristic for login walls / challenge pages that should not become previews.
 *
 * Args:
 * - page (import('playwright').Page): Active Playwright page.
 *
 * Returns:
 * - Promise<string|null>: Reason string when the page looks unusable, else null.
 */
async function detectUnusablePage(page) {
  return page.evaluate(() => {
    const title = (document.title || '').toLowerCase();
    const body = (document.body?.innerText || '').slice(0, 2000).toLowerCase();
    const combined = `${title}\n${body}`;
    if (/checking your browser|just a moment|attention required|access denied/.test(combined)) {
      return 'bot-challenge';
    }
    if (
      /sign in to continue|log in to continue|create an account|enter your password|verify you are human/.test(
        combined
      ) &&
      document.querySelectorAll('input[type="password"], input[type="email"]').length > 0
    ) {
      return 'login-wall';
    }
    if ((document.body?.innerText || '').trim().length < 40) {
      return 'empty-page';
    }
    return null;
  });
}

/**
 * Capture one collection item preview screenshot.
 *
 * Args:
 * - browser (import('playwright').Browser): Shared browser instance.
 * - item ({id: string, title: string, url: string}): Target item.
 *
 * Returns:
 * - Promise<object>: Capture result metadata.
 */
async function captureItem(browser, item) {
  const dest = path.join(OUT_DIR, `${item.id}.webp`);
  const result = {
    id: item.id,
    title: item.title,
    url: item.url,
    ok: false,
    skipped: false,
    bytes: null,
    error: null,
  };

  if (!force && (await fileExists(dest))) {
    result.skipped = true;
    result.ok = true;
    return result;
  }

  const context = await browser.newContext({
    viewport: VIEWPORT,
    deviceScaleFactor: 1,
    userAgent:
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
  });
  const page = await context.newPage();
  page.setDefaultTimeout(35000);

  try {
    const response = await page.goto(item.url, {
      waitUntil: 'domcontentloaded',
      timeout: 35000,
    });
    const status = response?.status() ?? 0;
    if (status >= 400) {
      throw new Error(`HTTP ${status}`);
    }

    await page.waitForTimeout(1200);
    for (let i = 0; i < 12; i++) {
      const title = await page.title().catch(() => '');
      if (!/checking your browser|just a moment/i.test(title)) break;
      await page.waitForTimeout(800);
    }

    await dismissCookies(page);
    await page.waitForLoadState('networkidle', { timeout: 6000 }).catch(() => {});
    await page.waitForTimeout(500);

    const unusable = await detectUnusablePage(page);
    if (unusable) {
      throw new Error(unusable);
    }

    const png = await page.screenshot({ type: 'png', fullPage: false });
    const saved = await toPreviewWebp(png, dest);
    result.ok = true;
    result.bytes = saved.bytes;
    result.path = saved.path;
  } catch (err) {
    result.error = String(err?.message || err);
  } finally {
    await context.close();
  }

  const label = result.skipped ? 'SKIP' : result.ok ? 'OK' : 'FAIL';
  const extra = result.ok && result.bytes ? ` ${Math.round(result.bytes / 1024)}KB` : '';
  console.log(
    `${label} ${item.id}${extra}` + (result.error ? ` err=${result.error}` : '')
  );
  return result;
}

await mkdir(OUT_DIR, { recursive: true });

const allItems = [];
for (const file of DATA_FILES) {
  allItems.push(...(await parseCollectionItems(file)));
}

const unique = new Map();
for (const item of allItems) {
  unique.set(item.id, item);
}

let targets = [...unique.values()];
if (idFilter.length > 0) {
  targets = targets.filter((item) => idFilter.includes(item.id));
  if (targets.length === 0) {
    console.error(`No matching ids: ${idFilter.join(', ')}`);
    process.exit(1);
  }
}

console.log(`Capturing ${targets.length} preview(s) → ${OUT_DIR}`);

const browser = await chromium.launch({
  headless: true,
  args: ['--disable-blink-features=AutomationControlled'],
});

const results = [];
const concurrency = 4;
for (let i = 0; i < targets.length; i += concurrency) {
  const batch = targets.slice(i, i + concurrency);
  const batchResults = await Promise.all(batch.map((item) => captureItem(browser, item)));
  results.push(...batchResults);
}

await browser.close();

const captured = results.filter((r) => r.ok && !r.skipped).length;
const skipped = results.filter((r) => r.skipped).length;
const failed = results.filter((r) => !r.ok);
await writeFile(
  META_OUT,
  JSON.stringify(
    {
      captured,
      skipped,
      failed: failed.map((r) => ({ id: r.id, url: r.url, error: r.error })),
      results,
    },
    null,
    2
  )
);

console.log(
  `Done. captured=${captured} skipped=${skipped} failed=${failed.length}. Meta → ${META_OUT}`
);
if (failed.length) {
  console.log('Fallbacks (no preview image):');
  for (const f of failed) {
    console.log(`  - ${f.id}: ${f.error}`);
  }
}
