import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const dist = resolve(process.cwd(), "dist");
const serverEntryUrl = pathToFileURL(
  join(process.cwd(), ".prerender", "server", "entry-server.js"),
).href;
const { blogLive, getCanonicalUrl } = await import(serverEntryUrl);
const configuredOrigin = new URL(getCanonicalUrl("/")).origin;
const routes = [
  ["/", "Ashish Singh"],
  ["/about", "Building useful systems"],
  ["/experience", "Selected professional experience"],
  ["/projects", "Selected work and technical explorations"],
  ["/projects/reef-platform", "Reef Bot"],
  ["/projects/hackiitk-blockchain", "HackIITK Blockchain"],
  ["/projects/docqa-tutor", "DocQA Tutor"],
  ["/projects/tripledger", "TripLedger"],
  ["/skills", "Tools and areas of practice"],
  ["/achievements", "Certifications and awards"],
  ["/publications", "Research and applied work"],
  ["/testimonials", "Professional references"],
  ...(blogLive ? [["/blog", "Writing and engineering notes."]] : []),
  ["/resume", "A concise record of experience"],
  ["/contact", "Start a conversation"],
];

for (const [route, heading] of routes) {
  const file =
    route === "/"
      ? join(dist, "index.html")
      : join(dist, route.slice(1), "index.html");
  const html = await readFile(file, "utf8");
  assert(
    !html.includes("<!--app-html-->"),
    `${route} still has an empty app marker`,
  );
  assert(
    html.includes('data-prerendered="true"'),
    `${route} is not marked as prerendered`,
  );
  assert(html.includes("<h1"), `${route} has no rendered h1`);
  assert(
    html.includes(heading),
    `${route} is missing its expected page content`,
  );
  assert(
    html.includes('rel="canonical"'),
    `${route} is missing canonical metadata`,
  );
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/);
  assert(canonical, `${route} has no canonical URL`);
  assert(
    canonical[1].startsWith(`${configuredOrigin}/`),
    `${route} canonical does not start with configured origin ${configuredOrigin}`,
  );
  assert(
    html.includes("og:image") && html.includes("social-preview.png"),
    `${route} is missing its social preview metadata`,
  );
  assert(
    html.includes("application/ld+json"),
    `${route} is missing structured data`,
  );
  assert(
    html.includes('"@type":"Person"'),
    `${route} is missing person structured data`,
  );
}

const notFound = await readFile(join(dist, "404.html"), "utf8");
assert(
  notFound.includes("This page isn’t here."),
  "404 page content is missing",
);
assert(notFound.includes("noindex,nofollow"), "404 page should not be indexed");
const notFoundCanonical = notFound.match(
  /<link rel="canonical" href="([^"]+)"/,
);
assert(notFoundCanonical, "404 page has no canonical URL");
assert(
  notFoundCanonical[1].startsWith(`${configuredOrigin}/`),
  `404 canonical does not start with configured origin ${configuredOrigin}`,
);
const sitemap = await readFile(join(dist, "sitemap.xml"), "utf8");
if (blogLive) {
  assert(sitemap.includes("/blog"), "live blog missing from sitemap");
} else {
  const blog = await readFile(join(dist, "blog", "index.html"), "utf8");
  const blogCanonical = blog.match(/<link rel="canonical" href="([^"]+)"/);
  assert(blogCanonical, "hidden blog has no canonical URL");
  assert(
    blogCanonical[1].startsWith(`${configuredOrigin}/`),
    `Hidden blog canonical does not start with configured origin ${configuredOrigin}`,
  );
  assert(
    blog.includes("This page isn’t here."),
    "hidden blog must render not-found",
  );
  assert(blog.includes("noindex,nofollow"), "hidden blog must not be indexed");
  assert(!sitemap.includes("/blog"), "hidden blog must not be in the sitemap");
}
assert(
  sitemap.includes(`${configuredOrigin}/projects/docqa-tutor`),
  "project URL missing from sitemap",
);
for (const [, href] of sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)) {
  assert(
    href.startsWith(`${configuredOrigin}/`),
    `Sitemap URL ${href} does not start with configured origin ${configuredOrigin}`,
  );
}
assert(
  !sitemap.includes("/testimonials"),
  "noindex testimonial page should not be in the sitemap",
);
assert(sitemap.includes("<urlset"), "sitemap XML is missing the urlset root");
const robots = await readFile(join(dist, "robots.txt"), "utf8");
assert(
  robots.includes(`${configuredOrigin}/sitemap.xml`),
  "robots.txt is missing its sitemap location",
);
assert(
  blogLive
    ? !robots.includes("Disallow: /blog")
    : robots.includes("Disallow: /blog"),
  "robots.txt does not match the writing gate",
);
console.log(
  `Verified prerendered HTML for ${routes.length} routes and the 404 page.`,
);
