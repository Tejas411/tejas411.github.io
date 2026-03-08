/**
 * Navigation — active state & mobile hamburger
 */
document.addEventListener('DOMContentLoaded', () => {
  // --- Active link ---
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.navbar__link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    // Match exact path or match if current path starts with the link href
    // For index/home, match only exact
    if (href === 'index.html' || href === '/' || href === './') {
      if (currentPath.endsWith('index.html') || currentPath.endsWith('/') || currentPath === '') {
        link.classList.add('navbar__link--active');
      }
    } else if (currentPath.includes(href.replace('.html', ''))) {
      link.classList.add('navbar__link--active');
    }
  });

  // --- Hamburger toggle ---
  const hamburger = document.querySelector('.navbar__hamburger');
  const navLinksContainer = document.querySelector('.navbar__links');

  if (hamburger && navLinksContainer) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinksContainer.classList.toggle('open');
    });

    // Close menu when a link is clicked (mobile)
    navLinksContainer.querySelectorAll('.navbar__link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinksContainer.classList.remove('open');
      });
    });
  }
});
