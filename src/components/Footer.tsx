import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Dhananjani Jayarukshi
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Software Engineer passionate about creating innovative solutions 
              and contributing to the tech community through research and development.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Experience', 'Projects', 'Publications', 'Skills', 'Contact'].map((item) => (
                <li key={item}>
                  <motion.button
                    onClick={() => {
                      const element = document.querySelector(`#${item.toLowerCase()}`);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    whileHover={{ x: 5 }}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {item}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <p className="text-gray-300">Boralesgamuwa, Sri Lanka</p>
              <p className="text-gray-300">+94-76-1717333</p>
              <a
                href="mailto:dhanakaru123@gmail.com"
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                dhanakaru123@gmail.com
              </a>
            </div>
          </motion.div>
        </div>

        {/* Social Links & Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-gray-800 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-300">
              <span>Made with</span>
              <Heart size={16} className="text-red-500" />
              <span>by Dhananjani Jayarukshi</span>
            </div>

            <div className="flex items-center gap-6">
              <motion.a
                href="https://linkedin.com/in/dhananjani-jayarukshi"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="https://github.com/dhana1023"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="mailto:dhanakaru123@gmail.com"
                whileHover={{ scale: 1.1, y: -2 }}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                <Mail size={20} />
              </motion.a>
            </div>

            <p className="text-gray-400 text-sm">
              © {currentYear} All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;