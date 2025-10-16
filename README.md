# Malcolm Portfolio Website

A stylish single-page portfolio layout built with React and Tailwind CSS using Vite. The structure highlights key
sections for a creative professional, including hero, about, projects, and contact areas.

## Getting started

```bash
npm install
npm run dev
```

The site will be available at `http://localhost:5173`.

## Available scripts

- `npm run dev` – start the Vite development server
- `npm run build` – create a production build
- `npm run preview` – preview the production build locally

## Project structure

```
.
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── src
    ├── App.jsx
    ├── components
    │   ├── About.jsx
    │   ├── Contact.jsx
    │   ├── Footer.jsx
    │   ├── Hero.jsx
    │   ├── Navbar.jsx
    │   ├── ProjectCard.jsx
    │   └── ProjectGrid.jsx
    ├── data
    │   └── projects.js
    ├── main.jsx
    └── styles.css
```

Replace the placeholder project data and imagery in `src/data/projects.js` with your own content to personalize the
portfolio.
