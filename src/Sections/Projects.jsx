import React from 'react';
import { motion } from 'framer-motion';
import '../Styles/Projects.css';
import SectionTag from '../Components/SectionTag.jsx';
import ProjectCard from '../Components/ProjectCard.jsx';
import projects from '../data/projects.js';
import MotionSection from '../motion/MotionSection.jsx';
import { revealItem, staggerContainer } from '../motion/variants.js';

function Projects() {
  return (
    <MotionSection id='projects' className='projects section-shell' containerClassName='section-container projects-container'>
      <motion.div variants={revealItem}>
        <SectionTag label='PROJECTS' />
      </motion.div>
      <motion.h2 className='projects-title' variants={revealItem}>
        Selected systems I engineered for reliability, speed, and growth.
      </motion.h2>

      <motion.div className='projects-grid' variants={staggerContainer}>
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
      </motion.div>
    </MotionSection>
  );
}

export default Projects;
