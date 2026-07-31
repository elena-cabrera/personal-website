/**
 * Minimal scroll timeline — ruler-style section navigator.
 * Dialing follows scroll, or mouse position while hovering the track.
 * Hovering anywhere shows a section tooltip on the right.
 * Click anywhere in a section segment to jump to that section.
 */
(function () {
  const SECTIONS = [
    { id: 'about-me', label: 'about me' },
    { id: 'work', label: 'work' },
    { id: 'tech-stack', label: 'tech stack' },
    { id: 'projects', label: 'projects' },
    { id: 'blog', label: 'blog' },
  ];

  const TICKS_BETWEEN = 5;
  const SCALE_RADIUS = 0.14;
  const SCALE_BOOST = 0.75;
  const SCROLL_MARGIN = 56;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let lockedSectionId = null;
  let lockTimer = null;
  let hoverProgress = null;
  let cachedFirstTop = 0;
  let cachedLastTop = 1;
  let cachedSectionProgress = [];
  let cachedSectionTops = [];
  let hoverTop = 0;
  let hoverRange = 1;
  let lastTooltipSectionId = null;

  function jumpToSection(sectionId) {
    const target = document.getElementById(sectionId);
    if (!target) return;

    lockedSectionId = sectionId;
    window.clearTimeout(lockTimer);
    lockTimer = window.setTimeout(() => {
      lockedSectionId = null;
    }, prefersReducedMotion ? 50 : 900);

    const top = target.getBoundingClientRect().top + window.scrollY - SCROLL_MARGIN;
    window.scrollTo({
      top: Math.max(0, top),
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
    history.replaceState(null, '', `#${sectionId}`);
  }

  function buildTimeline() {
    const nav = document.createElement('nav');
    nav.className = 'scroll-timeline';
    nav.setAttribute('aria-label', 'Page sections');

    const track = document.createElement('div');
    track.className = 'scroll-timeline__track';

    const hoverTooltip = document.createElement('div');
    hoverTooltip.className = 'scroll-timeline__hover-tooltip';
    hoverTooltip.setAttribute('aria-hidden', 'true');
    track.appendChild(hoverTooltip);

    const lines = [];

    SECTIONS.forEach((section, sectionIndex) => {
      const mark = document.createElement('button');
      mark.type = 'button';
      mark.className = 'scroll-timeline__line scroll-timeline__line--mark';
      mark.dataset.sectionId = section.id;
      mark.setAttribute('aria-label', `Go to ${section.label}`);

      const bar = document.createElement('span');
      bar.className = 'scroll-timeline__bar';
      bar.setAttribute('aria-hidden', 'true');
      mark.appendChild(bar);

      mark.addEventListener('click', (event) => {
        event.stopPropagation();
        jumpToSection(section.id);
      });

      track.appendChild(mark);
      lines.push({
        el: mark,
        scaleEl: bar,
        isMark: true,
        sectionId: section.id,
        progress: 0,
        visualProgress: 0,
        lastScale: -1,
        lastOpacity: -1,
      });

      if (sectionIndex === SECTIONS.length - 1) return;

      for (let i = 0; i < TICKS_BETWEEN; i++) {
        const tick = document.createElement('button');
        tick.type = 'button';
        tick.className = 'scroll-timeline__line scroll-timeline__line--tick';
        tick.dataset.sectionId = section.id;
        tick.setAttribute('aria-label', `Go to ${section.label}`);
        tick.addEventListener('click', (event) => {
          event.stopPropagation();
          jumpToSection(section.id);
        });
        track.appendChild(tick);
        lines.push({
          el: tick,
          scaleEl: tick,
          isMark: false,
          sectionId: section.id,
          progress: 0,
          visualProgress: 0,
          fromSectionIndex: sectionIndex,
          tickIndex: i,
          lastScale: -1,
          lastOpacity: -1,
        });
      }
    });

    const lastIndex = lines.length - 1;
    lines.forEach((line, index) => {
      line.visualProgress = lastIndex === 0 ? 0 : index / lastIndex;
    });

    nav.appendChild(track);
    document.body.appendChild(nav);
    return { nav, track, lines, hoverTooltip };
  }

  function cacheGeometry(lines, sectionEls, track) {
    cachedSectionTops = sectionEls.map((el) => el.offsetTop);
    cachedFirstTop = cachedSectionTops[0];
    cachedLastTop = cachedSectionTops[cachedSectionTops.length - 1];
    const range = Math.max(cachedLastTop - cachedFirstTop, 1);
    cachedSectionProgress = cachedSectionTops.map((top) => (top - cachedFirstTop) / range);

    lines.forEach((line) => {
      if (line.isMark) {
        const index = SECTIONS.findIndex((section) => section.id === line.sectionId);
        line.progress = cachedSectionProgress[index] ?? 0;
        return;
      }
      const from = cachedSectionProgress[line.fromSectionIndex];
      const to = cachedSectionProgress[line.fromSectionIndex + 1];
      line.progress = from + (to - from) * ((line.tickIndex + 1) / (TICKS_BETWEEN + 1));
    });

    const first = lines[0]?.el;
    const last = lines[lines.length - 1]?.el;
    if (first && last) {
      const top = first.getBoundingClientRect().top;
      const bottom = last.getBoundingClientRect().bottom;
      hoverTop = top;
      hoverRange = Math.max(bottom - top, 1);
    } else if (track) {
      const rect = track.getBoundingClientRect();
      hoverTop = rect.top;
      hoverRange = Math.max(rect.height, 1);
    }
  }

  function getScrollProgress() {
    const range = Math.max(cachedLastTop - cachedFirstTop, 1);
    const anchor = window.scrollY + SCROLL_MARGIN;
    return Math.min(1, Math.max(0, (anchor - cachedFirstTop) / range));
  }

  function getHoverProgress(clientY) {
    return Math.min(1, Math.max(0, (clientY - hoverTop) / hoverRange));
  }

  function getActiveSectionId(sectionEls) {
    if (lockedSectionId) return lockedSectionId;

    const anchor = window.scrollY + SCROLL_MARGIN + 8;
    let activeId = sectionEls[0].id;

    for (let i = 0; i < cachedSectionTops.length; i++) {
      if (cachedSectionTops[i] <= anchor) {
        activeId = sectionEls[i].id;
      } else {
        break;
      }
    }

    return activeId;
  }

  function sectionIdAtVisualProgress(lines, progress) {
    let closest = lines[0];
    let best = Infinity;

    for (let i = 0; i < lines.length; i++) {
      const distance = Math.abs(lines[i].visualProgress - progress);
      if (distance < best) {
        best = distance;
        closest = lines[i];
      }
    }

    return closest.sectionId;
  }

  function labelForSectionId(sectionId) {
    return SECTIONS.find((section) => section.id === sectionId)?.label ?? '';
  }

  function showHoverTooltip(hoverTooltip, track, sectionId, clientY) {
    const label = labelForSectionId(sectionId);
    if (!label) return;

    const trackRect = track.getBoundingClientRect();
    const y = Math.min(Math.max(clientY - trackRect.top, 0), trackRect.height);
    const alreadyVisible = hoverTooltip.dataset.visible === '1';

    if (lastTooltipSectionId !== sectionId) {
      hoverTooltip.textContent = label;
      lastTooltipSectionId = sectionId;
    }

    hoverTooltip.style.top = `${y}px`;
    hoverTooltip.dataset.visible = '1';
    hoverTooltip.dataset.instant = alreadyVisible ? '1' : '0';
  }

  function hideHoverTooltip(hoverTooltip) {
    hoverTooltip.dataset.visible = '0';
    delete hoverTooltip.dataset.instant;
    lastTooltipSectionId = null;
  }

  function scaleFromDistance(distance) {
    if (distance >= SCALE_RADIUS) return 1;
    const t = 1 - distance / SCALE_RADIUS;
    const eased = t * t * (3 - 2 * t);
    return 1 + eased * SCALE_BOOST;
  }

  function update(lines, sectionEls) {
    const dialingOnHover = hoverProgress !== null;
    const dialProgress = dialingOnHover ? hoverProgress : getScrollProgress();
    const activeSectionId = dialingOnHover
      ? sectionIdAtVisualProgress(lines, hoverProgress)
      : getActiveSectionId(sectionEls);

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const lineProgress = dialingOnHover ? line.visualProgress : line.progress;
      const distance = Math.abs(lineProgress - dialProgress);
      const scale = prefersReducedMotion ? 1 : scaleFromDistance(distance);
      const roundedScale = Math.round(scale * 100) / 100;
      const opacity = Math.round((0.4 + Math.min(0.6, (scale - 1) / SCALE_BOOST)) * 100) / 100;

      if (roundedScale !== line.lastScale) {
        line.lastScale = roundedScale;
        line.scaleEl.style.transform = roundedScale === 1 ? '' : `scaleX(${roundedScale})`;
      }

      if (opacity !== line.lastOpacity) {
        line.lastOpacity = opacity;
        line.scaleEl.style.opacity = String(opacity);
      }

      if (line.isMark) {
        const shouldBeActive = line.sectionId === activeSectionId;
        if (line.el.classList.contains('is-active') !== shouldBeActive) {
          line.el.classList.toggle('is-active', shouldBeActive);
        }
      }
    }
  }

  function init() {
    const sectionEls = SECTIONS.map(({ id }) => document.getElementById(id)).filter(Boolean);
    if (sectionEls.length === 0) return;

    const { track, lines, hoverTooltip } = buildTimeline();
    let ticking = false;
    let resizeQueued = false;

    const scheduleUpdate = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        update(lines, sectionEls);
        ticking = false;
      });
    };

    const refreshGeometry = () => {
      cacheGeometry(lines, sectionEls, track);
      scheduleUpdate();
    };

    track.addEventListener(
      'pointermove',
      (event) => {
        const next = getHoverProgress(event.clientY);
        const sectionId = sectionIdAtVisualProgress(lines, next);
        showHoverTooltip(hoverTooltip, track, sectionId, event.clientY);

        if (hoverProgress !== null && Math.abs(next - hoverProgress) < 0.008) return;
        hoverProgress = next;
        scheduleUpdate();
      },
      { passive: true }
    );

    track.addEventListener('pointerleave', () => {
      hoverProgress = null;
      hideHoverTooltip(hoverTooltip);
      scheduleUpdate();
    });

    track.addEventListener('pointerenter', () => {
      cacheGeometry(lines, sectionEls, track);
    });

    track.addEventListener('click', (event) => {
      if (event.target.closest('[data-section-id]')) return;
      jumpToSection(sectionIdAtVisualProgress(lines, getHoverProgress(event.clientY)));
    });

    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener(
      'resize',
      () => {
        if (resizeQueued) return;
        resizeQueued = true;
        requestAnimationFrame(() => {
          resizeQueued = false;
          refreshGeometry();
        });
      },
      { passive: true }
    );

    refreshGeometry();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
