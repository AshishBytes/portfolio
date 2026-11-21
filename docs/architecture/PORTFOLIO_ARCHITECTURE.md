# Portfolio Architecture

## Application boundary

`apps/portfolio` is an independently buildable Vite application inside the existing pnpm workspace. The root workspace manifest, root scripts, and `apps/main` remain unchanged. Only the root lockfile gains the portfolio importer and its dependency graph.

## Stack

| Area                       |       Version |
| -------------------------- | ------------: |
| React / React DOM          |        19.3.1 |
| Vite                       |         8.3.8 |
| TypeScript                 |         7.0.2 |
| Tailwind CSS / Vite plugin |         4.3.5 |
| React Router DOM           |        7.18.5 |
| Motion                     |       14.12.0 |
| React Hook Form            |        7.92.0 |
| Zod / resolver             | 4.6.7 / 7.0.5 |
| Vitest                     |         4.1.0 |
| jsdom                      |        26.1.0 |
| Playwright                 |        1.65.0 |

Vitest 5.1.0 and jsdom 31.0.0 were rejected after registry/engine inspection showed their resolved Undici requires Node 22.19+. The monorepo is on Node 20.19.4. Vitest 4.1.0 supports that Node version and Vite 8; jsdom 26.1.0 supports Node 18 and later.

ESLint 10 validates JavaScript configuration files. Oxlint validates TS/TSX, React, import, and JSX accessibility rules. The TypeScript compiler performs full source type checking; this avoids overriding the unsupported TypeScript 7 peer range of the current typescript-eslint parser.

## Source and content policy

- Resume-backed work history, education, project summaries, skills, awards, and publication summaries are modeled as typed data and validated with Zod.
- The existing profile photo, resume PDF, and ICO favicon are copied into the new app. The editorial hero, biography, favorite, experiments, articles, and selected works are rebuilt using the structure of the existing monorepo homepage as visual reference.
- No project repository or live destination is shown until verified. Legacy testimonial records remain isolated as source material and are not rendered without attribution and publication permission.
- Article previews can link to a separate HTTPS blog origin through `VITE_BLOG_ORIGIN`; the portfolio does not host a duplicate blog.
- Missing author data, publication permalinks, project screenshots, and testimonial consent are tracked in `REPOSITORY_AUDIT.md`.

## Rendering and routing

The browser uses React Router with route-level lazy imports. Vite builds a separate SSR entry that renders each public route through React Router's `StaticRouter`; React streams the resolved Suspense content into the route HTML before the browser hydrates it. The build writes 13 route documents, a static `404.html`, and an XML sitemap, then verifies titles, headings, canonical metadata, JSON-LD, and page content from the output.

The Vercel project uses clean URLs and serves the generated route directories. Unknown paths use the generated 404 document. React Router handles client navigation and browser history; a scroll-restoration hook resets on pushed routes and restores saved positions on browser back/forward.

## State and interactions

The theme preference is a small browser storage-backed external store consumed with `useSyncExternalStore`, preserving the server-rendered light default and restoring saved preference after hydration. The mobile menu is local component state. No global state library is needed.

The contact form validates with React Hook Form and Zod. A configurable HTTPS provider boundary posts JSON only when configured. Otherwise, submission creates a `mailto:` draft and clearly reports that the visitor's email app must send it.

## Validation

- `pnpm --filter portfolio typecheck`
- `pnpm --filter portfolio lint`
- `pnpm --filter portfolio test`
- `pnpm --filter portfolio build`
- `pnpm --filter portfolio test:e2e` (after build)

The browser suite checks all routes, active navigation, back/forward, the theme toggle, contact validation/fallback, internal links/assets, mobile overflow, prerender metadata, and axe checks in light and dark themes.
