import '../Styles/Hero.css';
import React from 'react';

function Hero() {
  return (
    <>
      <section className="hero">
        <div className="blob"></div>
        <div className="hero-content">
          <p className="hero-greeting">Hi, I am</p>
          <h1 className="hero-name">Mohammad Alkhatib</h1>
          <p className="hero-title">FullStack Developer</p>
          
          <div className="hero-buttons">
            <a href="https://github.com" target="_blank" >
              <button className="hero-btn" aria-label="GitHub">
                <img src="src\assets\github.png" alt="" />
              </button>
            </a>
            <a href="https://linkedin.com" target="_blank" >
              <button className="hero-btn" aria-label="LinkedIn">
                <img src="src\assets\linkedin.png" alt="" />
              </button>
            </a>
            <a href="https://instagram.com" target="_blank" >
              <button className="hero-btn" aria-label="Instagram">
                <img src="src\assets\instagram-logo-8enw8ic510451dx7a7vsd4.webp" alt="" />
              </button>
            </a>
          </div>
        </div>
        
        <div className="hero-image-container">
          <img src="src\assets\ChatGPT_Image_Feb_1__2026__04_57_19_PM-removebg-preview.png" alt="Mohammad Alkhatib" className="portfolio-img" />
        </div>
      </section>

      <section className="hire-me">
        <h2 className="hire-me-title">HIRE ME</h2>
        <p className="hire-me-text">
          My name is Mohammad Alkhatib. I'm a developer with over 2 years experience in the industry working with various 
          technologies. Currently focused on front-end development, building responsive and accessible web applications. 
          Passionate about creating beautiful user interfaces and great user experiences. Always eager to learn new 
          technologies and improve my skills.
        </p>
        <button className="hire-btn">HIRE ME</button>
      </section>
    </>
  );
}

export default Hero;
