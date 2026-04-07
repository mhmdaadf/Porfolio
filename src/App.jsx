
import './App.css'
import React, { useEffect } from 'react'
import Navbar from './Components/Navbar.jsx'
import Footer from './Components/Footer.jsx'
import About from './Sections/About.jsx'
import Contact from './Sections/Contact.jsx'
import Hero from './Sections/Hero.jsx'
import Projects from './Sections/Projects.jsx'
import Skills from './Sections/Skills.jsx'
import WhyMe from './Sections/WhyMe.jsx'

function App() {
  useEffect(() => {
    const getNavOffset = () => {
      const nav = document.querySelector('.site-nav');
      return (nav?.offsetHeight ?? 76) + 12;
    };

    const syncOffset = () => {
      const offset = getNavOffset();
      document.documentElement.style.setProperty('--nav-offset', `${offset}px`);

      const anchors = document.querySelectorAll('section[id], header[id]');
      anchors.forEach((anchor) => {
        anchor.style.scrollMarginTop = `${offset}px`;
      });
    };

    syncOffset();

    const sectionTargets = Array.from(document.querySelectorAll('.section-shell')).filter(
      (section) => section.id !== 'home'
    );

    const staggerGroups = Array.from(
      document.querySelectorAll('.about-grid, .skills-groups, .projects-grid, .why-me-grid, .contact-links')
    );

    const revealTargets = new Set(sectionTargets);

    sectionTargets.forEach((section) => {
      section.classList.add('fade-up');
    });

    staggerGroups.forEach((group) => {
      group.classList.add('stagger-group');
      Array.from(group.children).forEach((child, index) => {
        child.classList.add('fade-up');
        child.style.setProperty('--reveal-delay', `${Math.min(index * 90, 360)}ms`);
        revealTargets.add(child);
      });
    });

    const targets = Array.from(revealTargets);

    if (!targets.length) {
      window.addEventListener('resize', syncOffset, { passive: true });
      return () => window.removeEventListener('resize', syncOffset);
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      targets.forEach((target) => target.classList.add('show'));
      window.addEventListener('resize', syncOffset, { passive: true });
      return () => window.removeEventListener('resize', syncOffset);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -10% 0px'
      }
    );

    targets.forEach((target) => observer.observe(target));

    window.addEventListener('resize', syncOffset, { passive: true });

    return () => {
      window.removeEventListener('resize', syncOffset);
      observer.disconnect();
      targets.forEach((target) => target.style.removeProperty('--reveal-delay'));
    };
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <WhyMe />
      <Contact />
      <Footer />
    </>
  )
}

export default App
