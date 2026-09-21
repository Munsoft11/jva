/* ============================================================
   FILE: js/booking.js
   Booking form validation + friendly success message (no backend).
   ============================================================ */

(function () {
  'use strict';

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const success = document.getElementById('jvaBookingSuccess');

    if (!window.JVA.validateForm(form)) return;

    const submitButton = form.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    submitButton.textContent = 'Sending…';

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      });
      if (!response.ok) throw new Error('Booking submission failed');

      success.textContent = "Thank you! Your request is in - we'll be in touch within one business day with availability and next steps.";
      success.hidden = false;
      form.reset();
      form.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));
      form.querySelectorAll('.jva-form__error').forEach(el => (el.textContent = ''));
      success.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } catch (error) {
      success.textContent = 'We could not send your request. Please try again or call us directly.';
      success.hidden = false;
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = 'Request your date';
    }
  }

  function renderPackageOptions() {
    if (!window.JVA_DATA) return;

    const typeSelect = document.getElementById('bookingType');
    const packageSelect = document.getElementById('bookingPackage');
    if (!typeSelect || !packageSelect) return;

    typeSelect.innerHTML = '<option value="">Choose a service…</option>' +
      JVA_DATA.services.map(service => `<option value="${service.id}">${service.title}</option>`).join('');

    function updatePackages(selectedPackage) {
      const service = JVA_DATA.services.find(item => item.id === typeSelect.value);
      packageSelect.innerHTML = service
        ? '<option value="">Choose a package…</option>' + service.packages.map(packageItem =>
          `<option value="${packageItem.name}"${packageItem.name === selectedPackage ? ' selected' : ''}>${packageItem.name} — ${packageItem.price}</option>`
        ).join('')
        : '<option value="">Choose a service first…</option>';
    }

    typeSelect.addEventListener('change', () => updatePackages(''));

    const params = new URLSearchParams(window.location.search);
    const requestedService = JVA_DATA.services.find(service => service.id === params.get('service'));
    typeSelect.value = requestedService ? requestedService.id : '';
    updatePackages(params.get('package') || '');
  }

  document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('jvaBookingForm');
    if (form) form.addEventListener('submit', handleSubmit);
    renderPackageOptions();
  });
})();