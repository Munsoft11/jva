/* ============================================================
   FILE: js/testimonials.js
   Renders the full testimonials grid on testimonials.html.
   ============================================================ */

(function () {
  'use strict';

  function renderTestimonials() {
    const mount = document.getElementById('jvaTestimonialsGrid');
    if (!mount || !window.JVA_DATA) return;

    mount.innerHTML = JVA_DATA.testimonials.map(t => `
      <div class="col-md-6 col-lg-4 reveal">
        <article class="jva-quote-card">
          <p class="jva-quote-card__quote">“${t.quote}”</p>
          <div class="jva-quote-card__meta">
            <img src="${t.image}" alt="${t.name}">
            <div>
              <strong>${t.name}</strong>
              <span>${t.event}</span>
            </div>
          </div>
        </article>
      </div>
    `).join('');

    document.dispatchEvent(new Event('jva:content-rendered'));
  }

  document.addEventListener('DOMContentLoaded', renderTestimonials);
})();