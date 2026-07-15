# Spriha Associate — Website Redesign

A modern, dynamic, frontend-only redesign of the **Spriha Associate** website — an industrial electronics repairing and industrial automation solutions company based in Vadodara, Gujarat.

---

## 1. Project Overview

Spriha Associate repairs industrial electronic boards, PCBs, drives, HMIs, controllers, and related automation equipment at the component level. This project is a UI/UX redesign of their existing website (sprihaassociate.in), built strictly as a **frontend-only** assignment — no backend, no server, and no database are used anywhere in this project.

The goals of the redesign were to:
- Replace the old, basic layout with a clean, modern, premium look
- Keep all original business content, services, and contact details intact
- Add real interactivity (animations, filters, scroll effects) using only client-side HTML, CSS, and JavaScript
- Make the site fully responsive across desktop, tablet, and mobile

## 2. Tech Stack

| Layer | Technology |
|---|---|
| Structure | HTML5 |
| Styling | CSS3 (custom properties / CSS variables, Grid, Flexbox, animations) |
| Interactivity | Vanilla JavaScript (no libraries/frameworks) |
| Fonts | Google Fonts — Space Grotesk, Inter, IBM Plex Mono |
| Icons/Graphics | Hand-coded inline SVG (no external icon library) |

No React, Vue, Angular, Bootstrap, Tailwind, npm, or build step is used. Everything runs directly in the browser.

## 3. Installation

There is nothing to install. Because this is a static frontend project with no dependencies, no package manager, and no server-side code, there is no build or installation process.

1. Download / unzip the project folder.
2. That's it — no commands to run, no `npm install`, and no environment setup required.

## 4. Running the Project

**Option A — Just open the file**
Locate `index.html` inside the project folder, double-click it (or right-click → Open With → your browser). The website opens directly in your default browser.

**Option B — Run with a local server (optional, not required)**
```bash
cd spriha-associate-redesign
python3 -m http.server 8000
# then open http://localhost:8000 in your browser
```

## 5. Data / Storage

Not applicable. This project does not use a database of any kind — there is no backend server and no SQL/NoSQL database. The contact form on the site is for visual/UI demonstration only — it does not submit, store, or send data anywhere. If a real backend is added in the future, a database would need to be introduced at that stage — it's intentionally out of scope for this assignment.

## 6. Key Files / Sections

| File / Section | Purpose |
|---|---|
| `index.html` | The entire website — HTML structure, CSS, and JavaScript are all contained in this single file |
| `<style>` block (top of file) | All design tokens (colors, fonts, spacing) defined as CSS variables under `:root` |
| `<script>` block (bottom of file) | All interactivity: mobile menu, scroll effects, animated counters, filters, card expand/collapse |
| `#services-grid` | Each service card has a `data-category` attribute used by the filter buttons |
| `#contact-form` | Currently frontend-only; would need a backend endpoint to actually send messages |

## 7. Features

- Sticky header that shrinks and adds a shadow on scroll; active section highlighting (scrollspy); responsive mobile menu
- Animated oscilloscope-style waveform hero graphic; cursor-reactive glow effect; animated count-up statistics
- About section with experience badge and PCB-style illustration
- 16 real services organized into filterable, click-to-expand cards
- Diagnostic equipment list and continuously scrolling brand ticker
- Four "Why Choose Us" feature cards with 3D tilt-on-hover effect
- Real client testimonials and valued client names (Panasonic, Essar, IOCL, L&T)
- Contact section with embedded Google Map, WhatsApp quick-contact link, and demo contact form
- Respects `prefers-reduced-motion`; keyboard-accessible navigation; fully responsive across breakpoints

## 8. Before Going Live

1. **Logo** — replace the placeholder "SA" text logo with the company's actual logo image.
2. **Contact form** — connect to a real backend or third-party form service (PHP mailer, Node.js + Express, Formspree, EmailJS).
3. **Social media links** — currently link to `#`; update with real profile URLs if available.
4. **Domain & hosting** — upload `index.html` to actual web hosting and point the company's domain to it.
5. **Images** — replace inline SVG illustrations with real product/work photos if available.
6. **Content review** — reconfirm phone number, email, and address are current before going live.

## 9. Admin Access

Not applicable. This project has no backend, no user accounts, and no admin panel — there is nothing to log into. All content is hardcoded directly into `index.html`.

## 10. My Tasks & Responsibilities

- Redesigned the complete single-page website layout, replacing the original basic design with a modern, premium look.
- Preserved all original business content — 16 services, company info, testimonials, and contact details.
- Built the animated hero section, scroll-based navigation highlighting, and count-up statistics.
- Implemented the service category filter system and click-to-expand service cards.
- Built the continuously scrolling brand/client logo ticker.
- Embedded real client logos as base64 data URIs directly into the single-file HTML structure.
- Ensured full responsiveness and accessibility (keyboard navigation, reduced-motion support).

## 11. Author

**Kshitij Jha**
GitHub: [@Kshitij-xtreme](https://github.com/Kshitij-xtreme)
University of Petroleum and Energy Studies (UPES), Dehradun — BTech CS/IT

---

*This project is a frontend redesign exercise based on the publicly available content of sprihaassociate.in. All business details, services, and testimonials belong to Spriha Associate.*
