import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const Section = ({
  children,
  id,
  className = '',
  title,
  subtitle,
  background = 'white'
}) => {
  const backgroundClasses = {
    white: 'bg-white dark:bg-dark-950',
    gray: 'bg-gray-50 dark:bg-dark-900',
    dark: 'bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900',
    gradient: 'bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900'
  };

  return (
    <section 
      id={id} 
      className={`py-20 lg:py-24 ${backgroundClasses[background]} ${className}`}
    >
      <div className="container mx-auto px-4 lg:px-6">
        {title && (
          <motion.div
            className="text-center mb-16 lg:mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${
              background === 'dark' || background === 'gradient' ? 'text-white' : 'text-gray-900 dark:text-white'
            }`}>
              {title}
            </h2>
            {subtitle && (
              <p className={`text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed ${
                background === 'dark' || background === 'gradient' ? 'text-gray-300' : 'text-gray-600 dark:text-gray-300'
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

Section.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  background: PropTypes.oneOf(['white', 'gray', 'dark', 'gradient']),
};

Section.defaultProps = {
  id: undefined,
  className: '',
  title: undefined,
  subtitle: undefined,
  background: 'white',
};

export default Section;