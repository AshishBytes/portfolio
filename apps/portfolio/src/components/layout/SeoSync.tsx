import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  getCanonicalUrl,
  getPageMetadata,
  getStructuredData,
} from "../../app/metadata";

function upsertMeta(
  attribute: "name" | "property",
  key: string,
  content: string,
) {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`,
  );
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.append(element);
  }
  element.content = content;
}

export function SeoSync() {
  const { pathname } = useLocation();

  useEffect(() => {
    const metadata = getPageMetadata(pathname);
    const canonical = getCanonicalUrl(metadata.path);
    document.title = metadata.title;
    upsertMeta("name", "description", metadata.description);
    upsertMeta(
      "name",
      "robots",
      metadata.index === false ? "noindex,nofollow" : "index,follow",
    );
    upsertMeta("property", "og:type", metadata.type ?? "website");
    upsertMeta("property", "og:title", metadata.title);
    upsertMeta("property", "og:description", metadata.description);
    upsertMeta("property", "og:url", canonical);
    upsertMeta("property", "og:image", getCanonicalUrl(metadata.image));
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", metadata.title);
    upsertMeta("name", "twitter:description", metadata.description);
    upsertMeta("name", "twitter:image", getCanonicalUrl(metadata.image));

    let canonicalLink = document.head.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    );
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.rel = "canonical";
      document.head.append(canonicalLink);
    }
    canonicalLink.href = canonical;

    let jsonLd = document.head.querySelector<HTMLScriptElement>(
      "#portfolio-structured-data",
    );
    if (!jsonLd) {
      jsonLd = document.createElement("script");
      jsonLd.id = "portfolio-structured-data";
      jsonLd.type = "application/ld+json";
      document.head.append(jsonLd);
    }
    jsonLd.textContent = JSON.stringify(getStructuredData(pathname));
  }, [pathname]);

  return null;
}
