/**
 * Capture Enginy landing screenshots at key design sections.
 * Usage: node scripts/capture-enginy.mjs
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
  '../public/assets/images/collections/landings/enginy'
);
const META_OUT = path.resolve(import.meta.dirname, 'enginy-capture-meta.json');

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
  // Captiwate video chat bubble intercepts clicks on the cookie Okay button
  await page.evaluate(() => {
    const hide = (el) => {
      if (!el) return;
      el.style.setProperty('display', 'none', 'important');
      el.style.setProperty('visibility', 'hidden', 'important');
      el.style.setProperty('pointer-events', 'none', 'important');
    };
    hide(document.getElementById('captiwate-wrapper'));
    document
      .querySelectorAll('#captiwate-wrapper, [id*="captiwate" i], [class*="captiwate" i]')
      .forEach(hide);
  });
  await page.waitForTimeout(200);

  const okay = page.locator('#__framer-cookie-component-button-dismiss');
  for (let i = 0; i < 16; i++) {
    if (await okay.isVisible().catch(() => false)) break;
    await page.waitForTimeout(250);
  }
  if (await okay.isVisible().catch(() => false)) {
    await okay.click({ timeout: 3000, force: true }).catch(() => {});
    await page.waitForTimeout(400);
  }

  await page.evaluate(() => {
    const hide = (el) => {
      if (!el) return;
      el.style.setProperty('display', 'none', 'important');
      el.style.setProperty('visibility', 'hidden', 'important');
    };
    hide(document.getElementById('captiwate-wrapper'));
    document
      .querySelectorAll(
        '[class*="--framer-cookie"], [class*="cookie-banner" i], [class*="cookie" i]'
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
      if (!t || t.length > 120) continue;
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
  slug: 'enginy',
  url: 'https://www.enginy.ai/',
  ok: false,
  error: null,
  structure: null,
  shots: [],
};

try {
  await page.goto('https://www.enginy.ai/', {
    waitUntil: 'domcontentloaded',
    timeout: 45000,
  });
  await page.waitForTimeout(2500);
  for (let i = 0; i < 25; i++) {
    const scrollHeight = await page.evaluate(() => document.documentElement.scrollHeight);
    const title = await page.title().catch(() => '');
    if (scrollHeight > 1200 && !/checking your browser/i.test(title)) break;
    await page.waitForTimeout(1000);
  }
  await dismissOverlays(page);
  await page.addStyleTag({
    content: `
      #captiwate-wrapper,
      [id*="captiwate" i],
      [class*="captiwate" i],
      [class*="--framer-cookie"],
      [class*="cookie-banner" i] {
        display: none !important;
        visibility: hidden !important;
        pointer-events: none !important;
        opacity: 0 !important;
      }
    `,
  });
  await page.waitForLoadState('networkidle', { timeout: 12000 }).catch(() => {});
  // Let hero / product animations settle
  await page.waitForTimeout(2500);
  await dismissOverlays(page);

  const tops = await headingTops(page);
  result.structure = tops;

  const at = (exact, fallback, pad = 100) =>
    Math.max(0, (tops[exact] ?? fallback) - pad);

  // Explicit section targets matching page order
  result.shots.push(await captureAt(page, '01-hero.webp', 0));
  result.shots.push(
    await captureAt(page, '02-section.webp', at('Find Your Ideal Customers', 2424, 120))
  );
  result.shots.push(
    await captureAt(page, '03-section.webp', at('Know them well enough to connect', 3339, 100))
  );
  result.shots.push(
    await captureAt(page, '04-section.webp', at('Engage them at scale', 4578, 100))
  );
  result.shots.push(
    await captureAt(page, '05-section.webp', at('x2 Conversion rate', 5604, 60))
  );
  result.shots.push(
    await captureAt(page, '06-section.webp', at('Never miss a reply again', 6394, 100))
  );
  result.shots.push(
    await captureAt(
      page,
      '07-section.webp',
      at(
        'Enterprise-Grade Security. Certified to meet industry-leading security standards.',
        7475,
        80
      )
    )
  );
  result.shots.push(
    await captureAt(page, '08-section.webp', at('Who do you wantto sell to?', 9295, 80))
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
  `${result.ok ? 'OK' : 'FAIL'} enginy shots=${result.shots.length}` +
    (result.error ? ` err=${result.error}` : '')
);
console.log(
  'scrollYs:',
  result.shots.map((s) => `${s.file}@${s.scrollY}`).join(', ')
);
