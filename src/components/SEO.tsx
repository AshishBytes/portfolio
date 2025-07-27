import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

const defaultMeta = {
  title: 'Ashish Singh - Full Stack Developer',
  description:
    'Final-year B.Tech CS student with 4+ years building distributed systems and developer tools in C/C++/Python.',
  image: 'https://ashishbytes.com/og-image.png',
  url: 'https://ashishbytes.com',
};

const SEO: React.FC<SEOProps> = ({ title, description, image, url }) => {
  const meta = { ...defaultMeta, title, description, image, url };
  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={meta.image} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={meta.url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={meta.image} />
      <link rel="canonical" href="https://ashishbytes.com" />
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Ashish Singh',
          url: meta.url,
          sameAs: [
            'https://github.com/AshishBytes',
            'https://linkedin.com/in/ashishbytes',
          ],
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
