X   # Krrishna Dhwarka Foundation Bharat — NGO Website

A complete website redesign for **Krrishna Dhwarka Foundation Bharat**, themed in gold and navy, featuring a donation module with Razorpay integration and printable receipts, plus an internal Admin Panel for managing banners, certificates, inquiries, and payments.

---

## 1. Project Overview

This project is a complete website redesign for Krrishna Dhwarka Foundation Bharat (KDFB), a non-profit organisation focused on education and community welfare. The site was rebuilt from scratch with a gold-and-navy visual identity after an earlier design was rejected during faculty review, and now covers the organisation's full public presence plus a donation flow and an internal admin panel.

The project covers:
- A modern, elegant public website (Home, About, Certificates, Donate, Contact) themed in deep navy and gold
- A donation module with preset/custom amount selection, a Razorpay payment integration hook, and an auto-generated printable donation receipt (valid for 80G tax-deduction purposes)
- An inquiry/contact form for visitors to reach out to the foundation
- An internal Admin Panel with tabbed sections for managing Banners, Certificates, Inquiries, and Payments, including receipt download/print for any donation
- Fully responsive layout across desktop, tablet, and mobile

The project is built as a **static frontend website** — no server-side code and no traditional database are used. It's intended as a demo/college-project deliverable and as a base that can be wired up to a real backend (for payments, admin data, and inquiry storage) before going live for the foundation.

## 2. Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 (index, about, certificates, donate, contact pages + admin panel) |
| Styling | Vanilla CSS3 (custom design system using CSS variables — gold & navy theme, no framework) |
| Logic / Interactivity | Vanilla JavaScript (ES6+) — no React/Vue/Angular, no build tools, no npm dependencies |
| Payments | Razorpay Checkout integration (placeholder key — ready to activate with a live key) |
| Receipts | Dynamically generated printable HTML donation receipt (`window.open` + `window.print`) |
| Fonts / Assets | Custom logo asset; web-safe/Google fonts for a formal, trustworthy NGO look |

No installation of any framework, package manager, or build tool is required — the project can be opened directly in a browser or hosted on any static host (Netlify, GitHub Pages, shared hosting, etc.).

## 3. Installation

1. Download/unzip the project folder to any location on your computer.
2. The folder contains `index.html`, `about.html`, `certificates.html`, `donate.html`, `contact.html`, an `admin/` folder (admin panel), and an `assets/` folder (`style.css`, `app.js`, `logo.png`).
3. No `npm install`, no database server, and no environment variables are needed.

## 4. Running the Project

**Option A — Just open it (simplest)**
Double-click `index.html` to open the site directly in your default browser.

**Option B — Run via a local server (recommended)**
```bash
# Python 3
python -m http.server 5500

# OR Node.js (if installed)
npx serve .

# Then visit:
# Website: http://127.0.0.1:5500/index.html
# Admin Panel: http://127.0.0.1:5500/admin/index.html
```

## 5. Data / Storage

This project does not use a traditional database (no MySQL/MongoDB/Firebase). The public pages and admin panel currently display static/sample content directly from HTML, and the donation + inquiry flows are demonstration-only:

- The donation form collects donor name, email, amount, and cause, then triggers a Razorpay checkout (currently using a placeholder API key).
- On a successful (simulated) payment, a printable donation receipt is generated on the fly in a new browser tab/window — it is not stored anywhere.
- The Admin Panel's Inquiries, Payments, Banners, and Certificates tabs are static UI shells intended to be connected to a real backend/database before production use.

For a production version, this would need a lightweight backend (Node.js/Express with a JSON file store or a proper database) to persist inquiries, donation records, and admin-managed banners/certificates.

## 6. Key Files

| File / Folder | Purpose |
|---|---|
| `assets/app.js` | Preset donation-amount buttons, Razorpay checkout trigger, receipt generation, and the contact form handler |
| `assets/style.css` | The full gold-and-navy design system (CSS variables: `--gold`, `--gold-light`, `--deep-navy`, etc.) |
| `admin/index.html` | Admin Panel entry point with tabbed navigation |
| `admin/admin.js` | Tab-switching logic, banner/certificate upload triggers, and payment receipt download/print |
| `admin/admin.css` | Styling specific to the Admin Panel dashboard |
| `donate.html` | The donation page — preset amounts, custom amount, cause selection, Razorpay trigger |
| `assets/logo.png` | Foundation logo used across the site and on generated receipts |

## 7. Features

**Public Website**
- Home, About, Certificates, Donate, Contact pages in a gold-and-navy theme
- Donation page with quick preset amount buttons, custom amount entry, and cause selection
- Razorpay checkout integration hook (ready to activate with a live API key)
- Auto-generated, printable donation receipt referencing the payment ID, donor details, amount, and 80G tax-deduction note
- Inquiry/contact form for general questions
- Scroll-aware navbar that adjusts background opacity on scroll

**Admin Panel**
- Tabbed dashboard: Banners, Certificates, Inquiries, Payments
- Banner and Certificate upload triggers (file input hooks ready for backend wiring)
- Payments tab with the ability to regenerate and download/print an official donation receipt for any record

## 8. Before Going Live

1. **Razorpay key** — replace the placeholder key in `assets/app.js` (`YOUR_RAZORPAY_KEY`) with the foundation's live Razorpay key, and uncomment the actual `rzp.open()` call to enable real payments.
2. **Backend for persistence** — connect the Inquiries, Payments, Banners, and Certificates admin tabs to a real backend/database so submissions and uploads are actually saved.
3. **Admin authentication** — the admin panel currently has no login/password gate; add authentication before this is used with real data.
4. **Content review** — replace any placeholder/sample text on About, Certificates, and Contact pages with the foundation's final, approved content.
5. **Logo & branding** — confirm the final logo file and favicon before publishing.
6. **Domain & hosting** — point the foundation's domain to the final hosted version once backend wiring is complete.

## 9. Admin Access

Not applicable in the current build. The Admin Panel (`admin/index.html`) does not yet have a login/authentication gate — it's directly accessible for demo purposes. Admin authentication should be added (see Section 8) before this goes anywhere near production use.

## 10. My Tasks & Responsibilities

- Rebuilt the entire website from scratch with a new gold-and-navy visual identity after the earlier design was rejected in faculty review.
- Designed and developed all public pages: Home, About, Certificates, Donate, and Contact.
- Built the donation flow — preset/custom amount selection, cause selection, and Razorpay checkout integration hook.
- Implemented the dynamic, printable donation receipt generator referencing payment ID, donor details, and 80G tax note.
- Built the internal Admin Panel with tabbed navigation for Banners, Certificates, Inquiries, and Payments.
- Implemented the inquiry/contact form and scroll-aware navigation behaviour.
- Ensured full responsiveness across desktop, tablet, and mobile breakpoints.

## 11. Author

**Kshitij Jha**
GitHub: [@Kshitij-xtreme](https://github.com/Kshitij-xtreme)
University of Petroleum and Energy Studies (UPES), Dehradun — BTech CS/IT

---

*Project developed for Krrishna Dhwarka Foundation Bharat — an NGO website redesign, donation, and admin-panel demonstration project.*
