# BNI Insurance & Investment Services — Website

A modern, dark-themed, fully responsive website for **BNI Insurance & Investment Services**, built with a premium UI, smooth animations, a Node.js/Express backend, JSON file–based dynamic content management, and a full Admin Panel with CRUD functionality.

---

## 1. Project Overview

This project is a complete redesign and rebuild of the BNI Services website (reference: bniservices.in), delivered in two phases:

- **Phase 1 — Frontend:** A modern, dark-theme, animated, fully responsive multi-page website (Home, About, Services, Team, Testimonials, Contact) with premium UI components — gradient cards, hover effects, scroll-reveal animations, animated counters, a testimonial marquee, FAQ accordion, pricing cards, and a fully functional contact form.
- **Phase 2 — Backend:** A Node.js/Express REST API powering dynamic content (Services, Testimonials, Team) and contact-form submissions, plus a secure, JWT-authenticated **Admin Panel** to perform full CRUD (Create, Read, Update, Delete) operations on website content and view/manage incoming enquiries — all without touching code.

The goal was to exceed the visual quality and user experience of the reference website while keeping the codebase clean, lightweight, and easy to extend with a real database (MySQL/MongoDB) in the future.

---

## 2. Technology Used

| Layer | Technology |
|---|---|
| Frontend Markup/Styling | HTML5, CSS3 (custom, no framework), Google Fonts (Poppins) |
| Frontend Scripting | Vanilla JavaScript (ES6+), IntersectionObserver API for scroll animations |
| Backend Runtime | Node.js |
| Backend Framework | Express.js |
| Authentication | JSON Web Tokens (JWT) via `jsonwebtoken` |
| Data Storage | JSON file–based data store (`/backend/data/*.json`) acting as a lightweight database |
| Middleware | `cors`, `body-parser`, `express.json()` |
| Environment Config | `dotenv` |
| Admin Panel UI | HTML/CSS/JavaScript (dark theme matching main site) |

> **Note:** The project currently uses a JSON-file data layer for simplicity and zero-setup evaluation. It is structured so it can be swapped for MongoDB/MySQL with minimal changes (see "Database Setup" below).

---

## 3. Installation Steps

### Prerequisites
- [Node.js](https://nodejs.org/) v16 or higher installed
- npm (comes bundled with Node.js)
- A code editor (VS Code recommended)

### Steps

1. **Extract the ZIP file** to your desired location.
2. Open a terminal and navigate to the backend folder:
   ```bash
   cd bni-services/backend
   ```
3. Install the backend dependencies:
   ```bash
   npm install
   ```
4. Create your environment file by copying the example:
   ```bash
   cp .env.example .env
   ```
   (On Windows: `copy .env.example .env`)
5. Open `.env` and adjust values if needed (default values work out of the box for local testing).

---

## 4. How to Run the Project

1. From the `backend` folder, start the server:
   ```bash
   npm start
   ```
   For development with auto-restart on file changes:
   ```bash
   npm run dev
   ```
2. Once running, you will see a confirmation in the terminal showing the active URLs.
3. Open your browser and visit:
   - **Website:** `http://localhost:5000`
   - **Admin Panel:** `http://localhost:5000/admin`
   - **API Base:** `http://localhost:5000/api`

The Express server serves the frontend, the admin panel, and the API all from a single port — no separate frontend server is required.

---

## 5. Database Setup

This project ships with a **JSON file–based database** located at `backend/data/`:

- `services.json` — list of services shown on the Home and Services pages
- `testimonials.json` — client testimonials
- `team.json` — team member records
- `contacts.json` — contact form submissions (populated at runtime)

No installation is required — these files are created and read automatically by the server.

### Upgrading to a Real Database (Optional, for Production)
If you want to use MongoDB or MySQL instead of JSON files:
1. Install the relevant driver (`mongoose` for MongoDB or `mysql2`/`sequelize` for MySQL).
2. Replace the logic inside `backend/utils/db.js` (`readData`, `writeData`, `nextId`) with equivalent database queries.
3. Because all routes (`backend/routes/*.js`) only call these three helper functions, the rest of the application requires **no changes**.

---

## 6. Configuration / Important Files

| File/Folder | Purpose |
|---|---|
| `backend/server.js` | Main entry point — starts the Express server and mounts all routes |
| `backend/.env` | Environment variables: port, JWT secret, admin credentials |
| `backend/routes/auth.js` | Admin login route, issues JWT tokens |
| `backend/routes/services.js` | CRUD API for Services |
| `backend/routes/testimonials.js` | CRUD API for Testimonials |
| `backend/routes/team.js` | CRUD API for Team Members |
| `backend/routes/contact.js` | Public contact form submission + admin view/manage |
| `backend/middleware/auth.js` | JWT verification middleware protecting admin-only routes |
| `backend/utils/db.js` | JSON file read/write helper (acts as the "database layer") |
| `backend/data/*.json` | Data storage files |
| `backend/public-admin/` | Admin Panel UI (login + dashboard) |
| `frontend/` | All public website pages, CSS and JS |

---

## 7. Features / Modules

### Frontend
- Fully responsive design (Desktop, Tablet, Mobile)
- Dark, premium theme with purple/gold gradient accents
- Animated hero section with floating cards and live counters
- Scroll-reveal animations on all sections (IntersectionObserver)
- Auto-scrolling testimonial marquee
- FAQ accordion
- Pricing plan cards
- Sticky, glassmorphism navbar with mobile hamburger menu
- Functional, validated contact form connected to the backend API
- Pages: Home, About, Services, Team, Testimonials, Contact

### Backend / Admin Panel
- RESTful API with full CRUD for Services, Testimonials, Team Members
- Secure JWT-based admin authentication
- Admin Dashboard with:
  - Overview statistics (total services, testimonials, team members, enquiries)
  - Add / Edit / Delete Services
  - Add / Edit / Delete Testimonials
  - Add / Edit / Delete Team Members
  - View, mark-resolved, and delete Contact Form submissions
- Public contact form submissions stored and retrievable by admin
- Dynamic content loading: Home and Services pages fetch live data from the API

---

## 8. Things to Update After Setup

Before going live, please update the following:

1. **Admin credentials** — change `ADMIN_EMAIL` and `ADMIN_PASSWORD` in `backend/.env`.
2. **JWT secret** — change `JWT_SECRET` in `backend/.env` to a long, random string.
3. **Contact details** — update phone number, email, and address in the footer of each HTML page and in `contact.html`.
4. **Company social media links** — update the placeholder links (`#`) in the footer's social icons.
5. **Google Map embed** — replace the OpenStreetMap embed in `contact.html` with your exact business location.
6. **Logo / favicon** — replace `frontend/images/logo.png` if you have an updated logo file.
7. **Database** — for production, migrate from JSON files to MongoDB/MySQL as described in Section 5.
8. **Domain & HTTPS** — configure a custom domain and SSL certificate when deploying to a live server (e.g., Render, Railway, VPS, or shared hosting with Node support).

---

## 9. Admin Login Details

| Field | Value |
|---|---|
| Admin Panel URL | `http://localhost:5000/admin` |
| Email | `admin@bniservices.in` |
| Password | `Admin@123` |

> ⚠️ These are **default development credentials** defined in `backend/.env.example`. Please change them immediately in your `.env` file before any real/production deployment.

---

## 10. Developer / Submission Details

| Field | Detail |
|---|---|
| **Full Name** | Kshitij Jha |
| **Contact Number** | +91 7004655092 |
| **College Name** | University of Petroleum and Energy Studies (UPES) |
| **Student Email / ID** | Kshitij.12552@stu.upes.ac.in |

---

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

---

## 12. Notes

- All animations are implemented using pure CSS and the IntersectionObserver API — no third-party animation library required.
- The site degrades gracefully: if the backend is not running, static fallback content from the HTML still displays correctly; only dynamic admin-managed content and the contact form require the backend.
- Tested locally on Node.js v18+ with Chrome, Firefox, and Edge across desktop and mobile viewport sizes.

---

*Thank you for reviewing this project.*
