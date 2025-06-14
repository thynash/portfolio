import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-10 px-6 md:px-20 border-t border-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center"
      >
        <p className="text-sm">© {new Date().getFullYear()} Nityansh Pant. All rights reserved.</p>

        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="https://github.com/thynash" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-xl hover:text-cyan-400 transition" />
          </a>
          <a href="https://linkedin.com/in/thynash" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-xl hover:text-cyan-400 transition" />
          </a>
          <a href="https://twitter.com/thynash" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-xl hover:text-cyan-400 transition" />
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: true }}
        className="w-full h-0.5 bg-gradient-to-r from-cyan-400 via-blue-600 to-purple-500 mt-6"
      ></motion.div>
    </footer>
  );
};

