import '../Styles/Navbar.css';
import React, { useEffect, useRef, useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const activeSectionRef = useRef('home');

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Why Me', href: '#why-me' }
  ];

  const getNavOffset = () => {
    const nav = document.querySelector('.site-nav');
    return (nav?.offsetHeight ?? 76) + 12;
  };

  const scrollToSection = (event, href) => {
    const target = document.querySelector(href);
    if (target) {
      event.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - getNavOffset();
      window.scrollTo({ top: Math.max(top, 0), behavior: 'smooth' });
      const nextSection = href.slice(1);
      setActiveSection(nextSection);
      activeSectionRef.current = nextSection;
      window.history.replaceState(null, '', href);
    }
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);

      const marker = window.scrollY + getNavOffset() + 20;
      const sections = Array.from(document.querySelectorAll('header[id], section[id]'));
      let current = 'home';

      sections.forEach((section) => {
        if (marker >= section.offsetTop) {
          current = section.id;
        }
      });

      if (current !== activeSectionRef.current) {
        activeSectionRef.current = current;
        setActiveSection(current);
        const nextHash = `#${current}`;
        if (window.location.hash !== nextHash) {
          window.history.replaceState(null, '', nextHash);
        }
      }
    };

    const syncNavOffset = () => {
      document.documentElement.style.setProperty('--nav-offset', `${getNavOffset()}px`);
    };

    handleScroll();
    syncNavOffset();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', syncNavOffset, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', syncNavOffset);
    };
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
              className={`nav-link ${activeSection === item.href.slice(1) ? 'active' : ''}`}
              href={item.href}
              onClick={(event) => scrollToSection(event, item.href)}
            >
              {item.label}
            </a>
          ))}
          <a
            className={`nav-link nav-cta ${activeSection === 'contact' ? 'active' : ''}`}
            href="#contact"
            onClick={(event) => scrollToSection(event, '#contact')}
          >
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
            className={`nav-link ${activeSection === item.href.slice(1) ? 'active' : ''}`}
            href={item.href}
            onClick={(event) => scrollToSection(event, item.href)}
          >
            {item.label}
          </a>
        ))}
        <a
          className={`nav-link nav-cta ${activeSection === 'contact' ? 'active' : ''}`}
          href="#contact"
          onClick={(event) => scrollToSection(event, '#contact')}
        >
          Contact me
        </a>
      </div>
    </>
  );
}

export default Navbar;