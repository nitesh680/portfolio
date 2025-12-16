import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      name: 'Frontend',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'HTML/CSS', level: 95 },
      ],
    },
    {
      name: 'Backend',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'REST APIs', level: 90 },
      ],
    },
    {
      name: 'AI/ML',
      skills: [
        { name: 'LangGraph', level: 75 },
        { name: 'Agentic LLMs', level: 80 },
        { name: 'Python', level: 85 },
        { name: 'TensorFlow', level: 70 },
      ],
    },
    {
      name: 'Tools & Others',
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'AWS/Vercel', level: 80 },
        { name: 'Figma', level: 75 },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mb-12"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div key={categoryIndex} variants={itemVariants}>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                {category.name}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    whileHover={{ 
                      x: 8,
                      scale: 1.02,
                      boxShadow: '0 5px 20px rgba(59, 130, 246, 0.2)'
                    }}
                    className="group"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-slate-700 dark:text-slate-300 group-hover:text-gradient-enhanced transition-all duration-300">
                        {skill.name}
                      </span>
                      <motion.span 
                        whileHover={{ scale: 1.2 }}
                        className="text-sm font-bold text-gradient-enhanced group-hover:text-gradient-enhanced transition-all duration-300"
                      >
                        {skill.level}%
                      </motion.span>
                    </div>

                    <div className="w-full h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden shadow-inner">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack - Simple Sequential Display */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="p-8"
        >
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">Tech Stack</h3>
          
          <div className="space-y-2">
            {[
              'React', 'JavaScript', 'TypeScript', 'Node.js',
              'Python', 'MongoDB', 'PostgreSQL', 'MySQL',
              'Docker', 'AWS', 'Git', 'Tailwind CSS',
              'Redux', 'Express.js', 'Machine Learning', 'TensorFlow'
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.3, 
                  delay: index * 0.2,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
                className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg font-medium mr-2 mb-2"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
