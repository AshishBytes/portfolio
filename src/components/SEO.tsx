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
    'Final-Year B.Tech CSE Student specializing in distributed systems and backend development.',
  image: '/favicon.ico',
  url: 'https://ashishbytes.com'
};

const SEO: React.FC<SEOProps> = ({ title, description, image, url }) => {
  const meta = {
    title: title || defaultMeta.title,
    description: description || defaultMeta.description,
    image: image || defaultMeta.image,
    url: url || defaultMeta.url
  };

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
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
      <link rel="canonical" href={meta.url} />
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Ashish Singh',
          url: meta.url,
          sameAs: [
            'https://github.com/AshishBytes',
            'https://linkedin.com/in/ashishbytes'
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
