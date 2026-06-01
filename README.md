# adamleibler.com

Personal site for **Adam Leibler** — Principal Instructional Designer & AI-Enabled eLearning Developer.

Live: [https://adamleibler.com](https://adamleibler.com)

---

## About

A single-page static site — no frameworks, no build step, no dependencies. Plain HTML, CSS, and vanilla JavaScript, hosted on GitHub Pages. Fast, responsive, and editable in any text editor. Built collaboratively with Claude (Anthropic).

Page flow: **Nav → Hero → Case Studies → Proof Bar → Portfolio → About** (bio · credentials · Ripley) **→ Contact → Footer.**

---

## Structure

```
/
├── index.html        # The entire homepage
├── style.css         # All styles — cascading design system (~960 lines)
├── main.js           # Nav/hamburger toggle + Formspree contact-form AJAX
├── CNAME             # Custom domain (adamleibler.com)
├── CHANGELOG.md      # Change history
├── README.md         # This file
├── assets/
│   ├── portrait_adamLeibler.webp · portrait_ripley.webp
│   ├── webPreview.webp                 # OpenGraph / X card image
│   ├── favicon.svg · favicon.png
│   ├── undrift-wordmark.png            # Undrift case card
│   ├── claude-ai-icon.svg              # Footer attribution
│   ├── AdamLeibler_PID_Resume.pdf      # Resume download
│   ├── logo-*.png                      # Credential logos (Brandon Hall, CRI·IMD, U.S. Army, CPTD, U of L, Articulate)
│   └── fonts/                          # Self-hosted, latin-subset woff2
│       ├── playfair-300/400/500/700.woff2    # Display (h1 / h2)
│       └── lato-300/400/400i/700/900.woff2   # Body / UI
├── case-studies/     # Placeholder — dedicated case-study pages return in a later update
├── samples/          # Deployed course files linked from the Portfolio section
└── tools/            # Standalone mini-apps (separate from the main site)
```

---

## Design system

`style.css` is organized in cascading layers: tokens → reset → element defaults → atoms → components → states → responsive.

| Token         | Value     | Use                              |
| ------------- | --------- | -------------------------------- |
| Background    | `#060D1A` | Page background                  |
| Surface       | `#0B162C` | Cards                            |
| Border        | `#263d63` | Card borders                     |
| Body text     | `#CBD5E0` | Paragraphs (18px / Lato)         |
| Headings      | `#F8FAFC` | Headings (Playfair)              |
| Gold          | `#C49A28` | Primary CTA, accents             |
| Blue          | `#00D2FF` | Links, ghost buttons             |
| Purple        | `#A78BFA` | Card / tag hue                   |
| Green · Red   | `#4ADE80` · `#EF4444` | Form success / error |
| Amber         | `#FBBF24` | Proof-bar + supporter pills      |

- **Fonts:** Playfair (display) + Lato (body/UI), self-hosted as latin-subset woff2.
- **Type:** body 18px / 1.7; H1 64px; H2 32px.
- **Motion:** reveal-on-scroll via pure-CSS scroll-driven animations (`animation-timeline: view()`), `prefers-reduced-motion` guarded.
- Text/background combinations target WCAG 2.1 AA contrast.

---

## Contact form

The Contact section posts to [Formspree](https://formspree.io) via `fetch` (AJAX), showing an inline success/error status with no page reload. A hidden honeypot field filters bot spam.

---

## Deployment

Served by **GitHub Pages** from `main` (root) — every push to `main` redeploys, no build step. The custom domain is set via the `CNAME` file.

Local preview: open `index.html` directly, or serve the folder (e.g. `python -m http.server`).

---

## Social

| Platform | URL                                 |
| -------- | ----------------------------------- |
| LinkedIn | https://linkedin.com/in/adamleibler |
| GitHub   | https://github.com/adamleibler      |
| X        | https://x.com/adamleibler           |
