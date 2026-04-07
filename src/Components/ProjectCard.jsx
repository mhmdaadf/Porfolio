import React from 'react';

function ProjectCard({ project }) {
  return (
    <article className='project-card'>
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
        <a href={project.github} target='_blank' rel='noreferrer'>
          GitHub
        </a>
        <a href={project.demo} target='_blank' rel='noreferrer'>
          Live Demo
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;
