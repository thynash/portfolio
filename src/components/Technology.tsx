import React from 'react';

const Technology: React.FC = () => {
  const techCategories = [
    {
      title: 'Core Languages',
      techs: ['Python', 'Rust', 'C++', 'R'],
      color: 'cyan'
    },
    {
      title: 'Quantum & ML',
      techs: ['Qiskit', 'TensorFlow', 'PyTorch', 'Scikit-learn'],
      color: 'blue'
    },
    {
      title: 'Intelligence Systems',
      techs: ['LangChain', 'LLMs', 'HuggingFace'],
      color: 'teal'
    },
    {
      title: 'Threat Intelligence',
      techs: ['Elastic Stack', 'Threat Modeling', 'Security Analytics'],
      color: 'indigo'
    },
    {
      title: 'Infrastructure',
      techs: ['Docker', 'Linux', 'Git', 'FastAPI'],
      color: 'sky'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      cyan: {
        border: 'border-cyan-500/10',
        text: 'text-cyan-400',
        bg: 'bg-gray-900/20',
        hover: 'hover:bg-cyan-900/10 hover:border-cyan-400/20'
      },
      blue: {
        border: 'border-blue-500/10',
        text: 'text-blue-400',
        bg: 'bg-gray-900/20',
        hover: 'hover:bg-blue-900/10 hover:border-blue-400/20'
      },
      teal: {
        border: 'border-teal-500/10',
        text: 'text-teal-400',
        bg: 'bg-gray-900/20',
        hover: 'hover:bg-teal-900/10 hover:border-teal-400/20'
      },
      indigo: {
        border: 'border-indigo-500/10',
        text: 'text-indigo-400',
        bg: 'bg-gray-900/20',
        hover: 'hover:bg-indigo-900/10 hover:border-indigo-400/20'
      },
      sky: {
        border: 'border-sky-500/10',
        text: 'text-sky-400',
        bg: 'bg-gray-900/20',
        hover: 'hover:bg-sky-900/10 hover:border-sky-400/20'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="tech" className="py-20 bg-gradient-to-b from-gray-900/20 to-gray-900/30 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Technological Domains
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techCategories.map((category, index) => {
              const colorClasses = getColorClasses(category.color);
              return (
                <div
                  key={index}
                  className={`group p-6 rounded-2xl backdrop-blur-sm border ${colorClasses.border} ${colorClasses.bg} transition-all duration-500 hover:scale-105 ${colorClasses.hover}`}
                >
                  <h3 className={`text-xl font-bold ${colorClasses.text} mb-6 group-hover:text-white transition-colors duration-300`}>
                    {category.title}
                  </h3>
                  
                  <div className="space-y-3">
                    {category.techs.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className={`p-3 rounded-lg border ${colorClasses.border} bg-black/20 backdrop-blur-sm transition-all duration-300 hover:scale-105 ${colorClasses.hover}`}
                      >
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-300 font-medium">
                          {tech}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="mt-16 text-center">
            <div className="inline-block p-6 rounded-2xl bg-gradient-to-r from-gray-900/30 to-cyan-900/10 backdrop-blur-sm border border-cyan-500/10">
              <p className="text-gray-300 text-lg font-light">
                Continuously evolving technological capabilities to address emerging challenges in quantum computing, AI safety, and threat intelligence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;