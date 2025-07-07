import React from 'react';
import { Brain, Atom, Shield } from 'lucide-react';

const Domains: React.FC = () => {
  const domains = [
    {
      icon: <Brain className="text-cyan-400" size={48} />,
      title: 'Applied Machine Learning',
      description: 'Behavioral prediction, classification models',
      gradient: 'from-gray-900/30 to-cyan-900/5',
      border: 'border-cyan-500/10'
    },
    {
      icon: <Atom className="text-blue-400" size={48} />,
      title: 'Quantum + Classical Hybrid AI',
      description: 'Fraud detection via QML',
      gradient: 'from-gray-900/30 to-blue-900/5',
      border: 'border-blue-500/10'
    },
    {
      icon: <Shield className="text-teal-400" size={48} />,
      title: 'Threat Intelligence Systems',
      description: 'AI in cybersecurity signals and anomaly detection',
      gradient: 'from-gray-900/30 to-teal-900/5',
      border: 'border-teal-500/10'
    }
  ];

  return (
    <section id="domains" className="py-20 bg-gradient-to-b from-black to-gray-900/10">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Domains of Work
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {domains.map((domain, index) => (
              <div
                key={index}
                className={`group relative p-8 rounded-2xl bg-gradient-to-br ${domain.gradient} backdrop-blur-sm border ${domain.border} hover:scale-105 hover:border-cyan-400/20 transition-all duration-500`}
              >
                <div className="relative z-10">
                  <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {domain.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                    {domain.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {domain.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Domains;