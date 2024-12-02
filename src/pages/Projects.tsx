import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/Card';

const Projects: React.FC = () => {
  return (
    <motion.div 
      className="min-h-screen pt-32 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
        <Card>
          <h3 className="text-xl font-semibold mb-2">Ebay Web Analyzer</h3>
          <p className="text-white/70 text-sm mb-4">Python</p>
          <p className="text-white/80">
          Ebay Web ananlyzer that gathers key product listing iformation for further analysis.
          </p>
        </Card>
        <Card>
          <h3 className="text-xl font-semibold mb-2">Twitter Engagement Bot</h3>
          <p className="text-white/70 text-sm mb-4">Python • Docker</p>
          <p className="text-white/80">
          Automated twitter bot to run engagement campaign with sentiment analysis.
          </p>
        </Card>

      </div>
    </motion.div>
  );
}

export default Projects;