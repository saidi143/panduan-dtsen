// Panduan DTSEN — minimal JS for drawer navigation
(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.site-nav');
    const overlay = document.querySelector('.site-nav__overlay');

    if (!toggle || !nav || !overlay) return;

    function openMenu() {
      nav.classList.add('is-open');
      overlay.classList.add('is-open');
      toggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
      nav.classList.remove('is-open');
      overlay.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }

    toggle.addEventListener('click', function() {
      if (nav.classList.contains('is-open')) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    overlay.addEventListener('click', closeMenu);

    // Close menu on Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        closeMenu();
      }
    });

    // Close when clicking a nav link
    document.querySelectorAll('.site-nav__link').forEach(function(link) {
      link.addEventListener('click', function() {
        // Small delay so navigation happens
        setTimeout(closeMenu, 100);
      });
    });
  });
})();
