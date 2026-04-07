import '../Styles/Hero.css';
import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/ChatGPT_Image_Feb_1__2026__04_57_19_PM-removebg-preview.png';
import Button from '../Components/Button.jsx';
import SectionTag from '../Components/SectionTag.jsx';
import { revealItem, revealSection, staggerContainer } from '../animations/variants.js';

function Hero() {
  return (
    <motion.header
      className='hero section-shell'
      id='home'
      variants={revealSection}
      initial='hidden'
      animate='show'
      viewport={{ once: true }}
    >
      <motion.div className='section-container hero-layout' variants={staggerContainer}>
        <motion.div className='hero-content' variants={staggerContainer}>
          <motion.div variants={revealItem}>
            <SectionTag label='FULL-STACK ENGINEER' />
          </motion.div>
          <motion.h1 variants={revealItem}>
            I build scalable full-stack products that stay fast, secure, and maintainable.
          </motion.h1>
          <motion.p className='hero-subtitle' variants={revealItem}>
            Full-stack developer building high-performance frontends, reliable APIs, and
            production-ready platform architecture.
          </motion.p>

          <motion.div className='hero-cta' variants={revealItem}>
            <Button href='https://github.com/mhmdaadf' target='_blank' rel='noreferrer' className='cta-primary'>
              View GitHub
            </Button>
          </motion.div>
        </motion.div>

        <motion.div className='hero-profile' variants={revealItem}>
          <img src={profileImage} alt='Mohammad Alkhatib portrait' className='portfolio-img' />
          <div className='hero-metric'>
            <p>Crafting scalable web experiences</p>
            <strong>Full-Stack Development + System Design</strong>
          </div>
        </motion.div>
      </motion.div>
    </motion.header>
  );
}

export default Hero;
