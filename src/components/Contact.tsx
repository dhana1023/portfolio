import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'dhanakaru123@gmail.com',
      href: 'mailto:dhanakaru123@gmail.com',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+94-76-1717333',
      href: 'tel:+94761717333',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Boralesgamuwa, Sri Lanka',
      href: '#',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'dhananjani-jayarukshi',
      href: 'https://linkedin.com/in/dhananjani-jayarukshi',
      color: 'from-blue-600 to-blue-700',
    },
    {
      icon: Github,
      title: 'GitHub',
      value: 'dhana1023',
      href: 'https://github.com/dhana1023',
      color: 'from-gray-700 to-gray-800',
    },
  ];

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-slate-900/50 to-black/50"></div>
      <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-tr from-purple-600/20 to-pink-600/20 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-blue-500/30">
            <MessageCircle size={16} />
            Let's Connect
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Get In <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology
          </p>
        </motion.div>

        {/* Contact Information - Centered Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-white/10">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white">
                <MessageCircle size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Let's Connect</h3>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto">
              Feel free to reach out through any of the channels below. I'm always excited to discuss new projects, 
              opportunities, or just connect with fellow tech enthusiasts.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex flex-col items-center gap-3 p-6 bg-white/5 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/10 group hover:bg-white/10"
                >
                  <div className={`p-4 bg-gradient-to-r ${info.color} rounded-full text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <info.icon size={24} />
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-white group-hover:text-blue-400 transition-colors duration-300 mb-1">
                      {info.title}
                    </h4>
                    <p className="text-gray-300 text-sm">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/30 shadow-lg">
            <h3 className="text-xl font-bold text-white mb-3">Ready to Collaborate?</h3>
            <p className="text-gray-300 mb-4 text-sm max-w-2xl mx-auto">
              Whether you have a project in mind, want to discuss opportunities, or just want to connect, 
              I'd love to hear from you. Let's build something amazing together!
            </p>
            <motion.a
              href="mailto:dhanakaru123@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
            >
              <Mail size={20} />
              Send Email
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;