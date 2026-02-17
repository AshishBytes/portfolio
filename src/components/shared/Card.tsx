import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
  variant?: 'default' | 'glass' | 'gradient';
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = true,
  delay = 0,
  variant = 'default',
}) => {
  const variantClasses = {
    default:
      'bg-white dark:bg-dark-800 border border-gray-200 dark:border-gray-700',
    glass: 'glass-effect border border-white/20 dark:border-white/10',
    gradient:
      'bg-gradient-to-br from-white to-gray-50 dark:from-dark-800 dark:to-dark-900 border border-gray-200 dark:border-gray-700',
  };

  const hoverClass = hover ? 'card-hover' : '';

  return (
    <motion.div
      className={`rounded-2xl shadow-lg p-6 lg:p-8 ${variantClasses[variant]} ${hoverClass} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default Card;
