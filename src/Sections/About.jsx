import React from 'react';
import '../Styles/About.css';

function About() {
  return (
    <section className='about' id='about'>
      <div className='about-container'>
        <h2 className='section-title'>ABOUT ME</h2>
        
        <p className='about-intro'>
          I'm a passionate developer who loves creating beautiful, functional, and user-friendly websites. 
          With a strong foundation in modern web technologies, I bring ideas to life through clean code 
          and thoughtful design.
        </p>
        
        <button className='explore-btn'>EXPLORE</button>
        
        <div className='divider'>
          <span></span>
          <p>WHAT I DO</p>
          <span></span>
        </div>
        
        <div className='services-grid'>
          <div className='service-item'>
            <h3>Design</h3>
            <p>
              Creating modern and intuitive user interfaces with attention to detail. 
              I focus on user experience and accessibility to ensure websites are 
              beautiful and functional.
            </p>
          </div>
          
          <div className='service-item'>
            <h3>Development</h3>
            <p>
              Building responsive websites and web applications using modern 
              technologies like React, JavaScript, and CSS. Clean, maintainable 
              code is my priority.
            </p>
          </div>
          
          <div className='service-item'>
            <h3>Maintenance</h3>
            <p>
              Providing ongoing support and maintenance to keep websites 
              running smoothly. Regular updates, bug fixes, and performance 
              optimizations included.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
