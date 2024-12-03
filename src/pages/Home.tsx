import React from 'react';
import { motion } from 'framer-motion';
import RotatingText from '../components/RotatingText';
import SocialLinks from '../components/SocialLinks';
const roles = [
  "Software Engineer",
  "Full-Stack Developer",
  "Film Buff",
  "Tech Enthusiast",
  "Foodie",
  "Lifelong Learner",
];

const Home: React.FC = () => {
  return (
    <motion.div 
      className="min-h-screen flex items-center justify-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center fit-content">
        <motion.h1 
          className="text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent leading-tight"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          John Ogundeji
        </motion.h1>
        <motion.div 
          className="text-2xl text-white/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <RotatingText words={roles} interval={4000} />
        </motion.div>
        <SocialLinks />
      </div>
    </motion.div>
  );
};

export default Home;