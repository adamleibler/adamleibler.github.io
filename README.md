# adamleibler.com

Personal website for Adam Leibler — Learning & Development Leader and creator of Cognitive Agency Architecture (CAA).

Live site: [https://adamleibler.com](https://adamleibler.com)

---

## About This Site

Six static HTML pages — no frameworks, no build tools, no dependencies. Fast, mobile-friendly, and editable in any text editor. Built collaboratively with Claude (Anthropic). Hosted on GitHub Pages.

The site functions as a thought leadership platform and professional home base, anchored to the CAA framework. Primary audience: peers, practitioners, and Director/VP-level hiring managers.

---

## File Structure

```
/
├── index.html        # Homepage — hero, proof bar, what I bring, about/narrative, contact
├── approach.html     # How I work — CAA origin, philosophy, process, capability areas, sector experience
├── framework.html    # Cognitive Agency Architecture — full framework definition and intellectual architecture
├── practice.html     # In Practice — Strategic Outcomes (case studies) + Selected Deliverables (portfolio)
├── resume.html       # Resume — inline HTML with PDF download
├── style.css         # Shared stylesheet
├── main.js           # Shared JavaScript — nav, scroll reveal, email obfuscation
├── CNAME             # Custom domain mapping for GitHub Pages
├── README.md         # This file
└── assets/
    ├── portrait_adamLeibler.webp         # Professional headshot
    ├── portrait_ripley.webp              # Ripley photo
    ├── webPreview.webp                   # OpenGraph/X card image
    ├── brandon-hall-bronze-2015.png      # Brandon Hall Award badge
    ├── undrift-wordmark.png              # Undrift banner logo
    ├── claude-ai-icon.svg                # Footer attribution
    ├── AdamLeibler_Resume_DirLnD.pdf     # Resume PDF download
    └── fonts/
        ├── orbitron-700.woff2            # Heading font — weight 700
        ├── orbitron-800.woff2            # Heading font — weight 800
        └── orbitron-900.woff2            # Heading font — weight 900
```

---

## Design Tokens

| Token        | Value        | Used For                                      |
| ------------ | ------------ | --------------------------------------------- |
| Background   | `#060D1A`    | Page background                               |
| Surface      | `#0B162C`    | Cards                                         |
| Border       | `#263d63`    | Card borders                                  |
| Body text    | `#CBD5E0`    | Paragraphs                                    |
| Headings     | `#F8FAFC`    | All headings                                  |
| Gold         | `#C49A28`    | Primary CTA, accents (Starfield Gold)         |
| Blue         | `#00D2FF`    | Links, ghost buttons (Signal Cyan)            |
| Amber        | `#FBBF24`    | Pill borders, highlights                      |
| Heading font | Orbitron     | Self-hosted woff2 (700/800/900)               |
| Body font    | Lato         | Google Fonts                                  |

All text/background combinations meet WCAG 2.1 AA contrast standards.

---

## Deployment

Deploys automatically via GitHub Pages on every push to `main`. No build step required.

---

## Social

| Platform | URL                                 |
| -------- | ----------------------------------- |
| LinkedIn | https://linkedin.com/in/adamleibler |
| GitHub   | https://github.com/adamleibler      |
| X        | https://x.com/adamleibler           |
