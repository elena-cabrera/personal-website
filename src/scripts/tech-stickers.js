/**
 * Upgrade tech stack logos into peelable WebGL stickers (Sticker Forge).
 * The static <img> stays as the fallback until each sticker is ready, and
 * the ~800 KB bundle is only fetched when the section is about to scroll in.
 */
import { createStickerSounds } from './sticker-sounds.js';

const MODULE_SRC = '/vendor/sticker-forge/sticker-forge.es.js';

const CARRY_PROGRESS = 0.98;
const SETTLE_RESET_MS = 1500;

const STICKER_OPTIONS = {
  outline: { width: 14, color: '#ffffff' },
  shadow: { opacity: 0.2, blur: 6, distance: 4 },
  peel: { radius: 0.18, stiffness: 0.7, grabWidth: 40, release: 'reset' },
  // The bundled peel recording is replaced by the soft sounds below.
  sound: { enabled: false },
  back: { color: '#f7f5f2', gloss: 0.6, roughness: 0.35 },
  quality: 'medium',
};

let topZ = 1;

// Voices: 'bubble', 'paper' or 'chime' (see sticker-sounds.js). The lift is a
// recorded protective-film peel (freesound_community, Pixabay licence).
const sounds = createStickerSounds('bubble', 1, {
  lift: new URL('/assets/sounds/sticker-peel.mp3', document.baseURI).href,
});

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

function supportsWebGL() {
  try {
    const canvas = document.createElement('canvas');
    return Boolean(canvas.getContext('webgl2') || canvas.getContext('webgl'));
  } catch {
    return false;
  }
}

// Once a sticker is fully peeled it comes off the page: carry it with the
// pointer and stick it back down wherever it is dropped inside the logo area.
// A partial peel springs back on its own; the timer only snaps home a sticker
// the release spring left out of place.
function makeMovable(logo, target, sticker, area) {
  const position = { x: 0, y: 0 };
  let settleTimer = 0;
  let pointer = null;
  let carry = null;
  let peelSound = null;

  const endPeelSound = () => {
    peelSound?.end();
    peelSound = null;
  };

  const trackPointer = (event) => {
    pointer = { x: event.clientX, y: event.clientY };
    if (carry) moveCarry();
  };

  const moveCarry = () => {
    const size = carry.offsetWidth;
    carry.style.transform = `translate(${pointer.x - size / 2}px, ${pointer.y - size / 2}px) rotate(${carry.dataset.tilt}deg) scale(1.12)`;
  };

  const startCarry = () => {
    if (carry || !pointer) return;
    endPeelSound();
    // reset() ends the library's own drag and lays the sticker flat again, so
    // it can be shown at the drop point as soon as it is released.
    sticker.reset();
    target.style.visibility = 'hidden';
    carry = document.createElement('img');
    carry.className = 'tech-sticker__carry';
    carry.src = logo.dataset.stickerSrc;
    carry.alt = '';
    carry.dataset.tilt = String(-Number(logo.dataset.stickerTilt));
    document.body.appendChild(carry);
    moveCarry();
    window.addEventListener('pointerup', drop);
    window.addEventListener('pointercancel', drop);
  };

  const drop = () => {
    window.removeEventListener('pointerup', drop);
    window.removeEventListener('pointercancel', drop);
    window.removeEventListener('pointermove', trackPointer);
    const bounds = area.getBoundingClientRect();
    position.x = clamp(pointer.x, bounds.left, bounds.right) - bounds.left;
    position.y = clamp(pointer.y, bounds.top, bounds.bottom) - bounds.top;
    logo.dataset.moved = '';
    place();
    logo.style.zIndex = String(++topZ);
    carry.remove();
    carry = null;
    sounds.play('stick');
    target.style.visibility = '';
  };

  // Positions are stored relative to the logo area so they survive reflows.
  const place = () => {
    if (!('moved' in logo.dataset)) return;
    target.style.transform = '';
    const bounds = area.getBoundingClientRect();
    const home = target.getBoundingClientRect();
    const dx = bounds.left + position.x - (home.left + home.width / 2);
    const dy = bounds.top + position.y - (home.top + home.height / 2);
    target.style.transform = `translate(${dx}px, ${dy}px)`;
  };

  target.addEventListener('peelstart', () => {
    endPeelSound();
    peelSound = sounds.scrub('lift');
    clearTimeout(settleTimer);
    pointer = null;
    window.addEventListener('pointermove', trackPointer);
  });
  target.addEventListener('peelchange', (event) => {
    if (!sticker.getState().dragging) return;
    peelSound?.update(event.detail.progress);
    if (event.detail.progress >= CARRY_PROGRESS) {
      // Let the library finish handling this pointer move before taking over.
      queueMicrotask(startCarry);
    }
  });
  target.addEventListener('peelend', () => {
    if (carry) return;
    endPeelSound();
    sounds.play('stick', 0.6);
    window.removeEventListener('pointermove', trackPointer);
    clearTimeout(settleTimer);
    settleTimer = setTimeout(() => {
      if (!sticker.getState().dragging) sticker.reset();
    }, SETTLE_RESET_MS);
  });
  target.addEventListener('detachcomplete', () => sticker.reset());
  window.addEventListener('resize', place);
}

async function upgrade(logos) {
  let createSticker;
  try {
    ({ createSticker } = await import(/* @vite-ignore */ MODULE_SRC));
  } catch {
    return;
  }

  sounds.preload();
  const area = logos[0].closest('ul');
  logos.forEach((logo, index) => {
    const tilt = index % 2 ? 4 : -4;
    logo.dataset.stickerTilt = String(tilt);
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
      tilt,
    })
      .then((sticker) => makeMovable(logo, target, sticker, area))
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
