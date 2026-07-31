/**
 * Expand/collapse long work blurbs with a short height grow animation.
 */
(function () {
  const EASE = 'cubic-bezier(0.23, 1, 0.32, 1)';
  const DURATION_MS = 220;
  const COLLAPSED_LINES = 2;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function lineHeightPx(text) {
    const styles = window.getComputedStyle(text);
    const parsed = parseFloat(styles.lineHeight);
    if (Number.isFinite(parsed)) return parsed;
    const fontSize = parseFloat(styles.fontSize) || 16;
    return fontSize * 1.7;
  }

  function collapsedHeight(text) {
    return Math.ceil(lineHeightPx(text) * COLLAPSED_LINES);
  }

  function ensureClip(text) {
    if (text.parentElement && text.parentElement.classList.contains('work-expand-clip')) {
      return text.parentElement;
    }

    const clip = document.createElement('div');
    clip.className = 'work-expand-clip';
    text.parentNode.insertBefore(clip, text);
    clip.appendChild(text);
    return clip;
  }

  function measureExpandedHeight(clip, text) {
    const previousHeight = clip.style.height;
    clip.style.height = 'auto';
    const height = Math.max(
      Math.ceil(text.getBoundingClientRect().height),
      Math.ceil(text.scrollHeight),
      Math.ceil(clip.scrollHeight)
    );
    clip.style.height = previousHeight;
    return height;
  }

  function setHeight(clip, height) {
    clip.style.height = typeof height === 'number' ? `${height}px` : height;
  }

  function setExpanded(clip, text, button, open, animate) {
    // Cancel any in-flight height animation (interruptible)
    clip.getAnimations().forEach((animation) => animation.cancel());

    const collapsed = collapsedHeight(text);
    const expanded = measureExpandedHeight(clip, text);
    const start =
      Math.ceil(clip.getBoundingClientRect().height) || (open ? collapsed : expanded);
    const end = open ? expanded : collapsed;

    button.textContent = open ? 'show less' : 'read more';
    button.setAttribute('aria-expanded', String(open));
    clip.dataset.open = open ? '1' : '0';

    if (!animate || prefersReducedMotion || Math.abs(expanded - collapsed) < 2) {
      setHeight(clip, open ? 'auto' : collapsed);
      return;
    }

    setHeight(clip, start);

    const animation = clip.animate(
      [{ height: `${start}px` }, { height: `${end}px` }],
      {
        duration: DURATION_MS,
        easing: EASE,
        fill: 'forwards',
      }
    );

    animation.finished
      .then(() => {
        animation.cancel();
        setHeight(clip, open ? 'auto' : end);
      })
      .catch(() => {
        // Interrupted by a newer animation — ignore
      });
  }

  function initWorkExpand() {
    document.querySelectorAll('[data-work-expand]').forEach((block) => {
      const text = block.querySelector('.work-expandable');
      const button = block.querySelector('.work-expand-btn');
      if (!text || !button) return;

      const clip = ensureClip(text);
      clip.style.overflow = 'hidden';

      const collapsed = collapsedHeight(text);
      const expanded = measureExpandedHeight(clip, text);

      if (expanded <= collapsed + 2) {
        button.hidden = true;
        setHeight(clip, 'auto');
        return;
      }

      setHeight(clip, collapsed);
      clip.dataset.open = '0';
      button.hidden = false;
      button.textContent = 'read more';
      button.setAttribute('aria-expanded', 'false');

      button.addEventListener('click', (event) => {
        event.preventDefault();
        const open = clip.dataset.open !== '1';
        setExpanded(clip, text, button, open, true);
      });
    });
  }

  function start() {
    const run = () => initWorkExpand();
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(run).catch(run);
    } else {
      run();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
