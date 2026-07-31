/**
 * Play a soft click sound whenever any link or timeline control is activated.
 * Delays same-tab navigations slightly so the sound isn't cut off by unload.
 */
(function () {
  const SOUND_SRC = '/assets/sounds/mouse-click.mp3';
  const VOLUME = 0.45;
  const NAV_DELAY_MS = 90;

  const base = new Audio(SOUND_SRC);
  base.preload = 'auto';
  base.volume = VOLUME;

  function playClick() {
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

  function findTimelineControl(event) {
    const target = event.target;
    if (!target || typeof target.closest !== 'function') return null;
    return target.closest('.scroll-timeline [data-section-id], .scroll-timeline__track');
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

  document.addEventListener(
    'pointerdown',
    (event) => {
      if (event.button !== 0) return;

      const link = findLink(event);
      if (link) {
        playClick();
        link.dataset.clickSoundPlayed = '1';
        return;
      }

      const timelineControl = findTimelineControl(event);
      if (timelineControl) {
        playClick();
        timelineControl.dataset.clickSoundPlayed = '1';
      }
    },
    true
  );

  document.addEventListener(
    'click',
    (event) => {
      const link = findLink(event);
      if (link) {
        if (link.dataset.clickSoundPlayed === '1') {
          delete link.dataset.clickSoundPlayed;
        } else {
          playClick();
        }

        if (!isPlainLeftClick(event) || event.defaultPrevented) return;
        if (!leavesCurrentDocument(link)) return;

        event.preventDefault();
        const href = link.href;
        window.setTimeout(() => {
          window.location.assign(href);
        }, NAV_DELAY_MS);
        return;
      }

      const timelineControl = findTimelineControl(event);
      if (!timelineControl) return;

      if (timelineControl.dataset.clickSoundPlayed === '1') {
        delete timelineControl.dataset.clickSoundPlayed;
      } else {
        playClick();
      }
    },
    true
  );
})();
