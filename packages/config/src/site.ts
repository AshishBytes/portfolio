/**
 * Static site-identity values shared between apps.
 *
 * NOTE (not a fix): `metrics` here overlaps with the achievement numbers
 * embedded in apps/portfolio/src/content/experience.ts and projects.ts.
 * Those files remain the source of truth for detailed per-project data;
 * the values below are headline display-only summaries for the links page
 * and future hero sections. They will need to be kept in sync manually
 * until a later stage replaces them with a derived computation.
 */
export const site = {
  name: "Ashish Singh",
  brand: "Ashish Bytes",
  tagline: "Software engineer · systems & backend",
  /**
   * Relative path served from each app's own `public/` directory.
   * Verified against apps/portfolio/public/images/ashish-singh.jpeg.
   * Must be copied to apps/links/public/images/ashish-singh.jpeg (Stage 1).
   */
  photo: "/images/ashish-singh.jpeg",
  email: "ashishlodhi5559@gmail.com",
  /** Production origin for apps/main (future ashishbytes.com). */
  origin: "https://ashishbytes.com",
  /** Production origin for apps/links. */
  linksOrigin: "https://links.ashishbytes.com",
  /** Headline metrics for the links / hero page. */
  metrics: {
    users: "585K+",
    servers: "850+",
    uptime: "99.97%",
  },
} as const;

export type Site = typeof site;
