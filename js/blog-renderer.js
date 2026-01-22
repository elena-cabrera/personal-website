/**
 * Blog Post Renderer
 * Loads blog post metadata and content, then renders it into the template
 */
(function() {
  // Get the slug from the current path
  // e.g., /the-scr-framework -> the-scr-framework
  function getSlugFromPath() {
    const path = window.location.pathname;
    // Remove leading and trailing slashes, then get the first segment
    const segments = path.split('/').filter(s => s && s !== 'index.html');
    return segments[0] || null;
  }

  // Format date from YYYY-MM-DD to "Month DD, YYYY"
  function formatDate(dateString) {
    const date = new Date(dateString + 'T00:00:00');
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }

  // Load and render the blog post
  async function renderBlogPost() {
    const slug = getSlugFromPath();
    if (!slug) {
      console.error('Could not determine blog post slug from path');
      return;
    }

    try {
      // Load posts metadata
      const postsResponse = await fetch('/blog/posts.json');
      if (!postsResponse.ok) {
        throw new Error('Failed to load blog posts metadata');
      }
      const posts = await postsResponse.json();
      
      // Find the post with matching slug
      const post = posts.find(p => p.slug === slug);
      if (!post) {
        throw new Error(`Blog post with slug "${slug}" not found`);
      }

      // Load post content
      const contentResponse = await fetch(`/blog/posts/${slug}/content.html`);
      if (!contentResponse.ok) {
        throw new Error('Failed to load blog post content');
      }
      const contentHtml = await contentResponse.text();

      // Update page title
      const titleElement = document.getElementById('blog-title');
      if (titleElement) {
        titleElement.textContent = `${post.title} - Elena's blog`;
      }

      // Update post title
      const postTitleElement = document.getElementById('blog-post-title');
      if (postTitleElement) {
        postTitleElement.textContent = post.title;
      }

      // Update post date
      const postDateElement = document.getElementById('blog-post-date');
      if (postDateElement) {
        postDateElement.textContent = formatDate(post.date);
      }

      // Update post category
      const postCategoryElement = document.getElementById('blog-post-category');
      if (postCategoryElement) {
        postCategoryElement.textContent = post.category;
      }

      // Insert content
      const contentContainer = document.getElementById('blog-post-content');
      if (contentContainer) {
        contentContainer.innerHTML = contentHtml;
      }
    } catch (error) {
      console.error('Error rendering blog post:', error);
      const contentContainer = document.getElementById('blog-post-content');
      if (contentContainer) {
        contentContainer.innerHTML = '<p class="text-red-600 dark:text-red-400">Error loading blog post. Please try again later.</p>';
      }
    }
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderBlogPost);
  } else {
    renderBlogPost();
  }
})();
