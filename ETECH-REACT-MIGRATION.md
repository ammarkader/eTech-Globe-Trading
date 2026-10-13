# ETECH Group — React Migration Specification

## Document Status

- Status: APPROVED
- Purpose: Master specification for converting the finalized ETECH HTML website into a modern React + TypeScript application.
- Source of truth: `etech-final.html`
- Application type: Static corporate website, prerendered to static HTML at build time (no runtime server)
- Routing/build architecture: React Router Vite plugin (Framework Mode) with `ssr: false` and build-time prerendering
- Deployment target: Vercel (static output)
- Implementation agent: Claude Code for VS Code
- Architecture decisions: Human-reviewed before implementation
- Revision: 6 October 2026 — reconciled with `etech-final.html` after the Phase 0 inspection (palette, routes, homepage sections, animation wording, carousel/slider, filter labels, slugs, avatars, legacy hash URLs, content-review items, prerendering decision)
- Revision: 6 October 2026 (Phase 2A) — recorded the approved routing/build architecture (React Router Vite plugin, `ssr: false`, static prerendering of 46 URLs), the route-module default-export exception, the canonical URL convention, 404 handling, and the approved breakpoint, token-naming, code-style and brand-asset decisions
- Revision: 7 October 2026 (Phase 2B) — recorded the data model and its validation, the asset strategy, the breakpoint variants, and the revised scope of Phases 2B and 3
- Revision: 7 October 2026 (Phase 2B approval) — finalized the phase sequence (Phase 3 is the Header, Footer and global site shell; visual migration follows from Phase 4) and recorded seven approved decisions in sections 16, 17, 19, 37, 45 and 46
- Revision: 8 October 2026 (Phase 3) — recorded how the Header, Footer and global site shell were implemented (section 79, Phase 3) and the menu icon decision (section 40)
- Revision: 8 October 2026 (Phase 4A) — recorded the implementation of the homepage Hero (section 79, Homepage sections)
- Revision: 8 October 2026 (Phase 4B) — recorded the implementation of the commodity ticker (section 79, Homepage sections)
- Revision: 8 October 2026 (Phase 4C) — recorded the implementation of Latest News and the approved phone layout decision (sections 26 and 79)
- Revision: 8 October 2026 (Phase 4D) — recorded the implementation of the supply-chain section, including the reduced-motion fix for its moving dots (section 79, Homepage sections)
- Revision: 8 October 2026 (Phase 4E) — recorded the implementation of Six Lines of Business and its division icons (section 79, Homepage sections)
- Revision: 8 October 2026 (Phase 4F) — recorded the implementation of the Commodities section and its filter (section 79, Homepage sections)
- Revision: 8 October 2026 (Phase 4G) — recorded the implementation of Inside ETECH, its tabs, automatic advance and photograph zoom (section 79, Homepage sections)
- Revision: 8 October 2026 (Phase 4H) — recorded the implementation of the About section and corrected the Phase 4G note on faint pixel differences (section 79, Homepage sections)
- Revision: 8 October 2026 (Phase 4I) — recorded the implementation of Our Journey in its resting state and what is deferred to the animation phase; recorded the decision not to change Six Lines (section 79, Homepage sections)
- Revision: 8 October 2026 (Phase 4J) — recorded the implementation of Why Choose ETECH and its card hover (section 79, Homepage sections)
- Revision: 8 October 2026 (Phase 4K) — recorded the implementation of Leadership Messages and its spacing after the dark block (section 79, Homepage sections)
- Revision: 9 October 2026 (Phase 4L) — recorded the implementation of the Core Team section and its tile hover (section 79, Homepage sections)
- Revision: 9 October 2026 (Phase 4M) — recorded the implementation of the Global Network section and its pin pulse, and the decisions closed in the Phase 4M brief (section 79, Homepage sections)
- Revision: 9 October 2026 (Phase 4N) — recorded the implementation of the GCC Visions section, the order of its entries and the pin-pulse decision (section 79, Homepage sections)
- Revision: 9 October 2026 (Phase 4O) — recorded the implementation of the Closing Banner, its shadow over the GCC Visions section and the note-opacity decision (section 79, Homepage sections)
- Revision: 9 October 2026 (Phase 4P) — recorded the implementation of Market Watch and the measured reach of the Closing Banner's shadow (section 79, Homepage sections)
- Revision: 9 October 2026 (Phase 4Q) — recorded the implementation of the LinkedIn strip and the dark button variant (section 79, Homepage sections)
- Revision: 9 October 2026 (Phase 4R) — recorded the implementation of the Contact section, which completes the homepage, and a finding about the footer's copyright line (section 79, Homepage sections)
- Revision: 10 October 2026 (Phase 5B) — recorded the animation decisions approved after the Phase 5A audit and the implementation of the shared scroll reveal on the eleven section headings (section 79, Animation)
- Revision: 12 October 2026 (Phases 5C–5G) — recorded the scroll reveal on the remaining targets, the GCC visions card line and note, the decisions to keep the Journey timeline and the counters static, and the final animation verification (section 79, Animation)
- Revision: 12 October 2026 (detail pages) — recorded the implementation and verification of the 6 division and 39 commodity pages (section 79, Division and commodity pages)
- Revision: 12 October 2026 (chat assistant) — recorded the implementation and verification of the FAQ assistant (section 79, Chat assistant)
- Revision: 12 October 2026 (final QA) — recorded the SEO, accessibility and deployment audit, the finished not-found page, the footer fix, and the generated sitemap.xml and robots.txt (section 79, SEO + Accessibility)
- Revision: 12 October 2026 (content correction) — recorded the corrected capitals in five enquiry-panel headings (section 79, SEO + Accessibility)
- Revision: 12 October 2026 (hero globe) — recorded the requested enhancement of the hero globe, which replaces the extracted globe image and amends the static-globe rules of sections 25 and 73 (section 79, Phase 4A notes)
- Revision: 12 October 2026 (Our journey) — recorded the requested scroll-driven timeline and its spacing, which replace the static timeline of Phases 4I and 5E (section 79, Animation, Phase 5E)
- Revision: 12 October 2026 (homepage refinements) — recorded three requested visual changes: the About year, the Global network top padding, and the GCC visions spacing, note and Saudi flag (section 79, Homepage sections)
- Revision: 12 October 2026 (hero globe dots, lines and light) — recorded the requested refinement of the globe's dot field and grid lines and the second movement, a slow light across the dots (section 79, Phase 4A notes). Routes, hubs, sphere, size and position unchanged.
- Revision: 12 October 2026 (supply chain, counters, About year, division icons) — recorded four requested homepage changes: no top padding on Supply chain, the counters count up, the About year counts down into place, and the six division icons are redrawn to one standard and move only on hover or keyboard focus (section 79, homepage refinements).
- Revision: 12 October 2026 (homepage section order) — recorded the requested new order of the 18 homepage sections and the two top paddings restored because of it (section 79, homepage refinements).
- Revision: 12 October 2026 (three spacings and the GCC note) — recorded the requested spacing above the Supply chain, GCC visions and Inside ETECH headings and the two-line GCC visions note (section 79, homepage refinements).
- Revision: 13 October 2026 (Leadership and Latest news top padding) — recorded the requested removal of the top padding of these two sections (section 79, homepage refinements).
- Revision: 13 October 2026 (hero grid and detail page illustrations) — recorded the requested removal of the grid behind the homepage hero and the detail page header bands, and of the illustrated scene from the detail page header bands (section 79, homepage refinements).
- Revision: 13 October 2026 (Latest news bottom, Inside ETECH and GCC visions top) — recorded the requested removal of the bottom padding and rule of Latest news and the slight top padding added to Inside ETECH and GCC visions (section 79, homepage refinements).
- Revision: 13 October 2026 (GCC visions cards and note) — recorded four requested refinements: no coloured line on the cards, more space under the flag and year, more space above the note, a larger note (section 79, homepage refinements).
- Revision: 13 October 2026 (GCC visions year weight) — recorded the requested heavier year labels on the GCC visions cards (section 79, homepage refinements).
- Revision: 13 October 2026 (footer layout) — recorded the requested two-row footer without the LinkedIn link (section 79, homepage refinements).
- Revision: 13 October 2026 (favicon) — recorded the favicon added by request: the symbol of the earlier ETECH logo in the brand violet (section 79, homepage refinements).
- Revision: 13 October 2026 (hero globe hubs and routes) — recorded the requested refinement of the globe's network layer: routes stop at hub rings, eight untangled routes in place of nine, re-timed lights (section 79, Phase 4A notes).
- Revision: 13 October 2026 (hero globe land and placed network) — recorded the requested continents inside the globe and the hubs, route points and routes placed by latitude and longitude on it (section 79, Phase 4A notes).

---

# 1. PROJECT OBJECTIVE

Convert the finalized single-file ETECH website:

`etech-final.html`

into a production-quality, maintainable React + TypeScript application.

The goal is NOT to perform a literal HTML-to-JSX conversion.

The goal is to:

1. Preserve the approved visual design.
2. Preserve the approved content.
3. Preserve existing functionality.
4. Rebuild the application using proper React architecture.
5. Extract content into typed data structures.
6. Create reusable React components.
7. Create proper URL routing.
8. Replace legacy JavaScript behavior with React state, hooks, and components where appropriate.
9. Replace the large single-file CSS architecture with Tailwind CSS plus minimal intentional custom CSS where necessary.
10. Remove obsolete code and implementation details from the original HTML.
11. Maintain excellent responsive behavior.
12. Maintain accessibility.
13. Maintain SEO fundamentals.
14. Produce a clean codebase that another professional developer can maintain.

The resulting application must feel like a professionally engineered React application, not a converted HTML file.

---

# 2. SOURCE OF TRUTH

`etech-final.html` is the FINAL approved visual and content source of truth.

Claude Code MUST inspect the entire file before implementation.

Do not make assumptions about the design.

Do not redesign sections simply because another implementation may appear cleaner.

Do not introduce a new visual direction.

When there is a conflict between:

- the old HTML implementation
- a proposed React implementation
- personal preference

the approved visual/content behavior in `etech-final.html` takes priority unless this document explicitly says otherwise.

Where a specific value stated in this document (for example a colour, a label or a slug) conflicts with the actual value in `etech-final.html`, the value in `etech-final.html` wins.

---

# 3. WHAT MUST BE PRESERVED

The React implementation must preserve the final approved:

- overall visual language
- typography hierarchy
- color palette
- spacing rhythm
- section ordering
- content
- imagery
- responsive behavior
- navigation structure
- page relationships
- division structure
- commodity structure
- cards
- buttons
- hover behavior
- timeline
- globe visual
- FAQ assistant behavior
- contact/quote behavior
- animations that are intentionally retained
- reduced-motion behavior

The final HTML has already gone through a design and functional audit.

Do not use the React migration as an opportunity for another redesign.

---

# 4. APPLICATION TYPE

This is a STATIC website.

There is:

- no database
- no CMS
- no authenticated dashboard
- no user accounts
- no server-side business logic
- no application backend
- no dynamic database queries
- no runtime SSR and no SSR backend (pages are prerendered to static HTML at build time; see section 5)
- no requirement for server actions

The application should therefore remain intentionally lightweight.

Do not introduce:

- Redux
- Zustand
- TanStack Query
- Axios
- GraphQL
- database libraries
- authentication libraries
- backend frameworks
- server actions
- unnecessary state-management systems

unless a genuine future requirement makes them necessary.

---

# 5. REQUIRED TECHNOLOGY STACK

Use current stable versions of the following ecosystem.

## Core

- React
- React DOM
- TypeScript
- Vite

Use the current stable React release available at implementation time.

React 19.x is expected.

Do not use Create React App.

---

## Styling

Use:

- Tailwind CSS v4+
- `@tailwindcss/vite`

Use the current Tailwind + Vite integration.

Do NOT use the old Tailwind v3 setup unless technically unavoidable.

Do NOT create:

- `tailwind.config.js`
- `postcss.config.js`

merely because older tutorials use them.

Use Tailwind's current CSS-first configuration approach unless the current installed version requires otherwise.

---

## Routing

Use:

- React Router

Use the current stable React Router release.

Use proper URL paths.

Do NOT reproduce the original hash-based routing system.

### Approved routing/build architecture

The React Router Vite plugin (`@react-router/dev`, Framework Mode tooling) is the approved routing and build architecture. This decision was human-reviewed after Phase 1 and replaces the Phase 1 `createBrowserRouter` shell.

- `ssr: false` is required. There is no runtime SSR backend and no custom server.
- The application is still a static deployment.
- Build-time prerendering is required.
- The homepage, all 6 division routes and all 39 commodity routes must be prerendered: 46 meaningful URLs.
- The prerender path list must be generated from the typed application data. The slug list must not be hardcoded in more than one place.
- The wildcard route (`*`) is the NotFound route. It is not one of the 46 content URLs.
- Page-specific metadata (title, description, canonical URL) must be rendered into the generated HTML of each prerendered page.
- The static output (`build/client`) is deployed to Vercel.
- There must be one routing architecture in the repository. Do not keep a second router setup alongside it.

Route modules (the files referenced from `src/routes.ts`, and `src/root.tsx`) may use default exports, as required by React Router framework conventions. This is an intentional exception for route modules only. The named-component convention in section 56 remains unchanged for ordinary components.

Because pages are rendered at build time, code must be safe to render without a browser. Do not access `window`, `document`, `matchMedia`, `IntersectionObserver` or `localStorage` during render. Browser-only behavior belongs in effects and hooks.

Follow the APIs documented for the installed React Router version. Do not copy examples written for older versions.

---

## Icons

Use:

- Lucide React

Do not copy large inline SVG icon blocks from the original HTML when a Lucide icon provides an equivalent.

Important brand-specific SVGs may remain inline or as assets when they are part of the approved visual identity.

---

## Code quality

Use:

- ESLint
- Prettier

Use the current recommended configuration for the installed versions.

TypeScript must run in strict mode.

Approved Prettier style: single quotes, no semicolons.

---

# 6. DEPENDENCY PHILOSOPHY

Do not install dependencies simply because they are popular.

Every dependency must have a clear purpose.

Preferred baseline:

### Runtime

- react
- react-dom
- react-router
- lucide-react

### Development

- typescript
- vite
- eslint
- prettier
- Tailwind CSS
- @tailwindcss/vite
- relevant TypeScript/ESLint/Vite plugins

Do not add animation libraries, state-management libraries, data-fetching libraries, form libraries, or utility libraries unless implementation genuinely benefits from them.

---

# 7. ANIMATION PHILOSOPHY

The final ETECH design intentionally avoids excessive animation.

The website should feel:

- premium
- modern
- calm
- confident
- professional

It should NOT feel:

- overly animated
- like a template demo
- like a gaming site
- overloaded with motion

Prefer:

- CSS transitions
- CSS transforms
- IntersectionObserver
- React hooks
- browser-native APIs

for simple animation behavior.

Do not introduce:

- Three.js
- WebGL
- GSAP
- Framer Motion
- Motion
- AOS
- ScrollMagic
- SplitText

unless a later explicit requirement requires one.

The final hero globe is STATIC.

(Amended 12 October 2026 by request: the globe is now a drawn SVG with two faint movements, a light along each trade route and a slow light across its dots. See "Hero globe enhancement" under the Phase 4A notes in section 79. Still no 3D, WebGL, canvas, rotation or library.)

Do not recreate the previous animated 3D globe.

## Approved animation in the final HTML

The approved CSS/native animation behavior present in `etech-final.html` must be preserved. It includes:

- scroll reveal of sections
- count-up of statistics when they enter the viewport
- commodity ticker marquee
- travelling dots on the supply-chain diagram
- division icon micro-animations (amended 12 October 2026 by request: the icons are still and move only while their card is hovered or focused; see the homepage refinements in section 79)
- illustrated scene animations on division and commodity page headers (removed 13 October 2026 by request, with the scenes themselves; see the homepage refinements in section 79)
- location pin pulse
- Inside ETECH image zoom and automatic tab rotation (stops when the user interacts)
- workforce photo slider autoplay with progress bar
- scroll-linked journey timeline
- card hover lift and the top line on GCC vision cards

Rules:

- no unnecessary JavaScript animation loops
- preserve approved CSS/native animation behavior present in `etech-final.html`
- respect `prefers-reduced-motion`
- fix the known supply-chain SVG reduced-motion issue (see section 8)

---

# 8. REDUCED MOTION

The site MUST respect:

`prefers-reduced-motion: reduce`

When reduced motion is enabled:

- disable decorative reveal animations
- disable unnecessary transitions
- disable ticker/marquee motion
- disable animated timeline progression
- disable moving decorative elements
- disable animated SVG elements where applicable
- preserve usability and content

Known issue to fix: in `etech-final.html` the two dots travelling along the supply-chain path ("From mine and plantation to your port") use SVG `<animateMotion>`, which the CSS reduced-motion rules cannot stop, so they keep moving. In the React implementation these dots must be static when reduced motion is enabled.

Reduced motion must never make the site unusable.

---

# 9. RESPONSIVE DESIGN

The React implementation must preserve the responsive behavior of the finalized HTML.

Required testing widths include:

- 375px
- 390px
- 430px
- 768px
- 901px
- 1024px
- 1100px
- 1150px
- 1180px
- 1181px
- 1280px
- 1440px
- 1920px

Approved decision: use the exact responsive breakpoints found in `etech-final.html` rather than relying only on Tailwind's default breakpoints. The widths at which the final HTML changes layout are 520, 599/600, 640, 700, 760, 800, 860, 899/900/901, 1024, 1180 and 1279 px.

Implementation (Phase 2B): Tailwind's default breakpoints (`sm`, `md`, `lg`, `xl`, `2xl`) are removed. `src/styles/index.css` defines one variant for each media query of the final HTML, with the same query:

- `upto-N` means `max-width: N px`: `upto-1279`, `upto-1180`, `upto-1024`, `upto-900`, `upto-899`, `upto-860`, `upto-800`, `upto-700`, `upto-640`, `upto-600`, `upto-599`, `upto-520`
- `from-N` means `min-width: N px`: `from-700`, `from-760`, `from-900`, `from-901`, and `from-1280` (the complement of `upto-1279`)
- a range is written by combining two, for example `from-901:upto-1279:`

Use these variants and the ranges already documented here. Do not reintroduce generic breakpoints.

---

# 10. HEADER BREAKPOINT

The finalized HTML intentionally uses approximately:

`1180px`

as the desktop/mobile navigation transition.

This is important.

The previous implementation had issues around 901–1150px because the desktop header attempted to fit when it should have switched to the mobile navigation.

The React implementation must preserve the corrected behavior:

### Above 1180px

Use desktop navigation.

### At or below 1180px

Use the mobile navigation/burger menu.

The desktop navigation must NOT wrap.

The header must remain visually stable.

Do not reintroduce the previous wrapping problem.

---

# 11. DESIGN SYSTEM

Create a small, centralized design system using Tailwind theme variables and/or CSS variables where appropriate.

The approved ETECH palette is the token set defined in `etech-final.html`.

An earlier revision of this document listed different colours. They do not appear in the final HTML and must not be used.

Approved token naming: in the Tailwind theme the colours are named `page` (--bg), `heading` (--head), `copy` (--text) and `line` (--border), alongside `surface`, `sheet`, `accent`, `deep` and their variants. The values are always the final HTML values.

The final HTML tokens are:

```text
Page background (--bg):
#F7F9FC

Surface / tint (--surface):
#E2E4FF

Card face:
#FFFFFF

Sheet (--sheet):
#FBFBFF

Headings (--head):
#1D1E25

Body / secondary text (--text):
#50617A

Primary accent (--accent):
#533AFD

Accent hover (--accent-hover):
#4634DA

Accent soft, for use on deep backgrounds (--accent-soft):
#9386FE

Deep sections (--deep):
#0D1738

Deep secondary (--deep-2):
#181C56

Border (--border):
#E5EDF5

Hero heading gradient:
#533AFD → #3D5BF5 → #0C8FE0

The on-deep text, deep-line, shadow, radius, type-scale, spacing and motion tokens must also be taken from the :root blocks of etech-final.html.

Do not randomly introduce additional colors.

Subtle gradients are allowed where they already exist in the approved design.

Do not add gradients simply for decoration.

12. TYPOGRAPHY

The final approved design uses a modern clean typography system.

Use the typography defined by etech-final.html as the source of truth.

The implementation should preserve:

heading hierarchy
body text hierarchy
font weights
letter spacing
line heights
responsive typography

Do not arbitrarily replace the approved fonts.

If fonts are loaded remotely, use the current approved Google Fonts configuration from the final HTML.

13. GLOBAL LAYOUT

Create reusable layout components.

Expected structure:

react-router.config.ts
src/
├── components/
├── data/
├── hooks/
├── lib/
├── pages/
├── styles/
├── types/
├── entry.client.tsx
├── root.tsx
└── routes.ts

The exact folder organization may be improved if Claude discovers a better equivalent, but the codebase must remain organized by responsibility.

14. RECOMMENDED PROJECT STRUCTURE

Use approximately:

react-router.config.ts      (appDirectory: src, ssr: false, prerender paths from data)
vercel.json                 (static output directory, trailing-slash rule)

src/
├── root.tsx                (document shell: html, head, body; route module)
├── routes.ts               (the four routes)
├── entry.client.tsx        (hydrates the prerendered document)
│
├── components/
│   ├── seo/
│   │   └── PageMeta.tsx
│   │
│   ├── NotFound.tsx
│   │
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── SiteLayout.tsx
│   │
│   ├── navigation/
│   │   ├── DesktopNav.tsx
│   │   ├── MobileNav.tsx
│   │   └── MobileMenu.tsx
│   │
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── Container.tsx
│   │   ├── Badge.tsx
│   │   └── Card.tsx
│   │
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── CommodityTicker.tsx
│   │   ├── LatestNews.tsx
│   │   ├── SupplyChain.tsx
│   │   ├── BusinessLines.tsx
│   │   ├── CommoditiesPreview.tsx
│   │   ├── InsideEtech.tsx
│   │   ├── About.tsx
│   │   ├── Journey.tsx
│   │   ├── WhyChooseEtech.tsx
│   │   ├── Leadership.tsx
│   │   ├── TeamPreview.tsx
│   │   ├── GlobalNetwork.tsx
│   │   ├── GccVisions.tsx
│   │   ├── ClosingBanner.tsx
│   │   ├── MarketWatch.tsx
│   │   ├── LinkedInStrip.tsx
│   │   └── ContactCard.tsx
│   │
│   ├── divisions/
│   │   ├── DivisionCard.tsx
│   │   └── DivisionGrid.tsx
│   │
│   ├── commodities/
│   │   ├── CommodityCard.tsx
│   │   ├── CommodityGrid.tsx
│   │   ├── CommodityFilters.tsx
│   │   └── CommodityDetail.tsx
│   │
│   ├── team/
│   ├── locations/
│   ├── markets/
│   └── chat/
│       ├── ChatAssistant.tsx
│       ├── ChatMessage.tsx
│       └── ChatInput.tsx
│
├── assets/
│   ├── images.ts           (registry: image key → file, width, height)
│   └── images/             (hero, projects, commodities, workforce)
│
├── data/
│   ├── site.ts
│   ├── home.ts
│   ├── detailPages.ts
│   ├── divisions.ts
│   ├── commodities.ts
│   ├── commodityGroups.ts
│   ├── projects.ts
│   ├── journey.ts
│   ├── whyChoose.ts
│   ├── leadership.ts
│   ├── team.ts
│   ├── locations.ts
│   ├── visions.ts
│   ├── news.ts
│   ├── markets.ts
│   ├── insideEtech.ts
│   ├── faq.ts
│   └── validate.ts         (count and reference checks, run at build)
│
├── hooks/
│   ├── useLegacyHashRedirect.ts
│   ├── useMediaQuery.ts
│   └── useScrollReveal.ts
│
├── lib/
│   ├── paths.ts            (URL builders for the routes; the only path helper)
│   ├── seo.ts              (canonical URL and page title helpers)
│   ├── commodities.ts      (specification rows and licence text for a commodity)
│   └── utils.ts
│
├── pages/                  (route modules: default exports)
│   ├── HomePage.tsx
│   ├── DivisionPage.tsx
│   ├── CommodityPage.tsx
│   └── NotFoundPage.tsx
│
├── styles/
│   └── index.css
│
└── types/
    ├── common.ts
    ├── media.ts
    ├── site.ts
    ├── division.ts
    ├── commodity.ts
    ├── project.ts
    ├── journey.ts
    ├── team.ts
    ├── location.ts
    ├── vision.ts
    ├── news.ts
    ├── insideEtech.ts
    └── faq.ts

There is no index.html, main.tsx, App.tsx or router.tsx. The React Router Vite plugin uses src/root.tsx as the document, src/entry.client.tsx as the browser entry and src/routes.ts as the route configuration.

This structure is a guideline, not a rigid requirement.

Do not create empty folders or unnecessary abstractions.

15. COMPONENT ARCHITECTURE

Components must have clear responsibilities.

Avoid giant components.

For example:

DO NOT create:

App.tsx

containing the entire website.

DO NOT create:

HomePage.tsx

containing thousands of lines of JSX.

Instead:

HomePage
 ├── Hero
 ├── CommodityTicker
 ├── LatestNews
 ├── SupplyChain
 ├── BusinessLines
 ├── CommoditiesPreview
 ├── InsideEtech
 ├── About
 ├── Journey
 ├── WhyChooseEtech
 ├── Leadership
 ├── TeamPreview
 ├── GlobalNetwork
 ├── GccVisions
 ├── ClosingBanner
 ├── MarketWatch
 ├── LinkedInStrip
 └── ContactCard

HOMEPAGE SECTIONS — EXACT APPROVED ORDER

The homepage must preserve all 18 sections of etech-final.html in this exact order. Do not omit, merge or reorder them.

 1. Hero
 2. Commodity ticker
 3. Latest news and updates                      (#latest)
 4. From mine and plantation to your port        (#how — supply-chain diagram and counters)
 5. One group, six lines of business             (#divisions)
 6. Commodities we supply                        (#commodities — filter and 39 cards)
 7. Inside ETECH                                 (#explore — tabs)
 8. About: 1989, motto and aim                   (#about)
 9. Our journey                                  (#journey — timeline)
10. Why choose ETECH?                            (#why)
11. Leadership messages                          (#leadership)
12. Core professional team                       (#team)
13. We operate across a global network           (#locations)
14. Aligned with the Gulf's national visions     (#visions)
15. Closing banner: Have an industrial challenge? (#getintouch)
16. Market watch                                 (#markets)
17. Follow ETECH on LinkedIn                     (#linkedin)
18. Contact card                                 (#contact)

The footer follows the last section.

Components should be reusable where reuse is meaningful.

Do not abstract every tiny HTML element into a component.

16. DATA-DRIVEN ARCHITECTURE

This is one of the most important requirements.

Content must be separated from presentation.

Do not hardcode repeated content into repeated JSX.

For example, divisions should live in:

src/data/divisions.ts

Commodities should live in:

src/data/commodities.ts

Team members should live in:

src/data/team.ts

Locations should live in:

src/data/locations.ts

Projects should live in:

src/data/projects.ts

FAQ entries should live in:

src/data/faq.ts

APPROVED DATA MODULES

The full list of data modules is in the Phase 2B entry of section 79. Two of them hold copy that is not a repeated list, and are approved data modules:

src/data/home.ts          one-off copy of the homepage sections (hero, about, contact and so on)
src/data/detailPages.ts   fixed copy of the division and commodity page templates

Components must take this text from the data modules, not restate it in JSX.

BUILD-TIME VALIDATION

validateData() in src/data/validate.ts is approved and must be kept. It runs when the React Router config loads, so it stops the build and the dev server when an item count is wrong, a slug is duplicated or a reference is broken. It never changes the data.

17. TYPESCRIPT DATA TYPES

Create proper TypeScript interfaces/types.

For example:

export interface Division {
  id: string;
  slug: string;
  name: string;
  description: string;
  image?: string;
  commodities?: string[];
}

The exact shape must be determined by the actual content in etech-final.html.

The example above is illustrative. The approved field structure is the one in src/types: the slug is the stable identifier of a division or commodity, so there is no separate id field.

Do not invent properties without a reason.

Do not use:

any

unless there is a genuine unavoidable reason.

Prefer:

interfaces
type aliases
discriminated unions where useful
typed function parameters
typed route params
typed component props
18. SIX DIVISIONS

The finalized website contains 6 divisions.

All six must be represented in typed data.

Do not duplicate division content across multiple components.

Division cards and division detail pages must consume the same source data.

Example conceptual architecture:

divisions.ts
      ↓
DivisionGrid
      ↓
DivisionCard

divisions.ts
      ↓
DivisionPage

This ensures a content change happens in one place.

19. THIRTY-NINE COMMODITIES

The finalized website contains 39 commodities.

All 39 must be migrated.

Do not omit any.

Do not combine commodities simply to make the code smaller.

Create typed commodity data.

Each commodity should have a stable:

id
slug
name
category
description
image

plus any additional fields actually required by the final HTML.

Approved field structure (Phase 2B): the slug acts as the stable identifier, so there is no separate id. The category is the group field. The description is held as summary (card text) and use (page lead). Photographs are held as a photos list, present only on the commodities that have photographs in etech-final.html; there is no single image field.

20. COMMODITY CATEGORIES

Preserve the finalized category/filter behavior.

Use the exact category labels from etech-final.html, in this order:

All
Minerals & Ores
Agri Commodities
Fishery & Meat
Petroleum & Refinery Products
Fertilisers
Construction Materials
Recycled & Biomass

Do not shorten or rename these labels.

Filtering should be implemented with React state.

Do not implement filtering by manually hiding DOM elements.

The filter state should be derived from typed commodity data.

21. ROUTING

Replace the original hash-based routing with proper routes.

The application has exactly these routes:

/
/divisions/:slug
/commodities/:slug
*

This gives 46 meaningful URLs: the homepage, 6 division pages and 39 commodity pages. All 46 are prerendered at build time.

The routes are declared in src/routes.ts (React Router route configuration). The wildcard route is the NotFound route and is not one of the 46.

Do NOT invent standalone pages or routes for:

Divisions index (What we do)
Commodities index
About
Leadership
Team
Locations
GCC Visions
Markets
Contact

These are homepage sections in etech-final.html, not pages.

The header navigation items link to those homepage sections as in-page anchors, exactly as in the final HTML:

#divisions
#commodities
#about
#leadership
#team
#locations
#visions
#markets
#contact

From a division or commodity page, a navigation item must go to the homepage and scroll to that section.

An unknown division or commodity slug must render NotFoundPage.

Use a proper 404 route:

*

rendering:

NotFoundPage

Invalid URLs must NOT silently render the homepage.

22. URL SLUGS

Use stable, readable slugs.

Use the actual slugs extracted from etech-final.html. The examples in an earlier revision of this document (such as /divisions/trading) were illustrative and must not be used.

Store each slug explicitly in the typed data so that it stays stable if a name changes later.

Division slugs (6):

commodity-trading
construction-real-estate
workforce-solutions
it-healthcare
recycling-biomass
other-services

Commodity slugs (39):

Minerals & Ores (9)
silica-sand
manganese-ore
chrome-ore
iron-ore-62
iron-ore-concentrate
copper-concentrate
rutile
limestone
barite-api-grade

Agri Commodities (12)
palm-oil-products
rice
maize
soybean
wheat
lentils
spices
cardamom
coconut-coconut-oil
jaggery
coffee-beans
cocoa-beans

Fishery & Meat (2)
fish-seafood
halal-meat-poultry

Petroleum & Refinery Products (9)
diesel-en590-10-ppm
jet-fuel-a1
lng-lpg
fuel-oil-d6
bitumen
petroleum-coke
base-oil
sludge-oil
granular-sulphur

Fertilisers (1)
urea-46-granular

Construction Materials (4)
aggregates-armour-rock
marine-sand
manufactured-processed-sand
shuttering-plywood

Recycled & Biomass (2)
scrap-metals
wood-pellets

Example URLs:

/divisions/commodity-trading
/divisions/construction-real-estate
/commodities/silica-sand
/commodities/manganese-ore

Do not create inconsistent slug formats.

23. NAVIGATION

Navigation must be implemented using React Router.

Do not use:

window.location.hash

for application routing.

Internal navigation should use:

<Link />

or:

<NavLink />

Use normal anchor tags for genuine external links.

24. HEADER

The header must preserve the approved final design.

Requirements:

72px desktop header height
desktop navigation above the 1180px breakpoint
mobile navigation at or below 1180px
no desktop navigation wrapping
stable spacing
Request Quote CTA preserved
Contact preserved
mobile menu accessible
Escape closes mobile menu
clicking a navigation link closes the mobile menu
keyboard navigation must work

Do not redesign the header.

25. HERO

The hero is LOCKED.

Preserve:

white background
dark navy typography
approved heading
gradient treatment on that build economies.
35 years of experience text
static globe visual
ETECH hubs
trade routes
approved layout
responsive behavior

Do NOT:

recreate a Three.js globe
add WebGL
animate the globe continuously
replace the globe with a different visual
add a circular 35 YEARS badge

The final design uses the static globe direction.

26. LATEST NEWS

Preserve the final 3-column layout.

Desktop:

3 equal columns

Maintain the approved subtle hover behavior.

Do not convert it back into a carousel.

Approved decision (Phase 4C): below 760px the section follows etech-final.html exactly. The three cards sit in one row that the visitor scrolls sideways, with scroll snap; each card is 82% of the row wide, up to 360px. This is native scrolling: there are no arrows, dots, autoplay or JavaScript, so it is not a carousel. From 760px up the cards are three equal columns.

27. SIX LINES OF BUSINESS

The final design uses a 3-column grid.

Do not reintroduce the old slider/carousel.

Create reusable business-line/division cards.

28. COMMODITIES SECTION

Preserve the final design:

no unwanted gradient
white filter buttons/cards
approved filter behavior
approved card layout
no obsolete Silica Sand/Manganese image treatment from earlier rejected design variations
use the actual final HTML as the content authority

Do not restore removed visual treatments from earlier iterations.

29. INSIDE ETECH

Preserve the approved design.

The overlay gradient must stretch edge-to-edge horizontally as in the final design.

If the final HTML uses tabs, implement them with React state.

Do not use manual DOM manipulation.

30. OUR JOURNEY

Preserve the approved timeline.

Requirements:

correct milestone order
progressive timeline highlighting where present
subtle scroll behavior
reduced-motion support
accessible content
no excessive animation

The timeline should be data-driven.

Example:

journey milestones
        ↓
Journey component
        ↓
JourneyMilestone components
31. WHY CHOOSE ETECH

Preserve the final approved visual treatment.

Do not restore earlier gradients that were deliberately removed.

If the final design uses a solid deep navy treatment, preserve it.

32. CORE PROFESSIONAL TEAM

Preserve the final 4-column desktop layout.

Team members must come from typed data.

Do not duplicate team member markup.

Team and leadership avatars are initials-based in the final HTML. This is the approved visual (see section 40).

33. GLOBAL NETWORK

Preserve the final 3-column layout.

Locations must be data-driven.

34. GCC NATIONAL VISIONS

Preserve the final 3-column layout.

Cards must be sorted ascending by year.

Sorting should preferably happen in the data layer or through a deterministic derived array rather than hardcoded visual order.

35. MARKETS / MARKET WATCH

Preserve the final 3-column layout.

External article links must remain external.

External links should use:

target="_blank"
rel="noopener noreferrer"

where appropriate.

36. CONTACT / REQUEST QUOTE

The final HTML currently uses email-based enquiry behavior.

Do not invent a backend.

Do not create an API.

Do not create a database.

If the final implementation uses:

mailto:

preserve that behavior.

If a quote action pre-fills the email subject based on the selected commodity, preserve that behavior.

37. FAQ / ASK ETECH ASSISTANT

The existing assistant is NOT a real AI backend.

It is a local FAQ/keyword-based assistant.

Do not describe it as an AI model unless an actual AI backend is added later.

Rebuild it as a React component.

Recommended architecture:

ChatAssistant
 ├── ChatMessage
 ├── ChatInput
 └── FAQ matching logic

FAQ data should live in:

src/data/faq.ts

Approved scope of src/data/faq.ts: the 25 FAQ entries, the assistant's greeting and its fallback response, exactly as in etech-final.html. Nothing else.

The chat interface labels (button text, field labels, placeholders, status messages) are not in faq.ts. They are implemented in the chat phase, taken exactly from etech-final.html.

Use React state for:

open/closed state
messages
input
validation
follow-up form state

Do not manipulate the DOM manually.

38. CHAT ASSISTANT BEHAVIOR

Preserve:

open chat
close chat
Escape to close
typing
keyword/FAQ responses
follow-up form
validation
valid email action
reopening the assistant

Fix the known issue where duplicate follow-up forms can appear after later unrecognized questions.

The React implementation should ensure only the intended follow-up form is rendered.

39. ACCESSIBILITY

Accessibility is a first-class requirement.

Use:

semantic HTML
meaningful headings
proper heading hierarchy
buttons for actions
links for navigation
labels for form fields
aria-label where necessary
aria-expanded for menus
aria-controls where appropriate
keyboard-accessible interactions
visible focus states
sufficient contrast
alt text for meaningful images
empty alt text for decorative images

Do not use clickable <div> elements when a button or link is appropriate.

40. IMAGE HANDLING

Images must be treated as real assets.

Do not embed large images as base64 data URLs.

Use an organized asset structure.

ASSET STRATEGY (established in Phase 2B)

Images are imported through Vite, not served from public/, so every file is fingerprinted and a missing file fails the build.

src/assets/
├── images.ts               (registry: image key → file, width, height)
└── images/
    ├── hero/globe.svg      (the static globe)
    ├── projects/           (9 photographs)
    ├── commodities/        (6 photographs: silica sand, manganese ore)
    └── workforce/          (5 photographs)

The 20 photographs and the globe were extracted byte for byte from the base64 data in etech-final.html. They are not re-encoded.

Content data refers to a photograph by its key (for example image: 'dammam'). Components resolve the key through src/assets/images.ts. Data modules never import image files, so they stay plain content.

There are no team or location photographs in the approved design, so there are no team/ or locations/ image folders.

Inline SVG from the final HTML is not saved as image files. It becomes React components in the visual migration, because its parts are animated and recoloured through CSS:

7 illustrated header scenes (ship, crane, rig, pulse, gears, mine, offshore)
6 division icons
the supply-chain diagram
the LinkedIn glyph (brand mark: kept as custom SVG)

Generic interface icons use Lucide where an equivalent exists. The menu (burger) icon is not one of them: Lucide's menu icon is a visibly different shape, so the exact icon from etech-final.html is kept as a small React component (src/components/icons/MenuIcon.tsx).

The font is Inter, loaded from Google Fonts in src/root.tsx with the same request as the final HTML. There are no local font files.

There is no favicon and no og:image (section 78).

Claude must inspect the final HTML and determine the actual image sources before migration.

Do not invent replacement images.

Do not use placeholder images in the final implementation.

The following are approved source visuals, NOT placeholders, and must be preserved as they appear in etech-final.html:

initials-based avatars for team members
initials-based avatars for leadership messages
illustrated tiles on project cards that have no photograph

Do not replace them with photographs, stock images or generic icons.

41. SEO

Because this is a public corporate website, preserve important SEO behavior.

Implement:

page titles
meta descriptions
canonical URLs where appropriate
Open Graph metadata
Twitter metadata where appropriate
semantic HTML
meaningful URLs

If a lightweight metadata library is needed, use one appropriate to the current React ecosystem.

Do not add a large SEO framework.

STATIC PRERENDERING — DECISION RECORDED (APPROVED)

The site has 46 meaningful URLs (homepage, 6 divisions, 39 commodities). Each needs its own page metadata and social preview.

A client-only SPA serves the same HTML head for every URL to crawlers and link-preview services that do not run JavaScript.

Decision: the 46 URLs are prerendered to static HTML at build time using the React Router Vite plugin with ssr: false (see section 5). There is no runtime SSR.

How metadata is produced:

each route renders its own title, description and canonical link with React's built-in <title>, <meta> and <link> elements, through one shared PageMeta component
because React Router renders the whole document at build time, these tags are written into the <head> of each generated HTML file
the document shell (src/root.tsx) must not contain its own <title> or description, so that pages never produce duplicates
site-wide head content (charset, viewport, fonts, Organization structured data) lives in src/root.tsx
the NotFound page uses a 404 title and a robots noindex tag, and has no canonical link

Metadata text for division and commodity pages is migrated from etech-final.html in the content phases. Until then those pages carry clearly marked placeholder metadata. Do not invent marketing copy.

Open Graph and Twitter metadata per page is completed in the SEO and accessibility phase (section 79).

Effect on the router setup and Vercel configuration: see sections 5 and 54.

42. STRUCTURED DATA

Inspect the structured data in etech-final.html.

If Organization schema exists, preserve its meaningful information in the React application.

Do not invent organization facts.

Do not change business information without evidence from the source.

43. GLOBAL CONTAINER

Create one consistent container system.

The final design uses a consistent site-wide content width.

Do not manually invent different max widths for every section.

A shared container utility/component may be created.

Example conceptual usage:

<Container>
  ...
</Container>
44. SPACING SYSTEM

Preserve the approved spacing rhythm.

Avoid random values throughout components.

Use a consistent spacing scale.

Cards should generally use:

24px gaps on desktop
20px on tablet
16px on mobile

Typical card padding:

28px
24px for compact cards

Typical border radius:

14px cards
20px large panels
fully rounded pills

These are guidelines derived from the final design and should be verified against etech-final.html.

45. CARD SYSTEM

Cards should share a consistent interaction pattern.

Approved general behavior:

subtle lift
soft shadow
faint violet border
240ms transition

Maximum hover lift:

4px

Large feature panels should generally NOT lift.

Do not make every section animate on hover.

Approved decisions:

Card transitions are 240ms, as specified.
Hover effects apply only on devices that can hover. This is Tailwind's default behavior and it is kept: hover effects are not forced onto touch devices, even though etech-final.html applies them everywhere.

46. BUTTON SYSTEM

Create consistent button variants.

For example:

Primary
Secondary
Ghost
Link

The exact styling must match the final HTML.

The primary CTA uses the approved violet treatment.

Do not create dozens of button variants.

Approved decisions:

Button transitions are 200ms, because that matches etech-final.html. The 240ms duration in section 45 applies to cards, not to buttons.
The hover rule in section 45 (hover-capable devices only) applies to buttons as well.

47. CSS ARCHITECTURE

Tailwind should handle the majority of styling.

Avoid recreating the original 900+ rule stylesheet.

Do not blindly paste the original <style> block into the React application.

Do not preserve duplicate selectors.

Use custom CSS only when:

a complex visual effect genuinely needs it
a reusable design token is clearer in CSS
an SVG/globe effect needs it
browser-specific behavior requires it
Tailwind would make the implementation substantially less maintainable

Keep custom CSS small and intentional.

48. NO INLINE STYLE SPRAWL

Avoid excessive:

style={{ ... }}

Use Tailwind classes or shared CSS.

Inline styles are acceptable for genuinely dynamic values.

49. NO MANUAL DOM MANIPULATION

Avoid patterns such as:

document.querySelector(...)
document.querySelectorAll(...)
element.innerHTML = ...
element.classList.add(...)

React state, props, refs, and effects should control UI.

Direct DOM APIs are allowed only where browser APIs genuinely require them, such as:

IntersectionObserver
focus management
measuring an element
browser APIs
50. NO LEGACY HASH ROUTING

Do not migrate:

#/
#/division/...
#/commodity/...

as the primary application architecture.

Use proper routes.

LEGACY HASH URL COMPATIBILITY

Old links to the single-file site may still exist. Where technically practical, redirect legacy hash URLs to the new clean routes:

#/division/<slug>   →  /divisions/<slug>
#/commodity/<slug>  →  /commodities/<slug>
#/                  →  /

The redirect should replace the history entry so the Back button is not trapped.

A legacy hash with an unknown slug should end on NotFoundPage.

Reading the URL hash for this one-time redirect, and for scrolling to homepage section anchors (see section 21), is permitted. It is not hash routing.

51. NOT FOUND PAGE

Create a real:

NotFoundPage

Invalid routes must produce a helpful 404 page.

Do not silently display the homepage for unknown routes.

52. HOME PAGE STATE

The homepage should not retain stale state from previous detail pages.

For example:

commodity search/filter state
selected commodity
selected division
search descriptions

must not leak into unrelated routes.

Route state should be isolated appropriately.

53. ASSET PATHS

Do not use fragile relative paths copied blindly from the HTML.

Use Vite-compatible asset imports or public assets.

All production asset paths must work after:

npm run build

and on Vercel.

54. STATIC DEPLOYMENT

The site is deployed as static files: prerendered HTML for the 46 known URLs plus the client assets. There is no runtime server, no custom server and no runtime SSR.

The application must build successfully using:

npm run build

The static output directory is:

build/client

The production output must work on Vercel.

Direct navigation to routes such as:

/commodities/silica-sand

must not result in a production 404 merely because the user refreshed the page. Each known URL has its own generated HTML file.

CANONICAL URL CONVENTION

One convention is used everywhere: NO trailing slash, except the homepage.

https://www.etechglobe.com/
https://www.etechglobe.com/divisions/<slug>
https://www.etechglobe.com/commodities/<slug>

This applies to router paths, prerender paths, internal links, canonical metadata and the Vercel configuration (trailingSlash: false, so a URL with a trailing slash redirects to the URL without one).

The site origin comes from the canonical URL in etech-final.html.

404 HANDLING

The wildcard route (*) renders NotFoundPage. An unknown division or commodity slug renders the same NotFound content.

A static host has no router. For unknown URLs Vercel serves the file 404.html from the output root, with HTTP status 404. The build therefore writes build/client/404.html, a static page that contains the NotFound content and then hydrates into the application at whatever URL was requested.

How 404.html is produced (proven in Phase 2A by inspecting the build output):

React Router does not prerender the wildcard route. With ssr: false it writes one extra document, __spa-fallback.html, that renders only the root route and can start the application at any URL.
Because all 46 known URLs are prerendered, that document is only ever needed for unknown URLs.
The root route's HydrateFallback renders the NotFound content, so the document is a complete static NotFound page (404 title, robots noindex, no canonical) even before JavaScript runs.
The buildEnd hook in react-router.config.ts renames it to build/client/404.html.

Unknown URLs must not be rewritten to a page that returns HTTP 200.

build/server is a by-product of the build (it is used to prerender) and is not deployed.

VERCEL CONFIGURATION

Keep vercel.json to the minimum required: deploy as plain static output (no framework adapter), output directory build/client, trailingSlash false, and one permanent redirect from /index.html to / so that the homepage has a single URL.

TO VERIFY ON A VERCEL PREVIEW DEPLOYMENT

These cannot be proven locally and must be checked on the first preview deployment:

an unknown URL returns HTTP status 404 and shows the NotFound page
/divisions/<slug> and /commodities/<slug> are served without a trailing slash
a URL with a trailing slash redirects to the URL without one
/index.html redirects permanently to /
the project builds as plain static output with the settings in vercel.json

55. PERFORMANCE

Keep the application lightweight.

Requirements:

no unnecessary dependencies
no unnecessary JavaScript animation loops
preserve approved CSS/native animation behavior present in etech-final.html
respect prefers-reduced-motion
fix the known supply-chain SVG reduced-motion issue
no Three.js
no WebGL
no large runtime libraries without justification
lazy-load heavy route components if useful
optimize images where practical
avoid unnecessary re-renders
avoid huge monolithic components

Do not prematurely optimize everything.

Prioritize clean architecture first.

56. CODE STYLE

Use:

TypeScript
functional React components
named components (named exports)
explicit props
meaningful variable names
small focused functions
predictable file names

Avoid:

any
magic strings scattered throughout the code
duplicated data
duplicated JSX
deeply nested conditionals
giant components
unexplained abstractions

Exception: route modules (src/root.tsx and the files in src/pages/ referenced from src/routes.ts) use default exports, as React Router framework conventions require. This is intentional and applies to route modules only. Ordinary components keep named exports.

57. ERROR HANDLING

The application should fail gracefully.

Examples:

invalid commodity slug
invalid division slug
missing image
invalid navigation state
unexpected FAQ input

Do not allow an invalid route to crash the entire application.

58. TESTING REQUIREMENTS

After implementation, Claude must test:

Build
npm run build
Development server
npm run dev
TypeScript

Use the project's TypeScript check.

Lint
npm run lint

if configured.

Browser testing

Test:

homepage
all 6 divisions
all 39 commodities
navigation
mobile navigation
filters
quote actions
contact actions
FAQ assistant
invalid routes
responsive layouts
59. REQUIRED RESPONSIVE TESTING

At minimum test:

375
390
430
768
901
1024
1100
1150
1180
1181
1280
1440
1920

Check:

no horizontal overflow
no header wrapping
no overlapping content
readable typography
usable buttons
usable navigation
usable chat
correct grid changes
correct spacing
60. BROWSER CONSOLE

The final application should have:

no uncaught JavaScript errors
no React warnings
no broken asset requests
no invalid nesting warnings
no hydration errors
no missing key warnings
61. REACT KEYS

Every mapped list must have stable keys.

Do not use array indexes as keys when stable IDs exist.

Bad:

items.map((item, index) => (
  <Card key={index} />
))

Preferred:

items.map((item) => (
  <Card key={item.id} />
))
62. COMPONENT PROPS

Props should be typed.

Example:

interface CommodityCardProps {
  commodity: Commodity;
}

Avoid untyped props.

63. HOOKS

Create custom hooks only when they encapsulate meaningful reusable behavior.

Potential hooks:

useScrollReveal
useMediaQuery

Do not create a hook for every trivial operation.

64. SCROLL REVEAL

If the final design uses scroll reveal:

Implement a lightweight React/browser-native solution.

Preferred approach:

IntersectionObserver

Requirements:

run once where appropriate
do not cause layout shifts
respect reduced motion
do not create hundreds of observers unnecessarily
65. SMOOTH SCROLLING

If the final design uses smooth scrolling:

Preserve it where appropriate.

But respect:

prefers-reduced-motion

Do not force smooth scrolling for users who have disabled motion.

66. EXTERNAL LINKS

External links should be clearly treated as external.

Use:

target="_blank"
rel="noopener noreferrer"

when opening in a new tab is part of the approved behavior.

Do not alter external URLs without evidence.

67. EMAIL LINKS

Preserve approved email addresses from the source.

Do not invent new email addresses.

If using mailto:, construct them safely.

Quote/product context should be encoded correctly.

68. CONTENT MIGRATION

Claude must extract content from etech-final.html.

Do NOT rewrite marketing copy during migration.

Do NOT shorten content.

Do NOT invent content.

Do NOT change company facts.

Do NOT "improve" copy unless explicitly instructed later.

The first migration must be content-preserving.

Preserve the approved HTML content exactly, including wording that may look inconsistent or out of date. Do not correct it during this migration.

FUTURE CONTENT-REVIEW ITEMS

The Phase 0 inspection noted the following. They are recorded for a later content review only. Do NOT change them during the migration.

"35 years of experience" / "For 35 years — since 1989" (hero and FAQ): the arithmetic may need updating.
The FAQ answer about updates refers to a newsletter sign-up on the website; the site has no newsletter sign-up.
The FAQ answer on palm oil says "Five grades"; the palm oil product page lists seven.
The team name "YHee Kyun Lee" may contain a typo.

69. DESIGN MIGRATION

Do not redesign during migration.

The objective of Phase 1 is:

Same approved design
+
Better architecture

not:

New design
+
New architecture
70. REJECTED DESIGN HISTORY

There were earlier design directions that are no longer approved.

Do NOT restore:

dark luxury navy/brass direction
warm white editorial direction
forest/sand Awwwards direction
rejected Claude restyles
unnecessary gradients
carousel versions of sections
circular 35 YEARS badge
animated 3D globe

Only the final approved HTML matters.

71. HERO DESIGN IS LOCKED

This deserves explicit emphasis.

The hero is approved and must not be changed.

Preserve:

white background
+
dark navy typography
+
"that build economies." gradient
+
"35 years of experience"
+
static globe
+
ETECH hubs/trade routes

Do not redesign this section.

72. HEADER DESIGN IS LOCKED

The final header behavior is also approved.

Preserve:

desktop > 1180px
mobile <= 1180px

Desktop navigation must not wrap.

Do not move the breakpoint unless a real production problem is demonstrated.

73. NO THREE.JS

The final design intentionally removed Three.js.

Do not install it.

Do not migrate the old 3D globe implementation.

Use the final static globe asset/visual.

74. NO CAROUSEL REINTRODUCTION

The final design intentionally removed the old divisions/business carousel ("One group, six lines of business"). It is now a static grid.

Do NOT reintroduce it.

Do not migrate its leftover markup or script (carousel role attributes, previous/next buttons, dots, autoplay timer).

APPROVED EXCEPTION — WORKFORCE PHOTO SLIDER

The "Our people at work" photo slider on the Workforce Solutions division page is approved and MUST be preserved.

Preserve its behavior from etech-final.html:

previous / next buttons
dots
autoplay with progress bar
pause on hover, focus and touch
captions
no autoplay and no progress bar under reduced motion

75. NO OLD DEAD CODE

Do not migrate known obsolete code such as:

unused divisions-carousel timers
hidden divisions-carousel controls
obsolete 3D globe code
old badge styles
unused commodity thumbnail styles
dead CSS
duplicate selectors
old hash-routing helpers

The new application should contain only code that is actually used.

76. SECURITY / CSP

Do not blindly copy the old HTML Content Security Policy hashes.

The old single-file CSP was designed for that HTML implementation.

The React/Vite application will have a different asset/build architecture.

Security headers should be handled appropriately for the final deployment environment.

Do not create fake CSP hashes.

77. HTML DOCUMENT HEAD

The React application must have an appropriate document shell:

src/root.tsx

(the React Router Vite plugin uses this instead of index.html)

with:

charset
viewport
favicon if available
base metadata
font loading if required

Page-specific metadata is rendered by each route through the shared PageMeta component and is written into the generated HTML at build time (see section 41).

78. FAVICON / BRAND ASSETS

Inspect etech-final.html for existing brand assets.

Preserve:

logo
favicon
relevant brand SVGs
approved icons

Do not replace them with generic placeholders.

Approved decision: etech-final.html contains no favicon and no og:image. Do not invent either. Approved assets will be added later if supplied.

79. PHASED IMPLEMENTATION

Do NOT attempt the entire migration as one giant uncontrolled change.

Work in phases.

APPROVED PHASE SEQUENCE

Phase 0     Inspection                                                  completed
Phase 1     React/Vite foundation                                       completed, approved
Phase 2A    React Router Vite plugin + static prerendering              completed, approved
Phase 2B    Data model + assets + design tokens + shared foundation     completed, approved
Phase 3     Header + Footer + global site shell
Phase 4+    Visual migration of the homepage sections and detail pages, followed by interaction/animation and final validation phases as appropriate

Each phase ends with a report and a review. Do not start the next phase until the current one is approved.

PHASE 0 — INSPECTION

Before modifying the project:

Inspect:

etech-final.html

Completely.

Identify:

all pages
all sections
all divisions
all commodities
all team members
all locations
all projects
all GCC visions
all news
all FAQ entries
all images
all external links
all email links
all interactive behavior
all animations
all responsive breakpoints

Then report findings.

Do not start implementation until the architecture is understood.

PHASE 1 — REACT/VITE FOUNDATION (COMPLETED)

Create:

React
TypeScript
Vite
Tailwind CSS
React Router
ESLint
Prettier
Lucide React

Verify:

npm install
npm run dev
npm run build

Do not migrate the entire website yet.

PHASE 2 — APPLICATION ARCHITECTURE

The static prerendering decision required by section 41 has been made and recorded: React Router Vite plugin, ssr: false, build-time prerendering.

Phase 2 was split in two. Both parts are completed and approved.

PHASE 2A — REACT ROUTER VITE PLUGIN + STATIC PRERENDERING (COMPLETED)

Convert the Phase 1 foundation to the approved architecture:

index.html           →  src/root.tsx
src/main.tsx         →  src/entry.client.tsx
src/app/App.tsx      →  removed
src/app/router.tsx   →  src/routes.ts
add react-router.config.ts (appDirectory: src, ssr: false, prerender)

Create:

the four routes: /, /divisions/:slug, /commodities/:slug, *
the prerender path list, generated from the typed data (slugs only at this stage)
the page metadata foundation (PageMeta: title, description, canonical)
NotFound handling for the wildcard route and for unknown slugs
the minimum Vercel configuration
legacy hash URL redirects (section 50)

Remove the obsolete Phase 1 routing files, entry files, dependencies and configuration.

Verify, by inspecting the build output and not only the command result:

all 46 URLs are prerendered to their own HTML file
each generated file contains its route-specific content and metadata
what is generated for the 404 route
typecheck, lint, Prettier check and production build all pass

Do not build site sections, components, animations, data or detailed styling in this phase.

PHASE 2B — DATA MODEL + ASSETS + DESIGN TOKENS + SHARED FOUNDATION (COMPLETED)

This phase covers the data extraction that an earlier revision listed as a separate phase, and the shared foundation. It does not include any visual migration.

Extract all content from etech-final.html into typed data modules, exactly as approved:

site.ts            site facts, navigation, footer, homepage metadata, structured data
home.ts            one-off copy of the homepage sections
detailPages.ts     fixed copy of the division and commodity page templates
divisions.ts       6
commodities.ts     39
commodityGroups.ts 7
projects.ts        13
journey.ts         8
whyChoose.ts       8
leadership.ts      2
team.ts            7
locations.ts       5
visions.ts         5
news.ts            3
markets.ts         3
insideEtech.ts     4
faq.ts             25 (plus the assistant's greeting and fallback reply)

These counts are checked by validateData() in src/data/validate.ts, which runs when the React Router config loads. A wrong count, a duplicate slug or a broken reference stops the build and the dev server. Validation never changes the data.

divisions.ts and commodities.ts remain the single source of truth for route slugs.

Also establish:

focused TypeScript types in src/types
the asset strategy and extracted images (section 40)
the design tokens and the exact breakpoints (sections 9 and 11)
shared primitives that are needed now: Container, Section, ButtonLink
helpers: findDivision, findCommodity, findCommodityGroup, divisionPath, commodityPath, getSpecRows, getLicenceNote

Division and commodity pages take their title and description from the data, as etech-final.html does: the name followed by " — ETECH Group", and the division lead or commodity use.

Not in this phase: Header, Footer, hero, homepage sections, filters, sliders, tabs, chat UI, animation. The chat interface labels are implemented in the chat phase (section 37).

PHASE 3 — HEADER + FOOTER + GLOBAL SITE SHELL

Build the parts of the site that every page shares, using the data, tokens and primitives from Phase 2B.

Implement:

Header (sections 10 and 24): logo, desktop navigation, Request a quote
mobile navigation and mobile menu at or below 1180px
Footer
the global site shell that places the Header and Footer around every route, including the NotFound page
navigation to the homepage section anchors, from the homepage and from division and commodity pages
scroll position handling on route changes

Navigation labels, the quote action and the footer text come from src/data/site.ts.

Test:

desktop
tablet
mobile
keyboard
Escape closes the mobile menu
a navigation link closes the mobile menu
route changes
no header wrapping at 901, 1024, 1100, 1150, 1180 and 1181px

Do not build the hero or any homepage section in this phase.

Implementation notes (Phase 3):

Files: src/components/layout/Header.tsx, Footer.tsx and SiteLayout.tsx; src/components/icons; src/hooks/useScrolledPast.ts, useHydrated.ts and useCurrentYear.ts. SiteLayout is used in src/root.tsx, around every route and around the static 404 page.

Header state: transparent at the top of the homepage; solid after 40px of scroll, on every other page, and while the mobile menu is open.

Mobile menu: the 26px gap between menu items in etech-final.html is preserved. The menu panel is limited to the height of the screen and scrolls inside itself, because at its approved size it is taller than a small phone screen and the last links would otherwise be unreachable. The panel looks the same wherever it fits.

Section anchors: navigation links go to "/#<section id>" using sectionPath() in src/lib/paths.ts, from any page. The section ids are those of etech-final.html. Until each homepage section is built, src/pages/HomePage.tsx renders a temporary anchor (the id and the approved heading) for it; each is replaced by the real section in the visual migration.

Smooth scrolling: set in CSS on the html element, as in etech-final.html, and not applied when the visitor prefers reduced motion. It is switched on once the app is running, so that restoring the scroll position on a page reload stays instant.

Fixed header offset: anchor targets stop 72px below the top (scroll-padding-top), as in etech-final.html.

Footer year: the prerendered HTML contains the build year; the browser then shows its own current year.

The page shells have 72px of top padding so that their content is not hidden under the fixed header. The hero and the detail page header band replace this when they are built.

PHASE 4 AND LATER — VISUAL MIGRATION, INTERACTION AND FINAL VALIDATION

The work below follows Phase 3 in this order. How it is divided into numbered phases is confirmed at each review; the content of each part is fixed.

NotFound handling for unknown routes and unknown slugs, and the legacy hash URL redirects (section 50), were completed in Phase 2A and are not repeated here.

HOMEPAGE SECTIONS

Implement the homepage section by section.

Build all 18 sections in the exact approved order listed in section 15:

Hero
Commodity ticker
Latest news
From mine and plantation to your port (supply chain and counters)
Lines of Business
Commodities (including the category filter)
Inside ETECH
About
Journey
Why Choose ETECH
Leadership messages
Team
Global Network
GCC Visions
Closing banner
Market watch
LinkedIn strip
Contact card

Compare each section with etech-final.html.

Do not move to the next major section until the previous section is visually correct.

Progress:

Phase 4A — Hero: implemented in src/components/home/Hero.tsx. Compared with etech-final.html in a browser at 19 viewport sizes: element positions, sizes and typography are identical, and screenshots at 390, 768, 1024, 1440 and 1920px wide match pixel for pixel.

Hero implementation notes:

The globe is the extracted static src/assets/images/hero/globe.svg, shown as an image. There is no canvas, WebGL, animation or library.

Hero globe enhancement (12 October 2026, by request; an isolated change). This replaces the line above and amends "static globe visual", "do not animate the globe continuously" and "do not replace the globe with a different visual" in section 25 for this one element. The hero's text, buttons, legend, layout, sizes and breakpoints are unchanged.

What it is now: an inline SVG drawn by src/components/illustrations/HeroGlobe.tsx from geometry in src/components/illustrations/heroGlobeGeometry.ts. Hero.tsx renders it in the same square, hidden from assistive technology as before (the legend and the hero text say what it shows). The extracted image is no longer used or shipped; its file stays in src/assets/images/hero/globe.svg, unreferenced, until the new globe is approved.
Kept from etech-final.html: the square and the sphere's size in it (radius 347.6 in 862.1), the four hubs and five route points at their places, the nine routes between the same nodes, navy for hubs and violet for routes. The positions are a schematic, not a map.
Construction: every part is worked out on a sphere and then flattened onto the page. The dot field is rings of evenly spaced dots along the parallels (1,231 on the near side), larger and stronger the more they face the viewer and the light, in six strengths; each strength is one path of round-capped specks, so the whole field is six elements. Parallels and meridians every 30 degrees are exact elliptical arcs, the far side at 5% and the near side at 14%. Each route is the shortest way round the sphere between its nodes, lifted off the surface more the longer it is, with a small sideways allowance where two routes would otherwise lie on each other. The sphere has a soft body gradient lit from the upper left, a violet tint gathering at its edge, an outline that is stronger away from the light, and a thin haze outside it that ends before the legend. Hubs are a navy point in a white ring inside a fine outer ring; route points are smaller violet points in a white ring. 63 elements in all (the image had 1,450), no filter, no embedded image, no library; about 30KB of markup in the homepage's HTML in place of a 102KB image file.
Motion: one. A short stretch of light travels along each route and the route then rests; the nine routes start 1.6s apart in a 14.4s cycle, so one or two are lit at a time. It is a CSS animation of the dash offset (src/styles/illustrations.css); no script, timer or requestAnimationFrame. Under reduced motion there is no animation and no light, and the globe is pixel for pixel what it is at rest.
The geometry is calculated when the page is prerendered and again when the app starts in the browser; the two results are identical character for character (checked in Node and Chrome), so hydration matches. An arc of exactly half a circle is deliberately never counted as the larger arc, because that comparison is where the two had differed.
Verified: the homepage before and after at 390, 768, 1024, 1440 and 1920px, whole page, frozen at the same moment: every changed pixel lies inside the globe's square, none in the legend, and the positions and sizes of the hero, globe square, legend, heading, text, buttons and header are identical. Every route ends on the centre of its node; no dot lies outside the sphere; the drawing is square and the sphere circular at every width.
Hero globe dots, lines and light (12 October 2026, by request; an isolated refinement of the note above, which it supersedes where they differ). Changed: heroGlobeGeometry.ts (the dot field only), HeroGlobe.tsx, and the globe block of src/styles/illustrations.css. The sphere, its size and position, the nine routes, the hubs, the route points, the route light, the legend and the hero are unchanged.
Dots: a lattice on the globe's own parallels and meridians, one ring every 5 degrees of latitude and one dot every 5 degrees of longitude, no longer staggered from ring to ring, so the dots stand in rows and in columns and the lines drawn every 30 degrees run through every sixth of each. Towards the poles a ring keeps every second (60 to 70 degrees), fourth (75 and 80) or eighth (85) dot, which keeps the spacing even while every dot stays in a column. 931 dots on the near side (1,231 before). Size and opacity still come in six strengths from how far a dot faces the viewer and the light; the strongest is slightly fainter than before (opacity 0.14 to 0.44, was 0.15 to 0.49).
Lines: same parallels and meridians, same near and far treatment; thinner (0.8, was 1) and fainter (near side 0.10, was 0.14; far side 0.04, was 0.05), so they sit behind the dots and the routes. They do not move.
Light: a soft round patch of light crosses the sphere from the upper left to the lower right in about ten seconds and the globe then rests for six (16s cycle). It is slow and narrow at the edges and quicker and full size in the middle, as something on a turning sphere is. It is the content of an SVG mask over a second drawing of the same dots (a use element), so the dots under it are drawn twice and read stronger, fading out smoothly around it; nothing blinks and no dot has an animation of its own. One CSS animation (globe-light) of the patch's transform and opacity; no script, timer or requestAnimationFrame. At rest, and for visitors who prefer reduced motion, the patch has opacity 0 and no animation, so the globe is the plain static one.
Checked in Chrome: format, lint, types and the build pass; the geometry is still identical in Node and in the browser and the development console is clean; at 390, 768, 1024, 1440 and 1920px the positions and sizes of the hero, globe, legend, heading, text, buttons and header are identical to before and the changed pixels of the hero lie inside the globe; the nine route lights still run; under reduced motion the globe has no running animation. Not checked: Safari and Firefox. If a browser did not repaint an animated mask, the globe would simply stay static.
Hero globe hubs and routes (13 October 2026, by request; an isolated refinement that supersedes the two globe notes above where they differ). Changed: heroGlobeGeometry.ts (nodes and routes only), HeroGlobe.tsx (routes, lights, ring radius), and the route light rules in src/styles/illustrations.css. The sphere, dots (931), lines, lighting, the light that crosses the sphere, size, position, legend and hero are unchanged.
Nodes: the four hubs and four of the five route points stand where they stood. The fifth route point was 12 units from the first hub, inside its ring; it is removed and its routes start at that hub. One of them then repeated the direct route from the first hub to the fourth, so there are eight routes, not nine.
Routes: each stops at the fine ring of a hub (radius 16) instead of running under it to the centre, so the lines that meet at a hub dock on its ring and none crosses a marker. No route passes within 11 units of the marker of a node it does not serve (before, the route to the bay grazed the second hub's ring, two near-identical routes ran either side of that hub, and the two routes to the western point crossed). The direct route from the first hub to the fourth swings below the second hub; the routes through the second hub arc slightly above; the route from the south to the bay is nearly straight and clears the second hub. Stroke, colour and opacity of the routes are unchanged; the hub and route-point markers are drawn as before, all hubs alike and all route points alike.
Lights: same mechanism (a CSS animation of the dash offset, no script). Eight lights start 1.6s apart in a 12.8s cycle and each takes 3.2s, so two are lit at a time. The light is now the same length on every route (34 units, at most half of a short route; before it was 16% of the route, so 11 units on the shortest and 72 on the longest). A route that continues another from the hub where it ends starts exactly when the first light has arrived (first hub to third, then third to the western point; first hub to second, then second to fourth), so the light appears to go on through the hub. Under reduced motion no light runs or shows.
Checked in Chrome on the development server: format, lint, types and build pass; no console messages (the page rendered in Node hydrates without a mismatch); at 1440 and 390px the hero, globe, legend and heading are where they were; the lights were sampled across the cycle; under reduced motion the globe has no running animation.
Hero globe land and placed network (13 October 2026, by request; it supersedes the globe notes above where they differ, in particular which nodes and routes there are and where they stand). Files: src/components/illustrations/heroGlobeLand.ts (new), heroGlobeGeometry.ts (nodes and routes), HeroGlobe.tsx. The sphere, its size and position, the dot lattice, the lines, the lighting, the two movements, the legend and the hero are unchanged.
Land: the continents are drawn inside the globe as one flat SVG path, a soft violet tint (7%) with a fine coastline (0.7 wide, 20%), under the dots, the lines and the network, and clipped to the globe's circle. It is the real coastline on the globe's own sphere and view: the globe is now defined as the Earth centred on 24 degrees north, 60 degrees east (its tilt and roll were already those of the dots and lines; 60 east was chosen so that the lines drawn every 30 degrees are true meridians and parallels). Europe, Africa, Asia and the west of Australia are in view. Source: Natural Earth 1:110m land, public domain, as packaged in world-atlas 2.0.2; projected, simplified to 0.8 of a drawing unit and stripped of the smallest islands once, by a script that is not part of the site, and stored as a 12.5KB path. No image, canvas, library or dependency. If the tilt, roll or central meridian change, the path has to be made again.
Nodes, placed by latitude and longitude on that view (they were a schematic before): the hubs are Dubai, Visakhapatnam, Riyadh for Saudi Arabia (the Dammam of the site's text would stand so close to Dubai that the two rings overlap) and Jakarta for Indonesia; the route points are Mundra, Chittagong, Colombo and Zambia, all places the site's own content names for its trade. The former point to the north-west is gone: the site names no place there.
Routes, eight: Dubai to Riyadh, Dubai to Mundra, Dubai to Visakhapatnam, Visakhapatnam to Chittagong, to Colombo and to Jakarta, Jakarta back to Dubai south of Sri Lanka, and Zambia to Visakhapatnam. They stop at hub rings as before; none passes within 23 units of the marker of a node it does not serve; the only crossing is the route from Zambia over the Jakarta to Dubai route, in open sea.
Lights: as before (eight, 1.6s apart, 3.2s each, one length), re-ordered so that the light goes Dubai to India to Indonesia and back to Dubai, then on to Riyadh, and the light from Zambia goes on from India to Bangladesh.
Checked in Chrome on the development server: format, lint, types and build pass; no console messages; at 1440 and 390px the hero, globe, legend and heading are where they were; lights sampled across the cycle; no animation and no light under reduced motion. The homepage HTML is about 12.5KB larger for the path.
The hero is a section element, not a header element as in etech-final.html, because the site header is now the page's header landmark.
The faint grid behind the hero is the grid-backdrop utility in src/styles/index.css. It is written once so the detail page header bands can reuse it.
The two hero buttons link to the homepage sections #commodities and #divisions.
The temporary 72px top padding on the homepage shell was removed: the hero sits under the transparent header, as approved.

Phase 4B — Commodity ticker: implemented in src/components/home/CommodityTicker.tsx. Compared with etech-final.html at 375, 390, 430, 768, 1024, 1280, 1440 and 1920px: position, size, typography, colours and timing are identical, and screenshots match pixel for pixel.

Ticker implementation notes:

The names come from src/data/commodities.ts. There is no separate ticker list.
The 39 names are rendered twice so the strip can loop; the second copy and the bullet marks are hidden from assistive technology. The strip has the ARIA role "marquee" and the approved label.
The movement is a CSS animation: 60 seconds, linear, continuous, leftwards, as in etech-final.html. There is no JavaScript timer or animation loop.
Deliberate correction: in etech-final.html the strip moves by exactly half its width, which is 24px short of one full list, so it jumps by 24px each time it loops. The React version moves by half its width plus half a gap, which makes the loop seamless.
Reduced motion: the animation is off and the strip is still, as in etech-final.html.

Phase 4C — Latest news: implemented in src/components/home/LatestNews.tsx, with content from src/data/news.ts. Compared with etech-final.html at 375, 390, 430, 759, 760, 768, 1024, 1280, 1440 and 1920px: positions, sizes, typography and colours are identical, and screenshots match pixel for pixel, including a hovered card and the phone row scrolled to its end.

Latest news implementation notes:

The section has no eyebrow, supporting copy or images in etech-final.html, and none were added.
Each card links to a commodity page in the site. "More on LinkedIn" is the only external link.
Each card is an article element that contains the link; the label above the title is plain text, not a time element.
The shared card and arrow-link styles are in src/components/ui/styles.ts (cardSurface, cardHover, arrowLink) for the sections that follow.

Phase 4D — "From mine and plantation to your port": implemented in src/components/home/SupplyChain.tsx and SupplyChainDiagram.tsx. Compared with etech-final.html at 375, 390, 430, 640, 641, 700, 701, 768, 900, 1024, 1280, 1440 and 1920px, with both diagrams frozen at the same animation frame: positions, sizes, typography and colours are identical, and screenshots match pixel for pixel.

Supply-chain implementation notes:

The diagram is the SVG of etech-final.html, rebuilt as a React component with the same path data. It is hidden from assistive technology; the four step labels are real text.
The two dots move with SVG animateMotion, as in the original: 7 seconds per trip, constant speed, repeating, the second dot half a trip behind the first. There is no script.
Reduced-motion fix (section 8): the moving dots are not rendered when the visitor prefers reduced motion. Two still dots are shown instead, at the start of the route and half-way along it. The switch is a CSS media query.
The first 3.5 seconds match etech-final.html exactly (approved): the second dot waits in the top-left corner of the diagram, then joins the route at 3.5 seconds. The two versions are identical frame for frame from the moment the page loads.
The section's heading block is the shared src/components/ui/SectionHeading.tsx.
The four counters show their final values. Their count-up, and the fade-in of this section's three blocks as they scroll into view, are part of the animation phase and are not implemented yet.

Phase 4E — "One group, six lines of business": implemented in src/components/home/BusinessLines.tsx, with content from src/data/divisions.ts. Compared with etech-final.html at 375, 390, 430, 599, 600, 768, 899, 900, 1024, 1280, 1440 and 1920px with every animation frozen at the same moment: positions, sizes, typography and colours are identical.

Six lines of business implementation notes:

It is a plain grid of six cards: three columns from 900px, two from 600px, one below. The dead carousel wrapper in etech-final.html (hidden arrows and dots, carousel role, autoplay timer) is not migrated.
Each card links to /divisions/<slug> through divisionPath(). The card titles are the division names in the data ("Construction, Real Estate & Masterplanning", "Digital & Healthcare IT", "Industrial Solutions & Other Services" and so on), exactly as in etech-final.html.
The six icons are in src/components/illustrations/DivisionIcon.tsx, generated from the SVG in etech-final.html, and are hidden from assistive technology. Their nine small continuous movements are CSS animations in src/styles/illustrations.css with the same durations, easing and keyframes as the original, and all stop under reduced motion.
Reduced motion matches etech-final.html exactly, including one quirk: the heartbeat line on the "Digital & Healthcare IT" icon is not drawn when its animation is off. This is recorded for a later decision and has not been changed.
Pixel comparison: identical at every width from 600px up, and under reduced motion. At phone widths, at 1x scale only, 31 pixels of one 1.5px icon line are anti-aliased a shade differently; at the 2x and 3x scale that phones use, the screenshots are identical. Every computed style and the markup of that icon are the same on both pages.
The fade-in of the heading and the grid as they scroll into view is part of the animation phase and is not implemented yet.

Phase 4F — "Commodities we supply": implemented in src/components/home/CommoditiesPreview.tsx, src/components/commodities/CommodityFilters.tsx and CommodityCard.tsx, with content from src/data/commodities.ts and src/data/commodityGroups.ts. Compared with etech-final.html in the "All" state at 375, 390, 430, 599, 600, 640, 768, 900, 1024, 1280, 1440 and 1920px, and in each of the seven filtered states at 390, 768 and 1440px: positions, sizes, typography, colours, card count and card order are identical.

Commodities implementation notes:

All 39 commodities are shown. The filter has eight pills with the exact labels of section 20, generated from the group names in the data. They wrap onto further lines; there is no dropdown and no scrolling.
The filter is single-select React state in CommoditiesPreview. "All" is selected first. It does not change the URL.
The card shows the group, the name, the summary and a "View specifications" link to /commodities/<slug>. As in etech-final.html, the card has no photograph (the two thumbnails in the original's markup are hidden by its own stylesheet) and no quote action.
The grid fills each row with as many columns of at least 230px as fit: one at phone widths, two from about 600px, three from about 900px, four from 1280px.
Each "View specifications" link takes its accessible name from its own text and the commodity name, so the 39 links can be told apart. No wording was added.
Filter pills use normal letter-spacing, as browsers give buttons by default, and the original's 999px corner radius (the --radius-pill token).
The fade-in of the heading as it scrolls into view is part of the animation phase and is not implemented yet.

Phase 4G — "Inside ETECH": implemented in src/components/home/InsideEtech.tsx, with content from src/data/insideEtech.ts (four tabs) and the heading, introduction and tab-list label from src/data/home.ts. Compared with etech-final.html with the first tab shown at 375, 390, 430, 599, 600, 640, 700, 701, 768, 800, 860, 900, 1024, 1280, 1440 and 1920px, and with each of the other three tabs shown at 390, 768, 1024, 1440 and 1920px: positions, sizes, typography, colours and content are identical.

Inside ETECH implementation notes:

The four tabs are buttons in a tab list ("Explore ETECH"), each wired to its own panel with aria-controls and aria-labelledby. Exactly one tab is selected and one panel shown; the other panels are hidden. "Our story" is selected first. Changing tab does not change the URL.
Keyboard: the selected tab is the single Tab stop of the tab list. Arrow Right and Arrow Left move to the next and previous tab and wrap round; Home and End go to the first and last tab. Focus moves with the selection. etech-final.html has the arrow keys only, and all four of its tabs are Tab stops. Home and End were required by the Phase 4G brief; the single Tab stop is the standard tab pattern and is listed in the Phase 4G report for review.
Automatic advance: one timer moves to the next tab every 7 seconds and wraps from the last tab to the first. As in etech-final.html, it stops for good the first time the visitor picks a tab, by click or by keyboard (arrow keys, and here also Home and End); focusing or hovering the tabs does not stop it. The timer is removed when the homepage is left. It is never started for visitors who prefer reduced motion.
Photograph: each panel's photograph fills the panel at 50% opacity under the dark gradient. As in etech-final.html, when the visitor changes tab the new photograph eases from 104% to 100% of its size over 6 seconds; it does not do so on first load, when the tabs advance by themselves, or when the already-selected tab is clicked again. The zoom is switched off for visitors who prefer reduced motion; the tabs still work.
The photographs are decorative (empty alternative text); the panel heading and text carry the meaning. The first photograph loads when the section approaches the screen; the other three are fetched at low priority so that a tab change shows its photograph at once.
Panel links: "Read our journey" goes to /#journey; the other three go to their division pages (commodity-trading, workforce-solutions, construction-real-estate).
The tab pills share the style of the commodity filter pills. There are no previous/next arrows and no dropdown, as in etech-final.html.
The fade-in of the heading and the panel as they scroll into view is part of the animation phase and is not implemented yet.
Note for later comparisons (corrected in Phase 4H): while the division icons in "Six lines of business" are animating, sections further down the page differ from etech-final.html by one to three levels out of 255 on anti-aliased and semi-transparent pixels (this panel, the About section). The cause is not the Global Network pins, as first recorded. In etech-final.html the wrapper of the division cards (.slider.cards) is position: relative, a remnant of its slider; the React grid has no positioned wrapper. That changes paint order, so the browser puts the later sections on a different compositing layer. Making that wrapper static in etech-final.html, or the React grid relative, gives exactly 0 differing pixels with every animation running; so does stopping the icon animations on both pages. No change has been made to the approved Six Lines section. Decision (Phase 4I brief): do not add position: relative or make any other change to Six Lines merely to remove these paint-order differences.

Phase 4H — "About": implemented in src/components/home/About.tsx, with all content from homeContent.about in src/data/home.ts (year, heading, two paragraphs, five places, three-part motto, aim). No data, type or asset changes. Compared with etech-final.html at 375, 390, 430, 599, 600, 640, 700, 701, 768, 800, 801, 860, 900, 1024, 1280, 1440 and 1920px: positions, sizes, typography, colours, line breaks and text are identical, and with the division icon animations stopped the screenshots are identical pixel for pixel at all 17 widths.

About implementation notes:

The section has no photograph, link, button, interaction or animation, as in etech-final.html.
The year and the story sit side by side in two equal columns with a 72px gap, centred vertically; at 800px and below they stack with a 20px gap. The year is light-weight gradient text sized clamp(5rem, 13vw, 10rem).
The story column holds the h2 (sub-section heading size), the two paragraphs and the five places as a wrapping list of pills.
The motto is a three-column strip with 1px dividers inside one bordered, rounded box; at 700px and below it is one column. The aim paragraph follows, limited to 70 characters wide.
The label and the sentence after it ("Our aim:" and the motto keywords) are rendered as in the source: the sentence, with its leading space, is a single text node. Splitting it into two text nodes shifts the first letter by a fraction of a pixel.
The fade-in of the three blocks as they scroll into view is part of the animation phase and is not implemented yet.

Phase 4I — "Our journey": implemented in src/components/home/Journey.tsx, with the eight milestones from src/data/journey.ts and the heading and introduction from src/data/home.ts. No data, type or asset changes. Compared with etech-final.html, with its timeline in the resting state described below, at 375, 390, 430, 599, 600, 601, 640, 700, 701, 768, 800, 860, 900, 1024, 1280, 1440 and 1920px: positions, sizes, typography, colours, line breaks and text are identical, and the screenshots are identical pixel for pixel at all 17 widths, with page animations running or stopped.

Our journey implementation notes:

The section continues the About section: it has no top padding (flushTop), as in etech-final.html. Its id is "journey". The header has no link to it, in etech-final.html or here; the only link to it is "Read our journey" in Inside ETECH.
The timeline is an ordered list of eight items. Each item is a two-column grid: the year, right-aligned in an 80px column, then a 34px gap, then the milestone (h3 and one paragraph). At 600px and below the year column is 56px and the gap 28px.
The line is 2px wide, 94px from the left of the list (68px at 600px and below), from 6px below the top of the list to 6px above its bottom. It is drawn twice, as in the original: a grey track and, over it, the accent-coloured progress line at full length.
Each item has a 14px dot on the line: page-coloured with a 2px accent ring, 7px below the top of the item.
The fifth milestone ("2013–17") is the highlighted one: its content sits in a card (accent-tinted border, the medium shadow, 14px corners) raised by 10px.
Resting state: etech-final.html defines how the timeline looks when its script is not running ("no-JS view stays fully readable"): progress line fully drawn, every milestone in full colour, every dot with an accent ring, the highlighted card with its border and shadow. That is the state implemented. With the original's timeline script prevented from running and the rest of its page intact, the two are identical pixel for pixel.
Deferred to the animation phase: the original's scroll-linked behaviour. Its script dims every milestone, then, as the page scrolls, grows the progress line and marks milestones as passed (filled dot) or active (white dot with a halo, darker text, card shadow), with 400ms colour transitions. It uses an IntersectionObserver, scroll and resize listeners and requestAnimationFrame; whether requestAnimationFrame is acceptable there is to be decided in that phase. The fade-in of the heading and of each milestone as they scroll into view is deferred with it. No reduced-motion behaviour has been added, since nothing moves yet.
Quirks reproduced as they are: the line continues about 20px below the last dot; at phone widths "2013–17" breaks onto two lines in its 56px column.

Phase 4J — "Why choose ETECH?": implemented in src/components/home/WhyChoose.tsx, with the eight reasons from src/data/whyChoose.ts and the heading and introduction from src/data/home.ts. No data, type or asset changes. Compared with etech-final.html at 375, 390, 430, 599, 600, 640, 641, 700, 701, 768, 800, 860, 900, 1024, 1025, 1280, 1440 and 1920px: positions, sizes, typography, colours, line breaks and text are identical, and the screenshots are identical pixel for pixel at all 18 widths, with page animations running or stopped.

Why choose ETECH implementation notes:

The section background is solid deep navy (the --deep colour), with no gradient or image: etech-final.html sets #why.dark{background:var(--deep)}, which replaces the gradient of its other dark blocks. Text is the light on-deep colours. The section id is "why"; the header has no link to it.
The eight reasons are an ordered list in a grid that fits as many columns of at least 240px as the width allows: one column below about 536px, two from there, three from about 816px and four from about 1088px (measured: one at 430px, two at 599px to 800px, three at 860px to 1025px, four at 1280px and wider). Gaps and card padding follow the shared tokens (24/20/16px and 28/24px).
Each card has a faint light border, a 3% light fill and 14px corners. Its number badge ("01" to "08") is generated by the list's own CSS counter, as in etech-final.html; there are no icons. Under it are the h3 and one paragraph.
Hover (devices that can hover): the card rises 4px and its border and fill lighten, over 240ms. There is no shadow, as in etech-final.html, because it would not show on navy. Under reduced motion the card does not move and the colours change at once. The cards are not links or buttons.
SectionHeading gained an optional onDeep property, which gives the introduction the light text colour; its default output is unchanged.
The fade-in of the heading and the grid as they scroll into view is part of the animation phase and is not implemented yet.
Note for the Leadership section, which follows: in etech-final.html a section with no top padding that directly follows a dark block gets its top padding back (.dark + section.block[style*="padding-top:0"]).

Phase 4K — "Leadership messages": implemented in src/components/home/Leadership.tsx, with the two messages from src/data/leadership.ts and the heading and introduction from src/data/home.ts. No data, type or asset changes. Compared with etech-final.html at 375, 390, 430, 599, 600, 640, 641, 700, 701, 768, 800, 860, 900, 1024, 1025, 1280, 1440 and 1920px: positions, sizes, typography, colours, line breaks and text are identical, and the screenshots, which include the lower edge of the dark block above, are identical pixel for pixel at all 18 widths, with page animations running or stopped.

Leadership messages implementation notes:

Spacing after the dark block: the section has the standard top and bottom padding (112px, 88px up to 1024px, 64px up to 640px). In etech-final.html its own markup removes the top padding, and the rule for a section that follows a dark block restores it; the result is the standard padding, which is what is implemented. The heading therefore starts 112/88/64px below the navy block.
Each message is a card (the sheet colour, hairline border, 14px corners, small shadow, 32px padding) with two columns: a 160px initials tile and the message, 36px apart, aligned to the top. At 640px and below the card is one column with 24px padding and a 20px gap, and the tile is at most 140px wide. The cards are stacked with the shared grid gap.
The initials tile (4:5, 12px corners, pale violet gradient, initials in the accent colour) is the approved visual; there are no photographs. It is hidden from assistive technology, as in etech-final.html, because the name follows in the text.
The message is a blockquote in the lead text size; the quotation marks are part of the approved text. Beneath it, under a 2px accent rule as wide as its content, are the name in bold and the role in small secondary text.
The cards have no hover, link, button or animation, as in etech-final.html. The section id is "leadership", which the header's "Leadership" link targets.
The fade-in of the heading and the cards as they scroll into view is part of the animation phase and is not implemented yet.
Note for the Team section, which follows: its markup removes the top padding and it follows this (light) section, so it has no top padding.

Phase 4L — "Core professional team": implemented in src/components/home/Team.tsx, with the seven people from src/data/team.ts and the heading and introduction from src/data/home.ts. No data, type or asset changes. Compared with etech-final.html at 375, 390, 430, 599, 600, 640, 641, 700, 701, 768, 800, 860, 899, 900, 1024, 1025, 1280, 1440 and 1920px: positions, sizes, typography, colours, line breaks and text are identical, and the screenshots, which include the bottom edge of the last leadership card above, are identical pixel for pixel at all 19 widths, with page animations running or stopped, and in the hovered state.

Core team implementation notes:

Spacing: the section has no top padding (flushTop), as in etech-final.html, where nothing restores it after a light section. The heading starts where the Leadership section's bottom padding ends: 112px, 88px (up to 1024px) or 64px (up to 640px) below the last leadership card. The header's "Team" link lands with the heading directly under the header, as in the original.
Grid: four equal columns from 900px, three from 600px to 899px, two at 599px and below. The column gap is the shared grid gap (24/20/16px) and the row gap is 8px more.
Each person is an article: an initials tile (4:3, 14px corners, pale violet gradient, initials in the accent colour), the name as an h3, and one paragraph with the role and, on a new line, the location. There are no photographs in etech-final.html; the initials tile is the approved visual and is hidden from assistive technology because the name follows in text.
The names are reproduced exactly as in etech-final.html, including "YHee Kyun Lee" (see the content review list; not corrected).
Hover (devices that can hover): hovering anywhere on a person lifts their tile 4px, turns it white and gives it the card hover shadow and violet border, over 240ms. Under reduced motion the tile does not move and the change is immediate. The people are not links or buttons.
The fade-in of the heading and the grid as they scroll into view is part of the animation phase and is not implemented yet.
Note for the Global Network section, which follows: its markup does not remove the top padding, so it has the standard section padding.

Phase 4M — "We operate across a global network": implemented in src/components/home/Locations.tsx, with the five locations from src/data/locations.ts and the heading, introduction and supply-corridors line from src/data/home.ts. No data, type or asset changes. Compared with etech-final.html at 375, 390, 430, 599, 600, 640, 641, 700, 701, 768, 800, 860, 899, 900, 1024, 1025, 1280, 1440 and 1920px: positions, sizes, typography, colours, line breaks and text are identical, and the screenshots, which include the bottom edge of the team section above, are identical pixel for pixel at all 19 widths, with every animation stopped and with every animation frozen at the same moment.

Global network implementation notes:

Spacing: the section has the standard top and bottom padding. With the Core Team section's bottom padding above it, the heading starts 224px, 176px (up to 1024px) or 128px (up to 640px) below the last team member, as in etech-final.html.
Grid: three equal columns from 900px, two from 600px to 899px, one at 599px and below, with the shared grid gap. Five cards, so the last row has two.
Each location is a card (white, hairline border, 14px corners, small shadow, shared card padding) holding a pin, the name as an h3, the city in small accent-coloured text and one line of detail. The cards use the shared card surface and the shared card hover (4px lift, deeper shadow, violet border, 240ms; hover-capable devices only; no lift under reduced motion). They are not links.
Pin: a 10px accent-coloured dot. It pulses: a ring starts at the dot at 50% opacity, grows to 12px and fades out over the first 70% of a 2.4-second cycle, then resets unseen; the cycle repeats without end. This is the pinpulse-accent animation of etech-final.html, implemented as the pin-pulse keyframes and --animate-pin-pulse token in src/styles/index.css, in the same way as the ticker. The ring's size and opacity were read at six moments of the cycle on both pages and are identical. Under reduced motion the pin does not pulse, as in etech-final.html. The pin is an empty decorative element; there are no maps, flags, icons or images.
Below the grid is the centred supply-corridors line, with its label in bold.
The fade-in of the heading, the grid and the corridors line as they scroll into view is part of the animation phase and is not implemented yet.

Decisions closed in the Phase 4M brief:

Inside ETECH: no zoom when the tabs advance by themselves (as implemented).
Inside ETECH: the tab list is a single Tab stop (as implemented).
Our journey: keep the static resting state until the animation phase.
Six lines of business: no change to the approved section to remove paint-order differences in later sections.
Global network: the pin pulse stays implemented, with its reduced-motion rule (confirmed in the Phase 4N brief).

Phase 4N — "Aligned with the Gulf's national visions": implemented in src/components/home/Visions.tsx, with the five visions from src/data/visions.ts and the heading, introduction and note from src/data/home.ts. No data, type or asset changes. Compared with etech-final.html at 375, 390, 430, 599, 600, 640, 641, 700, 701, 768, 800, 860, 899, 900, 1024, 1025, 1280, 1440 and 1920px: positions, sizes, typography, colours, line breaks and text are identical. The screenshots are identical pixel for pixel at all 19 widths once the shadow of the Closing Banner, which is not built yet, is excluded (see the last note).

GCC visions implementation notes:

Order: Saudi Vision 2030, Bahrain Economic Vision 2030, UAE · We the UAE 2031, New Kuwait 2035, Oman Vision 2040. This is the order of etech-final.html and of the data file, and it is ascending by year, with Saudi Arabia before Bahrain for 2030. The component renders the data in its order; nothing is sorted at run time.
The section has the standard top and bottom padding and a background that fades from transparent to a pale violet tint at its middle and back (the .gray-vis gradient).
Grid: three equal columns from 900px, two from 600px to 899px, one at 599px and below, with the shared grid gap. Five cards, so the last row has two.
Each card uses the shared card surface and the shared card hover (4px lift, deeper shadow, violet border, 240ms; hover-capable devices only; no lift under reduced motion). It holds a row with a small flag on the left and the year on the right in large light accent-coloured figures, then the name as an h3, a one-line summary and a bulleted list of three points with accent-coloured markers. The cards are not links.
Flags: 42 by 28px, drawn with CSS gradients exactly as in etech-final.html (.flag.f-sa, .f-bh, .f-ae, .f-kw, .f-om), kept in the component. They are decorative and hidden from assistive technology, as in the original; the country is named in the heading beside them. No images.
Card top line: a 2px gradient line across the top of each card. In etech-final.html it is drawn from left to right when the section scrolls into view; here it is shown complete, and the drawing-in is deferred to the animation phase with the fade-in of the heading, the grid and the note.
Note under the grid: small centred text at full opacity. Its own rule in etech-final.html asks for 85% opacity, but the note also carries the scroll-reveal class, whose revealed state sets the opacity to 1; measured in the untouched original, it is 85% only before it scrolls into view and 100% afterwards. The finished state is implemented.
The section has no animation of its own.
Note for the Closing Banner, which follows: its markup removes the top padding and nothing restores it, so the banner starts flush under this section, and its large shadow reaches about 19px up into this section's bottom edge. Until the banner is built, exact comparisons of this section differ from etech-final.html there by at most 3 levels out of 255; with the banner's shadow switched off in the original, they are identical.

Decision closed in the Phase 4O brief: the GCC visions note stays at 100% opacity in the current revealed, static state.

Phase 4O — Closing banner ("Have an industrial challenge? Talk to us."): implemented in src/components/home/ClosingBanner.tsx, with the heading, text, photograph key and two actions from homeContent.closing in src/data/home.ts. Compared with etech-final.html at 375, 390, 430, 599, 600, 601, 640, 641, 700, 701, 768, 800, 860, 900, 1024, 1025, 1280, 1440 and 1920px: positions, sizes, typography, colours, line breaks and text are identical, and the screenshots, which start 60px inside the GCC visions section, are identical pixel for pixel at all 19 widths, with page animations running or stopped.

Closing banner implementation notes:

Data: homeContent.closing gained one field, image: 'workforce-4'. In etech-final.html the photograph is set by script (IMGS['workforce-4']); the key was not in the data before. The file was already in the asset registry. No other data or asset change.
Spacing: the section has no top padding (flushTop), and nothing restores it after the GCC visions section, so the banner starts exactly where that section ends. Below the banner is the standard bottom padding (112/88/64px). The section id is "getintouch".
Banner: a panel at least 420px high with 20px corners, the deep navy background and the large shadow (0 30px 60px -24px and 0 12px 24px -12px, the shared shadow-lg token). Inside, back to front: the photograph covering the panel at 38% opacity (decorative, empty alternative text, loaded lazily), an overlay of a violet radial glow rising from the bottom over a navy vertical gradient, and the content.
Content: centred, at most 640px wide with 48px/24px padding: the h2 in the panel heading size, one paragraph in the lead size, and the two buttons in a centred row that wraps.
Shadow over the GCC visions section: because the banner starts flush under that section, its shadow reaches about 19px up over that section's bottom edge. With the banner built, the GCC visions comparison is identical pixel for pixel at all 19 widths with no test adjustment; Visions.tsx was not changed.
Buttons: "Contact us" (primary) goes to /#contact; "Join our workforce" (ghost) goes to /divisions/workforce-solutions, the React route for the original's #/division/workforce-solutions. Both use ButtonLink. Hover, keyboard focus and reduced-motion states were compared with the original and are identical.
ButtonLink: the ghost variant, used here for the first time, now writes its translucent colours as the original's literal rgba values. Through Tailwind's colour mixing the resting border came out at alpha 76/255 instead of 77/255. No other variant changed.
The banner has no animation of its own. Its fade-in as it scrolls into view is part of the animation phase and is not implemented yet.
Note for Market watch, which follows: its markup removes the top padding and nothing restores it, so its heading starts where this section's bottom padding ends. Measured in Phase 4P (the 66px first written here was an estimate from the shadow values): the banner's shadow is visible for 79 rows below the banner. Where the bottom padding is 64px (640px and below) it therefore lies over the first 15 rows of Market watch, at 1 to 2 levels out of 255; from 641px, where the padding is 88px or more, it stays inside this section. It is the same in etech-final.html and here, pixel for pixel, and nothing was added to hide it.

Phase 4P — "Market watch": implemented in src/components/home/MarketWatch.tsx, with the three items from src/data/markets.ts and the heading and introduction from src/data/home.ts. No data, type or asset changes. Compared with etech-final.html at 375, 390, 430, 599, 600, 601, 640, 641, 700, 701, 768, 800, 860, 899, 900, 1024, 1025, 1280, 1440 and 1920px: positions, sizes, typography, colours, line breaks and text are identical. The screenshots, which start at the Closing Banner's bottom edge, are identical pixel for pixel at all 20 widths once the shadow of the LinkedIn card, which is not built yet, is excluded (see the last note).

Market watch implementation notes:

Content: three fixed editorial cards that link to articles on Investing.com and FT.com. There are no prices, tickers or figures, nothing is fetched and nothing refreshes; etech-final.html has no script for this section.
Spacing: no top padding (flushTop), so the heading starts where the Closing Banner section's bottom padding ends: 112px, 88px (up to 1024px) or 64px (up to 640px) below the banner. Standard bottom padding. The section id is "markets", which the header's "Markets" link targets.
Grid: three equal columns from 900px, two from 600px to 899px, one at 599px and below, with the shared grid gap. Cards in a row are equal in height.
Each card is the whole link: the source line in small accent-coloured text, the title as an h3, a summary, and at the foot a "Read on …" label with the shared arrow. It uses the shared card surface, card hover and arrow label, as the Latest news and Six lines cards do. The links open in a new tab.
Hover (devices that can hover): the card rises 4px with the deeper shadow and violet border, and the arrow moves 3px to the right, over 240ms. Keyboard focus shows the standard focus ring. Under reduced motion the card does not rise and the changes are immediate. All compared with the original and identical.
Deviations: the links carry rel="noopener noreferrer", the project's convention for links that open a new tab; etech-final.html has rel="noopener". The source line is a span; etech-final.html marks it up as a time element although two of the three hold no date (the Latest news cards already use a span). Neither changes the appearance.
The section has no animation of its own. The fade-in of the heading and the grid as they scroll into view is part of the animation phase and is not implemented yet.
Note for the LinkedIn strip, which follows: its markup removes the top padding and nothing restores it, so its card starts flush under this section, and the card's small shadow shows in this section's last one or two pixel rows. Until the strip is built, exact comparisons of this section differ from etech-final.html there by at most 2 levels out of 255; with that shadow switched off in the original, they are identical.

Phase 4Q — LinkedIn strip ("Follow ETECH on LinkedIn"): implemented in src/components/home/LinkedInStrip.tsx, with the heading, text and button label from homeContent.linkedIn in src/data/home.ts and the address from site.linkedInUrl in src/data/site.ts. No data or asset changes. Compared with etech-final.html at 375, 390, 430, 599, 600, 601, 640, 641, 700, 701, 768, 800, 860, 900, 1024, 1025, 1280, 1440 and 1920px: positions, sizes, typography, colours, line breaks and text are identical. The screenshots, which start 40px inside Market watch, are identical pixel for pixel at all 19 widths once the shadow of the Contact panel, which is not built yet, is excluded (see the last note).

LinkedIn strip implementation notes:

Content: one fixed promotional card. It is not an embedded feed; etech-final.html has no script, iframe or request for this section.
Spacing: no top padding (flushTop), so the card starts exactly where Market watch ends. Standard bottom padding. The section id is "linkedin".
Card: the sheet colour, hairline border, 14px corners and the small shadow, with 28px/32px padding (24px at 640px and below). Its contents are a wrapping row with a 24px gap, centred vertically: the icon tile, the text block (which grows, at least 220px wide) and the button. When the row is too narrow the button, and then the text, wrap onto their own lines. The card has no hover and is not a link.
Icon: the existing LinkedInIcon component (the glyph of etech-final.html, also used in the footer), in the accent colour on a 60px pale violet tile with 12px corners and 12px padding. It is decorative and hidden from assistive technology, as in the original. LinkedInIcon gained an optional className; the footer's use is unchanged.
Text: the heading is an h2 in the feature-heading size (24px), with one line of lead-size text.
Button: "Follow us", a real link to the company's LinkedIn page, opened in a new tab with rel="noopener noreferrer" (the project's convention; etech-final.html has rel="noopener").
ButtonLink gained a fourth variant, dark, for the original's .cta.dark: violet like the primary button, with a plain shadow (0 1px 2px, 20% navy; the shadow-button-dark token) that hover does not change. On hover only the fill and border darken, as in etech-final.html, where the dark button's own shadow rule overrides the primary button's hover glow. Hover, keyboard focus and reduced-motion states were compared with the original and are identical. The other variants are unchanged.
Shadow over Market watch: the card's small shadow shows in the last rows of Market watch. With the strip built, the Market watch comparison is identical pixel for pixel at all 20 widths with no test adjustment; MarketWatch.tsx was not changed.
The section has no animation of its own. Its fade-in as it scrolls into view is part of the animation phase and is not implemented yet.
Note for Contact, which follows: its markup removes the top padding and nothing restores it, so its panel starts flush under this section, and the panel's large shadow reaches about 19px up over this section's bottom edge. Until Contact is built, exact comparisons of this section differ from etech-final.html there by at most 3 levels out of 255; with that shadow switched off in the original, they are identical.

Phase 4R — Contact ("Tell us what you need to source, build or staff."): implemented in src/components/home/Contact.tsx, with the copy from homeContent.contact in src/data/home.ts and the two addresses from site.emails in src/data/site.ts. No data or asset changes. This was the last homepage section: the temporary section anchors in src/pages/HomePage.tsx are gone, and the homepage renders all eighteen sections in the approved order, followed by the footer from the layout. Compared with etech-final.html at 375, 390, 430, 599, 600, 601, 640, 641, 700, 701, 768, 800, 801, 860, 900, 1024, 1025, 1280, 1440 and 1920px: positions, sizes, typography, colours, line breaks and text are identical, and the screenshots of the section, of its shadow over the LinkedIn section above and of its shadow down to the footer are identical pixel for pixel at all 20 widths, with page animations running or stopped.

Contact implementation notes:

There is no form. etech-final.html has no form, field, script or service for this section, and none was added. The section offers email links and a link to the locations.
Spacing: no top padding (flushTop), so the panel starts exactly where the LinkedIn section ends. Standard bottom padding; the footer follows immediately.
Panel: deep navy with two violet radial glows (top right and bottom left), 20px corners and the large shadow (the shared shadow-lg token). Two columns, 1 : 1.3, with a 40px gap and 64px padding, centred vertically. At 800px and below it is one column with a 26px gap and 34px/24px padding.
Left column: the h2 in the panel heading size, one paragraph, the smaller trust line, and the primary button "Email our team" (mailto:info@etechglobe.com).
Side column: two blocks, "Email" and "Offices", that sit side by side when each has 220px, otherwise one under the other. It is separated by a faint divider: on the left from 801px, on top at 800px and below. "Email" lists info@etechglobe.com and admin@etechglobetrading.com as mailto links on separate lines; "Offices" has the link "See all locations" to /#locations. The links are light text with a faint underline that turns violet on hover; they keep their 0.2s colour transition under reduced motion, as in etech-final.html, since nothing moves.
Hover, keyboard focus and reduced-motion states of all four links were compared with the original and are identical.
Anchor: the section id is "contact", once on the page. The header's "Contact" link, the closing banner's "Contact us" button, a direct load of /#contact and the header link from another route all reach it. Because the section and the footer together are shorter than a desktop window, the page stops at its end with the section's top below the header; etech-final.html stops at the same position.
Shadows: with the panel built, the LinkedIn strip comparison is identical pixel for pixel at all 19 widths with no test adjustment, and so are Market watch, the Closing banner and GCC visions. Below the panel the shadow is visible for 79 rows; where the bottom padding is 64px (640px and below) it lies over the footer's top border and the first rows of its padding, at 1 to 2 levels out of 255, identically in both pages.
The section has no animation of its own. Its fade-in as it scrolls into view is part of the animation phase and is not implemented yet.

Finding (footer, Phase 3; not changed in Phase 4R; resolved in the final QA, see SEO + Accessibility): two letters in the footer's copyright line differ from etech-final.html by anti-aliasing (33 to 61 pixels, at most 42 levels out of 255, at every width). The line is rendered as six adjacent pieces of text ("© ", the year, a space, the legal name, " · ", the tagline) where etech-final.html has "© ", the year in a span, and the rest as one piece, so the browser shapes the first letter after each join separately. Rebuilding the line in the test browser as in etech-final.html makes the footer identical at 1440px. At 390px a further 51 pixels differ in the "Website by Madhras.com" line; their cause was not investigated. Positions and sizes are unaffected. Fixing it means rendering the text after the year as one string in src/components/layout/Footer.tsx.

Homepage refinements (12 October 2026, by request; these depart from etech-final.html on purpose).
About: the year no longer has width fit-content; it fills its column. It is larger (clamp(5.5rem, 14vw, 11rem), was clamp(5rem, 13vw, 10rem)) and bold (was light). Its gradient is kept to the width of the figures (2.12em), so it reads as before.
Global network: the section has no top padding (Section flushTop); its heading is one section spacing below the Core team content instead of two.
GCC visions: no top padding (Section flushTop; first halved, then removed on request the same day), so its heading is one section spacing below the Global network content (112px of that section's bottom padding plus the 17px below its corridors line); the note sits 12px below the cards (was 22px), is bold and is set in the body size (17px, 16px on phones; was 14px); the Saudi Arabia flag is now an inline SVG in Visions.tsx (green field, the creed in white as text in the device's Arabic typeface above a white sword pointing to the hoist) in the same 42 by 28px box. The flag's Thuluth calligraphy is not reproduced; an official vector file can replace the drawing if one is supplied.

Supply chain, counters, About year and division icons (12 October 2026, by request; these too depart from etech-final.html on purpose).
Supply chain spacing: the section has no top padding (pt-0 on its Section; the rule responsible was the standard section padding, 112, 88 or 64px by width). Its heading now begins directly under the rule that closes Latest news; the space above that rule is the news section's own bottom padding (64px, 56px up to 1024px, 44px up to 640px), which was not changed. Bottom padding, diagram, steps and counters row are as before.
Counters: the four figures count up from zero to 1989, 39, 6 and 20,000+ when the counters row is revealed (the row's existing useReveal state is the trigger: 12% in view, once, never again). 1.6s, starting quickly and slowing into the final value. The figure for 20,000+ keeps its thousands separator and its plus sign while it counts. New hook src/hooks/useCount.ts: a 40ms timer that stops itself when the number arrives; no requestAnimationFrame, no dependency. The prerendered page, a page whose scripts did not run, and visitors who prefer reduced motion show the final values at once and nothing counts.
About year: the large year counts down from 1999 to 1989 when the story block is revealed, once, over 1.8s, slowing as it arrives. Ten years, so the first two figures stay still and only the last two settle. Same hook, same fallbacks; the element, its typography, gradient and box are unchanged (the box measures the same during the count and after it) and the final text is exactly 1989.
Division icons: redrawn to one standard, with the same six subjects, colours, tile and place in the card. Each is drawn in a 24-unit square whose middle 18 units the drawing fills, with one stroke width (1.5) and round ends and corners (they were square, and the drawings differed in size: the ship and the gear were smaller than the rest). The gear is now a toothed wheel (it read as a sun), the three recycling arrows are identical and evenly placed, the heartbeat is visible at rest (it was invisible whenever its animation did not run), the ship has a mast in place of the filled light.
Division icon motion: the continuous animations are removed, so the icons are still, also while they scroll into view. While a card is hovered (on devices that can hover) or holds keyboard focus, one part of its icon moves a little and settles, and it returns when the card is left: the ship lifts its bow and the water slides, the crane lowers its load, the drop falls slightly, the heartbeat runs off and is traced again, the recycling arrows turn a third of the way round, the gear turns by one tooth. CSS transitions driven by one custom property (--icon-on) in src/styles/illustrations.css; no keyframes, no script. Nothing moves under reduced motion.
Files: src/hooks/useCount.ts (new), src/components/home/SupplyChain.tsx, src/components/home/About.tsx, src/components/illustrations/DivisionIcon.tsx, src/styles/illustrations.css. Checked in Chrome at 1440 and 390px: format, lint, types and build pass; the counters and the year run once and do not restart on scrolling away and back; icons at rest, hovered, focused and under reduced motion. Not checked: Safari, Firefox, a touch device.

Homepage section order (12 October 2026, by request; it departs from etech-final.html on purpose and supersedes "section ordering" in the list of things to preserve, for the homepage). Only the order in src/pages/HomePage.tsx changed; every section, its id, content, data and behaviour are the same, each renders once, and the footer still follows main.
New order: Hero, Commodity ticker, Six lines (#divisions), Commodities (#commodities), Supply chain (#how), About (#about), Journey (#journey), Leadership (#leadership), Core team (#team), Why choose (#why), Global network (#locations), GCC visions (#visions), Inside ETECH (#explore), Latest news (#latest), Market watch (#markets), Closing banner (#getintouch), Contact (#contact), LinkedIn (#linkedin).
Before: Hero, Commodity ticker, Latest news, Supply chain, Six lines, Commodities, Inside ETECH, About, Journey, Why choose, Leadership, Core team, Global network, GCC visions, Closing banner, Market watch, LinkedIn, Contact.
Two spacings restored because of the new neighbours, and nothing else: Global network and Market watch have their standard top padding again (flushTop removed from both). Without it the Global network heading touched the navy Why choose band, and the Market watch heading sat directly under the rule that closes Latest news. This undoes, for Global network, the "no top padding" of the earlier homepage refinements, which was made when Core team was above it.
Left as it was: Supply chain still has no top padding (requested earlier the same day), so its heading now begins directly under the lower edge of the white Commodities band. Journey to Leadership is two section spacings (224px at desktop), as Inside ETECH to About was before.
Checked on the development server in Chrome at 1440 and 390px: 18 sections in the order above, no duplicate ids, no horizontal overflow, no console messages; the ten section links in the header, hero and footer (#divisions, #commodities, #about, #leadership, #team, #locations, #visions, #markets, #contact, #journey) each land on their section under the fixed header. Format, lint and types pass. Not run: the production build and the earlier comparison suites, which compare against the old order.

Three spacings and the GCC visions note (12 October 2026, by request; they supersede the earlier notes above where they differ).
Supply chain: its standard top padding is back (pt-0 removed), so the heading is one section spacing (112, 88 or 64px) below the lower edge of the Commodities band.
GCC visions: its own top padding was already none; the space above its heading was Global network's bottom padding. That is now one heading gap (pb-head-gap on the Global network section: 56, 48 or 40px, was the section spacing), so the heading is 73px below the Supply corridors line at desktop (was 129px) and 56px at 390px (was 80px).
Inside ETECH: no top padding (flushTop on its Section, the one change made to InsideEtech.tsx, by request), and GCC visions' bottom padding is one heading gap as well (pt-0 pb-head-gap on its Section in place of flushTop), so the Inside ETECH heading is 73px below the GCC note at desktop (was 241px) and 56px at 390px (was 144px). The two junctions now measure the same.
GCC visions note: at most 40rem wide, centred, with balanced lines (text-wrap: balance), so on desktop it is two lines that break after "services;". Size, weight, line height (1.6) and text are unchanged; on a phone it wraps in four lines with no horizontal overflow.
Files: SupplyChain.tsx, Locations.tsx, Visions.tsx, InsideEtech.tsx (all in src/components/home). Checked on the development server in Chrome at 1440 and 390px; format, lint and types pass.

Leadership and Latest news top padding (13 October 2026, by request).
Leadership messages: no top padding (flushTop on its Section, which leaves the shared section padding rule itself untouched). Its heading is one section spacing below the Journey content (112, 88 or 64px by width) instead of two.
Latest news and updates: no top padding. This section never used the shared section padding: it had its own top padding of 72px (64px up to 1024px, 48px up to 640px), and that is what was removed. Its heading is now one section spacing below the Inside ETECH panel (was 184px at desktop). Its bottom padding (64, 56, 44px) and the rule beneath it are unchanged.
Files: src/components/home/Leadership.tsx, src/components/home/LatestNews.tsx. Checked on the development server in Chrome at 1440, 800 and 390px; format, lint and types pass.

Hero grid and detail page illustrations (13 October 2026, by request; these depart from etech-final.html on purpose).
Grid: the faint 64px grid (the grid-backdrop utility in src/styles/index.css) is no longer applied to the homepage hero (Hero.tsx) or to the header band of division and commodity pages (PageBand.tsx). Their background colours and radial gradients are unchanged. The utility itself is kept because the "page not found" page still uses it; that page is unchanged.
Illustrations: the header band of division and commodity pages no longer draws its illustrated scene, so its animations are gone from those bands too. PageBand no longer takes a scene, and DivisionPage and CommodityPage no longer pass one. The breadcrumb, group label, title, lead, figures, their widths, the band's padding and its minimum height are unchanged, so the band and everything below it measure the same as before. The homepage globe is untouched (same markup, same box).
Still present: Scene.tsx and its styles, because the project cards on a division page use the crane scene as their placeholder (ProjectGrid.tsx); the scene named for each division and commodity group in the data, now unused by the bands.
Checked on the development server in Chrome at 1440 and 390px on the homepage, /divisions/construction-real-estate, /commodities/bitumen and the "page not found" page; format, lint and types pass.

Latest news bottom, Inside ETECH and GCC visions top (13 October 2026, by request; they supersede the earlier notes above where they differ).
Latest news and updates: no bottom padding (was 64, 56 and 44px by width) and no rule beneath it; with the top padding removed earlier the section now has no padding of its own. Market watch follows with its standard top padding, so its heading is one section spacing below the news cards (116px at desktop, was 181px with a rule in between).
Inside ETECH and GCC visions: each has a top padding of one grid gap (pt-grid-gap: 24, 20 or 16px by width; was none). The space above each heading is now 97px at desktop, 85px at 800px and 72px at 390px (was 73, 65 and 56px). The two junctions still measure the same.
Files: src/components/home/LatestNews.tsx, InsideEtech.tsx, Visions.tsx. Checked on the development server in Chrome at 1440, 800 and 390px; format, lint and types pass.

GCC visions cards and note (13 October 2026, by request; these depart from etech-final.html on purpose and supersede the earlier notes on this section where they differ).
Cards: the 2px violet line across the top of each of the five cards is removed, and with it the drawing of that line from the left when the grid was revealed (Phase 5 note on the GCC card lines). Background, the 1px border on all four sides, the corner radius and the shadow are unchanged, as are the card hover and the reveal of the grid.
Inside each card: the space between the flag and year row and the title is one card padding (mb-card: 28px, 24px up to 640px; was 16px), the same on all five. Flags and years are where they were. Each card is 12px taller at desktop and 8px taller on a phone as a result; widths and the grid are unchanged.
Note: the space between the grid and the note is one card padding as well (mt-card: 28px, 24px up to 640px; was 12px). The note is set in the lead size (18px at every width; was 17px, and 16px up to 640px) with the same weight, colour, centring, 40rem maximum width and line height of 1.6. It is still two lines at desktop, breaking after "services;", and four on a phone, with no horizontal overflow. Its bottom margin is 1em, so the space below it grew by 1px at desktop and 2px on a phone.
File: src/components/home/Visions.tsx. Checked on the development server in Chrome at 1440 and 390px; format, lint and types pass.

GCC visions year weight (13 October 2026, by request): the year on each card is semibold (600; was light, 300). Size (2.5rem), violet colour, letter spacing, tabular figures, alignment and spacing are unchanged. File: src/components/home/Visions.tsx. Format, lint and types pass; not looked at in a browser, as the request asked for the checks only.

Footer layout (13 October 2026, by request; it departs from etech-final.html on purpose and applies to every page).
First row: the group's entities, wrapping naturally on narrow screens. Second row: the copyright line on the left ("© year ETECH Group of Companies"; the tagline "Excellence Across Horizons" is no longer part of it, as the requested layout gives the line without it) and "Website by Madhras.com" on the right, linked to https://www.madhras.com/. Up to 640px the second row stacks, copyright first. The LinkedIn link and icon are removed from the footer; the homepage LinkedIn section is unchanged. Type size, colours, the rule above the footer, its padding and the link's underline and hover are as before.
Files: src/components/layout/Footer.tsx; src/data/site.ts and src/types/site.ts (the footer's two LinkedIn labels removed, the credit link given its trailing slash). Format, lint and types pass; looked at once on the development server at 1440, 700 and 390px.

Favicon (13 October 2026, by request; it supersedes the earlier notes that the site has no favicon and that none is to be made up).
public/favicon.svg, referenced from the document head in src/root.tsx (link rel="icon", type image/svg+xml, href /favicon.svg), so every page and the 404 page carry it. public/ is new: Vite copies it to the root of build/client.
The drawing is the symbol of the earlier ETECH logo (img-logo in the previous site's repository), without the wordmark: a wide bar above a narrow block and a wider block. The current header logo is text only and was not changed. The request spoke of a four-part mark; that logo's symbol has three parts, and the user confirmed it as the one to use. It is drawn on a 32-unit square with every edge on an even unit, so it lands on whole pixels at 16 and 32px, in the brand violet (#533afd), and in the lighter brand violet (#9386fe) when the browser theme is dark. The gold colour and the embossed texture of the old logo are not reproduced.
An SVG icon only: there is no .ico or PNG fallback and no apple-touch-icon, so a browser that does not take SVG icons shows none.
Checked: format, lint, types and the production build pass; the file is in build/client and all 47 HTML documents reference it; drawn by Chrome at 16 and 32px on light and dark it has hard edges and two colours only.

ANIMATION

Phase 5A — audit (no code changed). Findings about etech-final.html that the later phases rely on:

Scroll reveal: 37 elements carry the class "reveal", all on the homepage. Each waits at opacity 0 and 24px low, and fades up into place over 700ms on cubic-bezier(.22,.61,.36,1) when 12% of it is in view. It happens once; there is no delay and no stagger; cards in a grid appear together because the grid is the revealed element. Under reduced motion everything is visible at once. etech-final.html has no fallback: if its script does not run, 36 of the 37 blocks stay invisible.
The 37 are: the heading block of 11 sections; in Supply chain the diagram card and the counter row; the Six lines grid; the Inside ETECH panel; in About the story grid, the motto and the aim; the 8 Journey milestones; the Why choose list; the Leadership cards block; the Team grid; in Global network the grid and the corridors line; in GCC visions the grid and the note; the Closing banner; the Market watch grid; the LinkedIn card; the Contact panel. Hero, Ticker and Latest news have none, and in Commodities only the heading is revealed.
Three special cases are tied to it: the four counters count up (a requestAnimationFrame loop), the Journey timeline is scroll-linked, and the line on the GCC vision cards draws in once their grid is revealed.

Decisions approved after the audit:

Counters stay static for now; no requestAnimationFrame count-up. (Superseded 12 October 2026 by request: they count up, without requestAnimationFrame; see the homepage refinements above.)
Deep links, reloads and history navigation: content that is on screen when the page starts stays visible; it is not hidden in order to be revealed.
The Journey timeline stays static under reduced motion (spec section 8 over the original's instant state changes).
The GCC visions note keeps the original's quirk when its reveal is implemented: 85% opacity before it is revealed, 100% after.

Phase 5B — shared scroll reveal, and the eleven section headings.

Mechanism: src/hooks/useReveal.ts. A component calls useReveal() and spreads the result (a ref and a data-reveal attribute) onto an existing element; no wrapper element is added. Every target shares one IntersectionObserver, created when the first target registers and disconnected when the last one is released. The state is React state: absent (not active), "hidden" (waiting) or "shown".
Rules: the observer's first report for a target decides its start: anything already on screen is "shown" at once and never hidden; anything else becomes "hidden". A hidden target is shown, and released from the observer, the first time 12% of it is in view, and stays shown. Targets are released when their component unmounts.
Styles: at the end of src/styles/index.css, outside the layers: html[data-hydrated] [data-reveal='hidden'] sets opacity 0 and translateY(24px); html[data-hydrated] [data-reveal='shown'] carries the 700ms transition on the brand easing. Both sit inside prefers-reduced-motion: no-preference. A revealed element must not set a transition of its own.
Progressive enhancement: the prerendered HTML carries no data-reveal attribute, so it shows everything; the attribute appears only once the app is running and the observer has reported. With scripts blocked the page is complete and its links work. This is a deliberate improvement on etech-final.html.
Reduced motion: the hook does nothing; no attribute, no observer, no transition.
Applied to: SectionHeading only, which renders the heading block of the eleven sections that have one (Supply chain, Six lines, Commodities, Inside ETECH, Our journey, Why choose, Leadership, Core team, Global network, GCC visions, Market watch). The other 26 reveal elements, the counters, the timeline and the GCC card line are not implemented yet.
Verified against etech-final.html: the same waiting state and position for all eleven at 390, 768, 1024, 1440 and 1920px; the same opacity, offset, geometry and timing with both pages frozen at 0, 175, 350 and 700ms (124 comparisons, and the screenshots of those frames identical); the same trigger point (16px of a 128.7px heading); revealed once; identical resting state pixel for pixel after a real reveal.

Note on comparisons (found in Phase 5B, explains the one-off Leadership anomaly of Phase 4L): Google Fonts answers the same Inter stylesheet request in two ways. About one request in fifteen points at a differently built font file, which renders the same layout with slightly different letter edges. A test run in which one page received that variant showed thousands of differing text pixels for that page; giving the React page that variant on purpose reproduces those screenshots exactly. The comparison scripts now give both pages the same copy of the usual stylesheet. Visitors may receive either variant from Google, as they do on etech-final.html; hosting the font files with the site would remove the variation and is a possible later decision.

Phases 5C to 5G — the remaining scroll reveals, the GCC visions card line, and the Journey timeline and counter decisions (12 October 2026). The hook and the styles of Phase 5B are unchanged.

Phase 5C and 5D — the reveal on the remaining targets. useReveal() is now also used for: the Supply chain diagram card and counter row (SupplyChain.tsx); the Six lines grid (BusinessLines.tsx); the About story grid, motto and aim (About.tsx); each of the eight Journey milestones (Journey.tsx); the Why choose list; the Leadership cards block; the Team grid; the Global network grid and corridors line; the GCC visions grid and note; the Closing banner; the Market watch grid; the LinkedIn card; the Contact panel. In every case the attribute goes on the element that already existed; no wrapper was added and nothing else in the markup changed.
Two supporting changes: src/components/ui/Container.tsx passes any other div property through to its element, because the About story grid is a Container; and Journey.tsx renders each milestone through a small Milestone component in the same file, because a hook cannot be called inside a loop. The rendered markup is the same.
Coverage: the 37 reveal elements of etech-final.html = 11 section headings (Phase 5B) + 25 added here + 1 left out. The one left out is the Inside ETECH panel: InsideEtech.tsx is not modified, so the panel is always visible and only that section's heading is revealed. The earlier per-section notes that say a fade-in "is not implemented yet" are superseded by this, except for that panel.

GCC visions card line: while its grid waits to be revealed each card's top line has zero width; when the grid is revealed the line draws from the left to full width over 800ms on "ease", starting 200ms after the reveal, once, and does not run again. It is two classes on the card in Visions.tsx, tied to the grid's data-reveal attribute and to prefers-reduced-motion: no-preference; there is no script, timer or state of its own. Without the attribute (scripts blocked, reduced motion, no IntersectionObserver, or a grid that was already on screen when the page started) the line is simply complete.
Deliberate difference: etech-final.html under reduced motion keeps the line at zero width until its grid has scrolled into view, and for good if its script does not run. Here it is always complete in those cases.
GCC visions note: keeps the original's quirk. Waiting, it is not hidden but shown at 85% opacity, 24px low (an important utility on the note overrides the opacity of the general waiting rule); revealed, it goes to 100% and into place over the same 700ms.

Phase 5E — Journey timeline: left static, deliberately. The Phase 4I resting state stays in every browser: the line fully drawn and all milestones in full colour. Each milestone still fades in by itself as a reveal target.
What was investigated: a CSS-only prototype with scroll-driven animations (a view timeline on the list for the progress line, one on each milestone that switches registered custom properties, colours derived from those with color-mix so that the 400ms colour transitions still run) was injected into the built page in the test browser only; no project file contained it. In Chrome 154 it matched etech-final.html at all 72 scroll positions tested at 1440 and 390px: line progress within 0.0001, and all 576 milestone readings (year, title, text and dot colours, dot ring) equal.
Why it was not adopted: it could be tested in Chrome only, not in Safari or Firefox; it depends on several newer features working together (view timelines with insets and range offsets, animated registered properties, transitions started by an inherited animated property), and a browser that accepts the first but handles another differently could leave the milestones dimmed, which no @supports test can detect; the highlighted card, the 0.2s smoothing of the line and the interplay with each milestone's own 24px reveal offset were not prototyped; and it would make the section's look depend on the scroll position in supporting browsers only. With the deadline two days away this was judged not safe enough. It remains a possible later enhancement once it can be checked in Safari and Firefox.

Our journey, scroll-driven timeline (12 October 2026, by request; an isolated change to src/components/home/Journey.tsx). This replaces the static timeline described above and under Phase 4I, and its layout now differs from etech-final.html on purpose.
Behaviour: each milestone is still one reveal target of the shared reveal, unchanged, so it fades up once when it scrolls into view and stays. The line and the checkpoints follow that state through CSS alone, with no script, observer, timer or state of their own. The line is drawn per milestone: each row carries the stretch from its checkpoint to the next one's, a pale track that fills with violet from the top over 700ms when the next milestone is revealed, so it arrives as that milestone settles. The last row has no stretch, so the line starts on the first checkpoint and ends on the centre of the last, whatever the text lengths. A checkpoint is violet once reached; the latest one reached is navy with a violet ring.
It relies on the :has() selector. Where that is missing, where the reveal is not running (reduced motion, no script, no IntersectionObserver) and before the app starts, the timeline is simply complete: every milestone visible, the line violet throughout, no checkpoint singled out.
Spacing: the year, the checkpoint and the first line of the heading are level in every row. From one milestone's text to the next heading is 56px throughout (48px on phones), however many lines a description has; this was 32px at first and was widened on request the same day. Every milestone's text starts at the same place; the highlighted Saudi Arabia card keeps its look and is drawn around its text, reaching 19px above and below it and 21px to each side. On phones a year stays on one line.
Active card (added on request the same day): the content of the latest milestone reached takes the look of the Saudi Arabia card (same border, surface, corners, padding and shadow), fading in over 300ms, and loses it when the next milestone is reached. Every milestone's content has that box at all times, invisible until then, so nothing moves or changes size. The Saudi Arabia milestone stays a card throughout. Two cards next to each other are 18px apart (10px on phones). Without the reveal running, only the Saudi Arabia milestone is a card.
Revised on request the same day; this supersedes the description of the behaviour and of the active card above. The line now follows the visitor's scrolling instead of being drawn by a timed transition: it is drawn down to a fixed height of the screen (80% of the way down), forwards and back, and stops on the last checkpoint. A milestone still fades in through the shared reveal as it comes into view; it becomes the latest one, with the navy checkpoint and the card, only when the line reaches its checkpoint. No milestone is a card by default any more: the Saudi Arabia milestone is plain until it is the latest and plain again after. A checkpoint the line has not reached is an open ring.
How: while the timeline is on screen or within a screen's height of it, a passive scroll listener (attached and removed by an IntersectionObserver) works out how far the line has come and writes it to each row as a CSS variable; React state holds only the index of the latest milestone. No timer, no requestAnimationFrame, no :has() selector any more. Under reduced motion, without script and without IntersectionObserver the effect does nothing: the timeline is complete, the line violet throughout, no milestone boxed.
Checked at 1440 and 390px: a milestone already faded in but not active 14px before the line reaches its checkpoint, the latest 14px after; only the latest is a card, at every step; the end of the line stays at the same height of the screen; it retreats when scrolling back up; it ends exactly on the last checkpoint; nothing changes place or size.
Not changed: the wording, dates and order of the milestones, the section heading, the shared reveal.
Verified at 1440, 768 and 390px: nothing shown before the timeline is reached; each milestone revealed in turn with the line drawn to it and it alone marked; the line and the fade caught mid-way together; everything still shown after scrolling away and back; the line through the centre of every checkpoint and ending exactly on the last; years ending and text starting on one line each; no sideways scrolling; complete and still under reduced motion and with scripts blocked; milestones on screen at a direct load of /#journey shown at once.

Phase 5F — counters: static, by decision; no requestAnimationFrame anywhere in src. The counter row is one reveal target and the four counters have no reveal of their own, so they fade up together as one block. The values (1989, 39, 6, 20,000+) are the same text in the prerendered HTML, while waiting, during the reveal and afterwards, and under reduced motion; the text is never changed by script.

Phase 5G — verification (Chrome 154, React build against etech-final.html).
Targets: at 390, 768, 1024, 1440 and 1920px the 36 React targets are the same elements as the original's (tag, parent, position among siblings), in the same place and size, waiting in the same state (35 at opacity 0 and 24px low, the note at 85%).
Frames: with both pages frozen at 0, 175, 350 and 700ms of each target's transition, opacity, offset, geometry and timing are identical in all 720 comparisons (36 targets, 4 moments, 5 widths): opacity 0, 0.5943, 0.8729, 1; offset 24, 9.738, 3.051, 0px; the note 0.85, 0.9391, 0.9809, 1. Of the 720 screenshot pairs 680 were identical at once. The other 40 were re-captured with other sections' own clocks stopped on both pages (the supply-chain diagram's moving dots, the Inside ETECH tabs' auto-advance): identical, except 12 frames of the Six lines heading while it is in mid-transition (768px and wider, 140 to 228 pixels each, none above 8/255), which become identical when the original's Six lines wrapper is made static in the test — the known layering cause of Phase 4H, not to be fixed. One frame differed by 3 pixels (none above 8/255) in the first capture and not in two re-captures.
Card line: the same width share as the original at nine moments from 0 to 1200ms at 390 and 1440px (0 until 200ms, 0.1369 at 300ms, 0.4085 at 400ms, 0.8024 at 600ms, 0.9605 at 800ms, 1 from 1000ms); screenshots at 400, 600 and 1000ms identical; nothing runs again after leaving and returning.
Trigger: six targets of very different heights at 390 and 1440px reveal at the same pixel as the original, the first at which 12% is in view; each stays revealed, with no second transition.
Observer: one shared observer for the 36 targets, thresholds 0 and 0.12; after scrolling the page all 36 are shown exactly once, each released, and the observer disconnected; scrolling back hides nothing; leaving the homepage with targets waiting releases all of them; returning creates exactly one observer again.
Fallbacks: reduced motion (no observer, no attribute, everything visible, lines complete, also on a hash load and a reload); scripts blocked (not hydrated, everything visible, header links and hash loads work); no IntersectionObserver (everything visible, no errors); direct loads of /#how, /#about, /#journey, /#visions and /#contact, a reload part-way down and a return through history never hide anything that has been seen; tabbing through the whole page (132 presses) never leaves a target in view waiting.
Reach: on screens from 320x480 to 1440x900, including phones in landscape, the most demanding target needs at most 60.5% of the viewport height in view to be revealed (the Six lines grid at 568x320), so every target can always be revealed.
Resting state after a real reveal: 75 whole-section screenshot pairs at the five widths are identical with other sections' clocks stopped, except 2 pixels (7/255 at most) at the top right corner of the Contact panel at 390px, which are the same with the reveal forced instead of real, so the reveal does not cause them; their cause was not established.
Regression: the eighteen section suites give exactly the earlier counts (exact / above 8 of 255): Hero 20,835 / 0; Ticker, Latest news and Supply chain 0; Six lines 331 / 183; Commodities 526,806 / 4; Inside ETECH 1,576,884 / 37; About 119,971 / 1, and 0 with the icon animations stopped; Journey, Why choose, Leadership, Team, Global network, GCC visions, Closing banner, Market watch and LinkedIn 0; Contact 1,136 / 964, all in the footer's copyright line. The causes are the ones already recorded (Six lines layering, footer text nodes). Also passing: the shell and route checks, header and footer geometry (0 differences), the hover check in development mode, and the 41 Inside ETECH behaviour checks. Prettier, ESLint, TypeScript and the data validation pass; the build prerenders 46 pages plus 404.html; vercel.json is unchanged.

There are no further pages to build for About, Leadership, Team, Locations, GCC Visions, Markets and Contact. They are homepage sections.

DIVISION PAGES

Implement the design of:

/divisions/:slug

There is no /divisions index page. The division cards live in the homepage "lines of business" section.

Use shared components and typed data.

Verify all 6 divisions.

Verify the workforce photo slider on /divisions/workforce-solutions.

Verify invalid division routes show NotFoundPage.

COMMODITY PAGES

Implement the design of:

/commodities/:slug

There is no /commodities index page. The commodity grid and its category filter live in the homepage commodities section.

Verify all 39 commodities.

Verify invalid commodity routes show NotFoundPage.

Division and commodity pages — implemented (12 October 2026).

Before: the 45 routes, their data, their metadata and their prerendering already existed, but both pages were shells that showed only the title and the lead paragraph. Now both are built from the two page templates of etech-final.html (its divisionPage and commodityPage functions), with the data already in src/data. No data, slug, route or deployment setting changed; the build still prerenders 46 pages plus 404.html.

Pages: src/pages/DivisionPage.tsx and src/pages/CommodityPage.tsx. Each renders only the blocks its record has.
Division page: header band; "Our people at work" photo slider (Workforce Solutions only); "What we offer" with the closing note and "Our roots" where present, beside the enquiry panel; the project grid (Construction only); the related commodities under the heading the data gives ("Products" or "Related supply").
Commodity page: header band with the group as a tag; "From the field" gallery (2 commodities); the range cards (2 commodities); the specification table with its note, "Quality documents" and "Licences & compliance" where present, beside the enquiry panel; up to four other commodities of the same group.

Shared components, in src/components/detail: PageBand (band, breadcrumb, tag, title, lead, headline figures), QuoteAside, RelatedCommodities, OfferList, ProjectGrid, PhotoSlider, PhotoGallery, RangeCards, SpecTable, SpecNote, and styles.ts (block heading, two-column layout).
Also new: src/components/illustrations/Scene.tsx, the seven header scenes generated from the drawing data of etech-final.html, with their movement in src/styles/illustrations.css (stopped under reduced motion); src/lib/divisions.ts and getRelatedCommodities in src/lib/commodities.ts (which records a page lists); src/lib/mail.ts (the enquiry and specification-request email links, to the primary address with the subject of etech-final.html).
Small changes to shared files: Section has a flushBottom option; src/styles/index.css has the slider's progress-bar animation token. Nothing on the homepage uses either.
Validation (src/data/validate.ts) now also checks what the pages rely on: a commodity's slug is the one etech-final.html derives from its name; every division and commodity has a name and lead; a division has offers; and the values used as list keys are unique (offer titles and items, headline labels, range codes and figures, photographs, project names).

Decisions and deliberate differences:
Headline figures are static; in etech-final.html the numeric ones count up (Phase 5F decision).
The pages have no scroll reveal; the templates of etech-final.html have none either.
Photo slider: as etech-final.html — one photograph at a time in a row that can be swiped, previous and next buttons, dots, moves on every 4.5s with a progress bar while on screen, pauses on hover, focus and touch, restarts after a button is used; under reduced motion no autoplay, no bar, no sliding. Its timers are the only script-driven motion on these pages (no requestAnimationFrame). In a browser without IntersectionObserver it does not move by itself (etech-final.html would fail there).
Gallery photographs: under reduced motion the slight enlargement on hover is immediate. In etech-final.html a later style rule switches its 600ms transition back on for those visitors; this is not reproduced.
Kept as in etech-final.html and listed for review: the enquiry panel and "More …" headings put the name in lower case, which lowers abbreviations too ("Request lng & lpg", "Request jet fuel a1"); the notes under the specification table are h4 directly under an h2; the breadcrumb is a plain div; the slider arrows use the browser's own button typeface.
The chat launcher that etech-final.html shows on every page belongs to the chat phase and is not built.

Verified against etech-final.html (Chrome 154):
Every element of all 45 pages at 390, 768, 1024 and 1440px: same tag, text, link target, image description, position and size (within 0.05px), about 75 computed style properties, pseudo-elements, the scene's drawing data, colours and animation settings, document title, description and heading levels. All 180 page comparisons are identical. (Two runs out of about 560 showed one reading of the original's container margins as 0px with identical geometry; it did not recur in three repeats.)
Screenshots of all 45 pages at the same four widths, with the scene frozen and the slider stopped on both sides: no pixel differs by more than 8/255 outside the chat launcher. Outside the header and the launcher, 18 of 45 pages at 1440px and 29 at 390px are identical; the others differ by at most 2/255 in the lower left of the band. That is not caused by the gradient's notation, the blur behind the figures or the header (each was removed in a test without effect); its cause was not established.
Routes: each of the 45 loads directly and after a refresh with the right record, title, canonical URL and description; its 270 internal links lead to existing pages and sections and its 84 email links carry the right subject; no console error or warning. Seven unknown addresses give the not-found page with status 404.
Navigation inside the app: homepage card to division page, related commodity, back and forward (the homepage returns to its scroll position), the three breadcrumb links, "More …" links, a header link from a detail page, and an old /#/division/… address.
Slider: the same result as etech-final.html at every step of one script run on both pages (labels, captions, next, dots, wrap-around in both directions, countdown, pause on hover and on focus, stop off screen, keyboard, swipe, reduced motion).
Hover: resting and hovered state the same as etech-final.html for the related card, project card, gallery photograph, range card, enquiry button, breadcrumb link and specification link, in normal and reduced motion (apart from the gallery difference above).
Also: no sideways scrolling or text past the screen edge on any of the 45 pages at 320, 360 and 1920px; nothing animates under reduced motion; with scripts blocked the prerendered pages are complete and their links work; in development mode 14 pages and an unknown address give no React warning.
Homepage and shell after the change: the eighteen section suites give the same pixel counts as recorded under Phase 5G; the shell, header and footer geometry, hover, 41 Inside ETECH and reveal checks pass.

CHAT ASSISTANT

Implement the FAQ assistant, including its interface labels (section 37).

Verify:

open
close
Escape
recognized questions
unrecognized questions
follow-up form
validation
email action
reopening
no duplicate forms

Chat assistant — implemented (12 October 2026).

What it is: the "Ask ETECH" assistant of etech-final.html, a launcher fixed to the bottom right corner of every page and a panel with a conversation, suggested questions and a question field. It is a local FAQ matcher. It is not an AI chatbot, and it contacts no service: no API, backend, database or new dependency.

Files: src/components/chat/ChatAssistant.tsx (launcher, panel, conversation state), ChatMessage.tsx, ChatInput.tsx, ChatFollowUpForm.tsx and styles.ts; src/lib/faq.ts (the matching rule); src/data/chat.ts (the 25 interface texts, each found word for word in etech-final.html); src/types/chat.ts; src/components/icons/ChatIcon.tsx (the launcher's icon, the drawing of etech-final.html). The questions, answers, greeting and fallback reply stay in src/data/faq.ts, unchanged. The assistant is mounted once in src/components/layout/SiteLayout.tsx, so it is on the homepage, every division and commodity page and the not-found page, and its conversation is kept while the visitor moves between pages (a reload starts it again, as in etech-final.html). src/lib/mail.ts can now add the text of an email.

Behaviour, as in etech-final.html:
The launcher opens and closes the panel; the close button and Escape close it. Opening greets once, shows the suggestions and puts the cursor in the question field; closing returns focus to the launcher. Reopening shows the same conversation.
A suggested question shows its own answer after 300ms. A typed question is matched against the keywords of the 25 entries: every keyword found in the lower-cased text scores its length, the highest total wins, the earlier entry on a tie. No match gives the fallback reply and the follow-up form.
After the second answer the follow-up form is offered once, 600ms later. "Talk to our team" shows "Talk to your team" as the visitor's message and offers the form.
The form sits inside the conversation. All fields are optional; the only validation is the browser's own check of the email field. "Send to ETECH" opens the visitor's email app (a mailto link to the primary address, subject "Website chat enquiry", the details and the whole conversation as text), removes the form and says so. "No thanks" removes it and gives the email address.
The newest entry is always scrolled into view.

Deliberate differences from etech-final.html:
Only one follow-up form is ever shown (section 38). Asking for it again moves the one form to the end of the conversation and keeps what was typed in it; etech-final.html adds another form each time.
Not built, because the static file never uses them: the AI branch (its "ai" setting is false), sending the form to a server (its "ajax" address is empty), and with that the hidden spam-trap field and the "Sending…" state. The assistant therefore has no loading or error state; the pauses of 300ms and 600ms are the only waiting.
The assistant is not in the prerendered HTML: it appears once the app is running, as in etech-final.html, where a script creates it. With scripts blocked there is no launcher.
On small screens the panel's height follows the visible height of the screen (dvh) where the browser supports it, so that the header and its close button are not cut off when the browser's own bars are showing. Where it is not supported the height is the one of etech-final.html.
Under reduced motion the launcher changes colour without its 200ms transition. In etech-final.html it keeps it.
Kept as in etech-final.html: the buttons inside the panel use the browser's own button typeface; the launcher's name stays "Open chat with ETECH" when the panel is open (aria-expanded says which); at the very foot of the page on wide screens the launcher lies over the footer's LinkedIn link.

Verified against etech-final.html (Chrome 154):
Every element of the launcher and panel in eleven states (closed, opened, a suggestion answered, an unrecognised question with the form, the form filled in, declined, a typed question answered, the team asked for, the form sent, closed again, reopened) at 390, 768, 1024 and 1440px wide and on two short screens: same tag, text, attributes, position and size, about 70 computed style properties, and the scroll position of the conversation. All 66 comparisons are identical. The email the form asks for is the same on both pages.
Screenshots of the same 66 states with the page behind hidden: 35 pairs are identical and 31 differ, by at most 106 pixels each (1,816 in all); none of those pixels differs by more than 8/255, except 6 pixels on the top edge of the round send button in 5 pairs (up to 30/255). In context, on six detail pages with the assistant on both sides, nothing differs by more than 8/255; before, the missing launcher was the only such difference on those pages.
Replies: the 26 suggestions are the same in the same order; each of the 25 questions gives the answer of the source; 35 typed questions (recognised, unrecognised, upper case, padded, single words) get the same reply as in etech-final.html; the two conversations are the same message for message (121 messages). In that session etech-final.html showed six follow-up forms, React one.
Behaviour of the React assistant: open and close by launcher, close button and Escape with focus handled; empty questions ignored; send by Enter and by button; the form offered once after two answers; one form only, with its contents kept; an invalid email address stops the form and a valid one produces the right email; a long conversation scrolls inside a panel that keeps its size.
Accessibility: names and roles of the launcher, close button, send button, question field (a hidden label), dialog and live conversation, with no ARIA beyond those nine attributes; keyboard only from the footer to the launcher, open, ask, through close, the 26 suggestions, the field and send, and Escape back to the launcher; a visible focus outline on buttons and a violet ring on fields; reduced motion; on screens from 320x568 to 1920x1080 the panel and launcher fit, do not overlap, cause no sideways scrolling, and the close button can always be reached.
Routes: on a direct load of the homepage, the 45 detail pages and an unknown address the assistant is present once, above the page content, and answers; it stays open with its conversation through navigation, back, and a header link to a homepage section, and the page still scrolls. No console error or warning; in development mode a full session gives no React warning.
After the change: the eighteen homepage suites give the recorded pixel counts; all 45 detail pages are still identical to etech-final.html element for element; the detail-page behaviour, shell, header and footer geometry, hover, 41 Inside ETECH and reveal checks pass; the build prerenders 46 pages plus 404.html.

ANIMATION + POLISH

Implement only approved animation.

Verify:

normal motion
reduced motion
no excessive animation
no layout shift
no unnecessary JavaScript animation loops
approved CSS/native animation from etech-final.html is preserved
supply-chain dots are static under reduced motion

SEO + ACCESSIBILITY

Implement:

titles
descriptions
canonical URLs
Open Graph metadata
semantic structure
alt text
keyboard support
focus states
aria attributes

Final QA: SEO, accessibility, not-found page, deployment readiness (12 October 2026). An audit with minimal fixes; no design, content, slug, data, chat or animation change.

SEO.
Audited in the generated HTML of all 47 files, read without JavaScript: one title, one description and one canonical URL per page, all unique, each equal to the text of etech-final.html (page name with " — ETECH Group"; the division lead or commodity use); canonical URLs absolute, on https://www.etechglobe.com, without trailing slash; language en; viewport and charset present; one h1 per page; every image with alternative text and size; every link named and pointing at an existing page or section; no duplicate ids; the Organization data once; the page text present in the HTML (166 to 2,616 words per page).
Fixed: the division and commodity pages had no link-preview title, description or URL (only the homepage did). PageMeta now writes og:title, og:description and og:url for every page that has a canonical URL, from the page's own title and description; the homepage keeps its separate preview texts from etech-final.html. There is still no preview image and no favicon (section 78).
Added: sitemap.xml and robots.txt, written at build time by the buildEnd hook in react-router.config.ts from the same list of paths that is prerendered and the same origin as the canonical links, so they cannot drift from the routes. The sitemap lists the 46 canonical URLs and nothing else; robots.txt allows everything and names the sitemap. They are files in build/client, not pages: the count stays 46 prerendered pages plus 404.html.
Metadata while moving inside the app: each page shows exactly one title, description, canonical and preview URL of its own; the not-found state has none and is marked noindex.
Not added: analytics, tracking, further structured data, the content security policy of the old single file (section 76).

Accessibility.
Fixed: the notes under the specification table are now h3 (etech-final.html has h4 directly under an h2, a skipped level); their type is set in full, so they look the same. The breadcrumb is now a nav element named "Breadcrumb" (a plain div in etech-final.html). The detail pages remain identical to etech-final.html element for element apart from these two tags.
Corrected afterwards, on request (12 October 2026): the "Request …" heading of the enquiry panel no longer puts the whole commodity name in lower case, which miswrote five names. It now uses the name as written in the data and drops only the capital of an ordinary first word (nameInSentence in src/lib/commodities.ts): "Request barite (API grade)", "Request diesel EN590 10 ppm", "Request jet fuel A1", "Request LNG & LPG", "Request fuel oil D6". The other 34 headings read exactly as before. With the same text given to etech-final.html in the test browser, all 45 pages are still identical to it at four widths.
Audited in the rendered pages (homepage, two division pages, three commodity pages, the not-found page; 1440 and 390px): landmarks (header, main navigation, main, complementary, footer, the breadcrumb, the slider region, the assistant's dialog); no interactive element without a name in the browser's accessibility tree; images either described or decorative with empty text; 0 texts below the required contrast on a plain background.
Keyboard: on four page types at both widths every tab stop (6 to 85 per page) shows a focus indicator, is on screen and never under the fixed header, forwards and backwards; no positive tabindex; the mobile menu opens with Enter, and Escape closes it and returns focus. The assistant's keyboard, focus and dialog behaviour are recorded under Chat assistant.
Noted, not changed (all as in etech-final.html): the small labels under the headline figures on the band (about 4.4:1 by estimate, on a blurred gradient) and the placeholder texts of the assistant (4.37:1 and 4.46:1, the browser's default grey) are just under 4.5:1; the slider's dots are 9px (the previous and next buttons, 44px, do the same); two standalone text links are 20 to 21px high; gallery and slider photographs repeat their caption as alternative text; there is no skip link.

Not-found page: finished. etech-final.html has no such page, so it uses only existing parts: the white ground and faint grid of the hero, a section-sized heading, a lead paragraph and the primary button, centred in a section that fills the screen below the header. Title "Page not found — ETECH Group", noindex, no canonical. It is what unknown division and commodity slugs, any other unknown path and the static 404.html show.

Footer: the copyright line finding of Phase 4R is resolved. The text after the year is now one piece, as in etech-final.html (the year in its own span). The Contact suite, whose screenshots include that line, went from 1,136 differing pixels (964 above 8/255) to 0.

Deployment readiness, checked on the production output served the way vercel.json describes (a local server; not the live host): build command "npm run build" (type check, then react-router build), output build/client, no framework preset, no rewrites; a detail URL answers 200 with its own HTML and survives a refresh; a trailing slash redirects (308) to the URL without; /index.html redirects (308) to /; unknown URLs answer 404 with 404.html; every asset the pages refer to exists; nothing refers to a development server; all 46 sitemap addresses answer 200 without a redirect. vercel.json was not changed.

Not verified: the live deployment (no access to the host or its logs from this environment); Safari (its remote automation is switched off on this machine) and Firefox (it started headless but never opened its automation port); real phones. Everything above was run in Chrome 154.

Regression after these changes: the eighteen homepage suites reproduce the recorded pixel counts, with Contact now at 0; all 45 detail pages at four widths identical to etech-final.html apart from the two tags above (180 comparisons); the route sweep, navigation, slider, hover, overflow, motion and no-script checks of the detail pages; the assistant's 28 checks; shell, header and footer geometry (0 differences), hover in development mode, the 41 Inside ETECH checks and 60 reveal checks all pass.

TESTING

Run:

npm run build
npm run lint

Perform browser testing.

Test every route.

Test all:

6 divisions
39 commodities
filters
navigation
mobile menu
quote links
contact
chat
404
responsive widths

CLEANUP

Remove:

unused files
unused imports
unused dependencies
dead CSS
duplicate components
temporary code
debugging logs
migration leftovers

Do not remove anything that is actually required.

80. CLAUDE CODE WORKING RULES

Claude Code MUST:

Inspect before modifying.
Explain major architectural decisions.
Work incrementally.
Keep the application buildable after each major phase.
Run tests after significant changes.
Avoid unrelated refactors.
Avoid redesigning approved sections.
Avoid installing unnecessary dependencies.
Preserve source content.
Keep TypeScript strict.
Keep components reasonably small.
Prefer reusable data-driven architecture.
Use React patterns instead of DOM manipulation.
Fix errors rather than hiding them.
Report important assumptions.
81. IMPORTANT: DO NOT OVER-ENGINEER

This is a static corporate website.

Do not turn it into an enterprise application architecture.

We do NOT need:

Redux
Global state framework
API layer
Repository pattern
Service layer for static data
Dependency injection
Backend abstraction
Database abstraction
GraphQL

unless a genuine future requirement is introduced.

Good architecture means:

simple
typed
reusable
maintainable
predictable

not:

complex
abstract
over-engineered
82. IMPORTANT: DO NOT CREATE A GIANT APP.TSX

This is explicitly prohibited.

Under the approved React Router architecture there is no App.tsx. The same rule applies to src/root.tsx and to the route modules in src/pages/: they must remain small.

src/root.tsx should only establish the document shell and application-wide structure.

The website belongs in:

pages
sections
components
data
83. IMPORTANT: DO NOT CREATE A GIANT CSS FILE

Do not copy the entire original CSS.

Use:

Tailwind
CSS variables
small intentional custom CSS

The final CSS should be understandable.

84. IMPORTANT: DO NOT BLINDLY CONVERT HTML

A literal conversion such as:

<section>
  <div>
    ...
  </div>
</section>

into:

<section>
  <div>
    ...
  </div>
</section>

is NOT the goal.

Instead:

HTML structure
     ↓
Understand design intent
     ↓
Identify reusable pattern
     ↓
Create React component
     ↓
Feed typed data
     ↓
Render component
85. ACCEPTABLE REUSE

Reuse is encouraged when it improves:

consistency
maintainability
accessibility
performance

Examples:

Card
Button
Container
SectionHeading
CommodityCard
DivisionCard
TeamCard
LocationCard

But avoid creating abstractions that are used once.

86. FINAL QUALITY STANDARD

The finished React site should satisfy:

Visual

The user should be unable to tell that the site was migrated from a single HTML file merely by looking at it.

It should visually match the approved etech-final.html.

Technical

The code should clearly be a modern React application.

TypeScript

No unnecessary any.

Architecture

Data and UI separated.

Routing

Proper routes, no hash-routing dependency.

Performance

Lightweight and static-friendly.

Accessibility

Keyboard and screen-reader-friendly.

Responsive

Works across mobile, tablet, laptop and desktop.

Deployment

Builds successfully and works on Vercel.

87. DEFINITION OF DONE

The migration is NOT complete merely because:

npm run dev

works.

It is complete only when:

React app builds successfully
TypeScript passes
ESLint passes
all required routes work
all 6 divisions exist
all 39 commodities exist
all major sections exist
responsive behavior works
header works at the 1180px breakpoint
mobile navigation works
commodity filters work
quote/contact behavior works
FAQ assistant works
404 route works
images load
no console errors
no horizontal overflow
reduced motion works
SEO basics exist
visual comparison against etech-final.html is satisfactory
unnecessary legacy code has been removed
88. FINAL INSTRUCTION TO CLAUDE CODE

Before beginning implementation:

Read this entire document.
Read the entire etech-final.html.
Analyze the HTML structure.
Identify all data.
Identify all pages.
Identify all interactions.
Identify all assets.
Identify all responsive rules.
Identify all animations.
Produce a concise implementation plan.

Then STOP.

Do NOT immediately generate the entire application.

Wait for the next instruction before beginning Phase 1.
```
