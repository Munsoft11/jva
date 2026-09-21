/* ============================================================
   FILE: js/components.js
   Injects the shared navbar and footer into every page.
   ============================================================ */

(function () {
  'use strict';

  const NAV_ITEMS = [
    { href: 'index.html',        label: 'Home',       page: 'index' },
    { href: 'about.html',        label: 'About',      page: 'about' },
    { href: 'services.html',     label: 'Services',   page: 'services' },
    { href: 'gallery.html',      label: 'Gallery',    page: 'gallery' },
    { href: 'team.html',         label: 'Team',       page: 'team' },
    { href: 'testimonials.html', label: 'Stories',    page: 'testimonials' },
    { href: 'contact.html',      label: 'Contact',    page: 'contact' }
  ];

  function renderNavbar() {
    const mount = document.getElementById('jva-navbar');
    if (!mount) return;

    const current = document.body.dataset.page || '';

    const items = NAV_ITEMS.map(item => {
      const active = item.page === current ? ' is-active' : '';
      return `<li class="nav-item">
                <a class="nav-link${active}" href="${item.href}">${item.label}</a>
              </li>`;
    }).join('');

    mount.innerHTML = `
      <nav class="navbar navbar-expand-lg jva-navbar sticky-top">
        <div class="container">
          <a class="jva-brand" href="index.html">
            <span class="brand-mark"><i class="bi bi-camera" aria-hidden="true"></i></span>
            <span class="brand-text"><strong>JULIO</strong><small>VISUAL ARTS</small></span>
          </a>

            <button class="navbar-toggler" type="button" aria-controls="jvaMainNav"
              aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

            <div class="jva-menu" id="jvaMainNav">
            <ul class="navbar-nav ms-auto align-items-lg-center">
              ${items}
            </ul>
          </div>
        </div>
      </nav>`;

    const toggle = mount.querySelector('.navbar-toggler');
    const menu = mount.querySelector('#jvaMainNav');
    toggle.addEventListener('click', function () {
      const isOpen = menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  function renderFooter() {
    const mount = document.getElementById('jva-footer');
    if (!mount) return;

    mount.innerHTML = `
      <footer class="jva-footer">
        <div class="container">
          <div class="row g-4">
            <div class="col-lg-4 col-md-6">
              <a class="jva-brand" href="index.html">
                <span class="brand-mark"><i class="bi bi-camera" aria-hidden="true"></i></span>
                <span class="brand-text"><strong>JULIO</strong><small>VISUAL ARTS</small></span>
              </a>
              <p class="jva-footer__text">
                A boutique photography studio telling warm, honest stories for couples,
                families and brands since 2013. Based in Riverside, travelling anywhere
                the light is good.
              </p>
              <div class="jva-socials">
                <a href="#" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
                <a href="#" aria-label="Facebook"><i class="bi bi-facebook"></i></a>
                <a href="#" aria-label="Pinterest"><i class="bi bi-pinterest"></i></a>
                <a href="#" aria-label="YouTube"><i class="bi bi-youtube"></i></a>
              </div>
            </div>

            <div class="col-lg-2 col-md-6 col-6">
              <h4 class="jva-footer__title">Explore</h4>
              <ul class="jva-footer__links">
                <li><a href="about.html">About</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a href="gallery.html">Gallery</a></li>
                <li><a href="team.html">Team</a></li>
                <li><a href="testimonials.html">Stories</a></li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 col-6">
              <h4 class="jva-footer__title">Services</h4>
              <ul class="jva-footer__links">
                <li><a href="services.html">Wedding Photography</a></li>
                <li><a href="services.html">Portrait Sessions</a></li>
                <li><a href="services.html">Family &amp; Newborn</a></li>
                <li><a href="services.html">Events &amp; Celebrations</a></li>
                <li><a href="services.html">Editorial &amp; Brand</a></li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6">
              <h4 class="jva-footer__title">Studio</h4>
              <ul class="jva-footer__contact">
                <li><i class="bi bi-geo-alt"></i> Zibondo Ward, Kaliro Town Council, Uganda</li>
                <li><i class="bi bi-telephone"></i> +256 707 516 175</li>
                <li><i class="bi bi-envelope"></i> juliovisualarts@gmail.com</li>
                <li><i class="bi bi-clock"></i> Mon – Sat · 9am – 6pm</li>
              </ul>
              <a href="booking.html" class="btn btn-jva btn-sm mt-2">Book a session</a>
            </div>
          </div>

          <div class="jva-footer__bottom">
            <p>© <span id="jvaYear">2026</span> Julio Visual Arts. All rights reserved.</p>
            <p>Powered by: <span class="jva-footer__brand">Munsoft</span>. Contact: <a class="jva-footer__phone" href="tel:0755231686">0755231686</a></p>
          </div>
        </div>
      </footer>`;
  }

  document.addEventListener('DOMContentLoaded', function () {
    renderNavbar();
    renderFooter();
  });
})();