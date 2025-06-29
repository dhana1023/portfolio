import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building, Code, Database, Smartphone } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineer Intern',
      company: 'Richard Pieris & Company PLC',
      location: 'Nawinna, Maharagama',
      period: 'Jan 2025 – June 2025',
      achievements: [
        'Developed a real-time price anomaly detection tool for supermarket items using Python, Streamlit (UI), Flask API, and Oracle DB integration.',
        'Engineered a sales prediction system incorporating external variables (weather, elections in Sri Lanka) using Python (backend), HTML/CSS/JS (frontend), Oracle DB, and weather API integration.',
        'Implemented a new customer registration module using Java and conducted UI/UX improvements and bug fixes for an existing NetBeans-based furniture sales application.',
      ],
      current: true,
      icon: Code,
      gradient: 'from-blue-500 to-cyan-600',
      image: '/images/experience/arpico.jpeg',
    },
    {
      title: 'Research Project Intern',
      company: 'EWARN System Pvt. Ltd.',
      location: 'Rourkela, India',
      period: 'May 2022 – Aug 2022',
      achievements: [
        'Designed and developed a mobile application for real-time accident detection, handling both front-end and back-end using Flutter, Firebase, and Google Maps API.',
        'Implemented user authentication and profile management with Firebase.',
      ],
      current: false,
      icon: Smartphone,
      gradient: 'from-green-500 to-emerald-600',
      image: '/images/experience/ewarn.png',
    },
    {
      title: 'Data Analyst Intern',
      company: 'ShapeAI',
      location: 'Mumbai, India',
      period: 'July 2021 – Oct 2021',
      achievements: [
        'Collected, cleaned, and analyzed data to uncover trends and insights using Excel, SQL, and Python.',
        'Created interactive dashboards and visual reports with Power BI.',
      ],
      current: false,
      icon: Database,
      gradient: 'from-purple-500 to-violet-600',
      image: '/images/experience/shapeai.png',
    },
  ];

  return (
    <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-slate-900/50 to-black/50"></div>
      <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-tr from-purple-600/20 to-pink-600/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-blue-500/30">
            <Building size={16} />
            Professional Journey
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Professional <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Building innovative solutions across diverse industries and technologies
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.01 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 border border-white/10 overflow-hidden group"
            >
              <div className="grid lg:grid-cols-3 gap-6">
                {/* Image Section */}
                <div className="lg:col-span-1">
                  <div className="relative h-48 lg:h-full overflow-hidden">
                    <img
                      src={exp.image}
                      alt={exp.company}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className={`p-3 bg-gradient-to-r ${exp.gradient} rounded-xl text-white shadow-lg`}>
                        <exp.icon size={24} />
                      </div>
                    </div>
                    {exp.current && (
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-green-500/90 backdrop-blur-sm text-white text-sm font-medium rounded-full border border-green-400/50">
                          Current
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:col-span-2 p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                        {exp.title}
                      </h3>
                      
                      <div className="flex items-center gap-2 text-blue-400 font-semibold mb-2">
                        <Building size={16} />
                        <span>{exp.company}</span>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-gray-400 mb-4">
                        <div className="flex items-center gap-2">
                          <MapPin size={14} />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar size={14} />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {exp.achievements.map((achievement, achIndex) => (
                      <motion.div
                        key={achIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: (index * 0.1) + (achIndex * 0.1) }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300 leading-relaxed text-sm">{achievement}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/30 shadow-lg">
            <h3 className="text-xl font-bold mb-3 text-white">Ready for New Challenges</h3>
            <p className="text-gray-300 mb-4 text-sm">
              I'm always excited to take on new projects and contribute to innovative solutions. 
              Let's discuss how I can help bring your ideas to life.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-medium hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg text-sm"
            >
              <Building size={16} />
              Let's Work Together
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;