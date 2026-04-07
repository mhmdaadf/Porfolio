import React from 'react';
import '../Styles/Contact.css';
import SectionTag from '../Components/SectionTag.jsx';

function Contact() {
  return (
    <section className='contact section-shell' id='contact'>
      <div className='section-container contact-container'>
        <SectionTag label='CONTACT' />
        <h2>Let&apos;s build something scalable.</h2>
        <p className='contact-intro'>
          I am available for backend engineering roles and freelance API architecture projects. If your team
          needs robust systems and clean technical foundations, let&apos;s connect.
        </p>

        <div className='contact-links'>
          <a href='mailto:mohamad.a.alkhatib@gmail.com'>mohamad.a.alkhatib@gmail.com</a>
          <a href='https://github.com/mhmdaadf' target='_blank' rel='noreferrer'>
            github.com/mhmdaadf
          </a>
          <a href='https://linkedin.com' target='_blank' rel='noreferrer'>
            linkedin.com
          </a>
        </div>

        <a href='mailto:mohamad.a.alkhatib@gmail.com' className='cta-primary'>
          Start a conversation
        </a>
      </div>
    </section>
  );
}

export default Contact;
