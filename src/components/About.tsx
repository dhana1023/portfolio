import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target, Users, Code, Brain, Heart } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: Award,
      title: 'Academic Excellence',
      description: 'First Class Honours in M.Tech (8.36/10 CGPA) and First Class in B.Tech (7.96/10 CGPA)',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Target,
      title: 'Research Impact',
      description: 'Published research papers in IEEE conferences on accident detection systems and high performance computing',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Users,
      title: 'Leadership',
      description: 'Active member of Rotaract Club NIT Rourkela, contributing to community service and leadership development',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  const stats = [
    { number: '6+', label: 'Projects Completed', icon: Code },
    { number: '3+', label: 'Years Experience', icon: Brain },
    { number: '2', label: 'Publications', icon: Award },
    { number: '100+', label: 'Hours of Learning', icon: Heart },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
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
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-blue-500/30">
            <Heart size={16} className="text-red-400" />
            Get to know me better
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/10 text-center group hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon size={24} className="text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-400 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/10">
              <h3 className="text-3xl font-bold text-white mb-6">
                
              </h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p className="text-lg">
                 
                </p>
                <p>
                  My expertise spans across <span className="font-semibold text-blue-400">web development</span>, 
                  <span className="font-semibold text-purple-400"> data analytics</span>, 
                  <span className="font-semibold text-green-400"> machine learning</span>, and 
                  <span className="font-semibold text-orange-400"> distributed systems</span>. 
                  I have hands-on experience in developing real-time applications, implementing machine learning algorithms, 
                  and working with modern web technologies.
                </p>
                <p>
                  
                </p>
                <p>
                 
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02, x: 10 }}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 border border-white/10 group"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-4 bg-gradient-to-br ${achievement.color} rounded-xl text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <achievement.icon size={28} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                      {achievement.title}
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/30 shadow-2xl">
            <h3 className="text-2xl font-bold mb-4 text-white">Let's Build Something Amazing Together!</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              I'm always excited to work on innovative projects and collaborate with like-minded individuals. 
              Whether it's a challenging technical problem or a creative solution, I'm ready to contribute.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
            >
              <Heart size={20} />
              Let's Connect
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;