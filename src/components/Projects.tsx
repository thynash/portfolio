import React from 'react';
import { ExternalLink, Github, Atom, BarChart3, Telescope, User } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Quantum Sentinel',
      description: 'Quantum-assisted fraud detection using hybrid circuits',
      details: 'Qiskit, anomaly classification, hybrid backends',
      icon: <Atom className="text-cyan-400" size={40} />,
      gradient: 'from-gray-900/30 to-cyan-900/5',
      border: 'border-cyan-500/10',
      github: 'https://github.com/thynash/Quantum-Sentinel'
    },
    {
      title: 'News Sentiment Analyzer',
      description: 'Live dashboard using NLP + FastAPI for real-time news impact tracking',
      details: 'Streamed scraping → Sentiment Model → Dashboard UI',
      icon: <BarChart3 className="text-blue-400" size={40} />,
      gradient: 'from-gray-900/30 to-blue-900/5',
      border: 'border-blue-500/10',
      github: 'https://github.com/thynash/News-Sentiment-Analyzer'
    },
    {
      title: 'Orion',
      description: 'Model comparison on asteroid classification datasets',
      details: 'Multi-model pipeline, metrics comparison, result visualizer',
      icon: <Telescope className="text-teal-400" size={40} />,
      gradient: 'from-gray-900/30 to-teal-900/5',
      border: 'border-teal-500/10',
      github: 'https://github.com/thynash/Yuri-Night'
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900/10 to-gray-900/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Core Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group relative p-8 rounded-2xl bg-gradient-to-br ${project.gradient} backdrop-blur-sm border ${project.border} hover:scale-105 hover:border-cyan-400/20 transition-all duration-500`}
              >
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                        {project.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>
                    
                    <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-400 hover:text-cyan-400 transition-colors rounded-lg hover:bg-cyan-400/5"
                      >
                        <Github size={20} />
                      </a>
                      <button className="p-2 text-gray-400 hover:text-cyan-400 transition-colors rounded-lg hover:bg-cyan-400/5">
                        <ExternalLink size={20} />
                      </button>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {project.description}
                  </p>
                  
                  <p className="text-sm text-cyan-400 font-mono opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                    {project.details}
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

export default Projects;
