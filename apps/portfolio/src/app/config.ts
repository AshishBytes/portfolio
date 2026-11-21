export const siteConfig = {
  origin: "https://portfolio.ashishbytes.com",
  name: "Ashish Bytes",
  description:
    "Ashish Singh — software engineer focused on distributed systems and backend engineering.",
  blogOrigin: normalizeBlogOrigin(import.meta.env.VITE_BLOG_ORIGIN),
  contactEndpoint: normalizeEndpoint(
    import.meta.env.VITE_CONTACT_FORM_ENDPOINT,
  ),
};

function normalizeBlogOrigin(value: string | undefined) {
  if (!value?.trim()) return undefined;
  try {
    const url = new URL(value.trim());
    return url.protocol === "https:" ? url.origin : undefined;
  } catch {
    return undefined;
  }
}

function normalizeEndpoint(value: string | undefined) {
  if (!value?.trim()) return undefined;
  try {
    const url = new URL(value.trim());
    return url.protocol === "https:" ? url.toString() : undefined;
  } catch {
    return undefined;
  }
}

export function getArticleUrl(slug: string) {
  if (!siteConfig.blogOrigin) return undefined;
  return new URL(
    encodeURIComponent(slug),
    `${siteConfig.blogOrigin}/`,
  ).toString();
}
