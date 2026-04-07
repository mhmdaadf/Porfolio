import React from 'react';
import { motion } from 'framer-motion';
import { cardHover, revealItem, standardTransition } from '../motion/variants.js';

function ProjectCard({ project }) {
  return (
    <motion.article
      className='project-card'
      variants={revealItem}
      whileHover={cardHover}
      whileTap={{ scale: 0.995 }}
      transition={standardTransition}
    >
      <div className='project-top'>
        <h3>{project.title}</h3>
        <p className='project-problem'>{project.problem}</p>
      </div>

      <p className='project-tech'>
        <span>Stack:</span> {project.stack.join(' • ')}
      </p>

      <ul className='project-achievements'>
        {project.achievements.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div className='project-links'>
        <motion.a href={project.github} target='_blank' rel='noreferrer' whileHover={{ y: -1, scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={standardTransition}>
          GitHub
        </motion.a>
        <motion.a href={project.demo} target='_blank' rel='noreferrer' whileHover={{ y: -1, scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={standardTransition}>
          Live Demo
        </motion.a>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
