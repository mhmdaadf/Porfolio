import React from 'react';
import { motion } from 'framer-motion';
import '../Styles/Footer.css';
import { linkHover, microTransition, revealItem, revealSection, staggerContainer } from '../motion/variants.js';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.footer
      className='footer'
      variants={revealSection}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div className='footer-container' variants={staggerContainer}>
        <motion.button className='back-to-top' onClick={scrollToTop} variants={revealItem} whileHover={{ y: -1, scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={microTransition}>
          <span className='top-arrow' aria-hidden='true'>↑</span>
          <span>Back to top</span>
        </motion.button>

        <motion.p className='footer-copy' variants={revealItem}>
          Backend Engineer focused on scalable APIs, clean architecture, and reliable product infrastructure.
        </motion.p>

        <motion.div className='social-links' variants={staggerContainer}>
          <motion.a href="https://github.com/mhmdaadf" target="_blank" rel='noreferrer' className='social-link' aria-label='GitHub' variants={revealItem} whileHover={linkHover} whileTap={{ scale: 0.97 }} transition={microTransition}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </motion.a>
          <motion.a href="https://linkedin.com" target="_blank" rel='noreferrer' className='social-link' aria-label='LinkedIn' variants={revealItem} whileHover={linkHover} whileTap={{ scale: 0.97 }} transition={microTransition}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </motion.a>
          <motion.a href="https://wa.me/96181804493" target="_blank" rel='noreferrer' className='social-link' aria-label="WhatsApp" variants={revealItem} whileHover={linkHover} whileTap={{ scale: 0.97 }} transition={microTransition}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.9.53 3.74 1.54 5.34L2 22l4.89-1.61c1.54.84 3.28 1.29 5.15 1.29 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm0 18.15c-1.68 0-3.32-.45-4.74-1.3l-.34-.2-2.9.96.97-2.83-.22-.37a7.8 7.8 0 0 1-1.2-4.1c0-4.3 3.49-7.79 7.79-7.79s7.79 3.49 7.79 7.79-3.49 7.84-7.79 7.84zm4.52-6.17c-.25-.12-1.48-.73-1.71-.82-.23-.08-.39-.12-.55.13-.16.25-.63.82-.77.99-.14.16-.28.18-.53.06-.25-.12-1.04-.38-1.98-1.23-.73-.65-1.23-1.46-1.38-1.71-.14-.25-.02-.39.1-.51.1-.1.23-.28.35-.42.12-.14.16-.25.25-.41.08-.16.04-.3-.02-.42-.06-.12-.55-1.34-.76-1.83-.2-.48-.41-.42-.55-.43h-.47c-.16 0-.42.06-.64.3-.22.25-.86.84-.86 2.05s.88 2.38 1 2.54c.12.16 1.76 2.69 4.27 3.77.6.26 1.07.42 1.44.54.61.2 1.17.17 1.61.1.49-.07 1.48-.6 1.69-1.18.21-.58.21-1.08.15-1.18-.06-.1-.22-.16-.47-.28z"/>
            </svg>
          </motion.a>
          <motion.a href="mailto:mohamad.a.alkhatib@gmail.com" className='social-link' aria-label="Email" variants={revealItem} whileHover={linkHover} whileTap={{ scale: 0.97 }} transition={microTransition}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </motion.a>
        </motion.div>
        
        <motion.p className='copyright' variants={revealItem}>
          &copy; 2026 Mohammad Alkhatib. Built for performance and clarity.
        </motion.p>
      </motion.div>
    </motion.footer>
  );
}

export default Footer;
