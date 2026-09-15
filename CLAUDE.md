# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing website for **Orbit Media**, an IT/software studio. React SPA built with Vite, styled entirely with Tailwind CSS v4 (no component library). Dark, "orbit"-themed visual identity: deep space backgrounds, violet→cyan gradients, animated orbiting rings.

## Commands

```bash
npm run dev       # start Vite dev server (http://localhost:5173)
npm run build     # production build to dist/
npm run preview   # preview the production build
npm run lint      # oxlint over the whole project
```

There is no test suite configured. To verify UI changes, run `npm run dev` and check the page in a browser (or via Playwright) — don't rely on lint/build alone to confirm visual/behavioral correctness.

## Architecture

- **Routing**: `src/main.jsx` sets up `react-router-dom` routes, all nested under a single layout route rendering `App.jsx`. `App.jsx` renders `Navbar` + `<Outlet />` + `Footer`, plus `ScrollToTop` (resets scroll position on route change).
- **Pages** (`src/pages/`): one file per route — `Home`, `Services`, `Work`, `About`, `Contact`, `NotFound`. Pages compose section-level JSX directly (hero, feature grid, CTA banner, etc.) rather than delegating to further sub-page components — sections live inline in the page file, only reusable pieces (cards, buttons) are extracted to `src/components/`.
- **Content data** (`src/data/`): copy and structured content (`services.js`, `projects.js`, `testimonials.js`, `team.js`, `process.js`) is kept separate from presentation. To change site copy or add/remove a service, project, testimonial, etc., edit the relevant data file — the page/card components just map over these arrays.
- **Components** (`src/components/`):
  - `layout/` — `Navbar`, `Footer`, `Logo`, `ScrollToTop` (site chrome, used once via `App.jsx`).
  - `ui/` — small generic primitives (`Button`, `Eyebrow`, `SectionHeading`) reused across pages.
  - `icons/BrandIcons.jsx` — inline SVGs for X/LinkedIn/GitHub. **lucide-react (current version) no longer ships brand/logo icons** (Github, Twitter, Linkedin were removed) — do not attempt to import them from `lucide-react`; use these local SVGs or add new ones the same way.
  - `OrbitField.jsx` — decorative animated concentric-rings background used behind the hero and CTA sections.
  - `ServiceCard`, `ProjectCard`, `TestimonialCard` — content cards driven by the `src/data/` files.

## Styling

- Tailwind v4, configured via CSS (`src/index.css`), not a `tailwind.config.js` file. Theme tokens (colors, fonts, animation keyframes) are declared in the `@theme` block there.
- Brand color tokens: `space-950/900/800/700/600/400/200` (backgrounds/text neutrals) and `orbit-violet`, `orbit-violet-light`, `orbit-cyan`, `orbit-pink` (accents) — reference these instead of introducing new hardcoded colors.
- Custom animations (`animate-orbit-slow/medium/fast`, `animate-float`) and a `.bg-grid` background-grid utility are also defined in `index.css`.
- Fonts: "Space Grotesk" for display/headings (`font-display` class), "Inter" for body text — loaded via Google Fonts `<link>` tags in `index.html`.
- Since Tailwind v4 scans plain text for class names, gradient class fragments stored in data files (e.g. `gradient: 'from-orbit-violet to-orbit-pink'` in `src/data/projects.js`) are picked up automatically as long as the full class name string appears literally somewhere in the source — don't construct such class names dynamically at runtime from partial strings.

## Notes

- The contact form (`src/pages/Contact.jsx`) is client-side only — it validates and shows a success state but does not call a backend/API. If wiring it to a real endpoint, that's new functionality, not a bug fix.
- `oxlint` (not ESLint) is the configured linter; its config is `.oxlintrc.json`.
