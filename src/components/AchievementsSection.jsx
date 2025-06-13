import React from "react";
import { motion } from "framer-motion";

const achievements = [
  {
    title: "2nd Place - Yuri Night ML Hackathon",
    subtitle: "IIT BHU Varanasi",
    description: "Built an ML-powered solution during a space-tech themed hackathon and secured 2nd place among 100+ teams."
  },
  {
    title: "Newbie Title - HackMatrix",
    subtitle: "NJack, IIT Patna",
    description: "Awarded 'Newbie' title in HackMatrix hackathon for promising performance as a first-time participant."
  },
  {
    title: "Winner - IEEE RGIPT Data Viz Challenge",
    subtitle: "IEEE Student Chapter, RGIPT",
    description: "Won a data visualization competition by presenting insights using Python, Plotly, and statistical storytelling."
  }
];

export const AchievementsSection = () => {
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
          Achievements
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-cyan-400 shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-white mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-cyan-300">{item.subtitle}</p>
              <p className="text-gray-300 mt-2 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

