import '../Styles/Navbar.css';
import React, { useEffect, useRef, useState } from "react";
import { motion } from 'framer-motion';
import { linkHover, microTransition, mobileMenuVariants, standardTransition } from '../animations/variants.js';
import useScrollDirection from '../hooks/useScrollDirection.js';
import { getNavOffset, smoothScrollToId } from '../utils/smoothScrollToId.js';

const NAV_ITEMS = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Why Me', id: 'why-me' }
];

const SECTION_IDS = ['home', ...NAV_ITEMS.map((item) => item.id), 'contact'];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const activeSectionRef = useRef('home');
  const navRef = useRef(null);
  const { isScrolled, isHidden } = useScrollDirection({ hideOffset: 120, disabled: menuOpen });

  const handleNavClick = (event, id) => {
    event.preventDefault();
    const scrolled = smoothScrollToId(id, navRef.current);

    if (scrolled) {
      setActiveSection(id);
      activeSectionRef.current = id;
      window.history.replaceState(null, '', `#${id}`);
    }

    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const marker = window.scrollY + getNavOffset(navRef.current) + 20;
      const sections = SECTION_IDS
        .map((id) => document.getElementById(id))
        .filter(Boolean);

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
      document.documentElement.style.setProperty('--nav-offset', `${getNavOffset(navRef.current)}px`);
    };

    const handleHashChange = () => {
      const id = window.location.hash.replace('#', '');
      if (!id) {
        return;
      }

      const didScroll = smoothScrollToId(id, navRef.current);
      if (didScroll) {
        setActiveSection(id);
        activeSectionRef.current = id;
      }
    };

    handleScroll();
    syncNavOffset();
    handleHashChange();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', syncNavOffset, { passive: true });
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', syncNavOffset);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <>
      <motion.nav
        ref={navRef}
        className='site-nav'
        animate={{
          y: isHidden ? '-110%' : '0%',
          backgroundColor: isScrolled ? 'rgba(248, 250, 252, 0.95)' : 'rgba(248, 250, 252, 0.82)',
          borderBottomColor: isScrolled ? 'rgba(148, 163, 184, 0.6)' : 'rgba(203, 213, 225, 0.7)',
          backdropFilter: isScrolled ? 'blur(12px)' : 'blur(8px)',
          boxShadow: isScrolled ? '0 8px 22px rgba(15, 23, 42, 0.07)' : '0 0 0 rgba(15, 23, 42, 0)'
        }}
        transition={standardTransition}
      >
        <a href="#home" className="nav-brand" onClick={(event) => handleNavClick(event, 'home')}>
          Mohammad Alkhatib
        </a>

        <div className="nav-links">
          {NAV_ITEMS.map((item) => (
            <motion.a
              key={item.id}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              href={`#${item.id}`}
              onClick={(event) => handleNavClick(event, item.id)}
              whileHover={linkHover}
              whileTap={{ scale: 0.98 }}
              transition={microTransition}
            >
              {item.label}
            </motion.a>
          ))}
          <motion.a
            className={`nav-link nav-cta ${activeSection === 'contact' ? 'active' : ''}`}
            href="#contact"
            onClick={(event) => handleNavClick(event, 'contact')}
            whileHover={{ y: -1, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={microTransition}
          >
            Contact me
          </motion.a>
        </div>

        <button className="hamburger" onClick={() => setMenuOpen(true)} aria-label='Open menu' aria-expanded={menuOpen}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </motion.nav>

      <motion.div
        className='mobile-menu'
        variants={mobileMenuVariants}
        initial='closed'
        animate={menuOpen ? 'open' : 'closed'}
        transition={standardTransition}
        style={{ pointerEvents: menuOpen ? 'auto' : 'none' }}
      >
        <button className="close-menu" onClick={() => setMenuOpen(false)} aria-label='Close menu'>×</button>
        {NAV_ITEMS.map((item) => (
          <motion.a
            key={item.id}
            className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
            href={`#${item.id}`}
            onClick={(event) => handleNavClick(event, item.id)}
            whileHover={linkHover}
            whileTap={{ scale: 0.98 }}
            transition={microTransition}
          >
            {item.label}
          </motion.a>
        ))}
        <motion.a
          className={`nav-link nav-cta ${activeSection === 'contact' ? 'active' : ''}`}
          href="#contact"
          onClick={(event) => handleNavClick(event, 'contact')}
          whileHover={{ y: -1, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={microTransition}
        >
          Contact me
        </motion.a>
      </motion.div>
    </>
  );
}

export default Navbar;