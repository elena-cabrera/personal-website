/**
 * Theme Toggle Logic
 * Handles dark/light theme switching and persistence
 */
(function() {
  function hasUserChoice() {
    const v = localStorage.getItem('theme');
    return v === 'light' || v === 'dark';
  }

  function apply(useDark) {
    const root = document.documentElement;
    const checkbox = document.getElementById('switch');
    root.classList.toggle('dark', useDark);
    if (checkbox) checkbox.checked = useDark;
  }

  function initTheme() {
    const root = document.documentElement;
    const checkbox = document.getElementById('switch');

    // Initial state
    const isDark = root.classList.contains('dark');
    if (checkbox) checkbox.checked = isDark;

    // Set up checkbox listener
    if (checkbox) {
      checkbox.addEventListener('change', () => {
        const nowDark = checkbox.checked;
        apply(nowDark);
        localStorage.setItem('theme', nowDark ? 'dark' : 'light');
      });
    }

    // Listen for system preference changes
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    mq.addEventListener('change', (e) => {
      if (!hasUserChoice()) apply(e.matches);
    });
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTheme);
  } else {
    initTheme();
  }
})();
