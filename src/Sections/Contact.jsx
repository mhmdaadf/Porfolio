import React from 'react';
import { motion } from 'framer-motion';
import '../Styles/Contact.css';
import SectionTag from '../Components/SectionTag.jsx';
import MotionSection from '../motion/MotionSection.jsx';
import MotionButtonLink from '../motion/MotionButtonLink.jsx';
import { revealItem, staggerContainer, standardTransition } from '../motion/variants.js';

function Contact() {
  return (
    <MotionSection id='contact' className='contact section-shell' containerClassName='section-container contact-container'>
      <motion.div variants={revealItem}>
        <SectionTag label='CONTACT' />
      </motion.div>
      <motion.h2 variants={revealItem}>Let&apos;s build something scalable.</motion.h2>
      <motion.p className='contact-intro' variants={revealItem}>
          I am available for backend engineering roles and freelance API architecture projects. If your team
          needs robust systems and clean technical foundations, let&apos;s connect.
      </motion.p>

      <motion.div className='contact-links' variants={staggerContainer}>
        <motion.a href='mailto:mohamad.a.alkhatib@gmail.com' variants={revealItem} whileHover={{ y: -1, scale: 1.01 }} transition={standardTransition}>
          mohamad.a.alkhatib@gmail.com
        </motion.a>
        <motion.a href='https://github.com/mhmdaadf' target='_blank' rel='noreferrer' variants={revealItem} whileHover={{ y: -1, scale: 1.01 }} transition={standardTransition}>
            github.com/mhmdaadf
        </motion.a>
        <motion.a href='https://linkedin.com' target='_blank' rel='noreferrer' variants={revealItem} whileHover={{ y: -1, scale: 1.01 }} transition={standardTransition}>
            linkedin.com
        </motion.a>
      </motion.div>

      <motion.div variants={revealItem}>
        <MotionButtonLink href='mailto:mohamad.a.alkhatib@gmail.com' className='cta-primary'>
          Start a conversation
        </MotionButtonLink>
      </motion.div>
    </MotionSection>
  );
}

export default Contact;
