import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import resume from '../assets/resume.pdf';

const socialLinks = [
  {
    icon: <Github size={24} />,
    href: 'https://github.com/john-og',
    label: 'GitHub',
    color: 'hover:bg-gray-700'
  },
  {
    icon: <Linkedin size={24} />,
    href: 'https://linkedin.com/in/john-ogundeji',
    label: 'LinkedIn',
    color: 'hover:bg-blue-600'
  },
  {
    icon: <FileText size={24} />,
    href: resume,
    label: 'Resume',
    color: 'hover:bg-green-600'
  },
  {
    icon: <Mail size={24} />,
    href: 'mailto:john.j.ogundeji@gmail.com',
    label: 'Email',
    color: 'hover:bg-red-600'
  }
];

const SocialLinks: React.FC = () => {
  return (
    <motion.div 
      className="flex gap-4 mt-8 justify-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.5 }}
    >
      {socialLinks.map((link) => (
        <motion.a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`p-3 rounded-full bg-white/10 backdrop-blur-sm ${link.color} transition-colors duration-300 border border-white/20`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label={link.label}
        >
          {link.icon}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SocialLinks;