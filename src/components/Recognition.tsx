import React, { useState } from 'react';
import { Trophy, Award, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Recognition: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const achievements = [
    {
      title: 'Runner-up',
      event: 'IIT BHU Yuri Night ML Hackathon',
      icon: <Trophy className="text-yellow-400" size={64} />,
      gradient: 'from-gray-900/30 to-yellow-900/10',
      border: 'border-yellow-400/15'
    },
    {
      title: 'Winner',
      event: 'IEEE RGIPT Data Viz Challenge',
      icon: <Award className="text-cyan-400" size={64} />,
      gradient: 'from-gray-900/30 to-cyan-900/10',
      border: 'border-cyan-400/15'
    },
    {
      title: 'HackMatrix Newbie',
      event: 'NJACK, IIT Patna',
      icon: <Star className="text-blue-400" size={64} />,
      gradient: 'from-gray-900/30 to-blue-900/10',
      border: 'border-blue-400/15'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % achievements.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + achievements.length) % achievements.length);
  };

  return (
    <section id="recognition" className="py-20 bg-gradient-to-b from-gray-900/30 to-black">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Recognition
          </h2>
          
          {/* Desktop Grid View */}
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`group relative p-8 rounded-2xl bg-gradient-to-br ${achievement.gradient} backdrop-blur-sm border ${achievement.border} hover:scale-105 hover:border-cyan-400/25 transition-all duration-500`}
              >
                <div className="text-center">
                  <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    {achievement.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                    {achievement.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {achievement.event}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Carousel View */}
          <div className="md:hidden relative">
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className={`w-full flex-shrink-0 p-8 bg-gradient-to-br ${achievement.gradient} backdrop-blur-sm border ${achievement.border}`}
                  >
                    <div className="text-center">
                      <div className="mb-6">
                        {achievement.icon}
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {achievement.title}
                      </h3>
                      
                      <p className="text-gray-300 leading-relaxed">
                        {achievement.event}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-black/40 backdrop-blur-sm border border-cyan-400/10 text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-black/40 backdrop-blur-sm border border-cyan-400/10 text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
            >
              <ChevronRight size={24} />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {achievements.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-cyan-400' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recognition;