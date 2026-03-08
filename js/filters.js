/**
 * Filtering & Sorting for Projects / Blog listing pages
 */

/**
 * Render tag filter pills into a container
 * @param {string[]} allTags - array of tag strings
 * @param {HTMLElement} container - where to render pills
 * @param {string[]} activeTags - currently active tags
 * @param {Function} onToggle - callback(tag) when a pill is clicked
 */
function renderFilterPills(allTags, container, activeTags, onToggle) {
  container.innerHTML = '';

  // "All" pill
  const allPill = document.createElement('span');
  allPill.className = 'tag tag--clickable' + (activeTags.length === 0 ? ' tag--active' : '');
  allPill.textContent = 'All';
  allPill.addEventListener('click', () => {
    onToggle(null); // null = clear all
  });
  container.appendChild(allPill);

  allTags.forEach(tag => {
    const pill = document.createElement('span');
    pill.className = 'tag tag--clickable' + (activeTags.includes(tag) ? ' tag--active' : '');
    pill.textContent = tag;
    pill.addEventListener('click', () => {
      onToggle(tag);
    });
    container.appendChild(pill);
  });
}

/**
 * Filter items by active tags (multi-select, item must match at least one)
 */
function filterByTags(items, activeTags) {
  if (activeTags.length === 0) return items;
  return items.filter(item => {
    const itemTags = item.frontmatter.tags || [];
    return activeTags.some(tag => itemTags.includes(tag));
  });
}

/**
 * Sort items by date
 * @param {'latest'|'oldest'} order
 */
function sortByDate(items, order) {
  return [...items].sort((a, b) => {
    const dateA = new Date(a.frontmatter.date || 0);
    const dateB = new Date(b.frontmatter.date || 0);
    return order === 'latest' ? dateB - dateA : dateA - dateB;
  });
}

/**
 * Get active tags from URL params
 */
function getActiveTagsFromURL() {
  const tagParam = getQueryParam('tag');
  if (!tagParam) return [];
  return tagParam.split(',').filter(Boolean);
}

/**
 * Sync active tags to URL params
 */
function syncTagsToURL(activeTags) {
  setQueryParams({ tag: activeTags.length > 0 ? activeTags.join(',') : null });
}
