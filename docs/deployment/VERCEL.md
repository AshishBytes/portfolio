# Vercel handoff: two independent projects

This guide prepares Vercel projects for the monorepo. It does not create projects, change DNS, deploy to production, change the portfolio origin, activate the redirect, or remove `apps/portfolio/netlify.toml`.

The repository is a pnpm workspace. Both projects depend on `@repo/config`, so each project must include source files outside its app root during the Vercel build.

## Build facts verified in the repository

- Portfolio `apps/portfolio/package.json` runs `pnpm run typecheck`, the client Vite build, the SSR renderer build, `scripts/prerender.mjs`, and `scripts/verify-prerender.mjs` as one `build` script. Vercel's `pnpm run build` therefore emits the complete prerendered `dist/`.
- Links `apps/links/package.json` defines `"build": "next build"`; `pnpm run build` is the correct command and Next.js manages its `.next` output.
- The root pins Node with `.nvmrc` (`24`), `engines.node` (`24.x`), and `packageManager` (`pnpm@8.15.0`). Both app packages also declare Node `24.x`.
- The lockfile is pnpm lockfile v6.0. Enable Corepack in each Vercel project so its `pnpm install --frozen-lockfile` uses the root's pinned pnpm version.
- `@repo/config` is an explicit workspace dependency of both apps. The clean-install checks use the repository's frozen lockfile and successfully build both apps under Node 24 with Corepack enabled.

### Current build scripts

Portfolio:

```json
"build": "pnpm run typecheck && vite build && vite build --ssr src/entry-server.tsx --outDir .prerender/server && node scripts/prerender.mjs && node scripts/verify-prerender.mjs"
```

Links:

```json
"build": "next build"
```

## Environment variables

### Portfolio app variables

| Variable                     | Current default                                           | Production value after the domain move                                                                                                                                                                                                                                                                                                                  |
| ---------------------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `VITE_SITE_ORIGIN`           | `https://portfolio.ashishbytes.com`                       | Set to `https://ashishbytes.com` at cutover; keep the current host until then.                                                                                                                                                                                                                                                                          |
| `VITE_BLOG_ORIGIN`           | Empty / unset (`normalizeBlogOrigin` returns `undefined`) | Leave unset. There is no separate blog deployment; `/blog` remains gated until two complete public posts exist. If a separate blog is introduced later, use its confirmed HTTPS origin.                                                                                                                                                                 |
| `VITE_CONTACT_FORM_ENDPOINT` | Empty / unset (`normalizeEndpoint` returns `undefined`)   | Leave unset until a real HTTPS contact endpoint is selected and tested. While unset, `/contact` shows a direct `mailto:` option and professional profile links; it does not show a form. If Ashish selects a provider, set its exact public HTTPS submission URL in Production and Preview as appropriate; never put credentials in a `VITE_` variable. |

`VITE_SITE_ORIGIN` is the single portfolio origin source at build time. Keep the default/current value until cutover; set the apex value in Production for the approved cutover. Canonical URLs, Open Graph URLs, structured data, sitemap, and robots output all derive from it.

`CI` is read only by `apps/portfolio/playwright.config.ts` to decide whether Playwright reuses an existing dev server. It is not read by the deployed app or build script and needs no Vercel value.

### Links app variables

The app source under `apps/links` reads no custom environment variables. Profile, site metadata, and origins come from `@repo/config`. No `.env.example` exists for this app.

### Vercel build control (not an app variable)

Add `ENABLE_EXPERIMENTAL_COREPACK=1` to **both Vercel projects**, in Preview and Production. This makes Vercel use the root `packageManager` pin (`pnpm@8.15.0`) instead of selecting a different pnpm from the lockfile.

## Create the Portfolio Vercel project

1. In Vercel, open the correct team, choose **Add New → Project**, and import `AshishBytes/portfolio`. If the Git repository is not listed, check the current Vercel dashboard's GitHub integration and repository permissions.
2. On **Configure Project**, set **Project Name** to `portfolio` (or another unique name) and click **Edit** beside **Root Directory**. Select `apps/portfolio` and save.
3. In that Root Directory section, turn **Include source files outside of the Root Directory in the Build Step** on. Confirm it remains enabled after saving.
4. Set **Framework Preset** to **Vite**.
5. Set the build fields:
   - **Install Command:** `pnpm install --frozen-lockfile`
   - **Build Command:** `pnpm run build`
   - **Output Directory:** `dist`
   - **Development Command:** leave the Vite detected default; it is not used for deployment builds.
6. In **Settings → Build and Deployment → Node.js Version**, select **24.x**. The root and app `engines` fields also pin Node 24.
7. In **Settings → Environment Variables**, add `ENABLE_EXPERIMENTAL_COREPACK` with value `1` for **Preview** and **Production**. Set `VITE_SITE_ORIGIN` to `https://portfolio.ashishbytes.com` in Production for the current host; change it to `https://ashishbytes.com` only at cutover. Leave `VITE_BLOG_ORIGIN` and `VITE_CONTACT_FORM_ENDPOINT` unset unless their decisions in the table above change.
8. In **Settings → Environments → Production → Branch Tracking**, decide: **`v2` or `main`**. Set the chosen production branch explicitly in both Vercel projects. Keep `monorepo_split_codex` as a Preview branch for review; do not make this preparation branch Production.
9. Under **Settings → Domains**, verify the existing `portfolio.ashishbytes.com` assignment before changing anything. Do not assign `ashishbytes.com` or change DNS during preparation. At cutover, the apex domain belongs to this portfolio project.
10. Save the project settings. For preparation, use a Preview deployment URL only; do not promote it or change a production domain.

## Create the Links Vercel project

1. From the same Git repository, choose **Add New → Project** again.
2. Set **Project Name** to `links`; click **Edit** beside **Root Directory** and choose `apps/links`.
3. Turn **Include source files outside of the Root Directory in the Build Step** on. This is required for `@repo/config`.
4. Set **Framework Preset** to **Next.js**.
5. Set the build fields:
   - **Install Command:** `pnpm install --frozen-lockfile`
   - **Build Command:** `pnpm run build`
   - **Output Directory:** leave the framework default; do not override Next.js output.
   - **Development Command:** leave the Next.js detected default.
6. In **Settings → Build and Deployment → Node.js Version**, select **24.x**.
7. Add `ENABLE_EXPERIMENTAL_COREPACK=1` for **Preview** and **Production**. There are no links-app runtime variables to add.
8. In **Settings → Environments → Production → Branch Tracking**, explicitly set the same chosen production branch as the Portfolio project: decide **`v2` or `main`**. Check in the current Vercel dashboard which branch is currently live; the repository's current task branch stays Preview-only.
9. Under **Settings → Domains**, verify `links.ashishbytes.com` is assigned to the Links project. The exact DNS target/record is shown by Vercel and must be checked in the current dashboard and your DNS provider.
10. Save the settings and use a Preview deployment URL during preparation. Do not change DNS.

No `apps/links/vercel.json` is needed: Next.js is detected and its build/output routing is automatic. Keep the current `apps/portfolio/vercel.json` values (`cleanUrls: true`, `trailingSlash: false`).

## Portfolio route and 404 behavior

The Portfolio is a prerendered multi-page Vite build, not a single-file SPA fallback deployment. `scripts/prerender.mjs` writes a route `index.html` for each public route, including project case studies, and writes a styled `dist/404.html`. While writing is gated off, it also writes `/blog/index.html` with the styled not-found view, noindex metadata, and no sitemap entry. `verify-prerender.mjs` checks the generated pages and these gate rules.

With `cleanUrls: true` and `trailingSlash: false`, extensionless route URLs remain the canonical form, and Vercel normalizes a trailing slash to the no-slash route. No catch-all rewrite to `/index.html` is needed: known routes have prerendered files, and an unknown path should reach the custom `404.html` with HTTP 404. A catch-all SPA rewrite would shadow the static 404 and can turn unknown paths into soft 404 responses. Verify direct refreshes and a missing path on the Vercel Preview URL before launch. [Vercel custom 404 behavior](https://vercel.com/docs/routing/custom-404-pages) and [clean URL routing](https://vercel.com/docs/project-configuration/vercel-json).

## Domain cutover order (later; not part of preparation)

1. Confirm both Preview deployments build and test the correct branch. Confirm `portfolio.ashishbytes.com` and `links.ashishbytes.com` remain on their current targets.
2. Merge/release the approved monorepo changes to the verified production branch. This stage does not perform that merge.
3. At the approved cutover, update `siteConfig.origin` to `https://ashishbytes.com` and deploy the Portfolio app. Verify the apex deployment through its Vercel Preview URL before changing DNS.
4. In the Portfolio project's **Settings → Domains**, add `ashishbytes.com`. Check in the current Vercel dashboard for any ownership-verification record and the exact apex DNS record Vercel requires. At the DNS provider, add/change only the records Vercel requests; do not guess an A/ALIAS value and do not replace nameservers unless that migration is separately planned.
5. Wait for Vercel to show the domain as configured and TLS as valid. Verify `https://ashishbytes.com` and route refreshes while `portfolio.ashishbytes.com` still serves the previous site if the existing assignment permits this.
6. Only after the apex is serving the new Portfolio deployment, activate the redirect by merging the rule from `docs/deployment/cutover-redirect.json` into `apps/portfolio/vercel.json` (preserving `cleanUrls` and `trailingSlash`) and deploy. It is a **301**, host-matched only to `portfolio.ashishbytes.com`, and preserves the requested path. The JSON in `docs/` is inert and is not loaded by Vercel.
7. Keep `links.ashishbytes.com` attached to the Links project. Confirm the links page's Portfolio tile now lands on the apex.

Vercel DNS record values, whether the apex or subdomain is already attached to another project, domain ownership status, and TLS status must be checked in the current Vercel dashboard. Use the exact record Vercel shows for this project and verify it with the DNS provider. [Vercel custom domains](https://vercel.com/docs/domains/set-up-custom-domain).

## Rollback plan

- Record the current DNS records and existing project/domain assignments before the cutover. Leave the previous production deployment available.
- If the apex deployment fails, remove the newly activated redirect rule (if activated), redeploy the last known-good config, and restore the recorded DNS target for `ashishbytes.com` at the DNS provider. If a custom domain was reassigned between Vercel projects, restore its previous project assignment in the dashboard.
- Keep `portfolio.ashishbytes.com` and its old deployment available until the apex has passed the post-launch checks. Do not delete the old Netlify configuration or project during this handoff.
- A 301 can be cached by browsers. Validate rollback with a clean browser profile and direct HTTP requests; allow DNS caches to expire after restoring records.

## Post-launch checklist

- Open the apex home page, every route in `dist/sitemap.xml`, all four project routes, `/resume`, `/contact`, `/blog`, and an unknown path. Confirm `/blog` remains noindex/not listed until the data-derived blog gate opens; confirm unknown paths return a styled HTTP 404.
- Check `https://ashishbytes.com/sitemap.xml` and `robots.txt`; confirm sitemap URLs use the apex, contain only real public routes, and exclude noindex/hidden routes.
- Inspect canonical links and `og:url` on the home page and representative detail routes. Confirm the Open Graph image loads and preview it with a social-sharing debugger.
- Verify the old host redirects with HTTP 301 only when the request host is `portfolio.ashishbytes.com`; test `/`, a project path, `/resume`, and a query-string URL. Confirm unrelated hosts do not match the rule.
- Verify `https://links.ashishbytes.com`, its canonical/OG metadata, and that its Portfolio tile points to the apex. Recheck the Blog tile against `site.blogLive`.
- Add/verify the apex and Links properties in Google Search Console, submit the new sitemap, inspect representative canonical URLs, and use Search Console's Change of Address tool only if it applies to this host migration.
- Update external links that mention `portfolio.ashishbytes.com` (social profiles, video descriptions, QR codes, resumes, and pinned posts). Keep the redirect in place for old links.

## What still needs a dashboard check

- Current Vercel team, Git connection, Production Branch, existing domain assignments, apex/subdomain DNS instructions, domain verification, and TLS state.
- Production branch decision: choose `v2` or `main`, then set it explicitly in both projects. Confirm current live branch in the Vercel dashboard.
- Exact DNS record values and whether the existing host is attached to Netlify, an older Vercel project, or another provider.
- If Ashish wants the contact form to submit to a provider, its final HTTPS endpoint and spam/email handling.

## Official references

- [Vercel monorepos](https://vercel.com/docs/monorepos/monorepo-faq)
- [Vercel build settings](https://vercel.com/docs/builds/configure-a-build)
- [Vercel package managers and Corepack](https://vercel.com/docs/package-managers)
- [Vercel Node.js versions](https://vercel.com/docs/functions/runtimes/node-js/node-js-versions)
- [Vercel Git production branches](https://vercel.com/docs/git)
- [Vercel custom domains](https://vercel.com/docs/domains/set-up-custom-domain)
- [Vercel redirects and host conditions](https://vercel.com/docs/project-configuration/vercel-json)
