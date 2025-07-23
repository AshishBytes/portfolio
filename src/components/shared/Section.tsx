import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  title?: string;
  subtitle?: string;
  background?: 'white' | 'gray' | 'gradient';
}

const Section: React.FC<SectionProps> = ({
  children,
  id,
  className = '',
  title,
  subtitle,
  background = 'white'
}) => {
  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    gradient: 'gradient-bg'
  };

  return (
    <section 
      id={id} 
      className={`py-20 ${backgroundClasses[background]} ${className}`}
    >
      <div className="container mx-auto px-4">
        {title && (
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
              background === 'gradient' ? 'text-white' : 'text-gray-800'
            }`}>
              {title}
            </h2>
            {subtitle && (
              <p className={`text-xl max-w-2xl mx-auto ${
                background === 'gradient' ? 'text-gray-200' : 'text-gray-600'
              }`}>
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;