import React from 'react';
import '../Styles/Skills.css';
import SectionTag from '../Components/SectionTag.jsx';
import skillGroups from '../data/skills.js';

function Skills() {
  return (
    <section className='skills section-shell' id='skills'>
      <div className='section-container'>
        <SectionTag label='SKILLS' />
        <h2 className='skills-title'>Tools and technologies I use to deliver production backend systems.</h2>

        <div className='skills-groups'>
          {skillGroups.map((group) => (
            <article key={group.title} className='skills-category'>
              <h3>{group.title}</h3>
              <div className='skills-grid'>
                {group.items.map((skill) => (
                  <span key={skill} className='skill-badge'>
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
