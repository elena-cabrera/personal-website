/**
 * Upgrade tech stack logos into peelable WebGL stickers (Sticker Forge).
 * The static <img> stays as the fallback until each sticker is ready, and
 * the ~800 KB bundle is only fetched when the section is about to scroll in.
 */
const MODULE_SRC = '/vendor/sticker-forge/sticker-forge.es.js';

const PULLED_OFF_RESET_MS = 450;
const SETTLE_RESET_MS = 1500;

const STICKER_OPTIONS = {
  outline: { width: 14, color: '#ffffff' },
  shadow: { opacity: 0.2, blur: 6, distance: 4 },
  peel: { radius: 0.18, stiffness: 0.7, grabWidth: 40, release: 'reset' },
  sound: { enabled: true, volume: 0.4 },
  back: { color: '#f7f5f2', gloss: 0.6, roughness: 0.35 },
  quality: 'medium',
};

function supportsWebGL() {
  try {
    const canvas = document.createElement('canvas');
    return Boolean(canvas.getContext('webgl2') || canvas.getContext('webgl'));
  } catch {
    return false;
  }
}

// Pulling a sticker past full peel drags it off its slot, and the release
// spring only flattens the curl without moving it back. Snap it home once the
// pointer is released and the spring has had time to settle.
function keepOnPage(target, sticker) {
  let timer = 0;
  target.addEventListener('peelend', (event) => {
    clearTimeout(timer);
    const pulledOff = event.detail.progress >= 0.99;
    timer = setTimeout(
      () => {
        if (!sticker.getState().dragging) sticker.reset();
      },
      pulledOff ? PULLED_OFF_RESET_MS : SETTLE_RESET_MS
    );
  });
  target.addEventListener('peelstart', () => clearTimeout(timer));
  target.addEventListener('detachcomplete', () => sticker.reset());
}

async function upgrade(logos) {
  let createSticker;
  try {
    ({ createSticker } = await import(/* @vite-ignore */ MODULE_SRC));
  } catch {
    return;
  }

  logos.forEach((logo, index) => {
    const target = document.createElement('div');
    target.className = 'tech-sticker__canvas';
    logo.appendChild(target);
    target.addEventListener('ready', () => logo.classList.add('is-live'), {
      once: true,
    });
    createSticker(target, {
      ...STICKER_OPTIONS,
      // Sticker Forge only accepts absolute (http, data or blob) image URLs.
      source: { type: 'image', src: new URL(logo.dataset.stickerSrc, document.baseURI).href },
      tilt: index % 2 ? 4 : -4,
    })
      .then((sticker) => keepOnPage(target, sticker))
      .catch(() => target.remove());
  });
}

function init() {
  const section = document.getElementById('tech-stack');
  const logos = section ? [...section.querySelectorAll('[data-sticker-src]')] : [];
  if (!logos.length) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (!supportsWebGL()) return;

  const observer = new IntersectionObserver(
    (entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      observer.disconnect();
      upgrade(logos);
    },
    { rootMargin: '300px 0px' }
  );
  observer.observe(section);
}

init();
