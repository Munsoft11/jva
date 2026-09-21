/* ============================================================
   FILE: js/home.js
   Homepage-only rendering: services preview + testimonial carousel.
   ============================================================ */

(function () {
  'use strict';

  function renderServicesPreview() {
    const mount = document.getElementById('jvaHomeServices');
    if (!mount || !window.JVA_DATA) return;

    const preview = JVA_DATA.services;

    mount.innerHTML = preview.map(service => `
      <div class="col-md-6 col-lg-3 reveal">
        <article class="jva-card jva-card--lift text-center h-100">
          ${service.icon ? `<span class="jva-card__icon jva-card__icon--${service.accent}"><i class="bi ${service.icon}"></i></span>` : ''}
          <h3 class="jva-card__title">${service.title}</h3>
          <p class="jva-card__text">${service.tagline}</p>
          <div class="jva-card__meta jva-home-service__meta">
            <span>${service.packages.length} packages</span>
          </div>
        </article>
      </div>
    `).join('');

    document.dispatchEvent(new Event('jva:content-rendered'));
  }

  function renderTestimonials() {
    const mount = document.getElementById('jvaHomeTestimonials');
    if (!mount || !window.JVA_DATA) return;

    mount.innerHTML = JVA_DATA.testimonials.map((t, index) => `
      <div class="carousel-item${index === 0 ? ' active' : ''}">
        <div class="jva-testimonial">
          <p class="jva-testimonial__quote">“${t.quote}”</p>
          <div class="jva-testimonial__meta">
            <img src="${t.image}" alt="${t.name}">
            <div>
              <strong>${t.name}</strong>
              <span>${t.event}</span>
            </div>
          </div>
        </div>
      </div>
    `).join('');
  }

  document.addEventListener('DOMContentLoaded', function () {
    renderServicesPreview();
    renderTestimonials();
  });
})();