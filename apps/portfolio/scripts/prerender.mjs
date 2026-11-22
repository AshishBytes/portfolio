import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const appRoot = process.cwd();
const distRoot = resolve(appRoot, "dist");
const template = await readFile(join(distRoot, "index.html"), "utf8");
const serverEntryUrl = pathToFileURL(
  join(appRoot, ".prerender", "server", "entry-server.js"),
).href;
const { render, getCanonicalUrl, getPageMetadata, getStructuredData } =
  await import(serverEntryUrl);
const routes = [
  "/",
  "/about",
  "/experience",
  "/projects",
  "/projects/reef-platform",
  "/projects/hackiitk-blockchain",
  "/projects/docqa-tutor",
  "/projects/tripledger",
  "/skills",
  "/achievements",
  "/publications",
  "/testimonials",
  "/blog",
  "/resume",
  "/contact",
];

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function createHead(pathname) {
  const metadata = getPageMetadata(pathname);
  const canonical = getCanonicalUrl(metadata.path);
  const image = getCanonicalUrl(metadata.image);
  const structuredData = JSON.stringify(getStructuredData(pathname)).replaceAll(
    "<",
    "\\u003c",
  );
  return [
    `<title>${escapeHtml(metadata.title)}</title>`,
    `<meta name="description" content="${escapeHtml(metadata.description)}" />`,
    `<meta name="robots" content="${metadata.index === false ? "noindex,nofollow" : "index,follow"}" />`,
    `<link rel="canonical" href="${escapeHtml(canonical)}" />`,
    `<meta property="og:type" content="${metadata.type ?? "website"}" />`,
    `<meta property="og:title" content="${escapeHtml(metadata.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(metadata.description)}" />`,
    `<meta property="og:url" content="${escapeHtml(canonical)}" />`,
    `<meta property="og:image" content="${escapeHtml(image)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtml(metadata.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(metadata.description)}" />`,
    `<meta name="twitter:image" content="${escapeHtml(image)}" />`,
    `<script id="portfolio-structured-data" type="application/ld+json">${structuredData}</script>`,
  ].join("\n    ");
}

async function writeRoute(pathname) {
  const html = await render(pathname);
  const outputPath =
    pathname === "/"
      ? join(distRoot, "index.html")
      : join(distRoot, pathname.slice(1), "index.html");
  await mkdir(dirname(outputPath), { recursive: true });
  const output = template
    .replace("<!--app-head-->", createHead(pathname))
    .replace("<!--app-html-->", html)
    .replace('<div id="root">', '<div id="root" data-prerendered="true">');
  await writeFile(outputPath, output, "utf8");
}

for (const route of routes) await writeRoute(route);

const notFoundHtml = template
  .replace("<!--app-head-->", createHead("/not-found"))
  .replace("<!--app-html-->", await render("/not-found"))
  .replace('<div id="root">', '<div id="root" data-prerendered="true">');
await writeFile(join(distRoot, "404.html"), notFoundHtml, "utf8");

const sitemapRoutes = routes.filter((route) => route !== "/testimonials");
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapRoutes.map((route) => `  <url><loc>${getCanonicalUrl(route)}</loc></url>`).join("\n")}\n</urlset>\n`;
await writeFile(join(distRoot, "sitemap.xml"), sitemap, "utf8");
console.log(`Prerendered ${routes.length} public routes and a 404 document.`);
