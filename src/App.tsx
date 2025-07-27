import React from 'react';
import Navigation from './components/Navigation';
import SEO from './components/SEO';
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
  return (
    <div className="min-h-screen">
      <SEO />
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <header>
        <Navigation />
      </header>
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
}

export default App;
