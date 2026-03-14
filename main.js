/* ============================================================
   Adam Leibler — adamleibler.com
   Shared JavaScript — applies to all pages
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── NAV: show contact button on desktop ── */
  const desktopContact = document.getElementById('nav-contact-desktop');
  if (desktopContact && window.innerWidth > 768) {
    desktopContact.style.display = 'inline-block';
  }

  /* ── NAV: hamburger menu toggle ── */
  const navToggle  = document.getElementById('nav-toggle');
  const mobileMenu = document.getElementById('nav-mobile-menu');

  if (navToggle && mobileMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen);
      navToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
    });

    document.querySelectorAll('.mobile-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Open navigation menu');
      });
    });
  }

  /* ── SCROLL REVEAL ── */

  function observeAll(selector, options) {
    const els = document.querySelectorAll(selector);
    if (!els.length) return;
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const el = e.target;
        const siblings = Array.from(
          el.parentElement.querySelectorAll(':scope > ' + selector)
        );
        const idx = siblings.indexOf(el);
        el.style.transitionDelay = (100 + Math.min(idx, 5) * 80) + 'ms';
        el.classList.add('visible');
        obs.unobserve(el);
      });
    }, options);
    els.forEach(el => obs.observe(el));
  }

  observeAll('.reveal',       { threshold: 0.08 });
  observeAll('.reveal-right', { threshold: 0.02 });

  /* ── FADE-UP REVEAL: homepage about/ripley sections ── */
  const fadeEls = document.querySelectorAll('.about-grid, .ripley-grid');
  if (fadeEls.length) {
    const fadeObserver = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      }),
      { threshold: 0.12 }
    );
    fadeEls.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(36px)';
      el.style.transition = 'opacity 0.55s cubic-bezier(0.22, 1, 0.36, 1), transform 0.55s cubic-bezier(0.22, 1, 0.36, 1)';
      fadeObserver.observe(el);
    });
  }

  /* ── EMAIL ASSEMBLY: render address at runtime, never in source ── */
  const emailEl = document.getElementById('contact-email');
  if (emailEl) {
    const u = 'adam', d = 'adamleibler.com';
    emailEl.textContent = u + '\u0040' + d;
  }

});
