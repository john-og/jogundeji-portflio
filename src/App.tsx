import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ParticleNetwork from './components/ParticleNetwork';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Projects from './pages/Projects';

function App() {
  return (
    <Router>
      <div className="min-h-screen text-white">
        <ParticleNetwork />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;