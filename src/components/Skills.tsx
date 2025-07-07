import React from 'react';

const Skills: React.FC = () => {
  const skills = [
    { name: 'Python', level: 95, color: 'from-blue-500 to-blue-600' },
    { name: 'C++', level: 85, color: 'from-purple-500 to-purple-600' },
    { name: 'React', level: 90, color: 'from-cyan-500 to-cyan-600' },
    { name: 'TailwindCSS', level: 88, color: 'from-teal-500 to-teal-600' },
    { name: 'AI/ML', level: 92, color: 'from-green-500 to-green-600' },
    { name: 'Deep Learning', level: 88, color: 'from-red-500 to-red-600' },
    { name: 'NLP', level: 85, color: 'from-yellow-500 to-yellow-600' },
    { name: 'System Design', level: 80, color: 'from-pink-500 to-pink-600' },
    { name: 'Statistics', level: 87, color: 'from-indigo-500 to-indigo-600' },
    { name: 'Rust', level: 75, color: 'from-orange-500 to-orange-600' },
    { name: 'R', level: 82, color: 'from-blue-400 to-blue-500' },
    { name: 'DSA', level: 85, color: 'from-gray-500 to-gray-600' }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            Skills & Technologies
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                  <span className="text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-400 text-lg">
              Constantly learning and expanding my skillset to stay at the forefront of technology
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;