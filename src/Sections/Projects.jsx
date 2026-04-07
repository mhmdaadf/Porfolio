import React from 'react';
import '../Styles/Projects.css';
import SectionTag from '../Components/SectionTag.jsx';
import ProjectCard from '../Components/ProjectCard.jsx';
import projects from '../data/projects.js';

function Projects() {
  return (
    <section className='projects section-shell' id='projects'>
      <div className='section-container projects-container'>
        <SectionTag label='PROJECTS' />
        <h2 className='projects-title'>Selected systems I engineered for reliability, speed, and growth.</h2>

        <div className='projects-grid'>
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
