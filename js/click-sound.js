/**
 * Play a soft click sound on interactive controls.
 * Delays same-tab navigations slightly so the sound isn't cut off by unload.
 *
 * Covered: links, scroll timeline, theme toggle, work read more/less.
 */
(function () {
  const SOUND_SRC = '/assets/sounds/mouse-click.mp3';
  const VOLUME = 0.45;
  const NAV_DELAY_MS = 90;
  // Guard against label→checkbox synthesizing a second click
  const PLAY_GAP_MS = 80;
  const CONTROL_SELECTOR = [
    '.scroll-timeline [data-section-id]',
    '.scroll-timeline__track',
    '.theme-toggle',
    '.work-expand-btn',
  ].join(', ');

  const base = new Audio(SOUND_SRC);
  base.preload = 'auto';
  base.volume = VOLUME;

  let lastPlayAt = 0;

  function playClick() {
    const now = performance.now();
    if (now - lastPlayAt < PLAY_GAP_MS) return Promise.resolve();
    lastPlayAt = now;

    const instance = new Audio(SOUND_SRC);
    instance.volume = VOLUME;
    return instance.play().catch(() => {});
  }

  function findLink(event) {
    if (typeof event.composedPath === 'function') {
      const path = event.composedPath();
      for (let i = 0; i < path.length; i++) {
        const node = path[i];
        if (node && node.tagName === 'A' && node.hasAttribute('href')) {
          return node;
        }
      }
    }

    const target = event.target;
    if (target && typeof target.closest === 'function') {
      return target.closest('a[href]');
    }

    return null;
  }

  function findControl(event) {
    const target = event.target;
    if (!target || typeof target.closest !== 'function') return null;
    // Resolve to the label root so checkbox + label share one identity
    const theme = target.closest('.theme-toggle');
    if (theme) return theme;
    return target.closest(CONTROL_SELECTOR);
  }

  function isPlainLeftClick(event) {
    return (
      event.button === 0 &&
      !event.metaKey &&
      !event.ctrlKey &&
      !event.shiftKey &&
      !event.altKey
    );
  }

  function leavesCurrentDocument(link) {
    if (link.target && link.target !== '_self') return false;
    if (link.hasAttribute('download')) return false;

    try {
      const url = new URL(link.href, window.location.href);
      const next = `${url.origin}${url.pathname}${url.search}`;
      const current = `${window.location.origin}${window.location.pathname}${window.location.search}`;
      return next !== current;
    } catch {
      return false;
    }
  }

  function markPlayed(el) {
    el.dataset.clickSoundPlayed = '1';
  }

  function consumePlayed(el) {
    if (el.dataset.clickSoundPlayed === '1') {
      delete el.dataset.clickSoundPlayed;
      return true;
    }
    return false;
  }

  document.addEventListener(
    'pointerdown',
    (event) => {
      if (event.button !== 0) return;

      const link = findLink(event);
      if (link) {
        playClick();
        markPlayed(link);
        return;
      }

      const control = findControl(event);
      if (control) {
        playClick();
        markPlayed(control);
      }
    },
    true
  );

  document.addEventListener(
    'click',
    (event) => {
      const link = findLink(event);
      if (link) {
        if (!consumePlayed(link)) playClick();

        if (!isPlainLeftClick(event) || event.defaultPrevented) return;
        if (!leavesCurrentDocument(link)) return;

        event.preventDefault();
        const href = link.href;
        window.setTimeout(() => {
          window.location.assign(href);
        }, NAV_DELAY_MS);
        return;
      }

      const control = findControl(event);
      if (control && !consumePlayed(control)) {
        playClick();
      }
    },
    true
  );
})();
