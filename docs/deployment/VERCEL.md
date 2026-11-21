# Vercel Deployment

## Create the portfolio project

Create a separate Vercel project for the portfolio and import the existing Git repository. Use these project settings:

- **Root Directory:** `apps/portfolio`
- **Framework preset:** Vite
- **Build command:** `pnpm run build`
- **Output directory:** `dist`
- **Install command:** use the detected pnpm workspace install with the repository lockfile (`pnpm install --frozen-lockfile`)
- **Development command:** `pnpm run dev -- --host 0.0.0.0`

Because the app uses the workspace lockfile and package manager declaration at the repository root, enable Vercel's **Include source files outside of the Root Directory** option for the build. Vercel detects the package manager from the root lockfile in workspace deployments. The app's `vercel.json` enables clean URLs and disables trailing slashes.

Official references: [Vercel monorepos](https://vercel.com/docs/monorepos) and [build configuration](https://vercel.com/docs/builds/configure-a-build).

## Domain

Assign `portfolio.ashishbytes.com` to this project in Vercel's Domains settings. Configure the DNS record Vercel provides at the domain's DNS host, then wait for Vercel's domain verification and TLS certificate. The canonical origin is currently set to `https://portfolio.ashishbytes.com` in `src/app/config.ts`.

## Environment variables

Optional variables are listed in `.env.example`:

- `VITE_BLOG_ORIGIN`: set to the confirmed HTTPS origin of the future blog to make article previews link out.
- `VITE_CONTACT_FORM_ENDPOINT`: set to a public HTTPS endpoint that validates and accepts contact submissions. The provider must handle spam protection and email delivery server-side. Do not place API credentials in Vite variables.

If no contact endpoint is configured, the form prepares an email draft instead of claiming delivery. No credentials or external service are required for the initial deployment.

## Preview and production

Preview deployments use Vercel's generated URL. Verify homepage, direct route refreshes, both project case studies, `/resume`, `/contact`, and a missing URL before assigning production DNS. The production build runs prerender verification as part of `pnpm run build`; it emits route HTML, a 404 document, sitemap, robots directives, social metadata, and JSON-LD.

No Vercel deployment was created from this workspace because no Vercel project credentials or authorization were provided. All local build and browser checks are run before deployment.
