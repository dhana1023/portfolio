import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Shield, Network, BookOpen, Globe, BarChart3, Database, Code2, Cpu, Wifi, Users } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Lightweight M2M Authentication System in IIoT',
      description: 'A lightweight authentication protocol for M2M communication in IIoT, ensuring secure router and sensor registration, login, authentication, and password updates.',
      technologies: ['Python', 'Socket Programming', 'Threading', 'SHA-256', 'BLAKE2b'],
      icon: Shield,
      category: 'Security & IoT',
      gradient: 'from-red-500 to-pink-600',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      title: 'Dynamic Task Offloading in VANETs',
      description: 'Implemented a greedy matching algorithm for efficient task offloading in VANETs, optimizing resource utilization and reducing latency.',
      technologies: ['Python', 'Algorithm Design', 'Network Optimization'],
      icon: Network,
      category: 'Networking',
      gradient: 'from-blue-500 to-cyan-600',
      image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      title: 'Book Review Application',
      description: 'Modern web application for sharing and discovering book reviews. Users can browse reviews, add their own, and engage with the community.',
      technologies: ['React', 'TypeScript', 'Node.js', 'CSS', 'MySQL'],
      icon: BookOpen,
      category: 'Web Development',
      gradient: 'from-green-500 to-emerald-600',
      image: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      title: 'Blogging Website with Dynamic Features',
      description: 'Created a blogging website featuring dynamic pages, content creation, and user dashboard with Google authentication.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Firebase'],
      icon: Globe,
      category: 'Web Development',
      gradient: 'from-purple-500 to-violet-600',
      image: 'https://images.pexels.com/photos/265667/pexels-photo-265667.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      title: 'Real-Time Election Voting System',
      description: 'Developed a distributed real-time election voting system with Streamlit dashboard for monitoring and visualizing voting trends.',
      technologies: ['Python', 'Kafka', 'Spark Streaming', 'PostgreSQL', 'Streamlit'],
      icon: BarChart3,
      category: 'Data Engineering',
      gradient: 'from-orange-500 to-red-600',
      image: 'https://images.pexels.com/photos/1550337/pexels-photo-1550337.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      title: 'Session-Based Recommendation System',
      description: 'Developed a session-based recommendation system using reservoir sampling for efficient streaming data processing.',
      technologies: ['Python', 'CUDA', 'React.js', 'Machine Learning'],
      icon: Database,
      category: 'Machine Learning',
      gradient: 'from-indigo-500 to-purple-600',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
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
            <Code2 size={16} />
            My Work
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Innovative solutions spanning web development, machine learning, IoT, and distributed systems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 border border-white/10 group overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className={`p-2 bg-gradient-to-r ${project.gradient} rounded-lg text-white shadow-lg`}>
                    <project.icon size={20} />
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="text-xs font-medium text-white bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-full border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-white/10 text-gray-400 text-xs rounded-full border border-white/20">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200 text-sm"
                  >
                    <ExternalLink size={14} />
                    View Details
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-gray-400 hover:text-gray-300 font-medium transition-colors duration-200 text-sm"
                  >
                    <Github size={14} />
                    Code
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/30 shadow-lg">
            <h3 className="text-xl font-bold mb-3 text-white">More Projects Coming Soon!</h3>
            <p className="text-gray-300 mb-4 text-sm">
              I'm constantly working on new and exciting projects. Check back regularly for updates.
            </p>
            <motion.a
              href="https://github.com/dhana1023"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-medium hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg text-sm"
            >
              <Github size={16} />
              View All Projects
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;