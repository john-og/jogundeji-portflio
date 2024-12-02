import React from 'react';
import { motion } from 'framer-motion';
import { Home, Briefcase, GraduationCap, FolderGit2 } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { icon: <Home size={20} />, label: 'Home', to: '/' },
  { icon: <Briefcase size={20} />, label: 'Experience', to: '/experience' },
  { icon: <GraduationCap size={20} />, label: 'Education', to: '/education' },
  { icon: <FolderGit2 size={20} />, label: 'Projects', to: '/projects' },
];

const Navigation: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 right-0 flex justify-center z-50 px-4">
      <motion.nav 
        className="mt-8 bg-black/20 backdrop-blur-md rounded-full px-8 py-4 border border-white/10"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 0.8 }}
      >
        <ul className="flex items-center space-x-8">
          {navItems.map((item) => (
            <motion.li 
              key={item.label}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <NavLink
                to={item.to}
                className={({ isActive }) => `
                  flex items-center space-x-2 
                  ${isActive ? 'text-white' : 'text-white/70'} 
                  hover:text-white transition-colors
                `}
              >
                {item.icon}
                <span className="text-sm font-medium">{item.label}</span>
              </NavLink>
            </motion.li>
          ))}
        </ul>
      </motion.nav>
    </div>
  );
};

export default Navigation;