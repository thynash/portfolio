import React from 'react';
import { Trophy, Award, Star } from 'lucide-react';

const Achievements: React.FC = () => {
  const achievements = [
    {
      title: '2nd Place ML Hackathon',
      organization: 'IIT BHU',
      description: 'Secured second place in the prestigious Yuri Night ML Hackathon',
      icon: <Trophy className="text-yellow-500" size={48} />,
      badge: 'Winner',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      title: 'IEEE RGIPT Challenge',
      organization: 'IEEE',
      description: 'First place winner in the Data Visualization Challenge',
      icon: <Award className="text-blue-500" size={48} />,
      badge: 'Champion',
      color: 'from-blue-400 to-purple-500'
    },
    {
      title: 'HackMatrix Newbie',
      organization: 'NJACK IIT Patna',
      description: 'Earned the coveted HackMatrix title in competitive programming',
      icon: <Star className="text-green-500" size={48} />,
      badge: 'Achiever',
      color: 'from-green-400 to-teal-500'
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            Achievements & Recognition
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className={`h-32 bg-gradient-to-br ${achievement.color} flex items-center justify-center relative`}>
                  {achievement.icon}
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                      {achievement.badge}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
                  <p className="text-purple-600 font-medium mb-3">{achievement.organization}</p>
                  <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready for New Challenges</h3>
              <p className="text-lg opacity-90">
                Always seeking opportunities to compete, learn, and push the boundaries of what's possible
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;