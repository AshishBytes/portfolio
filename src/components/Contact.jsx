import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Globe, Github, Linkedin, Send, MapPin, Phone } from 'lucide-react';
import Section from './shared/Section.jsx';
import Button from './shared/Button.jsx';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
    
    // Show success message (you can implement a toast notification here)
    alert('Message sent successfully! I\'ll get back to you soon.');
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "ashish@ashishbytes.com",
      href: "mailto:ashish@ashishbytes.com"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      label: "Website",
      value: "www.ashishbytes.com",
      href: "https://www.ashishbytes.com"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "AshishBytes",
      href: "https://github.com/AshishBytes"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "ashishbytes",
      href: "https://linkedin.com/in/ashishbytes"
    }
  ];

  return (
    <Section
      id="contact"
      title="Get In Touch"
      subtitle="Let's discuss opportunities and build something amazing together"
      background="gradient"
    >
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left Column - Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-white">
            <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
            <p className="text-gray-200 mb-8 leading-relaxed">
              I'm always interested in discussing new opportunities, innovative projects, 
              and collaborations. Whether you're looking for a software engineer, want to 
              discuss a project, or just want to connect, I'd love to hear from you.
            </p>

            {/* Contact Information */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((info) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center p-4 glass-effect rounded-lg hover:bg-white/20 transition-all duration-300 group"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-white group-hover:text-blue-200 transition-colors duration-300">
                    {info.icon}
                  </div>
                  <div className="ml-4">
                    <div className="text-sm text-gray-300">{info.label}</div>
                    <div className="text-white font-medium">{info.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Additional Info */}
            <div className="glass-effect rounded-lg p-6">
              <h4 className="text-lg font-semibold text-white mb-4">Quick Facts</h4>
              <ul className="space-y-2 text-gray-200">
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Based in India, Open to Remote Work
                </li>
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  Available for Full-time Opportunities
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-xl shadow-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                icon={<Send size={20} />}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Contact;