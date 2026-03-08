/**
 * Shared UI Components — Navbar & Footer
 * Injects common HTML into placeholder containers on each page.
 * Must be loaded BEFORE nav.js so that navbar elements exist when nav.js runs.
 */
(function () {
  // --- Navbar ---
  const navbarContainer = document.getElementById('navbar-container');
  if (navbarContainer) {
    const basePathUrl = typeof BASE_PATH !== 'undefined' ? BASE_PATH : '';
    navbarContainer.innerHTML = `
      <nav class="navbar">
        <div class="container">
          <a href="${basePathUrl}pages/index.html" class="navbar__logo">Tejas Kolhe</a>
          <div class="navbar__links">
            <a href="${basePathUrl}pages/about.html" class="navbar__link">About</a>
            <a href="${basePathUrl}pages/projects.html" class="navbar__link">Projects</a>
            <a href="${basePathUrl}pages/blog.html" class="navbar__link">Blog</a>
            <a href="${basePathUrl}pages/resume.html" class="navbar__link">Resume</a>
            <a href="${basePathUrl}pages/contact.html" class="navbar__link">Contact</a>
          </div>
          <button class="navbar__hamburger" aria-label="Toggle navigation">
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>
    `;
  }

  // --- Footer ---
  const footerContainer = document.getElementById('footer-container');
  if (footerContainer) {
    footerContainer.innerHTML = `
      <footer class="footer">
        <div class="container">
          <p class="footer__text">&copy; ${new Date().getFullYear()} Tejas Kolhe. Built with care.</p>
        </div>
      </footer>
    `;
  }
})();
