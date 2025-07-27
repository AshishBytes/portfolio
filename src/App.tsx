import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Publications from './components/Publications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Ashish Singh',
    url: 'https://ashishbytes.com',
    sameAs: [
      'https://github.com/AshishBytes',
      'https://linkedin.com/in/ashishbytes',
    ],
    jobTitle: 'Software Engineer',
    alumniOf: 'IIT BHU',
  };

  useEffect(() => {
    const id = import.meta.env.VITE_GA_ID;
    if (!id) return;
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
    script.async = true;
    document.head.appendChild(script);
    (window as Window & { dataLayer: unknown[] }).dataLayer = (window as Window & { dataLayer?: unknown[] }).dataLayer || [];
    function gtag(...args: unknown[]) {
      (window as Window & { dataLayer: unknown[] }).dataLayer.push(args);
    }
    gtag('js', new Date());
    gtag('config', id);
  }, []);
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Ashish Singh - Full Stack Developer | B.Tech CSE Student</title>
        <meta
          name="description"
          content="Final-Year B.Tech CSE Student specializing in distributed systems, backend development, and software engineering. Experienced with Amazon-scale projects."
        />
        <link rel="canonical" href="https://ashishbytes.com" />
        <meta property="og:title" content="Ashish Singh - Full Stack Developer" />
        <meta
          property="og:description"
          content="Final-Year B.Tech CSE Student specializing in distributed systems and backend development"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ashishbytes.com" />
        <meta property="og:image" content="https://ashishbytes.com/og-image.png" />
        <meta property="og:image:alt" content="Ashish Singh" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Ashish Singh - Full Stack Developer" />
        <meta
          property="twitter:description"
          content="Final-Year B.Tech CSE Student specializing in distributed systems and backend development"
        />
        <meta property="twitter:image" content="https://ashishbytes.com/og-image.png" />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>
      <Navigation />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
