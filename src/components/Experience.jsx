import React from "react";
import { motion } from "framer-motion";

const timeline = [
  {
    type: "Education",
    title: "B.Tech in Mathematics and Computing",
    subtitle: "Rajiv Gandhi Institute of Petroleum Technology (RGIPT), Jais",
    duration: "2024 - Present",
    description: `CPI: 9.54 / 10. Coursework includes: Probability & Statistics, Linear Algebra, Numerical Methods, Data Structures & Algorithms, Machine Learning, Optimization Techniques, Cryptography, Graph Theory, Software Engineering, Database Systems, Python & C++.`
  },
  {
    type: "Education",
    title: "B.S. in Data Science and Applications",
    subtitle: "IIT Madras",
    duration: "2024 - Present",
    description: `CPI: 8.88 / 10 (Foundation Level Completed). Covered: Statistics 1, Mathematics for Data Science, Computational Thinking, Python, Business Data Management, English Communication, Modern Applications of DS.`
  },
  {
    type: "Experience",
    title: "AI Research Intern",
    subtitle: "Centre for Development of Telematics (C-DOT)",
    duration: "May 2024 - July 2024",
    description: `Worked on AI-driven network optimization algorithms and predictive modeling.`
  },
  {
    type: "Experience",
    title: "Open Source Contributor - SSOC",
    subtitle: "Social Summer of Code (SSOC)",
    duration: "Summer 2024",
    description: `Contributed to real-world open-source repositories with a focus on web applications and AI utilities.`
  },
  {
    type: "Experience",
    title: "AI Intern",
    subtitle: "Viswam Labs @ Swecha, IIIT Hyderabad",
    duration: "Summer 2024",
    description: `Worked on vision-based AI modules and educational tech integrations.`
  }
];

export const ExperienceSection = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-black">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-cyan-400 mb-10 text-center">
          Experience & Education
        </h2>

        <div className="space-y-10">
          {timeline.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="border-l-4 border-cyan-400 pl-6 relative"
            >
              <span className="absolute top-0 left-[-14px] w-4 h-4 bg-cyan-400 rounded-full" />
              <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
              <p className="text-sm text-cyan-300">{item.subtitle}</p>
              <p className="text-xs text-gray-400 mb-2">{item.duration}</p>
              <p className="text-gray-300 whitespace-pre-line">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

