import React from 'react';
import { motion } from 'framer-motion';
import '../Styles/Contact.css';
import Button from '../Components/Button.jsx';
import SectionTag from '../Components/SectionTag.jsx';
import MotionSection from '../motion/MotionSection.jsx';
import { microTransition, revealItem } from '../animations/variants.js';

function Contact() {
  const handleStartConversation = () => {
    window.location.href = 'mailto:mohamad.a.alkhatib@gmail.com';
  };

  return (
    <MotionSection id='contact' className='contact section-shell' containerClassName='section-container contact-container'>
      <motion.div variants={revealItem}>
        <SectionTag label='CONTACT' />
      </motion.div>

      <motion.h2 variants={revealItem}>Have a project in mind?</motion.h2>

      <motion.p className='contact-intro' variants={revealItem}>
        Let&apos;s build something exceptional together. I&apos;m available for focused full-stack collaboration
        and product delivery.
      </motion.p>

      <motion.div className='contact-cta' variants={revealItem}>
        <Button
          as='button'
          type='button'
          className='cta-primary contact-main-cta'
          onClick={handleStartConversation}
          whileHover={{ y: -1, scale: 1.04, boxShadow: '0 14px 30px rgba(15, 118, 110, 0.34)' }}
          whileTap={{ scale: 0.98 }}
          transition={{ ...microTransition, duration: 0.3 }}
        >
          Start a conversation
        </Button>
      </motion.div>

      <motion.p className='contact-email-fallback' variants={revealItem}>
        Prefer email directly? <a href='mailto:mohamad.a.alkhatib@gmail.com'>mohamad.a.alkhatib@gmail.com</a>
      </motion.p>
    </MotionSection>
  );
}

export default Contact;
