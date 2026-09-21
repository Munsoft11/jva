/* ============================================================
   FILE: js/main.js
   Shared behaviours: reveal animations, year stamp, form helpers.
   ============================================================ */

(function () {
  'use strict';

  let revealObserver;

  /* ---------- Scroll and load reveals ---------- */
  function initReveal() {
    const items = document.querySelectorAll('.reveal');
    if (!items.length) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      items.forEach(el => el.classList.add('is-visible'));
      return;
    }

    if (!revealObserver) {
      revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    }

    items.forEach(el => {
      if (!el.classList.contains('is-visible')) revealObserver.observe(el);
    });
  }

  /* ---------- Footer year ---------- */
  function initYear() {
    const el = document.getElementById('jvaYear');
    if (el) el.textContent = new Date().getFullYear();
  }

  /* ---------- Form helpers (shared by contact + booking) ---------- */
  function setError(input, message) {
    input.classList.add('is-invalid');
    const slot = document.querySelector(`[data-error-for="${input.id}"]`);
    if (slot) slot.textContent = message;
  }

  function clearError(input) {
    input.classList.remove('is-invalid');
    const slot = document.querySelector(`[data-error-for="${input.id}"]`);
    if (slot) slot.textContent = '';
  }

  function validateField(input) {
    const value = (input.value || '').trim();
    const type = input.type;

    if (input.required && !value) {
      setError(input, 'This field is required.');
      return false;
    }
    if (type === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setError(input, 'Please enter a valid email address.');
      return false;
    }
    if (type === 'tel' && value && !/^[0-9+\-\s()]{6,}$/.test(value)) {
      setError(input, 'Please enter a valid phone number.');
      return false;
    }
    clearError(input);
    return true;
  }

  function validateForm(form) {
    const fields = form.querySelectorAll('input, select, textarea');
    let valid = true;
    fields.forEach(field => {
      if (!validateField(field)) valid = false;
    });
    return valid;
  }

  window.JVA = window.JVA || {};
  window.JVA.validateForm = validateForm;
  window.JVA.validateField = validateField;

  /* ---------- Boot ---------- */
  document.addEventListener('DOMContentLoaded', function () {
    initReveal();
    initYear();

    document.querySelectorAll('.jva-form').forEach(form => {
      form.querySelectorAll('input, select, textarea').forEach(field => {
        field.addEventListener('blur', () => validateField(field));
        field.addEventListener('input', () => {
          if (field.classList.contains('is-invalid')) validateField(field);
        });
      });
    });
  });

  document.addEventListener('jva:content-rendered', initReveal);
})();