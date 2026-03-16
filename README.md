# AdamLeibler.com (adamleibler.github.io)

Personal website for Adam Leibler — Change Enablement, Operational Readiness, and Learning Architecture consultant.

Live site: [https://adamleibler.com](https://adamleibler.com)

---

## About This Site

Built collaboratively with Claude (Anthropic). Five plain files — HTML, CSS, and JavaScript. No frameworks, no build tools, no code dependencies. Fast, mobile-friendly, and editable in any text editor. Hosted free on GitHub Pages.

---

## File Structure

```
/
├── index.html          # Homepage — hero, pillars, about, Ripley
├── frameworks.html     # Change Frameworks page — ADKAR, Kotter, case study
├── operations.html     # Operations page — services, readiness checklist, case study
├── lab.html            # The Lab — research, writing, projects
├── style.css           # Shared stylesheet — edit this to change colors, fonts, layout
├── README.md           # This file
└── assets/             # Photos used by the site
    ├── portrait_adamLeibler.jpg   # Professional headshot (about section)
    └── portrait_ripley.jpg        # Ripley photo (human element section)
```

---

## How to Make Common Edits

**Change a color or font across the whole site**
Open `style.css` and edit the CSS variables at the top of the file:
```css
:root {
  --orange: #FF6B35;   /* Action Orange — CTAs */
  --blue:   #00D2FF;   /* Electric Blue — accents */
  --bg:     #060D1A;   /* Page background */
  --text:   #CBD5E0;   /* Body text */
}
```
One edit here updates every page simultaneously.
Search for `your@email.com` in `index.html` and replace it with your real address.

**Add a photo**
1. Create an `assets/` folder in the repository
2. Upload your photo (e.g. `adam.jpg`)
3. In `index.html`, find the `about-photo` div and replace it with:
   ```html
   <img src="assets/adam.jpg" alt="Adam Leibler" class="about-photo" />
   ```

**Update social links**
Search for `https://linkedin.com`, `https://github.com`, and `https://twitch.tv` in `index.html` and replace with your full profile URLs.

**Change any text**
Open `index.html`, use Ctrl+F (or Cmd+F on Mac) to find the text you want to change, and edit it directly.

---

## Design Tokens

| Token | Value | Used For |
|---|---|---|
| Background | `#060D1A` | Page background |
| Surface | `#0B162C` | Cards |
| Body text | `#CBD5E0` | Paragraphs (8.6:1 contrast ratio) |
| Headings | `#F8FAFC` | All headings (18.9:1 contrast ratio) |
| Action Orange | `#FF6B35` | Primary CTA |
| Electric Blue | `#00D2FF` | Accents, ghost buttons |
| Slate Grey | `#4A5568` | Contact Me button |
| Heading font | Orbitron | Google Fonts |
| Body font | Lato | Google Fonts |

All text/background combinations meet WCAG 2.1 AA contrast standards.

---

## Deployment

This site deploys automatically via GitHub Pages on every push to `main`. No build step required.

To update the site:
1. Edit `index.html` directly on GitHub (click the pencil icon), or
2. Edit locally and push your changes

---

## Social Media Bios

**LinkedIn**
```
Organizational Learning Strategist | Change Enablement Leader | Building Mission-Ready Workforces in VUCA Environments | Helping Organizations Survive Their Own Evolution | U.S. Army Veteran | UofL Scholar. Ripley's human.
```

**Twitter / X**
```
Organizational Learning Strategist | Change Enablement Leader | Helping Organizations Survive Their Own Evolution | US Army Vet | UofL Scholar | Ripley's human
```

---

## Background

Built as a personal brand site to support consulting work in change management, instructional design, and organizational leadership. Adam is an Organizational Leadership and Learning scholar at the University of Louisville and a Twitch partner.
