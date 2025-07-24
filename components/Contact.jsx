'use client';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.section
      className="relative py-20 px-6 text-white text-center bg-gray-900 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* SVG Pattern Background */}
      <div className="absolute inset-0 opacity-10 z-0">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="pattern-circles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="2" fill="#ffffff" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pattern-circles)" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Let’s Connect</h2>
        <h3 className="text-lg font-semibold">Gaurav Sharma</h3>
        <p className="text-sm mb-2">📍 Toronto, Canada</p>
       <p className="text-sm mb-4">
    📧 <a href="mailto:gauravsharma111199@gmail.com" className="text-blue-400 hover:underline">
      gauravsharma111199@gmail.com
    </a>
  </p>

        {/* Icons */}
        <div className="flex justify-center gap-6 my-4 text-2xl">
          <motion.a
            href="https://www.linkedin.com/in/gs-4b39491b9 "
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            className="text-blue-400"
          >
            <i className="fab fa-linkedin"></i>
          </motion.a>
          <motion.a
            href="https://github.com/Gaurav2213"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            className="text-white"
          >
            <i className="fab fa-github"></i>
          </motion.a>
          <motion.a
            href="/tech/GauravSharmaSofDev.pdf"
            download
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            className="text-green-400"
          >
            <i className="fas fa-download"></i>
          </motion.a>
        </div>

        {/* Thank You Text */}
        <p className="text-sm text-gray-300 mt-6 max-w-md mx-auto">
          Thanks for taking the time to go through my portfolio! If anything here sparks interest or you'd like to discuss ideas, projects, or just connect — I'm always open for a chat.
        </p>
      </div>
    </motion.section>
  );
};

export default Contact;
