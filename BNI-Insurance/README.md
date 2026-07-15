# BNI Insurance & Investment Services — Website

A modern, dark-themed, fully responsive website for **BNI Insurance & Investment Services**, built with a premium UI, smooth animations, a Node.js/Express backend, JSON file–based dynamic content management, and a full Admin Panel with CRUD functionality.

---

## 1. Project Overview

This project is a complete redesign and rebuild of the BNI Services website (reference: bniservices.in), delivered in two phases:

- **Phase 1 — Frontend:** A modern, dark-theme, animated, fully responsive multi-page website (Home, About, Services, Team, Testimonials, Contact) with premium UI components — gradient cards, hover effects, scroll-reveal animations, animated counters, a testimonial marquee, FAQ accordion, pricing cards, and a fully functional contact form.
- **Phase 2 — Backend:** A Node.js/Express REST API powering dynamic content (Services, Testimonials, Team) and contact-form submissions, plus a secure, JWT-authenticated Admin Panel to perform full CRUD operations on website content and view/manage incoming enquiries — all without touching code.

The goal was to exceed the visual quality and user experience of the reference website while keeping the codebase clean, lightweight, and easy to extend with a real database (MySQL/MongoDB) in the future.

## 2. Tech Stack

| Layer | Technology |
|---|---|
| Frontend Markup/Styling | HTML5, CSS3 (custom, no framework), Google Fonts (Poppins) |
| Frontend Scripting | Vanilla JavaScript (ES6+), IntersectionObserver API for scroll animations |
| Backend Runtime | Node.js |
| Backend Framework | Express.js |
| Authentication | JSON Web Tokens (JWT) via `jsonwebtoken` |
| Data Storage | JSON file–based data store (`/backend/data/*.json`) |
| Middleware | `cors`, `body-parser`, `express.json()` |
| Environment Config | `dotenv` |
| Admin Panel UI | HTML/CSS/JavaScript (dark theme matching main site) |

> **Note:** The project currently uses a JSON-file data layer for simplicity and zero-setup evaluation. It's structured so it can be swapped for MongoDB/MySQL with minimal changes (see Section 5).

## 3. Installation

**Prerequisites**
- Node.js v16 or higher
- npm (bundled with Node.js)
- A code editor (VS Code recommended)

**Steps**
```bash
# 1. Extract the ZIP and navigate into the backend
cd bni-services/backend

# 2. Install dependencies
npm install

# 3. Create your environment file
cp .env.example .env
# (On Windows: copy .env.example .env)
```
Open `.env` and adjust values if needed (defaults work out of the box for local testing).

## 4. Running the Project

```bash
npm start        # production
npm run dev       # development, with auto-restart on file changes
```

Once running, visit:
| | |
|---|---|
| Website | `http://localhost:5000` |
| Admin Panel | `http://localhost:5000/admin` |
| API Base | `http://localhost:5000/api` |

The Express server serves the frontend, admin panel, and API from a single port — no separate frontend server required.

## 5. Database

Ships with a JSON file–based database at `backend/data/`:
- `services.json` — services shown on Home and Services pages
- `testimonials.json` — client testimonials
- `team.json` — team member records
- `contacts.json` — contact form submissions (populated at runtime)

No installation required — these files are created and read automatically by the server.

**Upgrading to a real database (optional, for production):**
1. Install the relevant driver (`mongoose` for MongoDB, or `mysql2`/`sequelize` for MySQL).
2. Replace the logic inside `backend/utils/db.js` (`readData`, `writeData`, `nextId`) with equivalent database queries.
3. Since all routes (`backend/routes/*.js`) only call these three helper functions, the rest of the application requires no changes.

## 6. Key Files

| File/Folder | Purpose |
|---|---|
| `backend/server.js` | Entry point — starts Express, mounts all routes |
| `backend/.env` | Environment variables: port, JWT secret, admin credentials |
| `backend/routes/auth.js` | Admin login, issues JWT tokens |
| `backend/routes/services.js` | CRUD API for Services |
| `backend/routes/testimonials.js` | CRUD API for Testimonials |
| `backend/routes/team.js` | CRUD API for Team Members |
| `backend/routes/contact.js` | Public contact form submission + admin view/manage |
| `backend/middleware/auth.js` | JWT verification middleware for admin-only routes |
| `backend/utils/db.js` | JSON file read/write helper (the "database layer") |
| `backend/public-admin/` | Admin Panel UI (login + dashboard) |
| `frontend/` | Public website pages, CSS, and JS |

## 7. Features

**Frontend**
- Fully responsive (Desktop, Tablet, Mobile)
- Dark, premium theme with purple/gold gradient accents
- Animated hero section with floating cards and live counters
- Scroll-reveal animations (IntersectionObserver)
- Auto-scrolling testimonial marquee, FAQ accordion, pricing cards
- Sticky, glassmorphism navbar with mobile hamburger menu
- Functional, validated contact form connected to the backend API
- Pages: Home, About, Services, Team, Testimonials, Contact

**Backend / Admin Panel**
- RESTful API with full CRUD for Services, Testimonials, Team Members
- Secure JWT-based admin authentication
- Admin Dashboard: overview stats, add/edit/delete for all content types
- View, mark-resolved, and delete contact form submissions
- Dynamic content loading — Home and Services pages fetch live data from the API

## 8. Before Going Live

- Change `ADMIN_EMAIL` and `ADMIN_PASSWORD` in `backend/.env`
- Change `JWT_SECRET` to a long, random string
- Update phone number, email, and address in the footer of each page and `contact.html`
- Update placeholder social media links (`#`) in the footer
- Replace the OpenStreetMap embed in `contact.html` with the exact business location
- Replace `frontend/images/logo.png` with the final logo if updated
- Migrate from JSON files to MongoDB/MySQL for production (see Section 5)
- Configure a custom domain and SSL when deploying (Render, Railway, VPS, etc.)

## 9. Admin Login (Development Defaults)

| Field | Value |
|---|---|
| Admin Panel URL | `http://localhost:5000/admin` |
| Email | `admin@bniservices.in` |
| Password | `Admin@123` |

> ⚠️ These are placeholder credentials from `backend/.env.example`. Change them in your own `.env` before any real deployment.

## 10. Author

**Kshitij Jha**
GitHub: [@Kshitij-xtreme](https://github.com/Kshitij-xtreme)
University of Petroleum and Energy Studies (UPES)

## 11. Folder Structure

```
bni-services/
├── backend/
│   ├── data/
│   │   ├── services.json
│   │   ├── testimonials.json
│   │   ├── team.json
│   │   └── contacts.json
│   ├── middleware/
│   │   └── auth.js
│   ├── public-admin/
│   │   ├── index.html        (Admin Login)
│   │   ├── dashboard.html    (Admin Dashboard)
│   │   └── admin.css
│   ├── routes/
│   │   ├── auth.js
│   │   ├── services.js
│   │   ├── testimonials.js
│   │   ├── team.js
│   │   └── contact.js
│   ├── utils/
│   │   └── db.js
│   ├── .env.example
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── css/style.css
│   ├── js/script.js
│   ├── images/logo.png
│   ├── index.html
│   ├── about.html
│   ├── services.html
│   ├── team.html
│   ├── testimonials.html
│   └── contact.html
└── README.md
```

## 12. Notes

- All animations use pure CSS and the IntersectionObserver API — no third-party animation library required.
- Graceful degradation: if the backend isn't running, static fallback content from the HTML still displays; only dynamic admin-managed content and the contact form require the backend.
- Tested locally on Node.js v18+ across Chrome, Firefox, and Edge, on desktop and mobile viewports.
