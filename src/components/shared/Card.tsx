import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hover = true,
  delay = 0 
}) => {
  return (
    <motion.div
      className={`bg-white rounded-xl shadow-lg p-6 ${hover ? 'hover:shadow-xl transition-shadow duration-300' : ''} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={hover ? { y: -5 } : {}}
    >
      {children}
    </motion.div>
  );
};

export default Card;