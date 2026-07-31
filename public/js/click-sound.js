/**
 * Play a soft click sound on interactive controls.
 * Delays same-tab navigations until the sound has started so unload
 * doesn't cut it off.
 *
 * Covered: links, scroll timeline, theme toggle, work read more/less.
 */
(function () {
  const SOUND_SRC = '/assets/sounds/mouse-click.mp3';
  const VOLUME = 0.45;
  const NAV_DELAY_MS = 120;
  // Guard against label→checkbox synthesizing a second click
  const PLAY_GAP_MS = 120;
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
  let currentPlay = Promise.resolve();

  function playClick() {
    const now = performance.now();
    if (now - lastPlayAt < PLAY_GAP_MS) return currentPlay;
    lastPlayAt = now;

    const instance = new Audio(SOUND_SRC);
    instance.volume = VOLUME;
    currentPlay = instance.play().catch(() => {});
    return currentPlay;
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
      (event.button === 0 || event.button === undefined) &&
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

  function navigateAfterSound(href) {
    currentPlay.finally(() => {
      window.setTimeout(() => {
        window.location.assign(href);
      }, NAV_DELAY_MS);
    });
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

  // Theme toggle: label click also fires change + a synthetic click on the
  // checkbox. Play on pointerdown (mouse/touch) or change (keyboard only).
  document.addEventListener(
    'change',
    (event) => {
      const input = event.target;
      if (!input || input.id !== 'switch') return;
      const theme = input.closest('.theme-toggle');
      if (!theme) return;
      if (consumePlayed(theme)) return;
      playClick();
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
        navigateAfterSound(link.href);
        return;
      }

      const control = findControl(event);
      if (!control) return;

      // Theme sounds via pointerdown/change — never on click (avoids label→input double).
      // Leave the mark for the change handler to consume.
      if (control.classList.contains('theme-toggle')) return;

      if (!consumePlayed(control)) playClick();
    },
    true
  );
})();
