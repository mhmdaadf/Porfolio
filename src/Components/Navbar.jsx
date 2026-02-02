import '../Styles/Navbar.css';
import React, { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <>
      <nav>
        <img src="src\assets\image.png" alt="Logo" className="nav-logo" />
        
        <div className="nav-links">
          <button className="navbar-btn" onClick={() => scrollToSection('about')}>
            About me
          </button>
          <button className="navbar-btn" onClick={() => scrollToSection('skills')}>
            Skills
          </button>
          <button className="navbar-btn" onClick={() => scrollToSection('projects')}>
            Projects
          </button>
          <button className="navbar-btn contact-btn" onClick={() => scrollToSection('contact')}>
            Contact me
          </button>
        </div>

        <button className="hamburger" onClick={() => setMenuOpen(true)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
        <button className="close-menu" onClick={() => setMenuOpen(false)}>×</button>
        <button className="navbar-btn" onClick={() => scrollToSection('about')}>
          About me
        </button>
        <button className="navbar-btn" onClick={() => scrollToSection('skills')}>
          Skills
        </button>
        <button className="navbar-btn" onClick={() => scrollToSection('projects')}>
          Projects
        </button>
        <button className="navbar-btn" onClick={() => scrollToSection('contact')}>
          Contact me
        </button>
      </div>
    </>
  );
}

export default Navbar;