import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import MissionVision from './components/MissionVision';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Hero />
      <About />
      <MissionVision />
      <Projects />
      <Technologies />
      <Contact />
    </div>
  );
}

export default App;