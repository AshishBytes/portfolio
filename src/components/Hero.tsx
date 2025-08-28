import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Github, Linkedin, ArrowRight, Eye } from 'lucide-react';
import Button from './shared/Button';

const Hero: React.FC = () => {
  const handleDownloadResume = () => {
    // Create a link to download the resume
    const link = document.createElement('a');
    link.href = '/Ashish_Singh_Amazon.pdf';
    link.download = 'Ashish_Singh_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800 dark:from-dark-950 dark:via-dark-900 dark:to-dark-800 flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-primary-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-400 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-accent-500 rounded-full mr-2 animate-pulse"></span>
              Available for Full-time Opportunities
            </motion.div>

            {/* Name */}
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-accent-400 via-primary-400 to-secondary-400 bg-clip-text text-transparent">
                Ashish Singh
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Final-Year B.Tech. CSE Student | Systems & Backend Enthusiast
            </motion.p>

            {/* Description */}
            <motion.p
              className="text-lg text-gray-400 mb-10 leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Passionate about building scalable distributed systems and backend solutions. 
              Experienced with Amazon-scale projects and modern tech stacks.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <Button
                variant="primary"
                size="lg"
                onClick={scrollToProjects}
                icon={<Eye size={20} />}
                className="group"
              >
                View Projects
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={scrollToContact}
                icon={<Mail size={20} />}
                className="border-white/20 text-white hover:bg-white/10"
              >
                Contact Me
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex items-center space-x-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <span className="text-gray-400 text-sm">Connect with me:</span>
              <motion.a
                href="https://github.com/AshishBytes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300 p-2 rounded-lg hover:bg-white/10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="GitHub Profile"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/ashishbytes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300 p-2 rounded-lg hover:bg-white/10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={24} />
              </motion.a>
              <Button
                variant="secondary"
                size="sm"
                onClick={handleDownloadResume}
                icon={<Download size={16} />}
                className="ml-4"
              >
                Resume
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent-500/20 to-primary-500/20 rounded-full blur-3xl scale-110 animate-glow"></div>
            
            {/* Profile Image Container */}
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl backdrop-blur-sm bg-white/5">
                <img 
                  src="/images/portrait.jpg" 
                  alt="Ashish Singh - Full Stack Developer and B.Tech CSE Student specializing in distributed systems and backend development"
                  className="w-full h-full object-cover"
                  loading="eager"
                  width="384"
                  height="384"
                />
              </div>
              
              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-accent-500 to-primary-500 rounded-xl flex items-center justify-center shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-white font-bold text-lg">👨‍💻</span>
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-r from-secondary-500 to-accent-500 rounded-xl flex items-center justify-center shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                <span className="text-white font-bold text-xl">🚀</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <p className="text-gray-400 text-sm mb-2">Scroll to explore</p>
          <motion.div
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center cursor-pointer"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;