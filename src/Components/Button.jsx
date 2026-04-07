import React from 'react';
import { motion } from 'framer-motion';
import { buttonHover, buttonTap, microTransition } from '../animations/variants.js';

function Button({ as = 'a', className, children, ...props }) {
  const Component = as === 'button' ? motion.button : motion.a;

  return (
    <Component
      className={className}
      whileHover={buttonHover}
      whileTap={buttonTap}
      transition={microTransition}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Button;
