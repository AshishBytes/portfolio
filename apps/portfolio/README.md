# Ashish Bytes Portfolio

The portfolio application is a React 19, Vite 8, TypeScript 7 and Tailwind CSS 4 app in the pnpm workspace. It is built and deployed independently from `apps/main` as the recruiter-facing portfolio.

## Local development

See the root [README.md](../../README.md) for monorepo-wide prerequisites (Node 26, pnpm 8.15.0 via Corepack) and first-time setup.

Run commands from the monorepo root (`portfolio-website-build`):

```bash
pnpm --filter portfolio dev
```

Vite serves the portfolio at `http://localhost:5173` and supports direct route loading during development.

## Build and quality commands

Run from the monorepo root:

```bash
pnpm --filter portfolio typecheck
pnpm --filter portfolio lint
pnpm --filter portfolio test
pnpm --filter portfolio build
pnpm --filter portfolio test:e2e:install
pnpm --filter portfolio test:e2e
```

The production build type-checks the app, builds browser and server bundles, prerenders every public route, emits sitemap data and robots directives, and verifies the generated route HTML. Run the E2E suite after a successful build; it launches Vite Preview and checks route rendering, navigation, mobile overflow, contact behavior, SEO metadata, and axe accessibility.

To inspect the production build locally:

```bash
pnpm --filter portfolio preview
```

## Environment variables

Copy `.env.example` to `.env.local` if configuring optional integrations. Vite variables are public browser configuration read at build time; never put credentials or private keys in them.

- `VITE_SITE_ORIGIN`: public HTTPS origin used for canonical URLs, Open Graph metadata, sitemap, and robots directives. Defaults to `https://ashishbytes.vercel.app`. Custom domain cutover is a future step.
- `VITE_BLOG_ORIGIN`: optional HTTPS origin for the separate blog. The portfolio exposes writing only after at least two complete, non-draft articles exist; `@repo/config` `site.blogLive` mirrors that data-derived gate for the links app.
- `VITE_CONTACT_FORM_ENDPOINT`: optional HTTPS endpoint that accepts the contact form JSON. It must enforce server-side validation, spam controls, and CORS. Until configured, the form validates input and offers an email draft; it does not report a message as sent.

## Content and assets

Structured records live in `src/content`. Verified profile details, project summaries, awards, skills, publications, and experience are sourced from the existing portfolio material and resume. The original portrait, favicon, and resume PDF are reused. Unverified project links and testimonials are not presented as endorsements; unavailable article destinations remain previews.

## Routing and SEO

React Router 7 serves the public routes. The production build uses React server rendering with `StaticRouter` to prerender the homepage, portfolio pages, project case studies, and a 404 document; the browser hydrates the output for interactivity. `scripts/verify-prerender.mjs` checks the resulting HTML. Route metadata, canonical URLs, Open Graph/Twitter cards, structured data, sitemap, and robots directives are generated from `src/app`. Static copies of sitemap or robots are not maintained; they are emitted dynamically at build time.

## Deployment

The production branch is `main`. See [`docs/deployment/VERCEL.md`](../../docs/deployment/VERCEL.md) for Vercel project settings, domain configuration, and environment variables. `apps/portfolio/netlify.toml` is retained until the Vercel deploy is verified. See [`docs/migration/PORTFOLIO_TO_MONOREPO.md`](../../docs/migration/PORTFOLIO_TO_MONOREPO.md) for historical notes on how the standalone source checkout originally mapped into this workspace.
