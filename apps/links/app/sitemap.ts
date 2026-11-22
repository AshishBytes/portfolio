import type { MetadataRoute } from "next";
import { site } from "@repo/config";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: site.linksOrigin, changeFrequency: "monthly", priority: 1 }];
}
