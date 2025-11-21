# Autofix - Auto Maintenance & Repair Service

## Project description

Autofix is a React single‑page application for a vehicle maintenance and car showcase website. It includes:

- Home page with hero and “Our Work” section
- About page
- Our Cars page with search, card grid, “More Info” modal, and Booking modal
- Services page with expandable “Read more” details
- Contact page with a simple form confirmation
- Login / Register page with in‑app toggle

Built with Create React App, React Router, and template styling in `public/assets/css/style.css`.

Routes:

- `/` Home
- `/about` About
- `/cars` Our Cars
- `/service` Services
- `/contact` Contact
- `/login` Login / Register

## Setup instructions

Prerequisites:

- Node.js 18+ and npm

Run locally:

```bash
git clone <your-repo-url>
cd carproject
npm install
npm start
```

Build production bundle:

```bash
npm run build
```

Assets:

- Place images under `public/assets/images/` (e.g., `logo.png`, `hero-banner.png`, `hero-bg.jpg`, `work-*.jpg`, `services-*.png`, car images like `car1.jpg`, `rover2025.jpg`).
- Global styles are loaded from `public/assets/css/style.css` (and `public/assets/css/contact.css`).

## Screenshots of the UI

Add screenshots to `docs/screenshots/` and they will render here:

![Home](docs/screenshots/home.png)
![Cars](docs/screenshots/cars.png)
![Booking Modal](docs/screenshots/booking-modal.png)
![Services](docs/screenshots/services.png)
![Contact](docs/screenshots/contact.png)
![Login](docs/screenshots/login.png)
