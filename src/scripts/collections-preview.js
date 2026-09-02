/**
 * Floating live-site preview for collection cards.
 * Shows a bordered iframe tooltip while hovering a card with a mouse pointer.
 */

const root = document.querySelector('[data-collections]');
if (!root) {
  throw new Error('collections root missing');
}

const PREVIEW_W = 320;
const PREVIEW_H = 200;
const OFFSET = 18;
const HIDE_DELAY_MS = 80;

const preview = document.createElement('div');
preview.className = 'collection-preview';
preview.setAttribute('aria-hidden', 'true');

const frame = document.createElement('iframe');
frame.className = 'collection-preview__frame';
frame.setAttribute('tabindex', '-1');
frame.setAttribute('loading', 'lazy');
frame.setAttribute(
  'sandbox',
  'allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox'
);
frame.title = 'Site preview';

preview.appendChild(frame);
document.body.appendChild(preview);

let activeCard = null;
let hideTimer = 0;
let currentUrl = '';

function isMouseLike(event) {
  // Ignore touch / pen so mobile taps do not pin a floating preview.
  if ('pointerType' in event && event.pointerType) {
    return event.pointerType === 'mouse';
  }
  return true;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function positionPreview(clientX, clientY) {
  const pad = 12;
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  let left = clientX + OFFSET;
  let top = clientY + OFFSET;

  if (left + PREVIEW_W + pad > vw) {
    left = clientX - PREVIEW_W - OFFSET;
  }
  if (top + PREVIEW_H + pad > vh) {
    top = clientY - PREVIEW_H - OFFSET;
  }

  left = clamp(left, pad, vw - PREVIEW_W - pad);
  top = clamp(top, pad, vh - PREVIEW_H - pad);

  preview.style.left = `${left}px`;
  preview.style.top = `${top}px`;
}

function showPreview(card, clientX, clientY) {
  window.clearTimeout(hideTimer);

  const link = card.querySelector('a[href]');
  const url = card.dataset.previewUrl || (link?.getAttribute('href') ?? '');
  if (!url || url.startsWith('#') || url.startsWith('/')) return;

  activeCard = card;

  if (url !== currentUrl) {
    currentUrl = url;
    preview.classList.add('is-loading');
    frame.src = url;
  }

  positionPreview(clientX, clientY);
  preview.classList.add('is-visible');
}

frame.addEventListener('load', () => {
  // Ignore blank clears; only reveal once a real page has painted.
  if (!currentUrl) return;
  preview.classList.remove('is-loading');
});

function hidePreview() {
  hideTimer = window.setTimeout(() => {
    activeCard = null;
    preview.classList.remove('is-visible');
  }, HIDE_DELAY_MS);
}

function clearPreview() {
  window.clearTimeout(hideTimer);
  activeCard = null;
  currentUrl = '';
  preview.classList.remove('is-visible', 'is-loading');
  frame.removeAttribute('src');
}

function cardFromEvent(event) {
  if (!(event.target instanceof Element)) return null;
  const card = event.target.closest('[data-collection-item]');
  if (!(card instanceof HTMLElement) || card.hidden) return null;
  return card;
}

root.addEventListener('pointerover', (event) => {
  if (!isMouseLike(event)) return;
  const card = cardFromEvent(event);
  if (!card || card === activeCard) return;
  showPreview(card, event.clientX, event.clientY);
});

root.addEventListener('pointermove', (event) => {
  if (!isMouseLike(event) || !activeCard) return;
  const card = cardFromEvent(event);
  if (card !== activeCard) return;
  positionPreview(event.clientX, event.clientY);
});

root.addEventListener('pointerout', (event) => {
  if (!isMouseLike(event)) return;
  const card = cardFromEvent(event);
  if (!card) return;
  const related = event.relatedTarget;
  if (related instanceof Node && card.contains(related)) return;
  if (card === activeCard) hidePreview();
});

// mouse* fallback for environments that synthesize hover without pointer events
root.addEventListener('mouseover', (event) => {
  const card = cardFromEvent(event);
  if (!card || card === activeCard) return;
  showPreview(card, event.clientX, event.clientY);
});

root.addEventListener('mousemove', (event) => {
  if (!activeCard) return;
  const card = cardFromEvent(event);
  if (card !== activeCard) return;
  positionPreview(event.clientX, event.clientY);
});

root.addEventListener('mouseout', (event) => {
  const card = cardFromEvent(event);
  if (!card) return;
  const related = event.relatedTarget;
  if (related instanceof Node && card.contains(related)) return;
  if (card === activeCard) hidePreview();
});

window.addEventListener(
  'scroll',
  () => {
    if (activeCard) clearPreview();
  },
  { passive: true }
);

document.addEventListener('visibilitychange', () => {
  if (document.hidden) clearPreview();
});
