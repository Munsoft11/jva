/* ============================================================
   FILE: js/gallery.js
   Renders the gallery grid and wires up category filtering.
   ============================================================ */

(function () {
  'use strict';

  function renderGallery(filter) {
    const mount = document.getElementById('jvaGalleryGrid');
    if (!mount || !window.JVA_DATA) return;

    const items = filter && filter !== 'all'
      ? JVA_DATA.gallery.filter(item => item.service === filter)
      : JVA_DATA.gallery;

    mount.innerHTML = items.length ? items.map(item => `
      <div class="col-6 col-md-4 col-lg-3 reveal">
        <figure class="jva-gallery-item mb-0">
          <img src="${item.src}" alt="${item.alt}" loading="lazy">
          <figcaption class="jva-gallery-item__caption">${item.caption}</figcaption>
        </figure>
      </div>
    `).join('') : `
      <div class="col-12">
        <p class="jva-section__lead text-center">Gallery examples for this service are coming soon.</p>
      </div>
    `;

    document.dispatchEvent(new Event('jva:content-rendered'));
  }

  function initFilter() {
    const bar = document.getElementById('jvaGalleryFilter');
    if (!bar) return;

    bar.addEventListener('click', function (event) {
      const btn = event.target.closest('.jva-filter__btn');
      if (!btn) return;

      bar.querySelectorAll('.jva-filter__btn').forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');

      renderGallery(btn.dataset.filter);
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    renderGallery('all');
    initFilter();
  });
})();