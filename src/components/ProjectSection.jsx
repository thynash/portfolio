import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "News-Sentiment-Analyzer",
    description:
      "Built a real-time dashboard to analyze news sentiment using NLP and live data streaming via FastAPI."
  },
  {
    title: "Orion",
    description:
      "Trained and compared multiple ML models to classify asteroids based on real astronomical data."
  },
  {
    title: "Quantum Sentinel",
    description:
      "Developed a Quantum-Assisted Machine Learning model for detecting fraudulent credit card transactions."
  },
  {
    title: "EDA on Udemy Dataset",
    description:
      "Performed exploratory data analysis on Udemy courses to extract insights on pricing, popularity, and subject areas."
  }
];

export const ProjectsSection = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-black">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-cyan-400 mb-10 text-center">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-cyan-400 shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

