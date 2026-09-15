# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing/enrollment website for **Orbit Media**, a digital-skills training institute (Digital
Marketing, Web & E-commerce Development, Mobile App Development, WordPress, AI Automation, Graphic
Design, Video Editing, and more). React SPA built with Vite, styled entirely with Tailwind CSS v4
(no component library). Red-and-white visual identity with subtle animated orbit rings as the
only carryover from the brand's original "Orbit" motif — the site is otherwise a light theme, not
dark.

## Commands

```bash
npm run dev       # start Vite dev server (http://localhost:5173)
npm run build     # production build to dist/
npm run preview   # preview the production build
npm run lint      # oxlint over the whole project
```

There is no test suite configured. To verify UI changes, run `npm run dev` and check the page in a browser (or via Playwright) — don't rely on lint/build alone to confirm visual/behavioral correctness.

## Architecture

- **Routing**: `src/main.jsx` sets up `react-router-dom` routes, all nested under a single layout route rendering `App.jsx`. `App.jsx` renders `Navbar` + `<Outlet />` + `Footer`, plus `ScrollToTop` (resets scroll position on route change). Routes: `/`, `/courses`, `/about`, `/contact`, plus a catch-all `NotFound`.
- **Pages** (`src/pages/`): `Home`, `Courses`, `About`, `Contact`, `NotFound`. Pages compose section-level JSX directly (hero, feature grid, CTA banner, etc.) rather than delegating to further sub-page components — sections live inline in the page file, only reusable pieces (cards, buttons) are extracted to `src/components/`.
- **Content data** (`src/data/`): copy and structured content is kept separate from presentation.
  - `courses.js` — the 10 flagship/primary courses (Digital Marketing, E-commerce Development, Website Development, Mobile App Development, WhatsApp Marketing, Email Marketing, WordPress Development, AI Automation & Tools Integration, Graphic Designing, Video Editing). Rendered by `CourseCard`.
  - `courseCategories.js` — the detailed curriculum breakdown into 4 categories (SEO Services, Digital Marketing, Development & Design, AI & Automation), each a checklist of specific topics taught. Rendered by `CourseCategoryCard`. **Keep each category's item list to roughly 8-11 entries** — it was deliberately trimmed from a longer master list to keep the category cards visually uniform; don't restore every dropped item without a reason.
  - `testimonials.js`, `process.js` (the "Enroll → Learn → Practice → Get Certified" funnel), `team.js` (exports both `team` — trainers — and `values` — the "why choose us" points).
  - To change site copy or add/remove a course, category, testimonial, trainer, etc., edit the relevant data file — the page/card components just map over these arrays.
- **Components** (`src/components/`):
  - `layout/` — `Navbar`, `Footer`, `Logo`, `ScrollToTop` (site chrome, used once via `App.jsx`). `Footer` inlines its own copy of the logo mark (recolored for the dark footer band) rather than reusing `Logo`, since `Logo` is styled for the light navbar.
  - `ui/` — small generic primitives (`Button`, `Eyebrow`, `SectionHeading`) reused across pages.
  - `icons/BrandIcons.jsx` — inline SVGs for X/LinkedIn/GitHub. **lucide-react (current version) no longer ships brand/logo icons** (Github, Twitter, Linkedin were removed) — do not attempt to import them from `lucide-react`; use these local SVGs or add new ones the same way.
  - `OrbitField.jsx` — decorative animated concentric-rings background used behind the hero on Home/About; tuned for use on **white/light backgrounds** (low-opacity dark borders, colored dots). Don't drop it onto a dark/colored section (e.g. the red CTA banner) without recoloring it first — the CTA banner instead uses a simple inline white radial blur for its background glow.
  - `CourseCard.jsx` — icon + title + summary + bullet list, used for the primary courses grid.
  - `CourseCategoryCard.jsx` — icon + title + checklist, used for the 4-category curriculum breakdown.
  - `TestimonialCard.jsx` — student review card.

## Styling

- Tailwind v4, configured via CSS (`src/index.css`), not a `tailwind.config.js` file. Theme tokens (colors, fonts, animation keyframes) are declared in the `@theme` block there.
- Brand color tokens: `brand-50` through `brand-900` (the red scale — `brand-600`/`brand-700` for primary red, `brand-50`/`brand-100` for light tint backgrounds/badges) and `ink-900`/`ink-700` (near-black warm neutrals for headings/body text). Backgrounds are plain `white` (Tailwind default) rather than a custom token. Reference these instead of introducing new hardcoded colors or reaching for Tailwind's default `red-*`/`gray-*` scales.
- Custom animations (`animate-orbit-slow/medium/fast`, `animate-float`) and a `.bg-grid` background-grid utility are also defined in `index.css`. `.bg-grid` and `OrbitField` were both re-tuned to dark-on-light (rather than the original light-on-dark) — keep that in mind if reusing them elsewhere.
- Fonts: "Space Grotesk" for display/headings (`font-display` class), "Inter" for body text — loaded via Google Fonts `<link>` tags in `index.html`.
- The footer and the CTA banner sections are intentionally dark (`bg-ink-900`, or a `brand-700→brand-500` gradient) for contrast against an otherwise all-white/light site — text/icon colors inside those sections use `white`/`white/60` etc., not the `ink-*` tokens meant for light backgrounds.
- Since Tailwind v4 scans plain text for class names, don't construct brand-color class names dynamically at runtime from partial strings — the full class name must appear literally somewhere in the source for Tailwind to generate it.

## Notes

- The contact form (`src/pages/Contact.jsx`) is client-side only — it validates and shows a success state but does not call a backend/API. It doubles as the course-enrollment form (has a "Course interest" dropdown sourced from `src/data/courses.js`). If wiring it to a real endpoint, that's new functionality, not a bug fix.
- `oxlint` (not ESLint) is the configured linter; its config is `.oxlintrc.json`.
