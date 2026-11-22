import type { MetadataRoute } from "next";
import { site } from "@repo/config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.linksOrigin}/sitemap.xml`,
    host: site.linksOrigin,
  };
}
