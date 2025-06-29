import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink, CheckCircle } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      title: 'Google Project Management Professional Certificate',
      issuer: 'Coursera',
      date: 'October 2024',
      category: 'Project Management',
      description: 'Comprehensive program covering project management fundamentals, methodologies, and best practices.',
    },
    {
      title: 'Google Data Analytics Professional Certificate',
      issuer: 'Coursera',
      date: 'October 2022',
      category: 'Data Analytics',
      description: 'In-depth training in data analysis, visualization, and statistical methods using industry-standard tools.',
    },
    {
      title: 'Google Foundations of Project Management Certificate',
      issuer: 'Coursera',
      date: 'June 2024',
      category: 'Project Management',
      description: 'Foundation-level certification covering essential project management principles and frameworks.',
    },
    {
      title: 'Learning Data Analytics: 1 Foundations',
      issuer: 'LinkedIn Learning',
      date: 'May 2023',
      category: 'Data Analytics',
      description: 'Foundational course in data analytics covering key concepts and methodologies.',
    },
    {
      title: 'Postman API Fundamentals Student Expert',
      issuer: 'Postman Academy',
      date: 'February 2024',
      category: 'API Development',
      description: 'Certification in API testing, development, and documentation using Postman platform.',
    },
    {
      title: 'Spoken English - Intermediate',
      issuer: 'British Council',
      date: 'December 2018',
      category: 'Language',
      description: 'Intermediate level certification in spoken English communication skills.',
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Project Management':
        return 'from-blue-500 to-blue-600';
      case 'Data Analytics':
        return 'from-green-500 to-green-600';
      case 'API Development':
        return 'from-purple-500 to-purple-600';
      case 'Language':
        return 'from-orange-500 to-orange-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Certifications & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional certifications demonstrating commitment to continuous learning and skill development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 bg-gradient-to-r ${getCategoryColor(cert.category)} rounded-lg text-white group-hover:scale-110 transition-transform duration-300`}>
                  <Award size={24} />
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-500" />
                  <span className="text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                    Verified
                  </span>
                </div>
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                {cert.title}
              </h3>

              <div className="flex items-center gap-2 text-blue-600 font-semibold mb-2">
                <span>{cert.issuer}</span>
              </div>

              <div className="flex items-center gap-2 text-gray-600 mb-3">
                <Calendar size={16} />
                <span>{cert.date}</span>
              </div>

              <div className="mb-4">
                <span className={`inline-block px-3 py-1 bg-gradient-to-r ${getCategoryColor(cert.category)} text-white text-sm rounded-full`}>
                  {cert.category}
                </span>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {cert.description}
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
              >
                <ExternalLink size={16} />
                View Certificate
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Extracurricular Activities
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Athletics Achievements</h4>
                <p className="text-gray-700 leading-relaxed">
                  Participated in various running events (100m, 200m, 400m) and Throw Ball at School, 
                  Divisional, Zonal, Provincial, and All Island levels, achieving championships and certificates.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Leadership & Community Service</h4>
                <p className="text-gray-700 leading-relaxed">
                  Active Member at Rotaract Club of NIT Rourkela (2020-2023). Contributed to organizing 
                  and managing club activities, including fund management and planning service projects. 
                  Developed leadership and professional skills through active participation in community activities.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;