import React from 'react';
import { Calendar, Briefcase, GraduationCap } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'AI Intern',
      subtitle: 'C-DOT New Delhi',
      period: '2 Jun - 25 Jul 2025',
      description: 'Advanced AI research and development in telecommunications and emerging technologies at Centre for Development of Telematics.',
      icon: <Briefcase className="text-cyan-400" size={24} />
    },
    {
      title: 'AI Intern',
      subtitle: 'IIIT Hyderabad × Swecha',
      period: '27 Jun - 31 Aug 2025',
      description: 'Collaborative AI research and open-source development initiatives focusing on machine learning applications.',
      icon: <Briefcase className="text-cyan-400" size={24} />
    }
  ];

  const education = [
    {
      title: 'BTech in Mathematics and Computing',
      subtitle: 'RGIPT',
      period: '2024-2028',
      cpi: '9.42',
      description: 'Specializing in computational mathematics, algorithms, and mathematical modeling.',
      icon: <GraduationCap className="text-cyan-400" size={24} />
    },
    {
      title: 'BS in Data Science',
      subtitle: 'RGIPT',
      period: '2024-2028',
      cpi: '8.88',
      description: 'Dual degree focusing on statistical analysis, machine learning, and data engineering.',
      icon: <GraduationCap className="text-aqua-400" size={24} />
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-black via-gray-900/20 to-cyan-900/5">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Experience & Education
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Experience Column */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <Briefcase className="text-cyan-400" size={28} />
                Professional Experience
              </h3>
              
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="group relative">
                    <div className="bg-gradient-to-br from-gray-900/40 to-cyan-900/10 backdrop-blur-sm border border-cyan-500/10 rounded-xl p-6 hover:border-cyan-400/20 transition-all duration-500">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-black/60 rounded-lg flex items-center justify-center border border-cyan-500/20">
                          {exp.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                            <h4 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                              {exp.title}
                            </h4>
                            <div className="flex items-center gap-2 text-gray-400">
                              <Calendar size={16} />
                              <span className="text-sm">{exp.period}</span>
                            </div>
                          </div>
                          <p className="text-cyan-300 font-medium mb-3">{exp.subtitle}</p>
                          <p className="text-gray-300 leading-relaxed text-sm">{exp.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Column */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <GraduationCap className="text-cyan-400" size={28} />
                Academic Background
              </h3>
              
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div key={index} className="group relative">
                    <div className="bg-gradient-to-br from-gray-900/40 to-cyan-900/10 backdrop-blur-sm border border-cyan-500/10 rounded-xl p-6 hover:border-cyan-400/20 transition-all duration-500">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-black/60 rounded-lg flex items-center justify-center border border-cyan-500/20">
                          {edu.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                            <div>
                              <h4 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                                {edu.title}
                              </h4>
                              <div className="flex items-center gap-4 mt-1">
                                <p className="text-cyan-300 font-medium">{edu.subtitle}</p>
                                <span className="text-cyan-400 font-bold text-lg">CPI: {edu.cpi}</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 text-gray-400 mt-2 md:mt-0">
                              <Calendar size={16} />
                              <span className="text-sm">{edu.period}</span>
                            </div>
                          </div>
                          <p className="text-gray-300 leading-relaxed text-sm mt-3">{edu.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;