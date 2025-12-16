import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { BsSun, BsMoon } from 'react-icons/bs';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const navItems = ['Home', 'About', 'Education', 'Skills', 'Projects', 'Certifications', 'Resume', 'Contact'];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-light dark:bg-primary/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">Nish</span>
            </div>
            <span className="font-bold text-lg hidden sm:inline text-slate-900 dark:text-white">
              Nitesh Kumar
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <motion.button
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  textShadow: '0 0 8px rgba(59, 130, 246, 0.5)'
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="px-4 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">{item}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ 
                scale: 1.1, 
                rotate: 180,
                boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)'
              }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {isDark ? <BsSun size={20} /> : <BsMoon size={20} />}
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="md:hidden pb-4 space-y-2"
          >
            {navItems.map((item, index) => (
              <motion.button
                key={item}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  x: 10,
                  scale: 1.02,
                  backgroundColor: 'rgb(59, 130, 246)',
                  color: 'white'
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left px-4 py-3 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 hover:text-white transition-all duration-300"
              >
                {item}
              </motion.button>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
