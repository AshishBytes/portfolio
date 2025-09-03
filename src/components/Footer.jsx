import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left - Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gradient mb-2">Ashish Singh</h3>
            <p className="text-gray-400">
              Building the future, one line of code at a time.
            </p>
          </motion.div>

          {/* Center - Quick Links */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">
                About
              </a>
              <a href="#skills" className="text-gray-400 hover:text-white transition-colors duration-300">
                Skills
              </a>
              <a href="#experience" className="text-gray-400 hover:text-white transition-colors duration-300">
                Experience
              </a>
              <a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-300">
                Projects
              </a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">
                Contact
              </a>
            </div>
          </motion.div>

          {/* Right - Social Links */}
          <motion.div
            className="flex justify-center md:justify-end space-x-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="https://github.com/AshishBytes"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/ashishbytes"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href="mailto:ashish@ashishbytes.com"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail size={20} />
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-800 mt-8 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 flex items-center justify-center">
            © {currentYear} Ashish Singh. Made with{' '}
            <Heart className="w-4 h-4 text-red-500 mx-1" fill="currentColor" />{' '}
            and lots of coffee.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;