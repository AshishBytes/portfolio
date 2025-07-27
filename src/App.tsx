import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Publications from './components/Publications';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SEO from './components/SEO';

function App() {
  return (
    <div className="min-h-screen">
      <SEO />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Publications />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
