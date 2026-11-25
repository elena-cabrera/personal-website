/**
 * Draws the pen circle and the closing signature once they scroll into view.
 */
(function () {
  const nodes = document.querySelectorAll('[data-ink]');
  if (!nodes.length) return;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) {
    nodes.forEach((node) => node.classList.add('is-drawn'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-drawn');
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.5 }
  );

  nodes.forEach((node) => observer.observe(node));
})();
