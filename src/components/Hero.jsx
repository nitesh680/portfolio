import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiMail } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="home" className="min-h-screen bg-light dark:bg-primary flex items-center justify-center pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Text Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <motion.h1
                className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4 leading-tight"
                variants={itemVariants}
              >
                Hi, I'm <span className="gradient-text">Nitesh Kumar</span>
              </motion.h1>
              <motion.p
                className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-medium"
                variants={itemVariants}
              >
                Full-Stack Developer & AI Enthusiast
              </motion.p>
            </div>

            <motion.p
              className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed"
              variants={itemVariants}
            >
              Computer Science student at Vignan University specializing in modern web development, AI/ML, and creating responsive digital experiences.
            </motion.p>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex space-x-4 pt-4">
              <motion.a
                whileHover={{ 
                  scale: 1.2, 
                  y: -8,
                  rotate: 360,
                  boxShadow: '0 10px 30px rgba(59, 130, 246, 0.5)'
                }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/nitesh680"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <FaGithub size={24} />
              </motion.a>
              <motion.a
                whileHover={{ 
                  scale: 1.2, 
                  y: -8,
                  rotate: 360,
                  boxShadow: '0 10px 30px rgba(59, 130, 246, 0.5)'
                }}
                whileTap={{ scale: 0.9 }}
                href="https://www.linkedin.com/in/nitesh-kumar-4927bb2b9/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <FaLinkedin size={24} />
              </motion.a>
              <motion.a
                whileHover={{ 
                  scale: 1.2, 
                  y: -8,
                  rotate: 360,
                  boxShadow: '0 10px 30px rgba(59, 130, 246, 0.5)'
                }}
                whileTap={{ scale: 0.9 }}
                href="https://x.com/nitesh"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <FaTwitter size={24} />
              </motion.a>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-6">
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 20px 40px rgba(59, 130, 246, 0.4)'
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('resume').scrollIntoView({ behavior: 'smooth' })}
                className="button-primary button-glow flex items-center justify-center gap-2 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <FiDownload /> View Resume
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 20px 40px rgba(59, 130, 246, 0.4)'
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="button-secondary button-glow flex items-center justify-center gap-2 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <FiMail /> Contact Me
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="relative w-64 h-64 md:w-80 md:h-80"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-20 blur-xl"></div>
              <div className="relative w-full h-full bg-gradient-to-r from-slate-300 to-slate-400 dark:from-slate-700 dark:to-slate-800 rounded-2xl overflow-hidden border-2 border-slate-400 dark:border-slate-600">
                <img 
                  src={`${import.meta.env.BASE_URL}images/aryan.jpg`}
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
