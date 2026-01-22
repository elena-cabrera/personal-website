# Personal Website

My personal website built with vanilla HTML and Tailwind CSS.

## Project Structure

```
/
├── index.html                 # Main homepage
├── assets/
│   └── images/
│       ├── profile/           # Profile images (me.jpg, memoji.png)
│       └── blog/              # Shared blog images (thumbnails, etc.)
├── blog/
│   ├── posts.json             # Blog post metadata (title, date, category, etc.)
│   ├── template.html          # Reusable blog post template
│   └── posts/
│       └── {slug}/            # Individual blog post directory
│           ├── content.html   # Blog post content (article body)
│           └── images/        # Post-specific images
├── js/
│   ├── blog.js                # Generates blog cards on homepage
│   ├── blog-renderer.js       # Renders blog posts from template + content
│   ├── components.js          # Shared components (nav, footer, theme toggle)
│   └── theme.js               # Theme toggle logic
└── {slug}/                    # Blog post pages (e.g., the-scr-framework/)
    └── index.html             # Blog post page (uses template system)
```

## Setup

1. Clone this repository
2. Open `index.html` in your browser or run `python -m http.server` to serve the website locally

## How to Add a New Blog Post

### Step 1: Create Blog Post Directory

Create a new directory for your blog post under `blog/posts/` using a URL-friendly slug (e.g., `my-new-post`):

```bash
mkdir -p blog/posts/my-new-post/images
```

### Step 2: Add Post Metadata

Edit `blog/posts.json` and add a new entry to the array:

```json
[
  {
    "slug": "the-scr-framework",
    "title": "The SCR framework",
    "date": "2025-10-22",
    "category": "Product Management",
    "thumbnail": "/assets/images/blog/wave.jpg",
    "description": "A methodology that McKinsey uses to structure business pitches..."
  },
  {
    "slug": "my-new-post",
    "title": "My New Post",
    "date": "2025-12-01",
    "category": "Technology",
    "thumbnail": "/assets/images/blog/my-thumbnail.jpg",
    "description": "A brief description of the post that appears in the blog card."
  }
]
```

**Fields:**
- `slug`: URL-friendly identifier (must match directory name)
- `title`: Post title (appears in card and post page)
- `date`: Publication date in `YYYY-MM-DD` format
- `category`: Post category (e.g., "Product Management", "Technology")
- `thumbnail`: Path to thumbnail image (use `/assets/images/blog/` for shared images)
- `description`: Brief description (currently not displayed, but useful for future features)

### Step 3: Create Post Content

Create `blog/posts/my-new-post/content.html` with your blog post content:

```html
<div class="space-y-6">
  <img
    src="/assets/images/blog/my-thumbnail.jpg"
    alt="Blog post thumbnail"
    class="w-full max-h-96 rounded-lg object-cover"
  />

  <div class="space-y-4">
    <p class="dark:text-zinc-300 transition-colors">
      Your blog post content goes here...
    </p>
    
    <!-- Add more paragraphs, images, lists, etc. -->
    
    <img
      src="/blog/posts/my-new-post/images/my-image.png"
      alt="Description of image"
      class="w-full max-h-96 rounded-lg object-cover"
    />
  </div>
</div>
```

**Notes:**
- Use Tailwind CSS classes for styling
- Images should use relative paths:
  - Shared images: `/assets/images/blog/filename.jpg`
  - Post-specific images: `/blog/posts/{slug}/images/filename.png`
- The outer `<div class="space-y-6">` wrapper is required

### Step 4: Add Post-Specific Images (Optional)

Place any images specific to this post in `blog/posts/my-new-post/images/` and reference them in your content:

```html
<img
  src="/blog/posts/my-new-post/images/diagram.png"
  alt="Diagram description"
  class="w-full max-h-96 rounded-lg object-cover"
/>
```

### Step 5: Create Blog Post Page

Create the blog post page at `{slug}/index.html`. You can copy from an existing post:

```bash
cp -r the-scr-framework my-new-post
```

Then update the file if needed (though it should work automatically with the template system).

**Note:** The blog post page uses the template system - it loads `blog/template.html` structure and injects content from `blog/posts/{slug}/content.html` automatically via JavaScript.

### Step 6: Verify

1. Open the homepage - your new post should appear in the blog section automatically
2. Click on the post card - it should navigate to your new post
3. Verify all images load correctly
4. Check that the title, date, and category display correctly

## How It Works

### Blog Card Generation

The homepage automatically generates blog cards by:
1. Loading `blog/posts.json` via `js/blog.js`
2. Sorting posts by date (newest first)
3. Generating HTML cards with title, date, category, and thumbnail
4. Inserting cards into the blog section

### Blog Post Rendering

Blog posts are rendered by:
1. `js/blog-renderer.js` extracts the slug from the URL path
2. Loads metadata from `blog/posts.json`
3. Loads content from `blog/posts/{slug}/content.html`
4. Injects content into the template structure
5. Updates title, date, and category from metadata

### Component System

Shared components (nav, footer, theme toggle) are:
- Defined in `js/components.js`
- Automatically inserted into pages using `data-component` attributes
- Theme logic is handled by `js/theme.js`

## Image Organization

- **Profile images**: `assets/images/profile/` - Used on homepage (profile picture, favicon)
- **Shared blog images**: `assets/images/blog/` - Thumbnails and images used across multiple posts
- **Post-specific images**: `blog/posts/{slug}/images/` - Images specific to a single blog post

## Customization

### Changing the Blog Template

Edit `blog/template.html` to change the structure, styling, or layout of all blog posts. Changes will apply to all existing and future posts.

### Updating Shared Components

- **Navigation**: Edit `js/components.js` → `renderNav()` function
- **Footer**: Edit `js/components.js` → `renderFooter()` function
- **Theme Toggle**: Edit `js/components.js` → `renderThemeToggle()` function

### Styling

The site uses Tailwind CSS via CDN. Custom styles can be added in the `<style>` section of HTML files or by extending Tailwind config.
