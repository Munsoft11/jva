/* ============================================================
   FILE: js/contact.js
   Contact form validation + friendly success message (no backend).
   ============================================================ */

(function () {
  'use strict';

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const success = document.getElementById('jvaContactSuccess');

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
      if (!response.ok) throw new Error('Contact submission failed');

      success.textContent = "Thank you! Your message is on its way - we'll reply within one business day.";
      success.hidden = false;
      form.reset();
      form.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));
      form.querySelectorAll('.jva-form__error').forEach(el => (el.textContent = ''));
    } catch (error) {
      success.textContent = 'We could not send your message. Please try again or email us directly.';
      success.hidden = false;
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = 'Send message';
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('jvaContactForm');
    if (form) form.addEventListener('submit', handleSubmit);
  });
})();