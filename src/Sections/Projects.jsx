import React, { useState } from 'react';
import '../Styles/Projects.css';

function Projects() {
  const [activeTab, setActiveTab] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Eatsome',
      category: 'web',
      image: '',
      description: 'Food delivery website',
    },
    {
      id: 2,
      title: 'Portfolio',
      category: 'design',
      image: '',
      description: 'Personal portfolio design',
    },
    {
      id: 3,
      title: 'Dashboard',
      category: 'web',
      image: '',
      description: 'Admin dashboard',
    }
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <section className='projects' id='projects'>
      <div className='projects-container'>
        <div className='projects-header'>
          <button className='portfolio-btn'>PROJECTS</button>
        </div>
        <div className='project-tabs'>
          <button 
            className={`project-tab ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All
          </button>
          <button 
            className={`project-tab ${activeTab === 'design' ? 'active' : ''}`}
            onClick={() => setActiveTab('design')}
          >
            Design
          </button>
          <button 
            className={`project-tab ${activeTab === 'web' ? 'active' : ''}`}
            onClick={() => setActiveTab('web')}
          >
            Development
          </button>
        </div>
        <div className='projects-grid'>
          {filteredProjects.map(project => (
            <div key={project.id} className='project-card'>
              <img src={project.image} alt={project.title} />
              <div className='project-overlay'>
                <h4>{project.title}</h4>
                <p>{project.description}</p>
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
