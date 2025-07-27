/* eslint-disable react-refresh/only-export-components */
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

const defaultTitle = 'Ashish Singh - Full Stack Developer';
const defaultDescription =
  'Final-Year B.Tech CSE Student specializing in distributed systems and backend development.';
const defaultImage = 'https://ashishbytes.com/og-image.jpg';
const defaultUrl = 'https://ashishbytes.com';

const SEO: React.FC<SEOProps> = ({
  title = defaultTitle,
  description = defaultDescription,
  image = defaultImage,
  url = defaultUrl,
}) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={url} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={url} />
    <meta property="og:image" content={image} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={image} />
    <script type="application/ld+json">
      {JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Ashish Singh',
        url: 'https://ashishbytes.com',
        sameAs: [
          'https://github.com/AshishBytes',
          'https://linkedin.com/in/ashishbytes',
        ],
      })}
    </script>
  </Helmet>
);

export default SEO;
