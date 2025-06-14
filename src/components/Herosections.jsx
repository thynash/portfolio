import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export const HeroSection = () => {
  return (
    <section className="relative bg-black text-white py-32 px-6 md:px-20 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto text-center z-10 relative"
      >
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
          Hi, I'm <span className="text-cyan-400">Nityansh Pant</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-300">
          <Typewriter
            words={["AI Engineer", "ML Developer", "NLP Enthusiast", "System Designer"]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>
        <div className="mt-6 flex justify-center space-x-6">
          <a href="https://github.com/thynash" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl hover:text-cyan-400 transition" />
          </a>
          <a href="https://linkedin.com/in/thynash" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl hover:text-cyan-400 transition" />
          </a>
          <a href="https://twitter.com/thynash" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-2xl hover:text-cyan-400 transition" />
          </a>
        </div>
      </motion.div>

      {/* Gradient and glow background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-indigo-800/10 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

