/**
 * Markdown Engine
 * Loads .md files, parses YAML frontmatter, renders to HTML via marked.js
 */

/**
 * Parse a raw markdown string into { frontmatter, body }
 * Frontmatter is between --- delimiters at the top of the file
 */
function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) {
    return { frontmatter: {}, body: raw };
  }
  let frontmatter = {};
  try {
    frontmatter = jsyaml.load(match[1]) || {};
  } catch (e) {
    console.warn('Failed to parse frontmatter:', e);
  }
  return { frontmatter, body: match[2] };
}

/**
 * Load and parse a single markdown file
 * Returns { frontmatter: Object, body: string (raw md), html: string }
 */
async function loadMarkdown(path) {
  const response = await fetch(path);
  if (!response.ok) {
    throw new Error(`Failed to load ${path}: ${response.status}`);
  }
  const raw = await response.text();
  const { frontmatter, body } = parseFrontmatter(raw);
  const html = marked.parse(body);
  return { frontmatter, body, html };
}

/**
 * Load all markdown files listed in a manifest.json
 * manifestPath: path to JSON file containing array of filenames
 * basePath: directory containing the .md files
 * Returns array of { slug, frontmatter, body, html } sorted by date (newest first)
 */
async function loadAllFromManifest(manifestPath, basePath) {
  const response = await fetch(manifestPath);
  if (!response.ok) {
    throw new Error(`Failed to load manifest ${manifestPath}: ${response.status}`);
  }
  const filenames = await response.json();

  const items = await Promise.all(
    filenames.map(async (filename) => {
      const slug = filename.replace(/\.md$/, '');
      const { frontmatter, body, html } = await loadMarkdown(`${basePath}/${filename}`);
      return { slug, frontmatter, body, html };
    })
  );

  // Sort by date descending (newest first)
  items.sort((a, b) => {
    const dateA = new Date(a.frontmatter.date || 0);
    const dateB = new Date(b.frontmatter.date || 0);
    return dateB - dateA;
  });

  return items;
}

/**
 * Extract all unique tags from an array of content items
 */
function extractAllTags(items) {
  const tagSet = new Set();
  items.forEach(item => {
    const tags = item.frontmatter.tags || [];
    tags.forEach(tag => tagSet.add(tag));
  });
  return Array.from(tagSet).sort();
}

/**
 * Get query parameter value
 */
function getQueryParam(key) {
  const params = new URLSearchParams(window.location.search);
  return params.get(key);
}

/**
 * Set query parameters without page reload
 */
function setQueryParams(params) {
  const url = new URL(window.location);
  Object.entries(params).forEach(([key, value]) => {
    if (value === null || value === '') {
      url.searchParams.delete(key);
    } else {
      url.searchParams.set(key, value);
    }
  });
  window.history.replaceState({}, '', url);
}
