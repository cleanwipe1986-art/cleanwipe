# Orbit Media

Website for Orbit Media, a digital-skills training institute — Digital Marketing, Web &
E-commerce Development, Mobile App Development, WordPress, AI Automation, Graphic Design, Video
Editing, and more. Custom UI/UX, red-and-white theme, mobile-first and responsive.

Built with React, Vite, React Router, and Tailwind CSS v4.

## Getting Started

```bash
npm install
npm run dev
```

The site runs at `http://localhost:5173`.

## Scripts

- `npm run dev` — start the local dev server
- `npm run build` — build for production (outputs to `dist/`)
- `npm run preview` — preview the production build locally
- `npm run lint` — run oxlint

## Pages

- **Home** — hero, popular courses, why choose us, how it works, testimonials, CTA
- **Courses** — all primary courses plus the full curriculum broken down by category (SEO Services, Digital Marketing, Development & Design, AI & Automation) and available batch options
- **About** — institute story, values, and trainers
- **Contact** — enrollment/contact form with a course-interest selector

Site content (courses, course categories, testimonials, trainers) lives in `src/data/` and can be edited without touching page layout.
