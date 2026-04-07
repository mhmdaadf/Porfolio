import '../Styles/Hero.css';
import React from 'react';
import githubIcon from '../assets/github.png';
import linkedinIcon from '../assets/linkedin.png';
import profileImage from '../assets/ChatGPT_Image_Feb_1__2026__04_57_19_PM-removebg-preview.png';

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
            <a href="https://github.com/mhmdaadf" target="_blank" >
              <button className="hero-btn" aria-label="GitHub">
                <img src={githubIcon} alt="" />
              </button>
            </a>
            <a href="https://linkedin.com" target="_blank" >
              <button className="hero-btn" aria-label="LinkedIn">
                <img src={linkedinIcon} alt="" />
              </button>
            </a>
            <a href="https://wa.me/96181804493" target="_blank" >
              <button className="hero-btn" aria-label="WhatsApp">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.9.53 3.74 1.54 5.34L2 22l4.89-1.61c1.54.84 3.28 1.29 5.15 1.29 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm0 18.15c-1.68 0-3.32-.45-4.74-1.3l-.34-.2-2.9.96.97-2.83-.22-.37a7.8 7.8 0 0 1-1.2-4.1c0-4.3 3.49-7.79 7.79-7.79s7.79 3.49 7.79 7.79-3.49 7.84-7.79 7.84zm4.52-6.17c-.25-.12-1.48-.73-1.71-.82-.23-.08-.39-.12-.55.13-.16.25-.63.82-.77.99-.14.16-.28.18-.53.06-.25-.12-1.04-.38-1.98-1.23-.73-.65-1.23-1.46-1.38-1.71-.14-.25-.02-.39.1-.51.1-.1.23-.28.35-.42.12-.14.16-.25.25-.41.08-.16.04-.3-.02-.42-.06-.12-.55-1.34-.76-1.83-.2-.48-.41-.42-.55-.43h-.47c-.16 0-.42.06-.64.3-.22.25-.86.84-.86 2.05s.88 2.38 1 2.54c.12.16 1.76 2.69 4.27 3.77.6.26 1.07.42 1.44.54.61.2 1.17.17 1.61.1.49-.07 1.48-.6 1.69-1.18.21-.58.21-1.08.15-1.18-.06-.1-.22-.16-.47-.28z"/>
                </svg>
              </button>
            </a>
          </div>
        </div>
        
        <div className="hero-image-container">
          <img src={profileImage} alt="Mohammad Alkhatib" className="portfolio-img" />
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
        <div className="hire-btn">HIRE ME</div>
      </section>
    </>
  );
}

export default Hero;
