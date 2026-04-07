import React from 'react';
import { motion } from 'framer-motion';
import { buttonHover, buttonTap, microTransition } from './variants.js';

function MotionButtonLink({ className, children, ...props }) {
  return (
    <motion.a
      className={className}
      whileHover={buttonHover}
      whileTap={buttonTap}
      transition={microTransition}
      {...props}
    >
      {children}
    </motion.a>
  );
}

export default MotionButtonLink;
