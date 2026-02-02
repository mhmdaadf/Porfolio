import React from 'react';
import '../Styles/Skills.css';

function Skills() {
  return (
    <section className='skills' id='skills'>
      <div className='skills-container'>
        <button className='skills-btn'>SKILLS</button>
        
        <div className='skills-category'>
          <h3>Using Now:</h3>
          <div className='skills-grid'>
            <div className='skill-item'>
              <div className='skill-icon'>
               <img src="src\assets\html.png" alt="" />
              </div>
              <span>HTML</span>
            </div>
            <div className='skill-item'>
              <div className='skill-icon'>
                <img src="src\assets\css.png" alt="" />
              </div>
              <span>CSS</span>
            </div>
            <div className='skill-item'>
              <div className='skill-icon'>
                <img src="src\assets\js.png" alt="" />
              </div>
              <span>JavaScript</span>
            </div>
            
            <div className='skill-item'>
              <div className='skill-icon'>
                <img src="src\assets\react.png" alt="" />
              </div>
              <span>React</span>
            </div>
            
            
            
            <div className='skill-item'>
              <div className='skill-icon'>
                <img src="src\assets\git.png" alt="" />
              </div>
              <span>Git</span>
            </div>
            
            <div className='skill-item'>
              <div className='skill-icon'>
                <img src="src\assets\figma.png" alt="" />
              </div>
              <span>Figma</span>
            </div>
          </div>
        </div>
        
        <div className='skills-category'>
          <h3>Learning:</h3>
          <div className='skills-grid'>
            <div className='skill-item'>
              <div className='skill-icon'>
                <img src="src\assets\node.png" alt="" />
              </div>
              <span>Node.js</span>
            </div>
            
            <div className='skill-item'>
              <div className='skill-icon'>
                <img src="src\assets\ts.png" alt="" />
              </div>
              <span>TypeScript</span>
            </div>
            
            <div className='skill-item'>
              <div className='skill-icon'>
                <img src="src\assets\sql.png" alt="" />
              </div>
              <span>MYSQL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
