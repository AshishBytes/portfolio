import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO: React.FC = () => {
  const baseUrl = 'https://ashishbytes.com';
  const title = 'Ashish Singh - Full Stack Developer | B.Tech CSE Student';
  const description = 'Final-Year B.Tech CSE Student specializing in distributed systems, backend development, and software engineering.';
  const image = `${baseUrl}/favicon.ico`;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Ashish Singh',
    url: baseUrl,
    jobTitle: 'Full Stack Developer',
    alumniOf: 'IIT Kanpur',
    sameAs: [
      'https://github.com/AshishBytes',
      'https://linkedin.com/in/ashishbytes'
    ]
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={baseUrl} />
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={baseUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content="Ashish Singh logo" />
      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
