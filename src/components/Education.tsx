import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: 'Master of Technology in Computer Science and Engineering',
      institution: 'National Institute of Technology Karnataka, Surathkal, India',
      period: 'August 2023 – June 2025',
      cgpa: '8.36/10',
      grade: 'First Class Honours',
      coursework: ['Network Engineering', 'Next Generation Cloud Architecture', 'Distributed Data Management', 'Data Warehousing'],
      current: true,
    },
    {
      degree: 'Bachelor of Technology in Computer Science and Engineering',
      institution: 'National Institute of Technology Rourkela, India',
      period: 'June 2019 – June 2023',
      cgpa: '7.96/10',
      grade: 'First Class',
      coursework: ['Data Structures & Algorithms', 'Computer Organization & Architecture', 'Database Engineering', 'Software Engineering'],
      current: false,
    },
    {
      degree: 'Advanced Level Examination',
      institution: 'C.W.W.Kannangara Central College Mathugama',
      period: 'August 2018',
      grades: [
        { subject: 'Combined Mathematics', grade: 'A' },
        { subject: 'Chemistry', grade: 'B' },
        { subject: 'Physics', grade: 'C' },
        { subject: 'General English', grade: 'A' },
      ],
      current: false,
    },
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
           
          </p>
        </motion.div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
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
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg text-white">
                      <GraduationCap size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{edu.degree}</h3>
                      {edu.current && (
                        <span className="inline-block mt-1 px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                    <MapPin size={18} />
                    <span>{edu.institution}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <Calendar size={16} />
                    <span>{edu.period}</span>
                  </div>

                  {/* CGPA and Grade */}
                  {edu.cgpa && (
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <Award size={16} className="text-yellow-600" />
                        <span className="text-gray-700 font-medium">CGPA: {edu.cgpa}</span>
                      </div>
                      <div className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                        {edu.grade}
                      </div>
                    </div>
                  )}

                  {/* A-Level Grades */}
                  {edu.grades && (
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Results:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {edu.grades.map((gradeInfo, gradeIndex) => (
                          <div key={gradeIndex} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                            <span className="text-gray-700">{gradeInfo.subject}</span>
                            <span className={`font-bold px-2 py-1 rounded ${
                              gradeInfo.grade === 'A' ? 'bg-green-100 text-green-800' :
                              gradeInfo.grade === 'B' ? 'bg-blue-100 text-blue-800' :
                              'bg-yellow-100 text-yellow-800'
                            }`}>
                              {gradeInfo.grade}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Coursework */}
                  {edu.coursework && (
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Coursework:</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, courseIndex) => (
                          <motion.span
                            key={courseIndex}
                            whileHover={{ scale: 1.05 }}
                            className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700 rounded-full text-sm border border-blue-200"
                          >
                            {course}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;