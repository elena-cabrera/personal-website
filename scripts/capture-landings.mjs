/**
 * Capture live landing screenshots + extract page structure for captions.
 * Usage: node scripts/capture-landings.mjs
 */
import { chromium } from 'playwright';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
// sharp optional — fall back to jpeg from playwright if missing
let sharp = null;
try {
  sharp = require('sharp');
} catch {
  // ok
}

const VIEWPORT = { width: 1440, height: 900 };
const OUT_ROOT = path.resolve(import.meta.dirname, '../public/assets/images/collections/landings');
const META_OUT = path.resolve(import.meta.dirname, 'landing-capture-meta.json');

const SITES = [
  { slug: 'superlogical', url: 'https://superlogical.com/' },
  { slug: 'typo', url: 'https://www.typo.so/' },
  { slug: 'eliseai', url: 'https://eliseai.com/healthai' },
  { slug: 'visitors', url: 'https://visitors.now/' },
  { slug: 'kapia', url: 'https://kapia.co/' },
  { slug: 'midday', url: 'https://midday.ai/' },
  { slug: 'arche', url: 'https://thearcheproject.com/' },
  { slug: 'ngrok', url: 'https://ngrok.com/' },
  { slug: 'ramp', url: 'https://ramp.com/' },
  { slug: 'aside', url: 'https://aside.com/' },
  { slug: 'granola', url: 'https://www.granola.ai/' },
  { slug: 'heyclicky', url: 'https://www.heyclicky.com/' },
  { slug: 'acctual', url: 'https://www.acctual.com/' },
  { slug: 'corgi', url: 'https://www.corgi.insure/' },
  { slug: 'tempo', url: 'https://tempo.xyz/' },
  { slug: 'goldsand', url: 'https://goldsand.fi/' },
  { slug: 'anyformat', url: 'https://www.anyformat.ai/es' },
];

const slugFilter = process.argv.slice(2).filter((arg) => !arg.startsWith('-'));
const sitesToCapture =
  slugFilter.length > 0 ? SITES.filter((site) => slugFilter.includes(site.slug)) : SITES;

if (slugFilter.length > 0 && sitesToCapture.length === 0) {
  console.error(`No matching slugs in SITES for: ${slugFilter.join(', ')}`);
  process.exit(1);
}

async function toWebp(buffer, dest) {
  if (sharp) {
    await sharp(buffer).webp({ quality: 78 }).toFile(dest);
    return dest;
  }
  const jpeg = dest.replace(/\.webp$/, '.jpg');
  await writeFile(jpeg, buffer);
  return jpeg;
}

async function dismissCookies(page) {
  const selectors = [
    'button:has-text("Accept")',
    'button:has-text("Accept all")',
    'button:has-text("Accept All")',
    'button:has-text("Aceptar")',
    'button:has-text("Aceptar todas")',
    'button:has-text("I agree")',
    'button:has-text("Got it")',
    'button:has-text("OK")',
    'button:has-text("Close")',
    '[aria-label="Close"]',
    '[aria-label="Dismiss"]',
  ];
  for (const sel of selectors) {
    try {
      const el = page.locator(sel).first();
      if (await el.isVisible({ timeout: 400 })) {
        await el.click({ timeout: 800 }).catch(() => {});
        await page.waitForTimeout(200);
      }
    } catch {
      // ignore
    }
  }
}

async function extractStructure(page) {
  return page.evaluate(() => {
    const text = (el) => (el?.textContent || '').replace(/\s+/g, ' ').trim();
    const metaDesc =
      document.querySelector('meta[name="description"]')?.getAttribute('content') ||
      document.querySelector('meta[property="og:description"]')?.getAttribute('content') ||
      '';
    const h1s = [...document.querySelectorAll('h1')].map(text).filter(Boolean).slice(0, 5);
    const h2s = [...document.querySelectorAll('h2')].map(text).filter(Boolean).slice(0, 20);
    const h3s = [...document.querySelectorAll('h3')].map(text).filter(Boolean).slice(0, 20);
    const sections = [...document.querySelectorAll('section, [class*="hero"], main > div')]
      .slice(0, 30)
      .map((el, i) => {
        const rect = el.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        const heading = text(el.querySelector('h1, h2, h3'));
        return {
          index: i,
          tag: el.tagName.toLowerCase(),
          heading: heading.slice(0, 120),
          top: Math.round(top),
          height: Math.round(rect.height),
          className: String(el.className || '').slice(0, 80),
        };
      })
      .filter((s) => s.height > 120 && s.heading);
    return {
      title: document.title,
      metaDesc: metaDesc.slice(0, 400),
      h1s,
      h2s,
      h3s,
      sections,
      scrollHeight: document.documentElement.scrollHeight,
    };
  });
}

async function captureSite(browser, site) {
  const dir = path.join(OUT_ROOT, site.slug);
  await mkdir(dir, { recursive: true });

  const context = await browser.newContext({
    viewport: VIEWPORT,
    deviceScaleFactor: 1,
    userAgent:
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
  });
  const page = await context.newPage();
  page.setDefaultTimeout(45000);

  const result = {
    slug: site.slug,
    url: site.url,
    ok: false,
    error: null,
    structure: null,
    shots: [],
  };

  try {
    const response = await page.goto(site.url, {
      waitUntil: 'domcontentloaded',
      timeout: 45000,
    });
    await page.waitForTimeout(2500);
    await dismissCookies(page);
    await page.waitForTimeout(800);

    // try network idle lightly
    await page.waitForLoadState('networkidle', { timeout: 8000 }).catch(() => {});

    result.status = response?.status() ?? null;
    result.structure = await extractStructure(page);

    const scrollHeight = await page.evaluate(() => document.documentElement.scrollHeight);
    const viewportH = VIEWPORT.height;
    const maxShots = 8;
    const step = Math.max(viewportH * 0.85, Math.floor(scrollHeight / maxShots));
    const positions = [];
    for (let y = 0; y < scrollHeight - 80 && positions.length < maxShots; y += step) {
      positions.push(Math.round(y));
    }
    if (positions.length === 0) positions.push(0);

    for (let i = 0; i < positions.length; i++) {
      const y = positions[i];
      await page.evaluate((scrollY) => window.scrollTo(0, scrollY), y);
      await page.waitForTimeout(450);
      const png = await page.screenshot({ type: 'png', fullPage: false });
      const name = i === 0 ? '01-hero.webp' : `${String(i + 1).padStart(2, '0')}-section.webp`;
      const dest = path.join(dir, name);
      const saved = await toWebp(png, dest);
      result.shots.push({
        file: path.basename(saved),
        scrollY: y,
        rel: `/assets/images/collections/landings/${site.slug}/${path.basename(saved)}`,
      });
    }

    result.ok = true;
  } catch (err) {
    result.error = String(err?.message || err);
  } finally {
    await context.close();
  }

  console.log(
    `${result.ok ? 'OK' : 'FAIL'} ${site.slug} shots=${result.shots.length}` +
      (result.error ? ` err=${result.error}` : '')
  );
  return result;
}

const browser = await chromium.launch({
  headless: true,
  args: ['--disable-blink-features=AutomationControlled'],
});

const all = [];
for (const site of sitesToCapture) {
  all.push(await captureSite(browser, site));
}
await browser.close();

await writeFile(META_OUT, JSON.stringify(all, null, 2));
console.log(`Wrote ${META_OUT}`);
