import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const educationData = [
    {
      degree: 'B.Tech in Computer Science & Engineering',
      institution: 'Vignan Foundation For Science Technology & Research',
      year: '2022 - 2026',
      achievements: ['CGPA: 7.5', 'Dean\'s List', 'Active in tech clubs'],
      icon: '🎓',
    },
    {
      degree: 'Intermediate (12th)',
      institution: 'Loyola Convent School',
      year: '2019 - 2021',
      achievements: ['Percentage: 84%', 'School Topper', 'Science Stream'],
      icon: '📚',
    },
    {
      degree: 'Matriculation (10th)',
      institution: 'Loyola Convent School',
      year: '2018 - 2019',
      achievements: ['Percentage: 87%',  'Merit Scholar'],
      icon: '⭐',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="education" className="py-20 bg-light dark:bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mb-12"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                x: 15,
                scale: 1.02,
                boxShadow: '0 10px 30px rgba(59, 130, 246, 0.2)'
              }}
              className="relative pl-8 pb-8 border-l-2 border-gradient-to-b from-blue-600 to-blue-800 last:border-l-0 group"
            >
              {/* Timeline dot */}
              <motion.div 
                whileHover={{ scale: 1.5, rotate: 180 }}
                className="absolute left-0 top-0 w-5 h-5 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full -translate-x-2.5 border-4 border-light dark:border-primary shadow-lg"
              ></motion.div>

              <div className="group">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-gradient-enhanced transition-all duration-300">
                      {edu.degree}
                    </h3>
                    <p className="text-gradient-enhanced font-semibold mt-1 group-hover:text-gradient-enhanced transition-all duration-300">{edu.institution}</p>
                  </div>
                  <motion.span 
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    className="text-4xl opacity-50 group-hover:opacity-100 transition-all duration-300"
                  >
                    {edu.icon}
                  </motion.span>
                </div>

                <p className="text-slate-500 dark:text-slate-400 font-medium mb-4">{edu.year}</p>

                <div className="flex flex-wrap gap-2">
                  {edu.achievements.map((achievement, idx) => (
                    <motion.span
                      key={idx}
                      whileHover={{ 
                        scale: 1.1,
                        y: -3,
                        boxShadow: '0 5px 15px rgba(59, 130, 246, 0.3)'
                      }}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold border border-blue-200 dark:border-blue-700"
                    >
                      {achievement}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
