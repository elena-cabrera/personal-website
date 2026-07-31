/**
 * Quiet scroll reveals — once only, no entrance cascade on first paint.
 * Above-the-fold shows immediately; below-fold fades in softly as one unit.
 */
(function () {
  const EASE = 'cubic-bezier(0.23, 1, 0.32, 1)';
  const DURATION_MS = 260;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function collectGroupItems(group) {
    if (
      group.hasAttribute('data-reveal') &&
      !group.hasAttribute('data-reveal-group')
    ) {
      return [group];
    }

    const nodes = group.querySelectorAll(
      ':scope [data-reveal], :scope [data-reveal-row]'
    );
    const seen = new Set();
    const items = [];
    nodes.forEach((el) => {
      if (seen.has(el)) return;
      if (el.closest('[data-reveal-row]') && !el.hasAttribute('data-reveal-row')) return;
      seen.add(el);
      items.push(el);
    });
    return items;
  }

  function markRevealed(group) {
    collectGroupItems(group).forEach((el) => {
      el.classList.add('is-revealed');
    });
    group.dataset.revealed = '1';
  }

  function isInInitialViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight * 0.92 && rect.bottom > 0;
  }

  function watchBlogCards(blog) {
    const list = blog.querySelector('ul');
    if (!list) return;

    const mo = new MutationObserver(() => {
      if (!list.children.length) return;
      mo.disconnect();
      if (blog.dataset.revealed !== '1') return;
      list.querySelectorAll(':scope > [data-reveal]').forEach((el) => {
        el.classList.add('is-revealed');
      });
    });

    mo.observe(list, { childList: true });
  }

  function init() {
    if (prefersReducedMotion) return;

    const scrollGroups = Array.from(
      document.querySelectorAll('[data-reveal-group]')
    );
    const contact = document.querySelector('#contact[data-reveal]');
    if (contact) scrollGroups.push(contact);

    const pending = [];

    // Mark above-fold visible BEFORE enabling hide styles (no load cascade)
    scrollGroups.forEach((group) => {
      if (isInInitialViewport(group)) {
        markRevealed(group);
      } else {
        pending.push(group);
      }
    });

    document.documentElement.classList.add('js-reveal');
    document.documentElement.style.setProperty('--reveal-ease', EASE);
    document.documentElement.style.setProperty('--reveal-duration', `${DURATION_MS}ms`);

    if (!pending.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const group = entry.target;
          if (group.dataset.revealed === '1') {
            observer.unobserve(group);
            return;
          }
          markRevealed(group);
          observer.unobserve(group);
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -6% 0px',
      }
    );

    pending.forEach((group) => observer.observe(group));

    const blog = document.querySelector('#blog[data-reveal-group]');
    if (blog) watchBlogCards(blog);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
