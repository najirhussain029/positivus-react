# Positivus – React

HTML-to-React conversion of the Positivus digital marketing landing page.

🔗 **Live Demo:** [positivus-react-zeta.vercel.app](https://positivus-react-zeta.vercel.app/)  
📦 **Repository:** [github.com/najirhussain029/positivus-react](https://github.com/najirhussain029/positivus-react)

## Tech Stack

- React 18
- Vite
- Plain CSS with responsive desktop, tablet, and mobile layouts

## Features

- Responsive landing page for desktop, tablet, and mobile
- Mobile hamburger navigation
- Working-process accordion with one item open at a time
- Testimonial slider with previous/next controls and navigation dots
- Contact form with required-field validation
- Cards and repeated content rendered from arrays of objects using `.map()`
- Reusable UI components and a separate data layer

## Project Structure

```text
src/
├── assets/                 # SVG illustrations and team portraits
├── components/
│   ├── ui/                 # Reusable UI: Button, SectionTitle, Logo, ArrowLink, Section
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Logos.jsx
│   ├── Services.jsx
│   ├── ServiceCard.jsx
│   ├── Cta.jsx
│   ├── CaseStudies.jsx
│   ├── CaseCard.jsx
│   ├── WorkingProcess.jsx
│   ├── ProcessItem.jsx
│   ├── Team.jsx
│   ├── TeamMember.jsx
│   ├── Testimonials.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── data/
│   └── data.js             # Page content and arrays used by the components
├── App.jsx
├── main.jsx
└── index.css
```

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Author

Najir Hussain
