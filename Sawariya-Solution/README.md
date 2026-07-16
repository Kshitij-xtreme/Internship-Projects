# Sawariya Solution 🦚

A responsive, multi-page company website for Sawariya Solution — a web & mobile app development company based in Vadodara, Gujarat, India.

I built this as part of my software development internship. My mentor asked me to put together a complete, modern marketing website for the company using plain front-end technologies (no CMS, no page builder) and take it all the way to a working live link. This repo is the result.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![jQuery](https://img.shields.io/badge/jQuery-0769AD?logo=jquery&logoColor=white)

---

## 📖 About the project

The brief from my mentor was simple to say but had a lot in it: "build the company site, keep it consistent, keep it clean, and get it live."

So the whole thing is static — just HTML, CSS and JavaScript — which keeps it fast, easy to host, and dependency-free. There's no backend and no build step; what you see in the repo is exactly what ships.

Some of the things I focused on while building it:

- One consistent header and footer on every page so navigation feels the same no matter where you land.
- A single font family across the whole site (Jost) for a clean, uniform look.
- Fully responsive layouts that hold up from large desktops down to phones.
- Self-hosted fonts and assets so nothing depends on an external font service loading.
- Getting every internal link, image and asset to resolve correctly.

## ✨ Features

- 🖥️ Modern, animated landing page with a dark hero section and gradient accents
- 🧭 Sticky navigation that stays pinned while you scroll
- 📱 Responsive design — mobile, tablet and desktop
- 🗂️ Large multi-page site — home, about, services, case studies, blog, contact, plus dedicated service/technology landing pages
- 💬 Get-a-Quote / contact forms and a floating WhatsApp button
- 🔤 Self-hosted Jost webfont + Font Awesome icons
- 🔎 SEO-friendly — meta tags, Open Graph tags, favicon and a web app manifest
- 🍪 Cookie-consent notice
- 🎨 Consistent Sawariya Solution branding (logo, colours, contact details) throughout

## 🛠️ Built with

| Area | Tech |
|---|---|
| Markup | HTML5 |
| Styling | CSS3 (custom, media queries, flexbox & grid) |
| Interactivity | Vanilla JavaScript + jQuery |
| Icons | Font Awesome |
| Typography | Jost (self-hosted webfont) |

## 📁 Project structure
Sawariya-Solution/
├── index.html                 # Home page
├── 404.html                   # Custom 404 page
│
├── assets/                    # all front-end assets
│   ├── css/                   # stylesheets
│   ├── js/                    # scripts (jQuery, sliders, etc.)
│   ├── fonts/
│   │   ├── jost/              # Jost webfont (self-hosted)
│   │   └── fontawesome/       # Font Awesome webfonts
│   ├── images/
│   │   ├── uploads/           # site images, logo & media
│   │   └── theme/             # theme graphics
│   ├── files/                 # favicon & downloadable files
│   └── vendor/                # third-party libraries
│
├── pages/                     # every inner page (one folder each)
│   ├── about-us/
│   ├── services/
│   ├── contact-us/
│   ├── case-study/
│   ├── blog/
│   └── ...                    # service & technology landing pages
│
├── components/                # reusable header & footer partials
├── favicon.ico                # site favicon (peacock mark)
├── site.webmanifest           # PWA / web app manifest
└── README.md

The project root stays tidy — just three folders (`assets/`, `pages/`, `components/`) plus the home page and a couple of config files. All front-end assets live under `assets/`, and every inner page lives in its own folder under `pages/` (each with an `index.html`, giving clean URLs like `/pages/about-us/` and `/pages/services/`).

## 🚀 Running it locally

All paths in the site are relative, so it runs anywhere — just serve the folder with any static server:

```bash
# 1. clone the repo
git clone https://github.com/Kshitij-xtreme/Internship-Projects.git
cd Internship-Projects/Sawariya-Solution

# 2. start any static server from inside the folder
python -m http.server 8000
#   or:  npx serve
#   or:  php -S localhost:8000

# 3. open
http://localhost:8000/
```

> Tip: use a local server rather than opening `index.html` directly from the file system — browsers block some resources on `file://`, so it needs `http://` to load everything correctly.

## 📄 Main pages

| Page | Path |
|---|---|
| Home | `/` |
| About Us | `/pages/about-us/` |
| Services | `/pages/services/` |
| Case Studies | `/pages/case-study/` |
| Blog | `/pages/blog/` |
| Contact | `/pages/contact-us/` |

...along with a large set of individual service and technology landing pages under `pages/`.

## 🙏 Acknowledgements

Big thanks to my internship mentor for the guidance, the design feedback, and for reviewing the work along the way.

## 👤 Author

**Kshitij Jha**
GitHub: [@Kshitij-xtreme](https://github.com/Kshitij-xtreme)

---

*Built during my internship • Sawariya Solution • Vadodara, Gujarat*
