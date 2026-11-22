# Agent Guidelines

Operational rules for AI assistants working in this repository:

1. **`apps/main` is FROZEN**: Never edit, refactor, or delete files under `apps/main`. It is a read-only historical reference.
2. **No shared UI**: `apps/portfolio` (Vite recruiter site) and `apps/links` (Next.js link-in-bio) share **no UI components**, templates, or styling.
3. **Data sharing via `@repo/config` only**: Shared identity, profile, and site metadata lives in `packages/config`.
4. **`packages/config` rules**: Plain TypeScript only (`satisfies`, no Zod, no React). Apps use different Zod versions; keep `@repo/config` dependency-free.
5. **Portfolio source of truth**: `apps/portfolio/src/content/*.ts` is the single source of truth for portfolio content (projects, experience, skills, publications, articles). Only `profile.ts` imports from `@repo/config`.
6. **Blog gate**: The writing section and `/blog` route only activate when at least 2 non-draft articles exist in `apps/portfolio/src/content/articles.ts`. `@repo/config` `site.blogLive` mirrors this gate.
7. **No unapproved deployment or DNS changes**: Do not activate Vercel redirects, change DNS, edit `vercel.json` or `netlify.toml`, or switch origins without explicit approval.
8. **Origin defaults**: Portfolio origin defaults to `https://portfolio.ashishbytes.com` until domain cutover. Controlled by `VITE_SITE_ORIGIN`. Retain `apps/portfolio/netlify.toml` until Vercel deployment is verified.
9. **Git discipline**: Production branch is `main`. Never force-push, rebase, reset, delete branches, or use `git worktree remove`. Work on task branches and commit clean diffs.
10. **Fact verification**: Never invent facts, metrics, versions, or endpoints. Verify all scripts, commands, and exports against code before documenting.
11. **Work in stages and report**: Make changes in verifiable steps. Test commands locally before completing tasks.
