import React from 'react';
import SectionTag from '../Components/SectionTag.jsx';
import '../Styles/WhyMe.css';

const points = [
  {
    title: 'Architecture First',
    text:
      'I design backend features around clear boundaries, testable modules, and maintainable business rules.'
  },
  {
    title: 'Scalability Mindset',
    text:
      'I build APIs with growth in mind: async workflows, database efficiency, and observable performance.'
  },
  {
    title: 'Production Focus',
    text:
      'I care about reliability, secure defaults, and shipping systems that survive real traffic and edge cases.'
  }
];

function WhyMe() {
  return (
    <section className='why-me section-shell' id='why-me'>
      <div className='section-container'>
        <SectionTag label='WHY ME' />
        <h2>I build backend systems that stay clean as products grow.</h2>
        <p className='why-me-intro'>
          Recruiters and teams work with me when they need more than endpoints. I deliver stable API foundations
          that are easy for teams to scale and extend.
        </p>

        <div className='why-me-grid'>
          {points.map((point) => (
            <article key={point.title}>
              <h3>{point.title}</h3>
              <p>{point.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyMe;
