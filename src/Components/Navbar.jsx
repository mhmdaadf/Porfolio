import '../Styles/Navbar.css';
import React, { useEffect, useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Why Me', href: '#why-me' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`site-nav ${isScrolled ? 'is-scrolled' : ''}`}>
        <a href="#home" className="nav-brand" onClick={() => setMenuOpen(false)}>
          Mohammad Alkhatib
        </a>

        <div className="nav-links">
          {navItems.map((item) => (
            <a
              key={item.href}
              className="nav-link"
              href={item.href}
              onClick={() => scrollToSection(item.href.slice(1))}
            >
              {item.label}
            </a>
          ))}
          <a className="nav-link nav-cta" href="#contact" onClick={() => scrollToSection('contact')}>
            Contact me
          </a>
        </div>

        <button className="hamburger" onClick={() => setMenuOpen(true)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
        <button className="close-menu" onClick={() => setMenuOpen(false)}>×</button>
        {navItems.map((item) => (
          <a
            key={item.href}
            className="nav-link"
            href={item.href}
            onClick={() => scrollToSection(item.href.slice(1))}
          >
            {item.label}
          </a>
        ))}
        <a className="nav-link nav-cta" href="#contact" onClick={() => scrollToSection('contact')}>
          Contact me
        </a>
      </div>
    </>
  );
}

export default Navbar;