import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { join, resolve } from "node:path";

const dist = resolve(process.cwd(), "dist");
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
  ["/blog", "Article previews"],
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
const sitemap = await readFile(join(dist, "sitemap.xml"), "utf8");
assert(
  sitemap.includes("https://portfolio.ashishbytes.com/projects/docqa-tutor"),
  "project URL missing from sitemap",
);
assert(
  !sitemap.includes("/testimonials"),
  "noindex testimonial page should not be in the sitemap",
);
assert(sitemap.includes("<urlset"), "sitemap XML is missing the urlset root");
const robots = await readFile(join(dist, "robots.txt"), "utf8");
assert(
  robots.includes("https://portfolio.ashishbytes.com/sitemap.xml"),
  "robots.txt is missing its sitemap location",
);
console.log(
  `Verified prerendered HTML for ${routes.length} routes and the 404 page.`,
);
