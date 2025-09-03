import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const defaultMeta = {
  title: 'Ashish Singh - Full Stack Developer | B.Tech CSE Student',
  description:
    'Final-Year B.Tech CSE student specializing in distributed systems, backend development, and software engineering. Experienced with Amazon-scale projects and modern tech stack.',
  image: 'https://ashishbytes.com/images/ashish-singh-og.webp',
  url: 'https://ashishbytes.com',
  type: 'website',
};

const SEO = ({ title, description, image, url, type }) => {
  const meta = { ...defaultMeta, title, description, image, url, type };
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="keywords" content="Ashish Singh, Software Engineer, Full Stack Developer, React, Python, Java, Distributed Systems, Backend Development, B.Tech CSE, Amazon, Machine Learning, NLP" />
      <meta name="author" content="Ashish Singh" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={meta.image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Ashish Singh - Full Stack Developer" />
      <meta property="og:type" content={meta.type} />
      <meta property="og:url" content={meta.url} />
      <meta property="og:site_name" content="Ashish Singh Portfolio" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
      <meta name="twitter:image:alt" content="Ashish Singh - Full Stack Developer" />
      <meta name="twitter:creator" content="@AshishBytes" />
      <meta name="twitter:site" content="@AshishBytes" />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#7c3aed" />
      <meta name="msapplication-TileColor" content="#7c3aed" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Ashish Singh" />
      
      {/* Canonical URL */}
      <link rel="canonical" href="https://ashishbytes.com" />
      
      {/* Preconnect for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Ashish Singh',
          alternateName: 'AshishBytes',
          description: 'Final-Year B.Tech CSE student specializing in distributed systems and backend development',
          url: meta.url,
          image: meta.image,
          jobTitle: 'Software Engineer',
          worksFor: {
            '@type': 'Organization',
            name: 'Happy'
          },
          alumniOf: {
            '@type': 'EducationalOrganization',
            name: 'Indian Institute of Technology'
          },
          knowsAbout: [
            'Distributed Systems',
            'Backend Development',
            'Python',
            'Java',
            'React',
            'Machine Learning',
            'Natural Language Processing'
          ],
          sameAs: [
            'https://github.com/AshishBytes',
            'https://linkedin.com/in/ashishbytes',
            'https://twitter.com/AshishBytes'
          ],
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'IN'
          }
        })}
      </script>
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
  type: PropTypes.string,
};

SEO.defaultProps = {
  title: undefined,
  description: undefined,
  image: undefined,
  url: undefined,
  type: undefined,
};

export default SEO;