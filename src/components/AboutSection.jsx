import React from "react";
import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-black">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-6 text-cyan-400">
          About Me
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          Skilled in the field of datascience , Artificial Intelligence and Machience Learning 
          Proficient in Data Wrangling with the neccesary python libraries required as well as PowerBI. 
          Exploring scalable sysetms using Apache Kafka and Cassandra like Architectures
          Strong foundation in Statistical Inference, Hypothesis Testing, and Experimental Design.
          Exploring Quantum Computing, quantum gates, and quantum circuit simulation for emerging tech applications.
        </p>
        <p className="mt-4 text-gray-400 text-sm italic">
          “Always Exploring. Always Learning. Always Building.”
        </p>
      </motion.div>
    </section>
  );
};

