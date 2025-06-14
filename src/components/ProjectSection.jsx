import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "News Sentiment Analyzer",
    description: "Built a real-time dashboard to analyze news sentiment using NLP and live data streaming via FastAPI.",
    tech: ["FastAPI", "NLP", "React"],
  },
  {
    title: "Orion",
    description: "Compared multiple ML models to classify asteroids and identify the best-performing classifier.",
    tech: ["Scikit-learn", "Pandas", "Matplotlib"],
  },
  {
    title: "Quantum Sentinel",
    description: "Quantum-assisted ML model to detect fraudulent credit card transactions.",
    tech: ["Qiskit", "Quantum ML", "Sklearn"],
  },
  {
    title: "EDA on Udemy Dataset",
    description: "Performed deep EDA to extract patterns in pricing, popularity, and subject areas.",
    tech: ["Python", "Seaborn", "Plotly"],
  },
];

export const ProjectsSection = () => {
  return (
    <section className="bg-black text-white py-24 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-cyan-400 mb-12 text-center">
          Projects
        </h2>
        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-zinc-900 p-6 rounded-2xl shadow-lg border border-gray-800 hover:border-cyan-400 transition"
            >
              <h3 className="text-2xl font-semibold mb-2 text-white">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-sm px-3 py-1 bg-cyan-800/30 text-cyan-300 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

