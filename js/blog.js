/**
 * Blog Card Generator
 * Automatically generates blog cards on the main page from posts.json metadata
 */
(function() {
  // Format date from YYYY-MM-DD to "Month DD, YYYY"
  function formatDate(dateString) {
    const date = new Date(dateString + 'T00:00:00');
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }

  // Generate HTML for a single blog card
  function createBlogCard(post) {
    const formattedDate = formatDate(post.date);
    return `
      <li class="group rounded-lg p-1 -m-2 hover:bg-gray-100 dark:hover:bg-zinc-900 hover:shadow-sm transition-all duration-200" data-reveal>
        <a
          href="/blog/posts/${post.slug}"
          class="flex gap-4 items-center font-medium text-gray-700 hover:text-gray-900 dark:text-zinc-300 dark:hover:text-white transition-colors"
        >
          <img
            src="${post.thumbnail}"
            alt="Blog post thumbnail"
            class="w-20 h-20 rounded-lg object-cover flex-shrink-0"
          />
          <div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white transition-colors mb-1">
              ${post.title}
            </h3>
            <p class="text-sm text-gray-500 dark:text-zinc-500 font-medium tracking-wide transition-colors mb-2">
              ${formattedDate} · ${post.category}
            </p>
          </div>
        </a>
      </li>
    `;
  }

  // Load and render blog cards
  async function renderBlogCards() {
    const blogSection = document.getElementById('blog');
    if (!blogSection) {
      console.error('Blog section not found');
      return;
    }

    const cardsContainer = blogSection.querySelector('ul');
    if (!cardsContainer) {
      console.error('Blog cards container not found');
      return;
    }

    try {
      // Load posts metadata
      const response = await fetch('/blog/posts.json');
      if (!response.ok) {
        throw new Error('Failed to load blog posts');
      }
      const posts = await response.json();

      // Sort posts by date (newest first)
      posts.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB - dateA;
      });

      // Generate and insert cards
      const cardsHtml = posts.map(createBlogCard).join('');
      cardsContainer.innerHTML = cardsHtml;
    } catch (error) {
      console.error('Error loading blog posts:', error);
      cardsContainer.innerHTML = '<li class="text-gray-600 dark:text-zinc-400">Unable to load blog posts. Please try again later.</li>';
    }
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderBlogCards);
  } else {
    renderBlogCards();
  }
})();
