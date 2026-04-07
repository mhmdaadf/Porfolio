import React from 'react';
import { motion } from 'framer-motion';
import SectionTag from '../Components/SectionTag.jsx';
import '../Styles/WhyMe.css';
import MotionSection from '../motion/MotionSection.jsx';
import { cardHover, revealItem, standardTransition, staggerContainer } from '../motion/variants.js';

const points = [
  {
    title: 'Architecture First',
    text:
      'I design backend features around clear boundaries, testable modules, and maintainable business rules.'
  },
  {
    title: 'Scalability Mindset',
    text:
      'I build APIs with growth in mind: async workflows, database efficiency, and observable performance.'
  },
  {
    title: 'Production Focus',
    text:
      'I care about reliability, secure defaults, and shipping systems that survive real traffic and edge cases.'
  }
];

function WhyMe() {
  return (
    <MotionSection id='why-me' className='why-me section-shell'>
      <motion.div variants={revealItem}>
        <SectionTag label='WHY ME' />
      </motion.div>
      <motion.h2 variants={revealItem}>I build backend systems that stay clean as products grow.</motion.h2>
      <motion.p className='why-me-intro' variants={revealItem}>
          Recruiters and teams work with me when they need more than endpoints. I deliver stable API foundations
          that are easy for teams to scale and extend.
      </motion.p>

      <motion.div className='why-me-grid' variants={staggerContainer}>
          {points.map((point) => (
            <motion.article
              key={point.title}
              variants={revealItem}
              whileHover={cardHover}
              transition={standardTransition}
            >
              <h3>{point.title}</h3>
              <p>{point.text}</p>
            </motion.article>
          ))}
      </motion.div>
    </MotionSection>
  );
}

export default WhyMe;
