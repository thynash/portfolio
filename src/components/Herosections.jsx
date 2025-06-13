import React from "react";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-center px-4"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-neon">
          Hey, I'm <span className="text-cyan-400">Nityansh Pant</span>
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-gray-300">
          coding is my way of understanding world.
        </p>
        <button className="mt-8 px-6 py-3 bg-cyan-500 text-black font-semibold rounded-xl shadow-xl hover:bg-cyan-400 transition">
          View Projects
        </button>
      </motion.div>

      {/* Glowing Background Circles */}
      <div className="absolute -z-10 w-[400px] h-[400px] bg-cyan-500 blur-[120px] opacity-30 top-10 left-10 rounded-full" />
      <div className="absolute -z-10 w-[300px] h-[300px] bg-purple-500 blur-[100px] opacity-20 bottom-10 right-10 rounded-full" />
    </section>
  );
};

