# Repository Audit and Migration Baseline

> [!NOTE]
> **Historical Record (November 2026):** This document records the baseline audit from the initial monorepo migration. Several details have since been superseded:
> - The production branch is `main` (the `v2` branch was a preparatory migration branch).
> - The workspace runs on **Node 24** (pinned in `.nvmrc` and `engines`), not Node 20.
> - `apps/links` (Next.js link-in-bio) and `packages/config` (`@repo/config` shared data) have since been implemented.
> - For current architecture and setup, see [PORTFOLIO_ARCHITECTURE.md](PORTFOLIO_ARCHITECTURE.md) and the root [README.md](../../README.md).

**Date:** 2026-11-11  
**Target root:** `C:\Users\ashis\coding\github\portfolio-website-build`  
**Target branch:** `v2` at `8138580`  
**Source checkout:** `C:\Users\ashis\coding\portfolio`

## Repository identity

The intended pnpm monorepo exists locally at the target root above. Its `origin` is `git@github.com:AshishBytes/portfolio.git`; the source checkout is a second clone of that same repository using HTTPS. The target is clean on branch `v2`, tracking `origin/v2`. It has `pnpm-workspace.yaml`, a pnpm 8 lockfile, an installed workspace, an existing `apps/main` application, and an empty `apps/portfolio` directory. This is the correct migration target.

The source checkout is on `main`, three commits behind its `origin/main`. It has an untracked `changes.patch` (46,875 bytes; SHA-256 recorded in that checkout) and a Phase 0 audit created during the initial review. The patch was inspected and checked with `git apply --check`; it does not apply cleanly to its checkout. It remains unmodified and is reference material only. No reset, rebase, merge, checkout, or push was performed.

## Existing monorepo architecture

- Root package: private `ashishbytes-monorepo`, declares `pnpm@8.15.0`, preserves the existing `dev:main` and `build:main` scripts, and includes the workspace globs `apps/*` and `packages/*`.
- `pnpm-workspace.yaml` includes `apps/*` and `packages/*`.
- `pnpm-lock.yaml` uses lockfile format 6.0. Local `pnpm --version` resolves to 8.15.0 for this workspace; Node is 20.19.4.
- `apps/main` is an installed Next.js 16 application. Its source and package are read-only migration context for this work and must not be modified.
- `apps/portfolio` exists but has no tracked files or package manifest.
- No `apps/blog`, `apps/links`, or shared `packages/*` implementation exists.
- The monorepo working tree was clean at audit time. Its current branch and remote are distinct from the source checkout's branch, although both remotes point to the same GitHub repository.

## Source application inventory

The standalone source checkout contains the existing React/Vite portfolio, its resume, profile photo, favicon, robots file, sitemap, and hard-coded component content. Its prior checked-out branch includes Hero, About, Skills, Experience, Projects, Certifications, Publications, Testimonials, Contact, Footer, dark-mode state, responsive navigation, a testimonial carousel, and SEO metadata. It is a single-page app with no client router or prerendering.

The root project content is not uniformly reliable. Its dates and metrics conflict with the supplied resume; its publication list and project claims also differ. Migration therefore treats the included resume as the primary source for personal history and uses the older source only for supplemental records and links after checking them. No source content is silently rewritten as a fact.

## Primary content source

The two-page `Ashish_Singh_Resume.pdf` was rendered and reviewed. It identifies Ashish Singh, Gwalior, Madhya Pradesh, GitHub `AshishBytes`, LinkedIn `ashishbytes`, and `ashishlodhi5559@gmail.com`. It records:

- Education at Amity University Madhya Pradesh, B.Tech. Computer Science & Engineering, expected May 2026.
- Three experience records: HackIITK Blockchain Hackathon (Feb 2025), Reef (Nov 2021–Apr 2023), and Happy (Feb 2020–Jul 2021).
- Two projects: DocQA Tutor (Feb–Apr 2025) and TripLedger (Aug–Dec 2024).
- Skills across languages, distributed systems, cloud/DevOps, ML/NLP, databases, systems foundations, and soft skills.
- Five certifications/awards and two 2024 publication summaries.

The resume contains specific metrics and a phone number. The website migration may use the listed professional content; the phone number will not be newly exposed in page copy. No publication URLs were included in the resume.

## Additional source records and conflicts

- The prior standalone source includes two project repository/live URLs. Both GitHub URLs returned 404 during a read-only check, so they will not be presented as working project links. The live domains were not verified.
- The source checkout has four skill groups (20 items), four certification/award entries, two publications, three testimonials, and four About highlights. These entries conflict with the resume in multiple places. The resume versions take precedence. Testimonials have no verification or attribution/consent evidence and will not be published as endorsed quotes.
- The monorepo's `apps/main` has the exact desired editorial homepage layout and components (`HeroHeader`, `BioCard`, `ProfileCard`, `RecentFavorite`, `ExperimentsCard`, `ArticlesSection`, `SelectedWorks`) and is the visual reference. Its case-study data and project images describe unrelated e-commerce/Web3/health products, so they are not portfolio facts and will not be copied.
- The existing article-preview and experiments records in `apps/main` are source material, but article URLs/dates are incomplete and the planned blog domain was inaccessible during review. Only records with usable source metadata will be shown as previews; unavailable canonical links remain a documented integration TODO.

## Assets

Available in the source checkout: the two-page resume PDF (49,437 bytes), a 400×400 profile photograph (26,363 bytes), a 176-byte ICO favicon, plus `robots.txt` and `sitemap.xml`. The monorepo's `apps/main` has separate portrait and project images; the portrait appears generated and the project images do not match the resume projects, so they will not be copied. No verified project screenshots or article thumbnails exist. The new app reuses the source portrait, resume, and ICO favicon, and includes a locally authored vector brand favicon and social preview image.

## Tooling compatibility findings

- The requested React 19.3.1, Vite 8.3.8, and TypeScript 7.0.2 versions are published. Node 20.19.4 meets Vite 8's engine requirement.
- Vite React plugin 6.3.0 and Tailwind Vite plugin 4.3.5 declare Vite 8-compatible peer ranges.
- The current `typescript-eslint` parser peer range excludes TypeScript 7. The app retains TypeScript 7, uses ESLint 10 for JavaScript configuration files and Oxlint's TypeScript/React/JSX accessibility rules for application source; `tsc --noEmit` is the authoritative type checker. This avoids an unsupported TypeScript parser override.
- Vitest 5.1.0 and jsdom 31.0.0 resolve an Undici version requiring Node `>=22.19.0`, which is incompatible with the preserved Node 20.19.4. Registry metadata confirmed Vitest 4.1.0 supports Node 20 and Vite 8, and jsdom 26.1.0 supports Node 18+, so those compatible versions are used instead.
- The newest `@axe-core/playwright` release declares Node `>=22.12.0`; the app pins 4.13.0, which has no Node 22-only engine requirement and remains compatible with the workspace's Node 20 runtime.
- The root package manifest, lockfile, workspace config, scripts, and `apps/main` package are preserved. The portfolio adds its own package manifest and scripts, and only the existing workspace lockfile is updated to add the new app importer.

## Missing or unverified content

- Verified publication permalinks and article images.
- An active canonical blog URL and publication dates for every article preview.
- Confirmed public project demo URLs / GitHub repositories.
- Permission/attribution confirmation for the three old testimonials.
- A current biography/status after the resume's expected May 2026 graduation date.

Missing records will stay absent or be marked as explicit TODOs in documentation; no personal experience, award, testimonial, link, or article will be invented.

## Risks and implementation sequence

1. Keep `apps/main` and the source checkout unchanged; build only `apps/portfolio` and add a new root workspace-lock importer.
2. Establish the Vite/React/TypeScript/Tailwind/router foundation, resolve the TypeScript 7 lint-tool boundary, then verify a production build.
3. Build shared tokens, navigation, cards, and responsive behavior from the existing editorial/orange design reference.
4. Move verified resume/source records into typed content modules; reuse the original profile photo and resume PDF; omit unverified project/testimonial links.
5. Implement the home bento grid, public portfolio routes, honest mailto/provider contact boundary, and accessible reduced-motion interactions.
6. Add route metadata and an SSR-based Vite prerender build; verify the emitted HTML and sitemap for each public route.
7. Add and run unit, component, Playwright, responsive, and accessibility checks; fix findings before deployment documentation.

No deployment credentials are present or required for local implementation. Vercel project/root-directory and DNS configuration remain external setup steps.
