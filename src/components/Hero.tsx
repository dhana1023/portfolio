import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Phone, Download, Sparkles, Star } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-600/20 to-pink-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Cyber Grid Background */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>

      {/* Floating Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            scale: [1, 1.2, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto text-center relative z-10"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="order-2 lg:order-1 text-left lg:text-left">
            <motion.div
              variants={itemVariants}
              className="mb-6"
            >
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-blue-500/30">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                Available for Opportunities
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Dhananjani
                </span>
              </h1>
              <div className="text-xl sm:text-2xl text-gray-300 mb-6 leading-relaxed">
                <span className="font-semibold text-blue-400">Software Engineer</span> & 
                <span className="font-semibold text-purple-400"> Data Analyst</span>
                <br />
                <span className="text-lg text-gray-400">Specializing in full-stack development, machine learning, and distributed systems</span>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 mb-8 text-gray-400"
            >
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-white/10">
                <MapPin size={18} className="text-blue-400" />
                <span>Boralesgamuwa, Sri Lanka</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-white/10">
                <Phone size={18} className="text-green-400" />
                <span>+94-76-1717333</span>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 mb-8"
            >
              <motion.a
                href="mailto:dhanakaru123@gmail.com"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 font-medium"
              >
                <Mail size={20} />
                Get In Touch
              </motion.a>
              
              <motion.a
                href="/Dhananjani_Jayarukshi_CV.pdf"
                download
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full hover:bg-white/20 transition-all duration-300 shadow-lg border border-white/20 font-medium"
              >
                <Download size={20} />
                Download CV
              </motion.a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex gap-4"
            >
              <motion.a
                href="https://linkedin.com/in/dhananjani-jayarukshi"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-blue-400 border border-white/20 hover:border-blue-400/50 hover:bg-blue-500/20"
              >
                <Linkedin size={24} />
              </motion.a>
              
              <motion.a
                href="https://github.com/dhana1023"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-gray-300 border border-white/20 hover:border-gray-300/50 hover:bg-gray-500/20"
              >
                <Github size={24} />
              </motion.a>
            </motion.div>
          </div>

          {/* Right Column - Photo */}
          <motion.div
            variants={itemVariants}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="relative"
            >
              {/* Decorative Elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-full opacity-50 blur-2xl animate-pulse-glow"></div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-yellow-400/80 to-orange-500/80 rounded-full opacity-80 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-pink-400/80 to-purple-500/80 rounded-full opacity-60 blur-xl"></div>
              
              {/* Main Photo Container - Smaller Size */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full p-1 shadow-2xl">
                  <div className="w-full h-full bg-gray-900 rounded-full p-2">
                    <img
                      src="/photo_dhana.png"
                      alt="Dhananjani Jayarukshi"
                      className="w-full h-full object-cover rounded-full shadow-2xl"
                    />
                  </div>
                </div>
                
                {/* Floating Achievement Badges - Smaller */}
                <motion.div
                  className="absolute -top-2 -right-2 bg-gray-800/90 backdrop-blur-sm rounded-full p-2 shadow-lg border border-blue-500/30"
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-400">8.36</div>
                    <div className="text-xs text-gray-400">M.Tech</div>
                  </div>
                </motion.div>
                
                <motion.div
                  className="absolute -bottom-2 -left-2 bg-gray-800/90 backdrop-blur-sm rounded-full p-2 shadow-lg border border-purple-500/30"
                  animate={{
                    rotate: [0, -10, 10, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                >
                  <div className="text-center">
                    <div className="text-lg font-bold text-purple-400">2+</div>
                    <div className="text-xs text-gray-400">Papers</div>
                  </div>
                </motion.div>

                {/* Orbiting Stars */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-yellow-400 rounded-full"
                    style={{
                      top: '50%',
                      left: '50%',
                    }}
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 10 + i * 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <div 
                      className="w-1 h-1 bg-yellow-400 rounded-full"
                      style={{
                        transform: `translate(${80 + i * 20}px, -50%)`,
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Section - Current Status */}
        <motion.div
          variants={itemVariants}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 bg-white/5 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-lg border border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-gray-300 font-medium">Currently pursuing M.Tech at</span>
            </div>
            <div className="text-blue-400 font-semibold">NIT Karnataka</div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;