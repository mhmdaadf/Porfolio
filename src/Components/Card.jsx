import React from 'react';
import { motion } from 'framer-motion';
import { cardHover, revealItem, standardTransition } from '../animations/variants.js';

function Card({ as = 'article', className, children, ...props }) {
  const Component = as === 'div' ? motion.div : motion.article;

  return (
    <Component
      className={className}
      variants={revealItem}
      whileHover={cardHover}
      transition={standardTransition}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Card;
