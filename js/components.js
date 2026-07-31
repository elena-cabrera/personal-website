/**
 * Shared Components
 * Automatically renders common UI components (nav, footer, theme toggle) into the page
 */
(function() {
  // Get nav configuration from data attribute
  function getNavConfig() {
    const body = document.body;
    const showBackButton = body.dataset.showBackButton === 'true';
    return { showBackButton };
  }

  // Render navigation bar
  function renderNav() {
    const config = getNavConfig();
    const navHtml = `
      <nav class="site-nav bg-white/65 dark:bg-zinc-950/55 transition-colors">
        <div class="max-w-[46rem] mx-auto px-4 py-1.5">
          ${config.showBackButton ? `
          <div class="flex items-center justify-between gap-4">
            <a
              href="/"
              aria-label="Back to home"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" width="18" height="18">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
            </a>
          ` : ''}
          <ul class="flex flex-wrap gap-x-1 gap-y-0 items-center ${config.showBackButton ? 'justify-end' : 'justify-center sm:justify-end'}">
            <li>
              <a href="${config.showBackButton ? '/' : ''}#about-me">about</a>
            </li>
            <li class="site-nav__sep hidden sm:block" aria-hidden="true">/</li>
            <li>
              <a href="${config.showBackButton ? '/' : ''}#work">work</a>
            </li>
            <li class="site-nav__sep hidden sm:block" aria-hidden="true">/</li>
            <li>
              <a href="${config.showBackButton ? '/' : ''}#tech-stack">stack</a>
            </li>
            <li class="site-nav__sep hidden sm:block" aria-hidden="true">/</li>
            <li>
              <a href="${config.showBackButton ? '/' : ''}#projects">projects</a>
            </li>
            <li class="site-nav__sep hidden sm:block" aria-hidden="true">/</li>
            <li>
              <a href="${config.showBackButton ? '/' : ''}#blog">blog</a>
            </li>
          </ul>
          ${config.showBackButton ? '</div>' : ''}
        </div>
      </nav>
    `;
    return navHtml;
  }

  // Render footer
  function renderFooter() {
    return `
      <footer
        class="text-xs text-gray-400 dark:text-zinc-500 border-t border-gray-100 dark:border-zinc-900 py-5 px-4 max-w-[46rem] mx-auto transition-colors"
      >
        © 2026 Elena Cabrera Casquet. All rights reserved.
      </footer>
    `;
  }

  // Render theme toggle button
  function renderThemeToggle() {
    return `
      <!-- Floating theme toggle -->
      <label for="switch" class="theme-toggle fixed bottom-4 right-4 z-20 rounded-full bg-white/90 dark:bg-zinc-800/90 text-zinc-700 dark:text-zinc-200 shadow-md backdrop-blur transition-colors">
        <input type="checkbox" class="input" id="switch" />
        <div class="icon icon--sun">
          <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
            <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"></path>
          </svg>
        </div>
        <div class="icon icon--moon">
          <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
            <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clip-rule="evenodd"></path>
          </svg>
        </div>
      </label>
    `;
  }

  // Initialize components
  function initComponents() {
    // Replace nav if placeholder exists
    const navPlaceholder = document.querySelector('[data-component="nav"]');
    if (navPlaceholder) {
      navPlaceholder.outerHTML = renderNav();
    }

    // Replace footer if placeholder exists
    const footerPlaceholder = document.querySelector('[data-component="footer"]');
    if (footerPlaceholder) {
      footerPlaceholder.outerHTML = renderFooter();
    }

    // Insert theme toggle if placeholder exists
    const themeTogglePlaceholder = document.querySelector('[data-component="theme-toggle"]');
    if (themeTogglePlaceholder) {
      themeTogglePlaceholder.outerHTML = renderThemeToggle();
    }
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initComponents);
  } else {
    initComponents();
  }
})();
