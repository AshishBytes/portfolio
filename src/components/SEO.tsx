import React from 'react';
import { Helmet } from 'react-helmet-async';
import resume from '../data/resume.json';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

const defaultMeta = {
  title: `${resume.name} - Full Stack Developer`,
  description: resume.summary.split('\n')[0],
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
          name: resume.name,
          url: meta.url,
          sameAs: [
            `https://${resume.social.github}`,
            `https://${resume.social.linkedin}`,
          ],
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
