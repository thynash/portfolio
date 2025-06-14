import React from "react";
import { motion } from "framer-motion";
import {
  SiPowerbi,
  SiPython,
  SiR,
  SiRust,
  SiC,
  SiCplusplus,
  SiNumpy,
  SiTensorflow,
  SiScikitlearn,
  SiMicrosoft,
  SiReact
} from "react-icons/si";
import { FaBrain } from "react-icons/fa";
import { TbTopologyStar3 } from "react-icons/tb";

const skills = [
  { name: "Power BI", icon: <SiPowerbi size={32} className="text-yellow-400" /> },
  { name: "Python", icon: <SiPython size={32} className="text-blue-400" /> },
  { name: "R", icon: <SiR size={32} className="text-indigo-400" /> },
  { name: "Rust", icon: <SiRust size={32} className="text-orange-500" /> },
  { name: "C", icon: <SiC size={32} className="text-sky-400" /> },
  { name: "C++", icon: <SiCplusplus size={32} className="text-blue-500" /> },
  { name: "System Design", icon: <TbTopologyStar3 size={32} className="text-cyan-400" /> },
  { name: "Data Structures & Algorithms", icon: <SiReact size={32} className="text-purple-400" /> },
  { name: "AI", icon: <FaBrain size={32} className="text-pink-500" /> },
  { name: "ML", icon: <SiScikitlearn size={32} className="text-yellow-300" /> },
  { name: "DL / NLP", icon: <SiTensorflow size={32} className="text-orange-400" /> },
  { name: "Statistics", icon: <SiNumpy size={32} className="text-teal-300" /> }
];

export const SkillsSection = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-black">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-cyan-400 mb-10 text-center">Skills</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex flex-col items-center bg-gray-900 p-4 rounded-2xl border border-gray-700 hover:border-cyan-400 transition"
            >
              {skill.icon}
              <p className="mt-2 text-white text-sm font-medium text-center">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

