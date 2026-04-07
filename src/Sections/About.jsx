import React from 'react';
import { motion } from 'framer-motion';
import '../Styles/About.css';
import SectionTag from '../Components/SectionTag.jsx';
import MotionSection from '../motion/MotionSection.jsx';
import { cardHover, revealItem, standardTransition, staggerContainer } from '../motion/variants.js';

function About() {
  return (
    <MotionSection id='about' className='about section-shell' containerClassName='section-container about-container'>
      <motion.div variants={revealItem}>
        <SectionTag label='ABOUT' />
      </motion.div>

      <motion.h2 className='about-title' variants={revealItem}>
        Backend-first mindset with product-level ownership.
      </motion.h2>

      <motion.p className='about-intro' variants={revealItem}>
          I help teams ship reliable backend systems, from API design to deployment. My focus is building
          maintainable architecture that supports fast product iteration without accumulating technical debt.
      </motion.p>

      <motion.div className='about-grid' variants={staggerContainer}>
        <motion.article className='about-item' variants={revealItem} whileHover={cardHover} transition={standardTransition}>
            <h3>System Design</h3>
            <p>
              I design modular backend services with clear boundaries, robust contracts, and practical domain
              modeling for long-term scalability.
            </p>
        </motion.article>

        <motion.article className='about-item' variants={revealItem} whileHover={cardHover} transition={standardTransition}>
            <h3>API Engineering</h3>
            <p>
              I build secure REST APIs with validation, auth guards, and observability so teams can deliver
              features confidently in production.
            </p>
        </motion.article>

        <motion.article className='about-item' variants={revealItem} whileHover={cardHover} transition={standardTransition}>
            <h3>Data and Performance</h3>
            <p>
              I optimize queries, cache critical paths, and improve response times to keep user-facing flows
              fast under real traffic conditions.
            </p>
        </motion.article>
      </motion.div>
    </MotionSection>
  );
}

export default About;
