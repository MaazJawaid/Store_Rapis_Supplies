// src/components/Animations/SlideIn.jsx
import React from 'react';
import { motion } from 'framer-motion';

const SlideIn = ({ children }) => {
  return (
    <motion.div
      initial={{ x: '-100%' }}
      animate={{ x: 0 }}
      exit={{ x: '-100%' }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {children}
    </motion.div>
  );
};

export default SlideIn;
