import React from 'react';
import '../Styles/Projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Online Bookstore',
      image: '',
    },
    {
      id: 2,
      title: 'Portfolio',
      image: '',
    },
    {
      id: 3,
      title: 'Dashboard',
      image: '',
    }
  ];

  return (
    <section className='projects' id='projects'>
      <div className='projects-container'>
        <div className='projects-header'>
          <button className='project-btn'>PROJECTS</button>
        </div>
        <div className='projects-grid'>
          {projects.map(project => (
            <div key={project.id} className='project-card'>
              <img src={project.image} alt={project.title} />
              <div className='project-overlay'>
                <h4>{project.title}</h4>
              </div>
            </div>
          ))}
        </div>
        <p className='more-coming'>And many more to come!</p>
      </div>
    </section>
  );
}

export default Projects;
