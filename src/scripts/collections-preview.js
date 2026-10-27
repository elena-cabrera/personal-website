/**
 * Floating static preview for collection cards.
 * Shows an image, muted launch video, or favicon/title/domain fallback — never an iframe.
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

const image = document.createElement('img');
image.className = 'collection-preview__media collection-preview__image';
image.alt = '';
image.decoding = 'async';
image.draggable = false;

const video = document.createElement('video');
video.className = 'collection-preview__media collection-preview__video';
video.muted = true;
video.loop = true;
video.playsInline = true;
video.preload = 'metadata';
video.setAttribute('disablePictureInPicture', '');

const fallback = document.createElement('div');
fallback.className = 'collection-preview__fallback';
fallback.innerHTML = `
  <img class="collection-preview__fallback-icon" alt="" width="28" height="28" decoding="async" />
  <p class="collection-preview__fallback-title"></p>
  <p class="collection-preview__fallback-domain"></p>
`;

const fallbackIcon = fallback.querySelector('.collection-preview__fallback-icon');
const fallbackTitle = fallback.querySelector('.collection-preview__fallback-title');
const fallbackDomain = fallback.querySelector('.collection-preview__fallback-domain');

preview.append(image, video, fallback);
document.body.appendChild(preview);

let activeCard = null;
let hideTimer = 0;
let currentKey = '';

function isMouseLike(event) {
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

function stopVideo() {
  video.pause();
  video.removeAttribute('src');
  video.load();
}

function showFallback(card) {
  preview.dataset.mode = 'fallback';
  image.removeAttribute('src');
  image.hidden = true;
  video.hidden = true;
  stopVideo();
  fallback.hidden = false;
  fallbackIcon.src = card.dataset.previewFavicon || '';
  fallbackTitle.textContent = card.dataset.previewTitle || '';
  fallbackDomain.textContent = card.dataset.previewDomain || '';
  preview.classList.remove('is-loading');
}

function showImage(src) {
  preview.dataset.mode = 'image';
  fallback.hidden = true;
  video.hidden = true;
  stopVideo();
  image.hidden = false;
  preview.classList.add('is-loading');
  image.onload = () => {
    preview.classList.remove('is-loading');
  };
  image.onerror = () => {
    if (activeCard) showFallback(activeCard);
  };
  image.src = src;
}

function showVideo(src, poster) {
  preview.dataset.mode = 'video';
  fallback.hidden = true;
  image.hidden = true;
  image.removeAttribute('src');
  video.hidden = false;
  preview.classList.add('is-loading');
  video.onloadeddata = () => {
    preview.classList.remove('is-loading');
  };
  video.onerror = () => {
    if (poster) {
      showImage(poster);
      return;
    }
    if (activeCard) showFallback(activeCard);
  };
  if (poster) video.poster = poster;
  video.src = src;
  const play = video.play();
  if (play && typeof play.catch === 'function') {
    play.catch(() => {
      if (poster) showImage(poster);
    });
  }
}

function showPreview(card, clientX, clientY) {
  window.clearTimeout(hideTimer);

  const mode = card.dataset.previewMode || 'fallback';
  const imageSrc = card.dataset.previewImage || '';
  const videoSrc = card.dataset.previewVideo || '';
  const poster = card.dataset.previewPoster || '';
  const key = `${mode}|${imageSrc}|${videoSrc}|${poster}|${card.dataset.previewTitle || ''}`;

  activeCard = card;

  if (key !== currentKey) {
    currentKey = key;
    if (mode === 'video' && videoSrc) {
      showVideo(videoSrc, poster || imageSrc);
    } else if (mode === 'image' && imageSrc) {
      showImage(imageSrc);
    } else {
      showFallback(card);
    }
  }

  positionPreview(clientX, clientY);
  preview.classList.add('is-visible');
}

function hidePreview() {
  hideTimer = window.setTimeout(() => {
    activeCard = null;
    preview.classList.remove('is-visible');
    if (preview.dataset.mode === 'video') {
      video.pause();
    }
  }, HIDE_DELAY_MS);
}

function clearPreview() {
  window.clearTimeout(hideTimer);
  activeCard = null;
  currentKey = '';
  preview.classList.remove('is-visible', 'is-loading');
  stopVideo();
  image.removeAttribute('src');
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
