---
title: "Readwise CLI"
date: 2024-05-20
tags: [Python, CLI, API]
thumbnail: assets/projects/project-gamma.png
summary: "A command-line tool for searching, exporting, and organizing your Readwise highlights."
repo_url: "https://github.com/alexmorgan/readwise-cli"
featured: true
---

## Overview

Readwise CLI is a terminal-based interface for power users who want fast access to their reading highlights. It connects to the Readwise API and lets you search, filter, tag, and export highlights without leaving your terminal.

## Features

- **Fuzzy search** — Find highlights instantly with fuzzy matching across all your books and articles
- **Smart filters** — Filter by source, date range, tags, or book/article title
- **Export options** — Markdown, JSON, CSV, or pipe-friendly plain text
- **Daily review** — Surface random highlights for spaced repetition review
- **Offline cache** — Highlights are cached locally for instant access even without internet

## Usage

```bash
# Search highlights
rwcli search "atomic habits" --format markdown

# Daily review of 5 random highlights
rwcli review --count 5

# Export all highlights from a specific book
rwcli export --book "Deep Work" --format json > deep-work.json
```

## Technical Details

Built with Python using Click for the CLI framework, httpx for async API calls, and SQLite for local caching. The tool follows the Unix philosophy — it does one thing well and plays nicely with pipes and other command-line tools.
