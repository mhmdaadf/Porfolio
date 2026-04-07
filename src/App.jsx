
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
    const sections = Array.from(document.querySelectorAll('.section-shell')).filter(
      (section) => section.id !== 'home'
    );

    if (!sections.length) {
      return undefined;
    }

    sections.forEach((section) => section.classList.add('scroll-reveal'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -10% 0px'
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
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
