import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/Card';

const Experience: React.FC = () => {
  return (
    <motion.div 
      className="min-h-screen pt-32 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
      <div className="max-w-3xl mx-auto space-y-6">
        <Card>
          <div className="flex justify-between items-start mb-2 w-full">
            <div>
              <h3 className="text-xl font-semibold">Software Engineer</h3>
              <p className="text-white/70">Netflix</p>
            </div>
            <p className="text-white/70 text-sm">Oct 2022 - Present</p>
          </div>
          <p className="text-white/80">
            Software Engineer on the Security Platforms Engineering team.
            Building out user-friendly and high impact products that help our internal teams manage their security posture. Working primarily in React, Typescript, GraphQL and Python.
          </p>
        </Card>
        <Card>
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-xl font-semibold">Software Engineer Intern</h3>
              <p className="text-white/70">Apple</p>
            </div>
            <p className="text-white/70 text-sm">Jan 2021 - Apr 2022</p>
          </div>
          <p className="text-white/80">
            Worked on an internal web tooling team, building Fullstack web applications primarily working in Angular, Python and Django.
          </p>
        </Card>
        <Card>
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-xl font-semibold">Software Developer Intern</h3>
              <p className="text-white/70">The Weather Network</p>
            </div>
            <p className="text-white/70 text-sm">Jan 2020 - Apr 2020</p>
          </div>
          <p className="text-white/80">
            Software Developer Intern on the Systems Architecture team.
            Worked on a weather conversion data tool and new consumer notification system.
          </p>
        </Card>
        <Card>
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-xl font-semibold">Software Devloper Intern</h3>
              <p className="text-white/70">Cannect Home Financing</p>
            </div>
            <p className="text-white/70 text-sm">Jan 2019 - Apr 2019 </p>
          </div>
          <p className="text-white/80">
            Software Developer Intern on the CRM platform team.
            Built out new features and frontend components while also squashing any bugs experienced by our customers.
          </p>
        </Card>

      </div>
    </motion.div>
  );
}

export default Experience;