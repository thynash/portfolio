import React from "react";
import { motion } from "framer-motion";
import { FaMedal, FaTrophy } from "react-icons/fa";

const achievements = [
  {
    title: "2nd Place - Yuri Night ML Hackathon",
    desc: "Machine learning-based space challenge hosted by IIT (BHU) Varanasi."
  },
  {
    title: "Winner - IEEE RGIPT Data Viz Challenge",
    desc: "Awarded for best data visualization project among 40+ participants."
  },
  {
    title: "Newbie Title - HackMatrix NJACK, IIT Patna",
    desc: "Earned title for outstanding contribution and consistency as a first-time participant."
  }
];

export const AchievementsSection = () => {
  return (
    <section className="bg-black text-white py-24 px-6 md:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-cyan-400 mb-12">Achievements</h2>
        <div className="space-y-8">
          {achievements.map((achieve, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-zinc-900 border border-gray-800 hover:border-yellow-400/60 rounded-xl p-6 shadow-lg hover:shadow-yellow-400/20 transition"
            >
              <div className="flex items-center justify-center mb-4 text-yellow-400 text-3xl">
                {index === 1 ? <FaTrophy /> : <FaMedal />}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{achieve.title}</h3>
              <p className="text-gray-400 text-sm">{achieve.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

