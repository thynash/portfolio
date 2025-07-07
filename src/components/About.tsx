import React from 'react';
import { Brain, Atom, Shield, Code, Database, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900/10 to-gray-900/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                I'm an AI/ML researcher passionate about building context-aware models, log intelligence systems, 
                and anomaly detection pipelines. My work spans from quantum-enhanced machine learning to 
                threat intelligence systems.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Currently exploring how quantum circuits can accelerate ML models in fraud detection, 
                optimization, and adversarial environments while contributing to open-source libraries 
                focused on time series forecasting and log analysis.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-gradient-to-r from-gray-900/30 to-cyan-900/10 backdrop-blur-sm border border-cyan-500/10 px-4 py-3 rounded-lg">
                  <Brain size={20} className="text-cyan-400" />
                  <span className="text-gray-300">AI/ML Research</span>
                </div>
                <div className="flex items-center gap-3 bg-gradient-to-r from-gray-900/30 to-blue-900/10 backdrop-blur-sm border border-blue-500/10 px-4 py-3 rounded-lg">
                  <Atom size={20} className="text-blue-400" />
                  <span className="text-gray-300">Quantum Computing</span>
                </div>
                <div className="flex items-center gap-3 bg-gradient-to-r from-gray-900/30 to-teal-900/10 backdrop-blur-sm border border-teal-500/10 px-4 py-3 rounded-lg">
                  <Shield size={20} className="text-teal-400" />
                  <span className="text-gray-300">Threat Intelligence</span>
                </div>
                <div className="flex items-center gap-3 bg-gradient-to-r from-gray-900/30 to-indigo-900/10 backdrop-blur-sm border border-indigo-500/10 px-4 py-3 rounded-lg">
                  <Database size={20} className="text-indigo-400" />
                  <span className="text-gray-300">Log Analysis</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-900/40 to-cyan-900/20 backdrop-blur-sm border border-cyan-500/10 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6 text-cyan-300">What I Do</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">Building context-aware models and anomaly detection pipelines</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">Quantum-enhanced ML for fraud detection and optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">Threat intelligence and cyber AI systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">Open source development and time series forecasting</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;