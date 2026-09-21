/* ============================================================
   FILE: js/services.js
   Renders the full services list on services.html.
   ============================================================ */

(function () {
  'use strict';

  function renderServices() {
    const mount = document.getElementById('jvaServicesList');
    if (!mount || !window.JVA_DATA) return;

    mount.innerHTML = JVA_DATA.services.map(service => `
      <div class="col-12 jva-service-group reveal">
        <div class="jva-service-group__head">
          <div>
            ${service.icon ? `<span class="jva-card__icon jva-card__icon--${service.accent}"><i class="bi ${service.icon}"></i></span>` : ''}
            <h2 class="jva-section__title">${service.title}</h2>
            <p class="jva-card__text mb-2"><strong>${service.tagline}</strong></p>
            <p class="jva-card__text">${service.text}</p>
          </div>
          <div class="jva-service-group__events">
            <strong>Applicable Events</strong>
            <div class="jva-card__meta">
              ${service.applicableEvents.map(event => `<span>${event}</span>`).join('')}
            </div>
          </div>
        </div>
        <div class="row g-4 mt-1">
          ${service.packages.map(packageItem => `
            <div class="col-md-6 col-xl-4">
              <article class="jva-card jva-card--lift h-100">
                <h3 class="jva-card__title">${packageItem.name}</h3>
                ${packageItem.badge ? `<span class="jva-package__badge">${packageItem.badge}</span>` : ''}
                <p class="jva-card__text">${packageItem.description}</p>
                <div class="jva-package-card__footer">
                  <span class="jva-card__price">${packageItem.price}</span>
                  <a href="booking.html?service=${encodeURIComponent(service.id)}&package=${encodeURIComponent(packageItem.name)}" class="btn btn-jva btn-sm">Book a Session</a>
                </div>
              </article>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');

    document.dispatchEvent(new Event('jva:content-rendered'));
  }

  document.addEventListener('DOMContentLoaded', renderServices);
})();