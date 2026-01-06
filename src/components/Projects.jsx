import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const projectsData = [
    {
      title: 'AI Expense Assistant',
      description: 'AI-Powered Personal Finance Assistant that helps users track expenses, manage budgets, and get intelligent financial insights using advanced AI algorithms.',
      tech: ['TypeScript', 'React', 'Node.js', 'AI/ML'],
      image: '🤖',
      github: 'https://github.com/nitesh680/AI-expenseAssistant',
      live: '#',
      featured: true,
    },
    {
      title: 'Complaint System MERN',
      description: 'Full-stack complaint management system built with MERN stack. Users can submit, track, and manage complaints with real-time updates and notifications.',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js'],
      image: '📋',
      github: 'https://github.com/nitesh680/Complain_System-MERN-',
      live: '#',
    },
    {
      title: 'Banking Application',
      description: 'Enterprise-level banking application implementing CRUD operations using Hibernate, Servlets, and JSP for secure financial transactions.',
      tech: ['Java', 'Hibernate', 'Servlets', 'JSP'],
      image: '🏦',
      github: 'https://github.com/nitesh680/BankingApplication',
      live: '#',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="projects" className="py-20 bg-light dark:bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mb-12"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -15,
                scale: 1.02,
                boxShadow: '0 25px 50px rgba(59, 130, 246, 0.3)'
              }}
              className={`group relative rounded-xl overflow-hidden bg-white dark:bg-secondary shadow-lg hover:shadow-2xl transition-all duration-300 ${
                project.featured ? 'md:col-span-2' : ''
              }`}
            >
              {/* Background Image */}
              <div className="h-48 bg-gradient-to-br from-blue-500/30 to-purple-500/30 flex items-center justify-center overflow-hidden relative">
                <motion.div
                  initial={{ scale: 1, rotate: 0 }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ duration: 0.5 }}
                  className="text-8xl transition-transform duration-500"
                >
                  {project.image}
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-gradient-enhanced transition-all duration-300">
                  {project.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack - Simple & Attractive */}
                <div className="flex flex-wrap items-center gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      whileHover={{ 
                        scale: 1.05,
                        y: -1,
                        boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)'
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="tech-badge-simple text-xs"
                      style={{
                        animationDelay: `${idx * 0.03}s`
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <motion.a
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: '0 10px 30px rgba(59, 130, 246, 0.4)'
                    }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-900 text-white rounded-lg hover:from-blue-600 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <FiGithub /> Code
                  </motion.a>
                  <motion.a
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: '0 10px 30px rgba(59, 130, 246, 0.4)'
                    }}
                    whileTap={{ scale: 0.95 }}
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <FiExternalLink /> Live Demo
                  </motion.a>
                </div>
              </div>

              {/* Featured Badge */}
              {project.featured && (
                <motion.div
                  animate={{ rotate: [0, 12, -12, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold rounded-full text-sm shadow-lg hover:shadow-xl"
                >
                  Featured
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 20px 40px rgba(59, 130, 246, 0.4)'
            }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="button-secondary button-glow inline-flex items-center gap-2"
          >
            <span className="relative z-10 flex items-center gap-2">
              View More Projects <FiExternalLink />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
