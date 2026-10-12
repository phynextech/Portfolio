// src/App.jsx
import { useScrollReveal } from './hooks/useScrollReveal';
import { useCursor } from './hooks/useCursor';
import Loader from './components/Loader/Loader';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Internships from './components/Internships/Internships';
import Certificates from './components/Certificates/Certificates';
import Achievements from './components/Achievements/Achievements';
import Hackathons from './components/Hackathons/Hackathons';
import Phynex from './components/Phynex/Phynex';
import SkillBars from './components/SkillBars/SkillBars';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  useScrollReveal();
  useCursor();

  return (
    <div className="app-wrapper">
      <div className="app-bg"></div>
      <Loader />
      <div id="cursor-dot" className="cursor-dot"></div>
      <div id="cursor-ring" className="cursor-ring"></div>
      <div id="cursor-glow" className="cursor-glow"></div>

      <Navbar />
      <Hero />
      <div className="grad-divider"></div>
      <About />
      <div className="grad-divider"></div>
      <Education />
      <div className="grad-divider"></div>
      <Skills />
      <div className="grad-divider"></div>
      <Projects />
      <div className="grad-divider"></div>
      <Internships />
      <div className="grad-divider"></div>
      <Certificates />
      <div className="grad-divider"></div>
      <Achievements />
      <div className="grad-divider"></div>
      <Hackathons />
      <div className="grad-divider"></div>
      <Phynex />
      <div className="grad-divider"></div>
      <SkillBars />
      <div className="grad-divider"></div>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
