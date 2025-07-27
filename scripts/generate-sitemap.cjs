const { SitemapStream, streamToPromise } = require('sitemap');
const { writeFileSync } = require('fs');
const { Readable } = require('stream');

const links = [
  { url: '/', changefreq: 'monthly', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/projects', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.5 },
];

const sitemap = new SitemapStream({ hostname: 'https://ashishbytes.com' });

streamToPromise(Readable.from(links).pipe(sitemap)).then((data) => {
  writeFileSync('./public/sitemap.xml', data.toString() + '\n');
});
