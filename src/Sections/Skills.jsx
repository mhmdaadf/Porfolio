import React from 'react';
import { motion } from 'framer-motion';
import '../Styles/Skills.css';
import SectionTag from '../Components/SectionTag.jsx';
import Card from '../Components/Card.jsx';
import skillGroups from '../data/skills.js';
import MotionSection from '../motion/MotionSection.jsx';
import { revealItem, standardTransition, staggerContainer } from '../animations/variants.js';

function Skills() {
  return (
    <MotionSection id='skills' className='skills section-shell'>
      <motion.div variants={revealItem}>
        <SectionTag label='SKILLS' />
      </motion.div>
      <motion.h2 className='skills-title' variants={revealItem}>
        Tools and technologies I use to deliver production full-stack products.
      </motion.h2>

      <motion.div className='skills-groups' variants={staggerContainer}>
          {skillGroups.map((group) => (
            <Card
              key={group.title}
              className='skills-category'
            >
              <h3>{group.title}</h3>
              <motion.div className='skills-grid' variants={staggerContainer}>
                {group.items.map((skill) => (
                  <motion.span
                    key={skill}
                    className='skill-badge'
                    variants={revealItem}
                    whileHover={{ y: -1, scale: 1.03 }}
                    transition={standardTransition}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </Card>
          ))}
      </motion.div>
    </MotionSection>
  );
}

export default Skills;
