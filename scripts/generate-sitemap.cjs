const { SitemapStream, streamToPromise } = require('sitemap');
const { writeFileSync } = require('fs');
const { Readable } = require('stream');

const links = [
  { url: '/', changefreq: 'hourly', priority: 1.0 },
  { url: '/about', changefreq: 'hourly', priority: 0.8 },
  { url: '/projects', changefreq: 'hourly', priority: 0.8 },
  { url: '/contact', changefreq: 'hourly', priority: 0.5 },
];

const sitemap = new SitemapStream({ hostname: 'https://ashishbytes.com' });

streamToPromise(Readable.from(links).pipe(sitemap)).then((data) => {
  writeFileSync('./public/sitemap.xml', data.toString() + '\n');
});
