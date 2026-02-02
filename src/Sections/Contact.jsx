import React from 'react';
import '../Styles/Contact.css';

function Contact() {
  return (
    <section className='contact' id='contact'>
      <div className='contact-container'>
        <h2 className='contact-title'>CONTACT</h2>
        
        <p className='contact-intro'>
          Have a project in mind or want to collaborate? Feel free to reach out! 
          I'm always open to discussing new opportunities, creative ideas, or ways we can work together.
        </p>
        
        
        <form className='contact-form' onSubmit={(e) => { e.preventDefault(); alert('Thank you for your message! I will get back to you soon.'); }}>
          <div className='form-group'>
            <input 
              type='text' 
              placeholder='ENTER YOUR NAME*'
              required
            />
          </div>
          
          <div className='form-group'>
            <input 
              type='email' 
              placeholder='ENTER YOUR EMAIL*'
              required
            />
          </div>
          
          <div className='form-group'>
            <input 
              type='tel' 
              placeholder='PHONE NUMBER'
            />
          </div>
          
          <div className='form-group'>
            <textarea 
              placeholder='YOUR MESSAGE*'
              required
            ></textarea>
          </div>
          
          <button type='submit' className='submit-btn'>SUBMIT</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
