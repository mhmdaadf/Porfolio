import React from 'react';
import { motion } from 'framer-motion';
import { revealSection, staggerContainer } from './variants.js';

function MotionSection({
  id,
  className,
  containerClassName = 'section-container',
  viewportAmount = 0.25,
  children
}) {
  return (
    <motion.section
      id={id}
      className={className}
      variants={revealSection}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: viewportAmount }}
    >
      <motion.div className={containerClassName} variants={staggerContainer}>
        {children}
      </motion.div>
    </motion.section>
  );
}

export default MotionSection;
