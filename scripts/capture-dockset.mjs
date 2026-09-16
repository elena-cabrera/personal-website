/**
 * Capture Dockset landing screenshots with interactive hero engagement.
 * Usage: node scripts/capture-dockset.mjs
 *
 * Prefer this over the generic scroll capturer so the Custom Dock demo
 * shows clicked widgets (not an empty dock state).
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
  // ok — fall back to png
}

const VIEWPORT = { width: 1440, height: 900 };
const OUT_DIR = path.resolve(
  import.meta.dirname,
  '../public/assets/images/collections/landings/dockset'
);
const META_OUT = path.resolve(import.meta.dirname, 'dockset-capture-meta.json');

async function toWebp(buffer, dest) {
  if (sharp) {
    await sharp(buffer).webp({ quality: 78 }).toFile(dest);
    return dest;
  }
  const png = dest.replace(/\.webp$/, '.png');
  await writeFile(png, buffer);
  return png;
}

async function headingTops(page) {
  return page.evaluate(() => {
    const out = {};
    for (const el of document.querySelectorAll('h1, h2, h3')) {
      const t = (el.textContent || '').replace(/\s+/g, ' ').trim();
      out[t] = Math.round(el.getBoundingClientRect().top + window.scrollY);
    }
    out.__scrollHeight = document.documentElement.scrollHeight;
    return out;
  });
}

async function engageInteractiveHero(page) {
  for (const el of await page.locator('button, [role="tab"]').all()) {
    const t = (await el.innerText().catch(() => '')).trim();
    if (t === 'Custom Dock') {
      await el.click().catch(() => {});
      await page.waitForTimeout(400);
      break;
    }
  }

  await page.evaluate(() => {
    const labels = ['AAPL', 'The Entertainer', 'Design review', 'Focus', 'Revenue', 'Stripe'];
    for (const label of labels) {
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      let node;
      while ((node = walker.nextNode())) {
        if (!node.textContent?.includes(label)) continue;
        const el = node.parentElement;
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.width > 0 && r.height > 0 && r.top > 80 && r.top < 800) {
          el.dispatchEvent(
            new MouseEvent('click', {
              bubbles: true,
              clientX: r.left + r.width / 2,
              clientY: r.top + r.height / 2,
            })
          );
          break;
        }
      }
    }
  });
  await page.waitForTimeout(700);
}

async function captureAt(page, name, y, before) {
  await page.evaluate((yy) => window.scrollTo(0, yy), y);
  await page.waitForTimeout(450);
  if (before) await before();
  await page.waitForTimeout(350);
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
  slug: 'dockset',
  url: 'https://dockset.app/',
  ok: false,
  error: null,
  structure: null,
  shots: [],
};

try {
  await page.goto('https://dockset.app/', {
    waitUntil: 'domcontentloaded',
    timeout: 45000,
  });
  await page.waitForTimeout(2500);
  for (let i = 0; i < 20; i++) {
    const scrollHeight = await page.evaluate(() => document.documentElement.scrollHeight);
    const title = await page.title().catch(() => '');
    if (scrollHeight > 1200 && !/checking your browser/i.test(title)) break;
    await page.waitForTimeout(1000);
  }
  await page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {});

  const tops = await headingTops(page);
  result.structure = tops;

  const y = (key, fallback, pad = 80) => Math.max(0, (tops[key] ?? fallback) - pad);

  result.shots.push(await captureAt(page, '01-hero.webp', 0));
  result.shots.push(
    await captureAt(page, '02-section.webp', y('Go on. Make it yours.', 990, 220), () =>
      engageInteractiveHero(page)
    )
  );
  result.shots.push(await captureAt(page, '03-section.webp', y('A little more your Mac.', 2550)));
  result.shots.push(
    await captureAt(page, '04-section.webp', y('Lots of widgets. All included.', 3117, 100))
  );
  result.shots.push(
    await captureAt(page, '05-section.webp', y('Your day changes.Your Dock can too.', 3779))
  );
  result.shots.push(
    await captureAt(page, '06-section.webp', y('Keep the useful things close.', 4458, 160))
  );
  result.shots.push(await captureAt(page, '07-section.webp', y('What people are saying.', 5040)));
  result.shots.push(await captureAt(page, '08-section.webp', y('Make yourself at home.', 6141, 100)));

  result.ok = true;
} catch (err) {
  result.error = String(err?.message || err);
} finally {
  await context.close();
  await browser.close();
}

await writeFile(META_OUT, JSON.stringify(result, null, 2));
console.log(
  `${result.ok ? 'OK' : 'FAIL'} dockset shots=${result.shots.length}` +
    (result.error ? ` err=${result.error}` : '')
);
console.log(`Wrote ${META_OUT}`);
