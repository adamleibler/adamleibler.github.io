/* ============================================================
   Adam Leibler — adamleibler.com
   Shared JavaScript — applies to all pages
   ============================================================ */

(function () {

  /* ── NAV: show contact button on desktop ── */
  const desktopContact = document.getElementById('nav-contact-desktop');
  if (desktopContact && window.innerWidth > 768) {
    desktopContact.style.display = 'inline-block';
  }

  /* ── NAV: hamburger menu toggle ── */
  const navToggle   = document.getElementById('nav-toggle');
  const mobileMenu  = document.getElementById('nav-mobile-menu');

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

  /* ── SCROLL REVEAL: .reveal elements (inner pages) ── */
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    const revealObserver = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    revealEls.forEach(el => revealObserver.observe(el));
  }

  /* ── SCROLL FADE-IN: homepage pillar/about/ripley cards ── */
  const fadeEls = document.querySelectorAll('.pillar-card, .about-grid, .ripley-grid');
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
      el.style.transform = 'translateY(24px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      fadeObserver.observe(el);
    });
  }

  /* ── EMAIL ASSEMBLY: render address at runtime, never in source ── */
  const emailEl = document.getElementById('contact-email');
  if (emailEl) {
    const u = 'adam', d = 'adamleibler.com';
    emailEl.textContent = u + '\u0040' + d;
  }

})();
