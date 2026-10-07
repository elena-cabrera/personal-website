/**
 * Hobby tags: open a photo card on hover (mouse), focus (keyboard) or tap
 * (touch). While open, the card lazily trails the pointer and leans into the
 * direction of travel, then settles back upright.
 */
(function () {
  const FOLLOW = 0.16; // lerp factor per frame, lower = lazier
  const LEAN = 0.35; // degrees of lean per px of lag
  const MAX_LEAN = 9;
  const VIEWPORT_GUTTER = 12;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

  function setup(tag) {
    const float = tag.querySelector('.hobby-tag__float');
    if (!float) return;

    let open = false;
    let targetX = 0;
    let currentX = 0;
    let frame = 0;

    // Keep the card fully on screen, whatever the tag's position in the text
    function clampToViewport(x) {
      const rect = tag.getBoundingClientRect();
      const half = float.offsetWidth / 2;
      const center = rect.left + rect.width / 2;
      const min = VIEWPORT_GUTTER + half - center;
      const max = window.innerWidth - VIEWPORT_GUTTER - half - center;
      return clamp(x, min, max);
    }

    function render() {
      currentX += (targetX - currentX) * FOLLOW;
      const lean = clamp((targetX - currentX) * LEAN, -MAX_LEAN, MAX_LEAN);
      float.style.transform = `translate3d(${currentX.toFixed(2)}px, 0, 0) rotate(${lean.toFixed(2)}deg)`;

      if (Math.abs(targetX - currentX) > 0.1) {
        frame = requestAnimationFrame(render);
      } else {
        frame = 0;
      }
    }

    function moveTo(x, instant) {
      targetX = clampToViewport(x);
      if (instant || prefersReducedMotion) {
        currentX = targetX;
        float.style.transform = `translate3d(${currentX}px, 0, 0)`;
        return;
      }
      if (!frame) frame = requestAnimationFrame(render);
    }

    function show(x) {
      if (open) return;
      open = true;
      tag.classList.add('is-open');
      tag.setAttribute('aria-expanded', 'true');
      // Appear right where the pointer is, then follow from there
      moveTo(x, true);
    }

    function hide() {
      if (!open) return;
      open = false;
      tag.classList.remove('is-open');
      tag.setAttribute('aria-expanded', 'false');
    }

    function offsetFromCenter(clientX) {
      const rect = tag.getBoundingClientRect();
      return clientX - (rect.left + rect.width / 2);
    }

    if (canHover) {
      tag.addEventListener('pointerenter', (event) => {
        if (event.pointerType !== 'mouse') return;
        show(offsetFromCenter(event.clientX));
      });
      tag.addEventListener('pointermove', (event) => {
        if (!open || event.pointerType !== 'mouse') return;
        moveTo(offsetFromCenter(event.clientX));
      });
      tag.addEventListener('pointerleave', (event) => {
        if (event.pointerType !== 'mouse') return;
        if (tag.matches(':focus-visible')) return;
        hide();
      });
    }

    tag.addEventListener('click', () => {
      if (canHover) return;
      if (open) hide();
      else show(0);
    });

    tag.addEventListener('focus', () => {
      if (tag.matches(':focus-visible')) show(0);
    });
    tag.addEventListener('blur', hide);

    tag.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') hide();
    });

    return { hide, contains: (node) => tag.contains(node) };
  }

  function init() {
    const controllers = Array.from(document.querySelectorAll('[data-hobby-tag]'))
      .map(setup)
      .filter(Boolean);
    if (!controllers.length) return;

    // Touch: tapping anywhere else closes open cards
    document.addEventListener('pointerdown', (event) => {
      controllers.forEach((c) => {
        if (!c.contains(event.target)) c.hide();
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
