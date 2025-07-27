import React from 'react';
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

const App = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Ashish Singh',
    url: 'https://ashishbytes.com',
    sameAs: [
      'https://github.com/AshishBytes',
      'https://linkedin.com/in/ashishbytes'
    ],
    jobTitle: 'Full Stack Developer',
    alumniOf: 'IIT Kanpur'
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Ashish Singh - Full Stack Developer</title>
        <meta
          name="description"
          content="Portfolio of Ashish Singh, backend and distributed systems engineer."
        />
        <link rel="canonical" href="https://ashishbytes.com" />
        <meta property="og:title" content="Ashish Singh - Full Stack Developer" />
        <meta
          property="og:description"
          content="Portfolio of Ashish Singh, backend and distributed systems engineer."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ashishbytes.com" />
        <meta property="og:image" content="/favicon.ico" />
        <meta property="og:image:alt" content="Ashish Singh logo" />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:title" content="Ashish Singh - Full Stack Developer" />
        <meta
          property="twitter:description"
          content="Portfolio of Ashish Singh, backend and distributed systems engineer."
        />
        <meta property="twitter:image" content="/favicon.ico" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <Navigation />
      <main id="main-content">
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
};

export default App;
