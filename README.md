# AshishBytes Monorepo

Source for Ashish Singh's sites. One repo, several independent apps that share only data.

| App | Path | Stack | Purpose | Target address |
|---|---|---|---|---|
| Portfolio | `apps/portfolio` | Vite, React 19, React Router v7, Tailwind v4 | Recruiter-facing portfolio | `https://ashishbytes.vercel.app` (custom domain planned) |
| Links | `apps/links` | Next.js, Tailwind v4 | Follower-facing link-in-bio page | `https://ashishlinks.vercel.app` (custom domain planned) |
| Main (legacy) | `apps/main` | Next.js 16, shadcn/ui | Earlier dark design. **Frozen: do not edit.** | Not deployed |
| Shared config | `packages/config` | Plain TypeScript | Profile links, site info, metrics. Data only | n/a |

## Design rules

1. The portfolio and links apps share **no UI**: no header, footer, theme or components. They share data only, through `@repo/config`.
2. `apps/main` stays unchanged. Read from it if you need to, never edit it.
3. `apps/portfolio/src/content/*.ts` is the source of truth for projects, experience, skills, publications and so on. Only `profile.ts` reads from `@repo/config`.
4. `packages/config` is plain TypeScript (`satisfies`, no Zod, no React). The apps use different Zod major versions.

---

## 1. Requirements

| Tool | Version | Notes |
|---|---|---|
| Node.js | **24.x (LTS)** | Pinned in `.nvmrc` and `engines`. Other versions cause engine warnings and odd test behavior. |
| pnpm | **8.15.0** | Pinned via `packageManager`. Use Corepack so the right version is picked automatically. |
| Git | any recent | |

### Install the right Node version

```bash
# macOS / Linux (nvm)
nvm install 24 && nvm use 24

# Windows: install nvm-windows or Node 24 from nodejs.org, then
nvm install 24
nvm use 24
```

Check it:

```bash
node -v      # v24.x.x
```

### Enable pnpm through Corepack

```bash
corepack enable
corepack prepare pnpm@8.15.0 --activate
pnpm -v      # 8.15.0
```

> **Windows:** a standalone pnpm install once skipped an optional native binding that the Vite toolchain needs. Installing through Corepack fixed it. If you see "cannot find native binding" or similar errors, use Corepack and reinstall.

---

## 2. First-time setup

```bash
git clone https://github.com/AshishBytes/portfolio.git
cd portfolio
git switch main

pnpm install --frozen-lockfile
```

- Always run `pnpm install` at the **repo root**, never inside an app folder.
- `--frozen-lockfile` mirrors what Vercel does. If it fails with a lockfile error, run `pnpm install` once, commit `pnpm-lock.yaml`, and try again.

### Environment variables

Copy the example file for the portfolio (the other apps need none):

```bash
cp apps/portfolio/.env.example apps/portfolio/.env.local
```

| Variable | App | Default | Purpose |
|---|---|---|---|
| `VITE_SITE_ORIGIN` | portfolio | `https://ashishbytes.vercel.app` | Origin used for canonical URLs, Open Graph, sitemap and robots. Defaults to `https://ashishbytes.vercel.app`. Custom domain is a future step. |
| `VITE_BLOG_ORIGIN` | portfolio | unset | Only if a separate blog deployment exists. Leave unset. |
| `VITE_CONTACT_FORM_ENDPOINT` | portfolio | unset | HTTPS endpoint for the contact form. When unset, `/contact` shows a `mailto:` fallback instead of a form. |
| `ENABLE_EXPERIMENTAL_COREPACK` | Vercel only | n/a | Set to `1` in both Vercel projects so the pinned pnpm version is used. Not an app variable. |

`VITE_*` variables are read **at build time**. After changing one, rebuild.

---

## 3. Running the apps in development

Package names for `--filter` are `portfolio`, `links`, `main` and `@repo/config`.

### One app at a time

```bash
pnpm --filter portfolio dev     # Vite, usually http://localhost:5173
pnpm --filter links dev         # Next.js, usually http://localhost:3000
pnpm --filter main dev          # Next.js, usually http://localhost:3000
```

If a script name differs, list what exists:

```bash
pnpm --filter portfolio run
pnpm --filter links run
```

### All three at once

The two Next.js apps both default to port 3000, so give each its own port. Use **three terminals**:

```bash
# Terminal 1: portfolio on 5173
pnpm --filter portfolio exec vite --port 5173

# Terminal 2: links on 3001
pnpm --filter links exec next dev -p 3001

# Terminal 3: main (legacy) on 3002
pnpm --filter main exec next dev -p 3002
```

| App | URL |
|---|---|
| Portfolio | http://localhost:5173 |
| Links | http://localhost:3001 |
| Main (legacy) | http://localhost:3002 |

**Optional shortcut:** add these scripts to the root `package.json` so one command starts each app on a fixed port:

```json
{
  "scripts": {
    "dev:portfolio": "pnpm --filter portfolio exec vite --port 5173",
    "dev:links": "pnpm --filter links exec next dev -p 3001",
    "dev:main": "pnpm --filter main exec next dev -p 3002",
    "dev:all": "pnpm -r --parallel --no-bail run dev"
  }
}
```

`dev:all` ignores the fixed ports, so use the three-terminal route if the two Next.js apps clash.

### Working on shared config

`@repo/config` is consumed as TypeScript source (Vite alias plus `transpilePackages` in Next). Edit `packages/config/src/*` and the running dev servers pick it up. If a change doesn't show, restart the dev server.

---

## 4. Checks before you commit

Run from the repo root.

### Portfolio

```bash
pnpm --filter portfolio test                # unit and content tests
pnpm --filter portfolio typecheck
pnpm --filter portfolio lint
pnpm --filter portfolio build               # includes prerender and verify-prerender
```

End-to-end tests (Playwright). Run them after a successful build. They launch Vite Preview and check routes, navigation, mobile overflow, contact behavior, SEO metadata and accessibility:

```bash
pnpm --filter portfolio test:e2e:install     # first time only
pnpm --filter portfolio test:e2e
```

### Links

```bash
pnpm --filter links run lint
pnpm --filter links run build
```

### Preview the production build

```bash
# Portfolio (after its build)
pnpm --filter portfolio preview                 # usually http://localhost:4173

# Links (after its build)
pnpm --filter links exec next start -p 3001
```

Check on the preview: home, `/projects`, `/contact`, `/publications`, a nonsense path (should show the styled 404), `/sitemap.xml`, `/robots.txt`, `/blog` (should show the 404 while the blog is hidden), light and dark themes, and a phone-width window.

### Test the origin switch

The cutover relies on `VITE_SITE_ORIGIN`. Verify both states.

```bash
# macOS / Linux
VITE_SITE_ORIGIN=https://ashishbytes.com pnpm --filter portfolio run build
grep -h "canonical" apps/portfolio/dist/index.html
grep -h "<loc>" apps/portfolio/dist/sitemap.xml | head -3
grep -h "Sitemap" apps/portfolio/dist/robots.txt
```

```bat
:: Windows cmd (no space before &&)
set VITE_SITE_ORIGIN=https://ashishbytes.com&& pnpm --filter portfolio run build
findstr /C:"canonical" apps\portfolio\dist\index.html
findstr /C:"ashishbytes.com" apps\portfolio\dist\sitemap.xml
findstr /C:"Sitemap" apps\portfolio\dist\robots.txt
set VITE_SITE_ORIGIN=
```

```powershell
# Windows PowerShell
$env:VITE_SITE_ORIGIN="https://ashishbytes.com"; pnpm --filter portfolio run build
Remove-Item Env:VITE_SITE_ORIGIN
```

Expected: every URL uses `https://ashishbytes.com`. Build again without the variable and everything should use `https://ashishbytes.vercel.app`.

### Confirm the legacy app is untouched

```bash
# If legacy-main is not yet fetched locally: git fetch origin legacy-main:legacy-main
git diff --stat legacy-main main -- apps/main
```

---

## 5. Where things live

```
.
├── apps/
│   ├── portfolio/            Vite portfolio (recruiter-facing)
│   │   ├── src/
│   │   │   ├── app/          config, metadata, router, providers
│   │   │   ├── content/      all site content (source of truth)
│   │   │   ├── features/     page sections (home, etc.)
│   │   │   ├── components/   layout, navigation, cards
│   │   │   ├── pages/        route pages
│   │   │   └── types/        content types and Zod schemas
│   │   ├── scripts/          prerender.mjs, verify-prerender.mjs
│   │   ├── e2e/              Playwright specs
│   │   └── vercel.json       cleanUrls, trailingSlash
│   ├── links/                Next.js link-in-bio page
│   │   └── app/              layout, page, opengraph-image, robots, sitemap
│   └── main/                 legacy dark site (frozen)
├── packages/
│   └── config/src/           profiles.ts, site.ts, index.ts
├── docs/
│   ├── architecture/
│   ├── deployment/           VERCEL.md, cutover-redirect.json (inactive)
│   └── migration/
├── .nvmrc
├── pnpm-workspace.yaml
└── package.json
```

---

## 6. Editing content

| To change | Edit |
|---|---|
| Name, tagline, email, photo, metrics, origins | `packages/config/src/site.ts` |
| Social profiles (and which are "professional") | `packages/config/src/profiles.ts` |
| Projects, case studies, metrics | `apps/portfolio/src/content/projects.ts` |
| Experience, skills, achievements, testimonials | the matching file in `apps/portfolio/src/content/` |
| Publications (add `url` to show "Read paper") | `apps/portfolio/src/content/publications.ts` |
| Contributed-to list | `apps/portfolio/src/content/contributors.ts` |
| Articles | `apps/portfolio/src/content/articles.ts` |

Notes:

- **Professional profiles:** only profiles marked `professional: true` appear on the portfolio. The portfolio icon set is limited to `github`, `linkedin` and `mail`. Adding another professional profile means extending the portfolio schema and icon component first.
- **Blog gate:** Writing and `/blog` appear only when at least 2 articles are public (not `draft`) **and** `site.blogLive` is `true`. While hidden, `/blog` returns the 404 page and is left out of the sitemap, and the links page hides its Blog tile.
- **Content tests:** `content.test.ts` validates every content file. If a new entry breaks the schema, the test says which one.
- **New routes** must be added to `scripts/prerender.mjs` and `scripts/verify-prerender.mjs`, or the build's verification step fails.
- Reef Bot figures (users, servers, uptime) are repeated in `projects.ts`, `experience.ts` and `site.ts`. Keep them identical.

---

## 7. Debugging and troubleshooting

### Install and tooling

| Symptom | Likely cause | Fix |
|---|---|---|
| Engine warning about Node | Not on Node 24 | `nvm use 24`, reopen the terminal |
| Wrong pnpm version | Corepack not enabled | `corepack enable` then `corepack prepare pnpm@8.15.0 --activate` |
| "frozen-lockfile" error | `pnpm-lock.yaml` out of date | `pnpm install`, commit the lockfile |
| "Cannot find module @repo/config" | Install not run at root, or stale install | At the repo root: `pnpm install` |
| Missing native/optional binary (Windows) | Standalone pnpm skipped an optional dependency | Use Corepack, delete `node_modules`, reinstall |
| `EADDRINUSE` / port already in use | Two dev servers on one port | Use the explicit ports in section 3, or stop the other process |
| `localStorage is not a function` in tests | Newer Node with experimental web storage | Use Node 24. As a stopgap: `NODE_OPTIONS=--no-experimental-webstorage` |

Clean reinstall:

```bash
# macOS / Linux
rm -rf node_modules apps/*/node_modules packages/*/node_modules
pnpm install --frozen-lockfile
```

```bat
:: Windows cmd
rmdir /s /q node_modules
for /d %d in (apps\* packages\*) do rmdir /s /q "%d\node_modules"
pnpm install --frozen-lockfile
```

### Portfolio (Vite)

| Symptom | Likely cause | Fix |
|---|---|---|
| Build fails in prerender verification | New route not registered, or canonical/sitemap doesn't match origin | Register the route in both scripts; check `VITE_SITE_ORIGIN` |
| Canonical shows the wrong host | `VITE_SITE_ORIGIN` unset or stale build | Set it, rebuild (build-time only) |
| `@repo/config` import fails | Alias missing | Check `resolve.alias` in `vite.config.ts` and `paths` in `tsconfig.app.json` |
| Content test fails after an edit | Schema violation | Read the test output, it names the entry and field |
| `/blog` shows the 404 | Expected while fewer than 2 public posts or `blogLive` is false | See "Blog gate" above |
| Contact page has no form | Expected when `VITE_CONTACT_FORM_ENDPOINT` is unset | Set the endpoint, or keep the `mailto:` fallback |

Useful commands:

```bash
pnpm --filter portfolio typecheck            # type errors only
pnpm --filter portfolio exec vitest          # watch mode
pnpm --filter portfolio exec vitest run src/content   # one folder
```

### Links (Next.js)

| Symptom | Likely cause | Fix |
|---|---|---|
| Stale UI after changes | Next cache | Delete `apps/links/.next`, restart |
| Build fails importing `@repo/config` | Package not transpiled | Confirm `transpilePackages: ['@repo/config']` in `next.config.ts` and the workspace dependency in `package.json` |
| Blog tile missing | `site.blogLive` is `false` | Expected |
| Portfolio tile points to portfolio origin | `site.origin` is `https://ashishbytes.vercel.app` | Expected. Points to the live portfolio app. |

### Vercel build failures

Check in this order:

1. Root Directory is `apps/portfolio` or `apps/links`.
2. "Include files outside of the Root Directory in the Build Step" is **on**.
3. Node.js version is 24.x.
4. `ENABLE_EXPERIMENTAL_COREPACK=1` is set (Production and Preview).
5. Install command is `pnpm install --frozen-lockfile`.
6. The same build passes locally with the commands in section 4.

---

## 8. Git workflow

- `main` is the production branch. `legacy-main` holds the previous `main`.
- Work on a feature branch, open a pull request into `main`, and let the Vercel preview build before merging.
- A branch can be checked out in only one worktree at a time. If another tool holds it, create a new branch from it: `git switch -c my-branch origin/the-branch`.
- Never force-push `main`. Tag releases as `vMAJOR.MINOR.PATCH` (for example `v2.1.0`) on `main`.

---

## 9. Deployment

Each app is its own Vercel project, both connected to this repo.

| Project | Root Directory | Framework | Build | Output |
|---|---|---|---|---|
| portfolio | `apps/portfolio` | Vite | `pnpm run build` | `dist` |
| links | `apps/links` | Next.js | `pnpm run build` | `.next` (auto) |

Common settings for both: Node 24.x, install `pnpm install --frozen-lockfile`, "Include files outside of the Root Directory" on, production branch `main`, `ENABLE_EXPERIMENTAL_COREPACK=1`.

Live addresses are the two Vercel domains:
- Portfolio: `https://ashishbytes.vercel.app`
- Links: `https://ashishlinks.vercel.app`

Origins are configured in ONE place: `packages/config/src/site.ts` (shared `site.origin` and `site.linksOrigin`) plus the `defaultSiteOrigin` in `apps/portfolio/src/app/config.ts`. Custom domain cutover is a future step.

`apps/main` is not deployed.

Full click-by-click steps, future cutover order, rollback and the post-launch checklist: [`docs/deployment/VERCEL.md`](docs/deployment/VERCEL.md). The inactive redirect in [`docs/deployment/cutover-redirect.json`](docs/deployment/cutover-redirect.json) must NOT be activated; it only applies if `portfolio.ashishbytes.com` is ever used again.

### Future custom domain cutover summary

1. Both projects build green on their live `*.vercel.app` domains.
2. When ready for custom domains, lower DNS TTL a day ahead and record existing DNS records.
3. Attach custom domains in Vercel settings (e.g. `links.ashishbytes.com` to links, `ashishbytes.com` to portfolio).
4. Update origins in `packages/config/src/site.ts` and `apps/portfolio/src/app/config.ts` (or set `VITE_SITE_ORIGIN` in Vercel), then redeploy. Confirm canonical and sitemap use the apex.
5. Activate redirect from `docs/deployment/cutover-redirect.json` only if legacy `portfolio.ashishbytes.com` is used again.
6. Update external profiles and submit sitemap in Search Console.
7. Keep `apps/portfolio/netlify.toml` until Vercel deploy is verified.

---

## 10. Open items

- Add the IJETAE paper URL so "Read paper" appears.
- Publish at least two real articles, then set `site.blogLive` to `true`.
- Confirm Reef Bot figures against a dashboard or screenshot.
- Expand the Publications page.
- After cutover, change the portfolio origin default to the apex in code and remove the env override.
