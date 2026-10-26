/**
 * Capture Strawberry landing screenshots at key design sections.
 * Usage: node scripts/capture-strawberry.mjs
 */
import { chromium } from 'playwright';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
let sharp = null;
try {
  sharp = require('sharp');
} catch {
  // ok
}

const VIEWPORT = { width: 1440, height: 900 };
const OUT_DIR = path.resolve(
  import.meta.dirname,
  '../public/assets/images/collections/landings/strawberry'
);
const META_OUT = path.resolve(import.meta.dirname, 'strawberry-capture-meta.json');

async function toWebp(buffer, dest) {
  if (sharp) {
    await sharp(buffer).webp({ quality: 78 }).toFile(dest);
    return dest;
  }
  const png = dest.replace(/\.webp$/, '.png');
  await writeFile(png, buffer);
  return png;
}

async function dismissOverlays(page) {
  const selectors = [
    '#__framer-cookie-component-button-dismiss',
    'button:has-text("Accept")',
    'button:has-text("Accept all")',
    'button:has-text("Accept All")',
    'button:has-text("Okay")',
    'button:has-text("Got it")',
    'button:has-text("I agree")',
    '[aria-label="Close"]',
    '[aria-label="Dismiss"]',
  ];
  for (const sel of selectors) {
    try {
      const el = page.locator(sel).first();
      if (await el.isVisible({ timeout: 400 })) {
        await el.click({ timeout: 1500, force: true }).catch(() => {});
        await page.waitForTimeout(200);
      }
    } catch {
      // ignore
    }
  }
  await page.evaluate(() => {
    const hide = (el) => {
      if (!el) return;
      el.style.setProperty('display', 'none', 'important');
      el.style.setProperty('visibility', 'hidden', 'important');
      el.style.setProperty('pointer-events', 'none', 'important');
    };
    hide(document.getElementById('captiwate-wrapper'));
    document
      .querySelectorAll(
        '[class*="--framer-cookie"], [class*="cookie-banner" i], [class*="cookie" i], [id*="captiwate" i]'
      )
      .forEach((el) => {
        let node = el;
        while (node && node !== document.body) {
          if (getComputedStyle(node).position === 'fixed') {
            hide(node);
            return;
          }
          node = node.parentElement;
        }
        hide(el);
      });
  });
}

async function headingTops(page) {
  return page.evaluate(() => {
    const out = {};
    for (const el of document.querySelectorAll('h1, h2, h3, h4')) {
      const t = (el.textContent || '').replace(/\s+/g, ' ').trim();
      if (!t || t.length > 160) continue;
      out[t] = Math.round(el.getBoundingClientRect().top + window.scrollY);
    }
    out.__scrollHeight = document.documentElement.scrollHeight;
    return out;
  });
}

async function captureAt(page, name, y) {
  await page.evaluate((yy) => window.scrollTo(0, yy), Math.max(0, y));
  await page.waitForTimeout(900);
  const png = await page.screenshot({ type: 'png', fullPage: false });
  const dest = path.join(OUT_DIR, name);
  const saved = await toWebp(png, dest);
  return {
    file: path.basename(saved),
    scrollY: await page.evaluate(() => Math.round(window.scrollY)),
  };
}

const browser = await chromium.launch({
  headless: true,
  args: ['--disable-blink-features=AutomationControlled'],
});

await mkdir(OUT_DIR, { recursive: true });

const context = await browser.newContext({
  viewport: VIEWPORT,
  deviceScaleFactor: 1,
  userAgent:
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
});
const page = await context.newPage();
page.setDefaultTimeout(45000);

const result = {
  slug: 'strawberry',
  url: 'https://strawberrybrowser.com/',
  ok: false,
  error: null,
  structure: null,
  shots: [],
};

try {
  await page.goto('https://strawberrybrowser.com/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000,
  });
  await page.waitForTimeout(2500);
  for (let i = 0; i < 25; i++) {
    const scrollHeight = await page.evaluate(() => document.documentElement.scrollHeight);
    const title = await page.title().catch(() => '');
    if (scrollHeight > 1500 && !/checking your browser/i.test(title)) break;
    await page.waitForTimeout(1000);
  }
  await dismissOverlays(page);
  await page.addStyleTag({
    content: `
      #captiwate-wrapper,
      [id*="captiwate" i],
      [class*="--framer-cookie"],
      [class*="cookie-banner" i] {
        display: none !important;
        visibility: hidden !important;
        pointer-events: none !important;
        opacity: 0 !important;
      }
    `,
  });
  await page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
  await page.waitForTimeout(2500);
  await dismissOverlays(page);

  // Scroll through page to trigger lazy content
  const totalHeight = await page.evaluate(() => document.documentElement.scrollHeight);
  for (let y = 0; y < totalHeight; y += 800) {
    await page.evaluate((yy) => window.scrollTo(0, yy), y);
    await page.waitForTimeout(200);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(800);

  const tops = await headingTops(page);
  result.structure = tops;

  const findTop = (patterns, fallback) => {
    for (const [text, y] of Object.entries(tops)) {
      if (text === '__scrollHeight') continue;
      for (const pat of patterns) {
        if (typeof pat === 'string' && text.includes(pat)) return y;
        if (pat instanceof RegExp && pat.test(text)) return y;
      }
    }
    return fallback;
  };

  const at = (patterns, fallback, pad = 100) =>
    Math.max(0, findTop(patterns, fallback) - pad);

  result.shots.push(await captureAt(page, '01-hero.webp', 0));
  result.shots.push(
    await captureAt(
      page,
      '02-section.webp',
      at(['Hire your first AI colleague', 'Hire your'], 900, 80)
    )
  );
  result.shots.push(
    await captureAt(
      page,
      '03-section.webp',
      at(['1.8 billion websites', 'Strawberry can use them all'], 1800, 80)
    )
  );
  result.shots.push(
    await captureAt(
      page,
      '04-section.webp',
      at(['Hire one of our official companions', 'official companions'], 2600, 80)
    )
  );
  result.shots.push(
    await captureAt(
      page,
      '05-section.webp',
      at(['Your entire AI stack', 'Create Beautiful Visuals'], 3600, 80)
    )
  );
  result.shots.push(
    await captureAt(
      page,
      '06-section.webp',
      at(['Working with chatbots', 'Working with Strawberry'], 5200, 80)
    )
  );
  result.shots.push(
    await captureAt(
      page,
      '07-section.webp',
      at(['Loved by ambitious teams', 'A new foundation'], 6800, 80)
    )
  );
  result.shots.push(
    await captureAt(
      page,
      '08-section.webp',
      at(['Frequently asked questions', 'safety and security', 'Get started in minutes'], 8500, 80)
    )
  );

  result.ok = true;
} catch (err) {
  result.error = String(err?.message || err);
} finally {
  await context.close();
  await browser.close();
}

await writeFile(META_OUT, JSON.stringify(result, null, 2));
console.log(
  `${result.ok ? 'OK' : 'FAIL'} strawberry shots=${result.shots.length}` +
    (result.error ? ` err=${result.error}` : '')
);
console.log(
  'scrollYs:',
  result.shots.map((s) => `${s.file}@${s.scrollY}`).join(', ')
);
console.log('headings sample:', Object.keys(result.structure || {}).slice(0, 30));
