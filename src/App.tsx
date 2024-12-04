import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ParticleNetwork from './components/ParticleNetwork';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Projects from './pages/Projects';
import ReactGA from 'react-ga4';


// Initialize GA outside of the component
ReactGA.initialize('G-FS8F3BL959');

// Create a component to track page views
function PageTracker() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);

  return null;
}


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