
import './App.css'
import React from 'react'
import Navbar from './Components/Navbar.jsx'
import Footer from './Components/Footer.jsx'
import About from './Sections/About.jsx'
import Contact from './Sections/Contact.jsx'
import Hero from './Sections/Hero.jsx'
import Projects from './Sections/Projects.jsx'
import Skills from './Sections/Skills.jsx'
import WhyMe from './Sections/WhyMe.jsx'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <WhyMe />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
