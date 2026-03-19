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


/* ── OPERATIONS PAGE: readiness checklist ── */
(function () {
  const items = document.querySelectorAll('.checklist-item');
  if (!items.length) return;

  const scoreNumber  = document.getElementById('score-number');
  const scoreRing    = document.getElementById('score-ring');
  const scoreVerdict = document.getElementById('score-verdict');
  const total        = items.length;

  function getVerdict(pct) {
    if (pct === 0) return { text: 'No items checked',   bg: 'rgba(74,85,104,0.2)',   color: '#94A3B8' };
    if (pct < 40)  return { text: 'High risk',          bg: 'rgba(239,68,68,0.15)',  color: '#F87171' };
    if (pct < 70)  return { text: 'Needs attention',    bg: 'rgba(251,191,36,0.15)', color: '#FCD34D' };
    if (pct < 90)  return { text: 'On the right track', bg: 'rgba(0,210,255,0.12)',  color: '#00D2FF' };
    return               { text: 'Mission ready',       bg: 'rgba(74,222,128,0.15)', color: '#4ADE80' };
  }

  function updateScore() {
    const checked = document.querySelectorAll('.checklist-item.checked').length;
    const pct     = Math.round((checked / total) * 100);
    scoreNumber.textContent        = pct + '%';
    const v                        = getVerdict(pct);
    scoreVerdict.textContent       = v.text;
    scoreVerdict.style.background  = v.bg;
    scoreVerdict.style.color       = v.color;
    scoreRing.style.borderColor    = pct === 0 ? 'var(--border)' : v.color;
    scoreNumber.style.color        = pct === 0 ? 'var(--white)'  : v.color;
  }

  items.forEach(item => {
    function toggleItem() {
      const isChecked = item.classList.toggle('checked');
      item.setAttribute('aria-checked', isChecked);
      updateScore();
    }
    item.addEventListener('click', toggleItem);
    item.addEventListener('keydown', e => {
      if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); toggleItem(); }
    });
  });
})();
