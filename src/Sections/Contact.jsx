import React, { useState } from 'react';
import '../Styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section className='contact' id='contact'>
      <div className='contact-container'>
        <h2 className='contact-title'>CONTACT</h2>
        
        <p className='contact-intro'>
          Hello! If you want to contact me about anything, like offering me a cool job, 
          or just want to say hi, feel free to fill out the form below or reach me by email.
        </p>
        
        <div className='contact-divider'>
          <span></span>
          <p>WHAT</p>
          <span></span>
        </div>
        
        <form className='contact-form' onSubmit={handleSubmit}>
          <div className='form-group'>
            <input 
              type='text' 
              name='name'
              placeholder='Enter your name'
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className='form-group'>
            <input 
              type='email' 
              name='email'
              placeholder='Enter your email'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className='form-group'>
            <input 
              type='tel' 
              name='phone'
              placeholder='Phone number'
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          
          <div className='form-group'>
            <textarea 
              name='message'
              placeholder='Your message'
              value={formData.message}
              onChange={handleChange}
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
