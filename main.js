/* ============================================================
   Adam Leibler — adamleibler.com
   Shared JavaScript — applies to all pages
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

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

  /* ── SCROLL REVEAL ──
     Handled entirely in CSS now via scroll-driven animations on `.reveal`
     (+ .about-grid / .ripley-grid). See the `revealInOut` keyframe in style.css. */

  /* ── CONTACT FORM: AJAX submit to Formspree with inline status ── */
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    const status = contactForm.querySelector('.form-status');
    const submitBtn = contactForm.querySelector('button[type="submit"]');

    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      status.className = 'form-status';
      status.textContent = '';
      submitBtn.disabled = true;
      const btnLabel = submitBtn.textContent;
      submitBtn.textContent = 'Sending…';

      try {
        const res = await fetch(contactForm.action, {
          method: 'POST',
          body: new FormData(contactForm),
          headers: { Accept: 'application/json' }
        });

        if (res.ok) {
          status.classList.add('is-success');
          status.textContent = 'Thanks — your message is on its way. I’ll be in touch soon.';
          contactForm.reset();
        } else {
          const data = await res.json().catch(() => null);
          const msg = data && data.errors
            ? data.errors.map(er => er.message).join(', ')
            : 'Something went wrong. Please email adam@adamleibler.com directly.';
          status.classList.add('is-error');
          status.textContent = msg;
        }
      } catch (err) {
        status.classList.add('is-error');
        status.textContent = 'Network error. Please email adam@adamleibler.com directly.';
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = btnLabel;
      }
    });
  }

});
