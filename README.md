# AdamLeibler.com (adamleibler.github.io)

Personal website for Adam Leibler — Senior Learning Experience Designer, E-Learning Developer, and Instructional Architect.

Live site: [https://adamleibler.com](https://adamleibler.com)

---

## About This Site

Built collaboratively with Claude (Anthropic). Five HTML files, a shared CSS file, a shared JS file, and a small assets folder. No frameworks, no build tools, no code dependencies. Fast, mobile-friendly, and editable in any text editor. Hosted free on GitHub Pages.

---

## File Structure

```
/
├── index.html          # Homepage — hero, proof bar, pillars, about, Ripley
├── work.html           # Work — portfolio case studies and industry experience
├── craft.html          # Craft — tools, process, design philosophy
├── lab.html            # The Lab — research, writing, side projects
├── resume.html         # Resume — native HTML with PDF download
├── style.css           # Shared stylesheet — edit this to change colors, fonts, layout
├── main.js             # Shared JavaScript — nav, scroll reveal, email assembly
├── CNAME               # Custom domain mapping for GitHub Pages
├── README.md           # This file
└── assets/
    ├── portrait_adamLeibler.webp              # Professional headshot — 1200×900px (about section)
    ├── portrait_ripley.webp                   # Ripley photo — 1200×900px (human element section)
    ├── banner-x.svg                           # X/Twitter header banner — 1500×500px
    ├── banner-linkedin.svg                    # LinkedIn header banner — 1584×396px
    ├── Adam_Leibler_LXD_Resume_2026.pdf       # Resume PDF download
    └── uofl-logo.webp                         # University of Louisville logo (lab page)
```

---

## Design Tokens

| Token | Value | Used For |
|---|---|---|
| Background | `#060D1A` | Page background |
| Surface | `#0B162C` | Cards |
| Body text | `#CBD5E0` | Paragraphs (8.6:1 contrast ratio) |
| Headings | `#F8FAFC` | All headings (18.9:1 contrast ratio) |
| Starfield Gold | `#C49A28` | Primary CTA, highlights |
| Electric Blue | `#00D2FF` | Accents, ghost buttons |
| Slate Grey | `#4A5568` | Contact Me button |
| Heading font | Orbitron | Google Fonts |
| Body font | Lato | Google Fonts |

All text/background combinations meet WCAG 2.1 AA contrast standards.

---

## Deployment

This site deploys automatically via GitHub Pages on every push to `main`. No build step required.

---

## Social Media Links

| Platform | URL |
|---|---|
| LinkedIn | https://linkedin.com/in/adamleibler |
| GitHub | https://github.com/adamleibler |
| X / Twitter | https://x.com/adamleibler |
| Twitch | https://twitch.tv/malforthewin |

---

## Social Media Bios

**LinkedIn**
```
Senior Learning Experience Designer | I design and build learning that actually changes behavior | Brandon Hall Award Recipient | U.S. Army Veteran | UofL Org Learning scholar. Ripley's human.
```

**Twitter / X**
```
Senior LXD & E-Learning Developer | I design and build learning that actually changes behavior | Brandon Hall Award | Army Vet | UofL Scholar | Ripley's human
```

---

## Content & Branding Notes

**Twitch Stream — Late Night Space Flight**
Stream name: Late Night Space Flight
Brand concept: A late night talk show about astronomy and space science, broadcast live on Twitch while exploring the galaxy in Elite Dangerous (space flight simulation). Real science, real conversation, virtual spaceship.
Channel: twitch.tv/malforthewin
Status: Active — Twitch Partner
Note: Previous working title was "Deep Sky Live." All site references use "Late Night Space Flight."

**Brandon Hall Award**
Bronze, Excellence in Learning — Brandon Hall Group HCM Excellence Awards, Best Use of Games and Simulation in Learning. Earned at ELB Learning. Medal image (assets/brandon-hall-bronze-2015.png) displayed at 200px width in the about section of the homepage. Save/replace at 400px wide (2× for retina) to keep file size minimal.
