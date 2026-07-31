# Personal Website

Personal site built with [Astro](https://astro.build) and Tailwind CSS. Blog posts are Markdown content collections.

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:4321

```bash
npm run build    # output → dist/
npm run preview  # preview production build
```

## Project Structure

```
/
├── public/                      # Static assets (copied as-is)
│   ├── CNAME
│   ├── assets/images/…          # Profile, stack, blog shared images
│   └── blog/posts/{slug}/images # Post-specific images
├── src/
│   ├── content/
│   │   └── blog/                # Markdown blog posts
│   ├── components/              # Nav, Footer, ThemeToggle, BlogCard
│   ├── layouts/BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro          # Homepage
│   │   └── blog/posts/[slug].astro
│   ├── scripts/                 # Client JS (theme, reveals, etc.)
│   └── styles/global.css
└── .github/workflows/deploy.yml # GitHub Pages
```

## How to Add a New Blog Post

### 1. Create the Markdown file

Add `src/content/blog/my-new-post.md`:

```md
---
title: My New Post
date: 2026-08-01
category: Technology
thumbnail: /assets/images/blog/my-thumbnail.jpg
description: Short summary for SEO / cards.
---

![Cover](/assets/images/blog/my-thumbnail.jpg)

Your post in **Markdown**. Images, lists, headings all work.

![Diagram](/blog/posts/my-new-post/images/diagram.png)
```

The filename (without `.md`) is the URL slug → `/blog/posts/my-new-post`.

### 2. Add images (optional)

- Shared: `public/assets/images/blog/`
- Post-specific: `public/blog/posts/my-new-post/images/`

### 3. Verify

```bash
npm run dev
```

The homepage blog section picks up new posts automatically (newest first).

## Frontmatter

| Field         | Description                                      |
|---------------|--------------------------------------------------|
| `title`       | Post title                                       |
| `date`        | `YYYY-MM-DD`                                     |
| `category`    | e.g. Product Management, AI                      |
| `thumbnail`   | Path under `/public` for the homepage card image |
| `description` | Used for meta description                        |

## Deploy

Pushes to `main` build and deploy to GitHub Pages via Actions.

In the repo **Settings → Pages**, set Source to **GitHub Actions**.
