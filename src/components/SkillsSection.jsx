import React from "react";
import { motion } from "framer-motion";
import {
  SiPython, SiCplusplus, SiC, SiR, SiRust, SiPowershell,
  SiTensorflow, SiNumpy, SiScikitlearn, SiPandas,
  SiFramer, SiReact, SiMicrosoftazure, SiTailwindcss
} from "react-icons/si";

const skills = [
  { name: "Python", icon: <SiPython /> },
  { name: "C++", icon: <SiCplusplus /> },
  { name: "C", icon: <SiC /> },
  { name: "R", icon: <SiR /> },
  { name: "Rust", icon: <SiRust /> },
  { name: "System Design", icon: <SiMicrosoftazure /> },
  { name: "DSA", icon: <SiNumpy /> },
  { name: "AI", icon: <SiTensorflow /> },
  { name: "ML", icon: <SiScikitlearn /> },
  { name: "DL / NLP", icon: <SiPandas /> },
  { name: "Statistics", icon: <SiFramer /> },
  { name: "React", icon: <SiReact /> },
  { name: "TailwindCSS", icon: <SiTailwindcss /> },
];

export const SkillsSection = () => {
  return (
    <section className="bg-zinc-950 text-white py-24 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-cyan-400 mb-12">
          Skills & Tools
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-8 justify-items-center">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex flex-col items-center bg-zinc-900 rounded-xl p-4 shadow hover:shadow-cyan-400/40 transition-all border border-gray-800 hover:border-cyan-400"
            >
              <div className="text-3xl mb-2 text-cyan-300">{skill.icon}</div>
              <p className="text-sm text-gray-300">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

