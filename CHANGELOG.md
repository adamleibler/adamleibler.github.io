# Changelog — adamleibler.com

All notable changes to the site are documented here in reverse chronological order.

---

## [2026-06-01] — Case-Study Pages Retired + Full Dead-Code Sweep

Removed the case-study sub-pages (returning later) and swept all the CSS/JS they left behind.

### Case studies
- The four `case-studies/*.html` pages were retired (will return later)
- Homepage case cards converted to **non-clickable teasers** — the four internal cards are now plain blocks (no dead links); the Undrift card stays a live external link

### Dead-code sweep (index.html · style.css · main.js)
- Deleted all case-study-page-only CSS — icon tiles, stats, pullquotes, approach lists, the `.cs-*` page layout, the slate button, and several orphaned utilities and nav rules
- Removed the matching dead JS (the desktop-only nav-contact block)
- `style.css`: 1134 → 957 lines

### Typography
- Confirmed **body text = 18px** as canonical (a docs/code mismatch was reconciled in favor of 18px)

### Polish
- Removed an invalid ARIA role from the title pills
- Buttons now use the shared body-font variable
- All below-the-fold images set to lazy-load; added a preload for the italic body font used in the hero lede

### Content
- Contact intro microcopy: "Either way, I'm glad you made it" → "Whatever the reason, I'm glad you made it"

### Contact form
- Connected the contact form to its live Formspree endpoint; added a custom email subject and a hidden honeypot spam trap

### Verification
- Confirmed (four independent ways) that the prior `style.css` truncation cost no homepage CSS, and that there's no orphaned code in `index.html` / `style.css` / `main.js`

---

## [2026-05-31] — Visual & Content Overhaul + CSS Scroll Animations

Full visual and content pass on the homepage, then a move to pure-CSS scroll animations and a single-column contact section.

### Fonts & Typography
- Display font moved to a true "Playfair" family (variable-instanced, 1240 UPM) at weights 300/400/500/700; added a real 700 weight + `.bold` utility for gold display accents
- All 9 woff2 subset to the Latin range — total ~346 KB → ~205 KB (−41%)
- H1 64px; body 16px / 400 / line-height 1.7

### Hero
- Committed to a text-only hero — single stacked column (pill → headline + italic lede → CTAs); the two-column photo layout was removed
- Hero CTA copy: "Read My Story"

### About & Ripley
- Bio rewritten (professional history + an "Outside work" paragraph); the title pill moved here from the hero
- "Meet Ripley" section rewritten; supporter blocks added under both columns (LinkedIn / Resume, and K9s For Warriors / Canine Companions)
- Credential cards switched from SVG icon tiles to real logo PNGs (normalized to 80px tall)
- Portraits wrapped in a pseudo-3D `.pillow-container`, with matched column heights

### Proof Bar
- Pills recolored cyan → amber; eyebrow enlarged

### Contact ("Let's Connect")
- Rebuilt as a Formspree contact form (Name / Email / Message) with AJAX submit and inline success/error status
- Migrated from two columns to a single centered column (H2 → intro → form), content left-aligned
- Form label size 14px
- NOTE: the form posts to a placeholder endpoint (`YOUR_FORM_ID`) — the real Formspree ID must be added before submissions work

### Scroll Animations
- Replaced the JS IntersectionObserver reveal with pure-CSS scroll-driven animations
- `.reveal` now runs a bidirectional fade-up via `animation-timeline: view()` — fades up on entry, fades out on exit; `prefers-reduced-motion` guarded; graceful fallback on unsupported browsers
- Removed the reveal JS, the dead `.reveal-right`, and the `.visible` class

### Cleanup
- Removed unused CSS atoms and dead JS; dropped the orphaned `.dramatic-cta-section p` rule and the dead mobile `.cta-grid` override

---

## [2026-05-30] — Post-Rebuild Refinement: Hygiene, Layout & Typography

CSS hygiene and visual redesign on the rebuilt single-page index.

### Structure & Layout
- Section order locked: Nav → Hero → Case Studies → Proof Bar → Portfolio → About → Contact → Footer, with a gradient rule (`.wwm-rule`) at every boundary
- `#work` section renamed `#cases` (plus related class renames)
- About and Ripley merged into a single `#about` section; Adam's portrait moved out of the hero

### Cards
- Unified on a shared `.card` atom (12px radius); hover consolidated into `.card-hover` (border glow + 3px lift) on clickable cards only

### Typography & Nav
- One heading treatment for all sections; eyebrow scale simplified
- Nav redesigned (Playfair logo, right-aligned links, "Let's Connect" link); body font normalized to 16px / 400

### Cleanup
- Dead-CSS sweep tied to the deleted legacy pages (style.css ~1509 → ~1067 lines)

---

## [2026-05-29 – 05-30] — Single-Page Rebuild (pivot away from the CAA multi-page structure)

Major direction change. The Cognitive Agency Architecture (CAA) multi-page framing documented in the 2026-05-21 entries below was set aside in favor of a near-single-page personal portfolio.

- index.html rebuilt as one scrollable page with individual case-study sub-pages under `case-studies/`
- Legacy pages removed (approach / cases / portfolio / resume — and the CAA-era framework / practice pages); the earlier "Strategy / Execution" section split was dropped
- Nav restructured: Case Studies · Portfolio · About · Let's Connect
- Case-study cards reworked (Undrift card normalized to a standard clickable card; new accent colors)

> **Note:** The CAA / framework positioning described in the entries below is historical — the live site no longer uses it.

---

## [2026-05-21] — CAA Identity Pivot & Site Restructure

Major session. Full professional identity pivot from consulting services framing to thought leadership platform anchored to Cognitive Agency Architecture (CAA). Site restructured, new pages built, nav overhauled, CTA flow locked.

### Identity & Positioning
- Homepage hero completely rewritten around CAA
- H1: "I Architect the Friction That Keeps AI from Eroding Workforce Competence."
- Hero subhead: new CAA problem statement — names the mechanism, stakes, and 15-year proof signal
- Pill updated: Learning & Development Leader · Cognitive Agency Architecture · U.S. Army Veteran
- Page title and all OG/Twitter meta updated to reflect "Learning & Development Leader" identity
- H1 font clamp ceiling reduced 42px to 36px to accommodate longer headline without crowding

### New Pages
- framework.html — full Cognitive Agency Architecture page built from source files:
  - The Pattern (multi-engagement origin, no single NDA story)
  - The Core Argument (zero friction = failure mode)
  - Three Assets (Epistemic Sovereignty, Metacognitive Regulation, Cognitive Ownership)
  - The Triad (IT Operations, Behavioral Science/OD, Instructional Design)
  - Anchor Definition (.caa-definition block — gold left border, distinct visual treatment)
- practice.html — unified "In Practice" page combining former cases.html and portfolio.html:
  - Page hero with CAA-anchored pullquote
  - Section 1: Strategic Outcomes (4 case studies)
  - Section 2: Selected Deliverables (6 portfolio cards)

### Navigation
- Nav restructured across all pages: About, Approach, The Framework, In Practice, Resume
- cases.html, work.html, portfolio.html orphaned — pending deletion from repo

### Approach Page
- Hero pill, H1, and intro paragraph rewritten around CAA origin angle
- H1: "This Is How the Framework Was Born. Not a Methodology. A Diagnosis."
- Pullquote replaced: now carries the core CAA diagnostic statement
- AI & Innovation capability card gutted — replaced with AI & Cognitive Risk / Cognitive Agency Architecture (synthetic media/avatars removed — contradicted CAA positioning)
- CAA bridge section added mid-page, linking to framework.html
- Bottom CTA redirected: now sends to framework.html (not practice.html)

### CTA Flow (locked)
Each page now earns the next in sequence:
- index → "The Approach Shapes Everything" → approach.html
- approach → "The Approach Became a Framework" → framework.html
- framework → "The Framework, Applied" → practice.html
- practice → "Every Role. Every Org. One Thread." → resume.html

### CSS Additions (style.css)
- .framework-prose — body text treatment for framework page prose sections
- .caa-definition — distinct visual block for the CAA formal definition (surface card, gold left border, 18px weight-300 type)
- H1 clamp ceiling: 42px to 36px

### Naming Decisions (documented)
- "The Work" rejected in favour of "In Practice" — pairs cleanly with "The Framework" without word repetition, accurately describes combined case + deliverable content
- "The Application" and "The Outcome" evaluated and rejected (ambiguous / too narrow)

---

## [2026-05-21] — Brand Color Migration (earlier session)

- Impact Orange (#FF6B35) replaced with Starfield Gold (#C49A28) throughout style.css, SVG banners, README, and Word brand style guide
- Background nebula updated to deep copper gradient (Option C: rgba(180,120,15,0.32) and rgba(110,70,5,0.14))
- Full brand system documented in Adam_Leibler_Brand_Style_Guide_v2.docx

---

## [2026-05-21] — OG/Twitter Card Metadata

- OG and Twitter card meta tags added across all eight HTML pages
- Portrait image (webPreview.webp, 1200x900px) used as preview image
- fb:app_id pending — requires Facebook Developer app registration

---

## [Earlier] — Initial Site Build

- Static HTML/CSS/JS site launched on GitHub Pages
- Pages: index, approach, cases, portfolio, resume
- Proof bar marquee, Brandon Hall award image, hero two-column grid layout
- Three compliance training sample modules integrated into portfolio page
- Scrolling proof bar marquee added
- Undrift banner added to homepage
