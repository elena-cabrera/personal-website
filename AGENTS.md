# AGENTS.md

## Cursor Cloud specific instructions

This is a static personal website/blog built with vanilla HTML, CSS (Tailwind via CDN), and JavaScript. There are **no dependencies to install**, no build step, and no package manager.

### Running the site

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`. The blog system uses `fetch()` to load JSON metadata and HTML content, so a local HTTP server is required (`file://` will fail due to CORS).

### Key details

- **No linter/tests/build**: This repo has no test framework, no linter config, and no build tooling. Validation is manual (visually check the site in a browser).
- **CDN dependencies**: Tailwind CSS, Google Fonts, and Umami analytics are all loaded from external CDNs at runtime. Internet access is needed for full styling.
- **Theme toggle**: The dark/light theme toggle is a floating button in the bottom-right corner of pages, not in the nav bar.
- **Blog system**: Posts are defined in `blog/posts.json` and rendered client-side. Each post directory has `index.html` (loads template) and `content.html` (the article body). See `README.md` "How to Add a New Blog Post" for the full workflow.
