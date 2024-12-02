import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/Card';

const Education: React.FC = () => {
  return (
    <motion.div 
      className="min-h-screen pt-32 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl font-bold mb-12 text-center">Education</h2>
      <div className="max-w-3xl mx-auto space-y-6">
        <Card>
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-xl font-semibold">Bachelor's in Computer Science</h3>
              <p className="text-white/70">University of Waterloo</p>
            </div>
            <p className="text-white/70 text-sm">2017 - 2022</p>
          </div>
          
          <p className="text-white/80">
            <b>Relevant Coursework: </b> 
              Computer Networking, Human-Computer Interaction, User Interface Design, Algorithim Design & Data Abstraction,
              Data Structures and Data Management, Object-Oriented Software Development
          </p>
        </Card>
        <Card>
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-xl font-semibold">Bachelor's in Business Administration</h3>
              <p className="text-white/70">Wilfrid Laurier University</p>
            </div>
            <p className="text-white/70 text-sm">2017 - 2022</p>
          </div>
          <p className="text-white/80">
            <b>Relevant Coursework: </b>
            Finance I & II, Marketing I, Organizational Behaviour I & II, Building and Managing Products, Services & Brands, High-tech Marketing, Entrepreneurship,
          </p>
        </Card>
      </div>
    </motion.div>
  );
}

export default Education;