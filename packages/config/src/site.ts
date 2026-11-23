/**
 * Static site-identity values shared between apps.
 *
 * These are headline values used across the portfolio and links pages.
 * Detailed project achievements remain in apps/portfolio/src/content.
 */
export const site = {
  name: "Ashish Singh",
  brand: "Ashish Bytes",
  tagline: "Software engineer · systems & backend",
  /**
   * Relative path served from each app's own `public/` directory.
   * Verified against apps/portfolio/public/images/ashish-singh.jpeg.
   * Also present at apps/links/public/images/ashish-singh.jpeg.
   */
  photo: "/images/ashish-singh.jpeg",
  email: "official.ashishbytes@gmail.com",
  /** Production origin for apps/portfolio. */
  origin: "https://ashishbytes.vercel.app",
  /** Production origin for apps/links. */
  linksOrigin: "https://ashishlinks.vercel.app",
  /** Mirrors the portfolio's public-article threshold; update when it goes live. */
  blogLive: false,
  discordBotVerified: true,
  /** Last content update date for professional information */
  lastUpdated: "23 November 2026",
  /** Headline metrics shared by the portfolio and links pages. */
  metrics: {
    yearsBuilding: "4+",
    users: "585K+",
    servers: "850+",
    uptime: "99.97%",
  },
} as const;

export type Site = typeof site;
