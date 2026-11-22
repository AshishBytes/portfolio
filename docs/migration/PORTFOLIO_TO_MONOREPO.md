# Portfolio Source Migration

> [!NOTE]
> **Historical Record (November 2026):** This document describes the initial migration of the portfolio into the monorepo. Several details have since been superseded:
> - The monorepo has standardized on `main` as the production branch (the `v2` preparation branch was merged).
> - `apps/links` (Next.js link-in-bio) and `packages/config` (`@repo/config` shared data) have since been implemented.
> - For current architecture, deployment, and setup, see [PORTFOLIO_ARCHITECTURE.md](../architecture/PORTFOLIO_ARCHITECTURE.md), [VERCEL.md](../deployment/VERCEL.md), and the root [README.md](../../README.md).

## Repository relationship

The original checkout `C:\Users\ashis\coding\portfolio` is a standalone Vite source application on `main`. The target `C:\Users\ashis\coding\github\portfolio-website-build` is the intended pnpm workspace on branch `v2`; both Git remotes identify `AshishBytes/portfolio`. The source checkout contains the original app and an untracked `changes.patch`. That patch remains untouched because its hunks do not apply cleanly to the source branch.

The migration is implemented in the target workspace under `apps/portfolio`. The standalone source application remains in its original checkout for rollback and comparison. No reset, rebase, commit, push, or remote rewrite was performed.

## Workspace changes

- Added the `apps/portfolio` Vite application and its scoped dependencies.
- Updated only the pnpm lockfile to record the new workspace importer.
- Added architecture, deployment, and migration documentation under `docs/`.
- Left the root package scripts, `pnpm-workspace.yaml`, and `apps/main` source and package manifests unchanged.

## Eventual integration steps

1. Review the new `apps/portfolio` implementation and the lockfile diff on the `v2` target branch.
2. Keep the existing root package manifest and `pnpm-workspace.yaml`; `apps/*` already includes the portfolio app.
3. From the monorepo root run `pnpm install --frozen-lockfile`, then `pnpm --filter portfolio build` and `pnpm --filter main build`.
4. Configure a separate Vercel project with root directory `apps/portfolio`, include-source-outside-root enabled, output `dist`, and domain `portfolio.ashishbytes.com`.
5. After the blog is deployed, set `VITE_BLOG_ORIGIN`. Configure a server-side contact endpoint before expecting form submissions to be delivered.
6. Confirm current graduation/status details, publication permalinks, project repositories/demos, and testimonial permissions before expanding public content.

The portfolio does not import source code directly from `apps/main` and does not create the future `apps/blog`, `apps/links`, or shared packages.
