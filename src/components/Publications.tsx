import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Calendar, ExternalLink, Award } from 'lucide-react';

const Publications = () => {
  const publications = [
    {
      title: 'Accident Rescuing System for Vehicles in Road Traffic: A Smart Phone Application',
      conference: '2022 IEEE 4th International Conference on Cybernetics, Cognition, and Machine Learning Applications (ICCCMLA)',
      date: 'Dec 2022',
      doi: '10.1109/ICCCMLA56841.2022.9989166',
      description: 'Developed a comprehensive mobile application system for real-time accident detection and emergency response, integrating smartphone sensors, GPS tracking, and automated alert systems.',
      type: 'Conference Paper',
      status: 'Published',
    },
    {
      title: 'Efficient Parallel Algorithm for Detecting Longest Flow Paths in Flow Direction Grids',
      conference: '2025 3rd International Conference on Intelligent Systems, Advanced Computing and Communication (ISACC)',
      date: 'April 2025',
      doi: '10.1109/ISACC65211.2025.10969329',
      description: 'Proposed and implemented an efficient parallel algorithm for detecting longest flow paths in flow direction grids, optimizing computational performance for large-scale geographical data processing.',
      type: 'Conference Paper',
      status: 'Published',
    },
  ];

  return (
    <section id="publications" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Research Publications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contributing to the academic community through innovative research in computer science and engineering
          </p>
        </motion.div>

        <div className="space-y-8">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.01 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg text-white">
                      <FileText size={24} />
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                        {pub.type}
                      </span>
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                        {pub.status}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                    {pub.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-blue-600 font-semibold mb-3">
                    <Award size={18} />
                    <span className="text-sm lg:text-base">{pub.conference}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <Calendar size={16} />
                    <span>{pub.date}</span>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    {pub.description}
                  </p>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">DOI:</span> {pub.doi}
                    </div>
                    <motion.a
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                    >
                      <ExternalLink size={16} />
                      View Publication
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Research Impact
            </h3>
            <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
              My research focuses on practical applications of computer science in real-world scenarios, 
              from emergency response systems to computational optimization. I am committed to bridging 
              the gap between theoretical research and practical implementation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Publications;