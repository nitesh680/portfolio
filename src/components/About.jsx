import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mb-12"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              I'm a passionate Computer Science student from <span className="font-semibold text-accent">Vignan University</span>, 
              dedicated to building modern, scalable web applications and exploring the intersection of AI and software development.
            </p>

            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              With a strong foundation in Full-Stack Development, I work with React, Node.js, and cloud technologies. I have hands-on experience in Java and Spring Boot for building scalable backend applications, along with strong problem-solving skills in Data Structures and Algorithms. I’m especially interested in AI/ML, including Agentic LLMs and LangGraph frameworks.
            </p>

            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              My journey in tech has been driven by curiosity and a passion for solving real-world problems through elegant code solutions.
            </p>

            <div className="pt-4">
              <motion.a
                whileHover={{ 
                  x: 15,
                  scale: 1.05,
                  textShadow: '0 0 8px rgba(59, 130, 246, 0.5)'
                }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="inline-flex items-center text-gradient-enhanced hover-gradient font-bold text-lg transition-all duration-300 group"
              >
                <span className="flex items-center gap-2">
                  Let's connect 
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="text-2xl"
                  >→</motion.span>
                </span>
              </motion.a>
            </div>
          </motion.div>

          {/* Right Content - Info Cards */}
          <motion.div variants={itemVariants} className="space-y-6">
            {[
              { label: 'University', value: 'Vignan University' },
              { label: 'Branch', value: 'Computer Science & Engineering' },
              { label: 'Location', value: 'Guntur , Andhra Pradesh , India' },
              { label: 'Interests', value: 'Full-Stack Dev, AI/ML, Web3' },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ 
                  x: 15,
                  scale: 1.02,
                  boxShadow: '0 10px 30px rgba(59, 130, 246, 0.2)'
                }}
                className="p-4 bg-light dark:bg-primary rounded-lg border-l-4 border-gradient-to-b from-blue-600 to-blue-800 hover:border-l-8 transition-all duration-300 group"
              >
                <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider group-hover:text-gradient-enhanced transition-all duration-300">
                  {item.label}
                </p>
                <p className="text-lg font-bold text-slate-900 dark:text-white mt-2 group-hover:text-gradient-enhanced transition-all duration-300">
                  {item.value}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
