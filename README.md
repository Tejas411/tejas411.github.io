# Tejas Kolhe — Portfolio Website

A static, multi-page portfolio site driven entirely by Markdown. No frameworks, no build tools — just vanilla HTML, CSS, and JavaScript.

## Live Pages

| Page | File | Description |
|------|------|-------------|
| Homepage | `pages/index.html` | Hero + section previews |
| About | `pages/about.html` | Full bio from `content/about.md` |
| Projects | `pages/projects.html` | Filterable project grid |
| Project Detail | `pages/project.html?slug=name` | Single project page |
| Blog | `pages/blog.html` | Filterable, sortable post grid |
| Blog Post | `pages/post.html?slug=name` | Single blog post |
| Resume | `pages/resume.html` | Rendered resume + PDF download |
| Contact | `pages/contact.html` | Email display + social links |

## Folder Structure

```
folio-site/
├── index.html                # Root redirect → pages/index.html
├── pages/                    # All HTML pages
│   ├── index.html, about.html, projects.html, project.html,
│   │   blog.html, post.html, resume.html, contact.html
├── css/
│   └── style.css             # Complete design system
├── js/
│   ├── components.js          # Shared navbar & footer (single source of truth)
│   ├── markdown.js            # MD loading, frontmatter parsing
│   ├── nav.js                 # Navbar active state, hamburger
│   └── filters.js             # Tag filtering + sorting
├── content/
│   ├── about.md               # About page content
│   ├── resume.md              # Resume content
│   ├── projects/
│   │   ├── manifest.json      # List of project filenames
│   │   └── *.md               # One file per project
│   └── blog/
│       ├── manifest.json      # List of blog post filenames
│       └── *.md               # One file per post
├── assets/
│   ├── profile.jpg            # Profile photo
│   ├── resume.pdf             # Downloadable resume
│   └── projects/              # Project thumbnails
└── README.md
```

## How to Add Content

### Add a New Project

1. Create `content/projects/my-project.md`:

```yaml
---
title: "My Project"
date: 2024-12-01
tags: [React, API]
thumbnail: assets/projects/my-project.png
summary: "One-line description."
demo_url: "https://..."
repo_url: "https://..."
featured: true
---
Full description in Markdown...
```

2. Add the filename to `content/projects/manifest.json`:

```json
["project-alpha.md", "project-beta.md", "my-project.md"]
```

3. (Optional) Add a thumbnail image to `assets/projects/`.

### Add a New Blog Post

1. Create `content/blog/my-post.md`:

```yaml
---
title: "My Post"
date: 2024-12-01
tags: [Topic]
summary: "Teaser sentence."
reading_time: "4 min"
---
Full post content in Markdown...
```

2. Add the filename to `content/blog/manifest.json`.

### Update About / Resume

Edit `content/about.md` or `content/resume.md` directly. No code changes needed.

### Editing the Navbar / Footer

All shared UI lives in `js/components.js`. Edit once, and every page updates automatically.

## Deploying to GitHub Pages

1. Push this entire folder to a GitHub repository
2. Go to **Settings → Pages**
3. Under "Source", select **Deploy from a branch**
4. Choose `main` branch, root (`/`) folder
5. Click **Save** — your site will be live at `https://username.github.io/repo-name`

## Running Locally

Use any static file server. The easiest way:

```bash
python -m http.server 3000
```

Then open `http://localhost:3000` (auto-redirects to `pages/index.html`).

## Tech Stack

- **Vanilla HTML/CSS/JS** — no build step
- **[marked.js](https://marked.js.org)** — Markdown → HTML (loaded via CDN)
- **[js-yaml](https://github.com/nodeca/js-yaml)** — YAML frontmatter parsing (loaded via CDN)
- **[Inter](https://rsms.me/inter/)** — Typography (loaded via Google Fonts)
