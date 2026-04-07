import React from 'react';
import '../Styles/Skills.css';
import htmlIcon from '../assets/html.png';
import cssIcon from '../assets/css.png';
import jsIcon from '../assets/js.png';
import reactIcon from '../assets/react.png';
import gitIcon from '../assets/git.png';
import figmaIcon from '../assets/figma.png';
import nodeIcon from '../assets/node.png';
import tsIcon from '../assets/ts.png';
import sqlIcon from '../assets/sql.png';

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
               <img src={htmlIcon} alt="" />
              </div>
              <span>HTML</span>
            </div>
            <div className='skill-item'>
              <div className='skill-icon'>
                <img src={cssIcon} alt="" />
              </div>
              <span>CSS</span>
            </div>
            <div className='skill-item'>
              <div className='skill-icon'>
                <img src={jsIcon} alt="" />
              </div>
              <span>JavaScript</span>
            </div>
            <div className='skill-item'>
              <div className='skill-icon'>
                <img src={reactIcon} alt="" />
              </div>
              <span>React</span>
            </div>
            <div className='skill-item'>
              <div className='skill-icon'>
                <img src={gitIcon} alt="" />
              </div>
              <span>Git</span>
            </div>
            <div className='skill-item'>
              <div className='skill-icon'>
                <img src={figmaIcon} alt="" />
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
                <img src={nodeIcon} alt="" />
              </div>
              <span>Node.js</span>
            </div>
            <div className='skill-item'>
              <div className='skill-icon'>
                <img src={tsIcon} alt="" />
              </div>
              <span>TypeScript</span>
            </div>
            <div className='skill-item'>
              <div className='skill-icon'>
                <img src={sqlIcon} alt="" />
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
