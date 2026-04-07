import React from 'react';
import '../Styles/About.css';
import SectionTag from '../Components/SectionTag.jsx';

function About() {
  return (
    <section className='about section-shell' id='about'>
      <div className='section-container about-container'>
        <SectionTag label='ABOUT' />
        <h2 className='about-title'>Backend-first mindset with product-level ownership.</h2>

        <p className='about-intro'>
          I help teams ship reliable backend systems, from API design to deployment. My focus is building
          maintainable architecture that supports fast product iteration without accumulating technical debt.
        </p>

        <div className='about-grid'>
          <article className='about-item'>
            <h3>System Design</h3>
            <p>
              I design modular backend services with clear boundaries, robust contracts, and practical domain
              modeling for long-term scalability.
            </p>
          </article>

          <article className='about-item'>
            <h3>API Engineering</h3>
            <p>
              I build secure REST APIs with validation, auth guards, and observability so teams can deliver
              features confidently in production.
            </p>
          </article>

          <article className='about-item'>
            <h3>Data and Performance</h3>
            <p>
              I optimize queries, cache critical paths, and improve response times to keep user-facing flows
              fast under real traffic conditions.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default About;
