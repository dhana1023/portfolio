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
      certificateUrl: 'https://coursera.org/share/bc279c5a837017bdde0f2901814969a1', // Replace with your actual certificate URL
      
    },
    {
      title: 'Google Data Analytics Professional Certificate',
      issuer: 'Coursera',
      date: 'October 2022',
      category: 'Data Analytics',
      description: 'In-depth training in data analysis, visualization, and statistical methods using industry-standard tools.',
      certificateUrl: 'https://drive.google.com/file/d/1xrsq1qNm7jfFEPdEnFsBgYJ9GNLobkdI/view?usp=sharing', // Replace with your actual certificate URL
      
    },
    {
      title: 'Google Foundations of Project Management Certificate',
      issuer: 'Coursera',
      date: 'June 2024',
      category: 'Project Management',
      description: 'Foundation-level certification covering essential project management principles and frameworks.',
      certificateUrl: 'https://coursera.org/share/93785fdc797d2d7abc0d493de3f7bd66', // Replace with your actual certificate URL
      
    },
    {
      title: 'Learning Data Analytics: 1 Foundations',
      issuer: 'LinkedIn Learning',
      date: 'May 2023',
      category: 'Data Analytics',
      description: 'Foundational course in data analytics covering key concepts and methodologies.',
      certificateUrl: 'https://www.linkedin.com/learning/certificates/56f17074a8d89b9d2786b8c86a38ba36b92db20519337003494be660ab6f82d6', // Replace with your actual certificate URL
      
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
      certificateUrl: 'https://drive.google.com/file/d/18RHEsK3eN5TWzglWTrcAJgvDVUUStWMa/view?usp=sharing', // Local PDF file
     
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
    <section id="certificates" className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
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
            <Award size={16} />
            Professional Growth
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Certifications & <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Professional certifications demonstrating commitment to continuous learning and skill development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 p-6 border border-white/10 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 bg-gradient-to-r ${getCategoryColor(cert.category)} rounded-lg text-white group-hover:scale-110 transition-transform duration-300`}>
                  <Award size={24} />
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-400" />
                  <span className="text-sm font-medium text-green-400 bg-green-500/20 px-2 py-1 rounded-full border border-green-500/30">
                    Verified
                  </span>
                </div>
              </div>

              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                {cert.title}
              </h3>

              <div className="flex items-center gap-2 text-blue-400 font-semibold mb-2">
                <span>{cert.issuer}</span>
              </div>

              <div className="flex items-center gap-2 text-gray-400 mb-3">
                <Calendar size={16} />
                <span>{cert.date}</span>
              </div>

              <div className="mb-4">
                <span className={`inline-block px-3 py-1 bg-gradient-to-r ${getCategoryColor(cert.category)} text-white text-sm rounded-full`}>
                  {cert.category}
                </span>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {cert.description}
              </p>

            

              {/* Certificate Link */}
              <motion.a
                href={cert.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200 bg-blue-500/10 hover:bg-blue-500/20 px-3 py-2 rounded-lg border border-blue-500/30"
              >
                <ExternalLink size={16} />
                View Certificate
              </motion.a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/30 shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-4 text-center">
              Extracurricular Activities
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Athletics Achievements</h4>
                <p className="text-gray-300 leading-relaxed text-sm">
                  Participated in various running events (100m, 200m, 400m) and Throw Ball at School, 
                  Divisional, Zonal, Provincial, and All Island levels, achieving championships and certificates.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Leadership & Community Service</h4>
                <p className="text-gray-300 leading-relaxed text-sm">
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