import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Smartphone, BarChart3, Shield, Cpu, Globe, Zap, Layers } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: ['Python', 'C++', 'C', 'Java', 'SQL', 'JavaScript', 'HTML', 'CSS', 'R'],
      color: 'from-blue-500 to-blue-600',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
    {
      title: 'Databases & Storage',
      icon: Database,
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Oracle DB', 'Firebase'],
      color: 'from-green-500 to-green-600',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
    {
      title: 'Frameworks & Libraries',
      icon: Layers,
      skills: ['React.js', 'Node.js', 'Flask', 'Streamlit', 'Flutter'],
      color: 'from-purple-500 to-purple-600',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
    {
      title: 'Data & Analytics',
      icon: BarChart3,
      skills: ['Apache Kafka', 'Spark Streaming', 'Power BI', 'CUDA', 'Machine Learning'],
      color: 'from-orange-500 to-orange-600',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
    {
      title: 'Development Tools',
      icon: Zap,
      skills: ['Git', 'Jira', 'Socket Programming', 'API Development', 'NetBeans'],
      color: 'from-teal-500 to-teal-600',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
    {
      title: 'Specialized Technologies',
      icon: Shield,
      skills: ['Google Maps API', 'Weather API', 'Firebase Auth', 'Cryptography', 'Threading'],
      color: 'from-red-500 to-red-600',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
  ];

  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-slate-900/50 to-black/50"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-tr from-purple-600/20 to-pink-600/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-blue-500/30">
            <Cpu size={16} />
            Technical Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Technical <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Comprehensive expertise across modern technologies and development frameworks
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 border border-white/10 group overflow-hidden"
            >
              {/* Category Image */}
              <div className="relative h-32 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-3 left-3 flex items-center gap-3">
                  <div className={`p-2 bg-gradient-to-r ${category.color} rounded-lg text-white shadow-lg`}>
                    <category.icon size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    {category.title}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: (index * 0.1) + (skillIndex * 0.05) }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="flex items-center gap-3 p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-200 cursor-pointer border border-white/10"
                    >
                      <div className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full flex-shrink-0`}></div>
                      <span className="text-gray-300 font-medium text-sm">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/30 shadow-lg">
            <h3 className="text-xl font-bold text-white mb-3">Continuous Learning</h3>
            <p className="text-gray-300 text-sm max-w-3xl mx-auto">
              I believe in staying current with emerging technologies and continuously expanding my skill set. 
              My diverse technical background enables me to adapt quickly to new challenges and contribute 
              effectively to cross-functional teams.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;