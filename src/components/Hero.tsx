import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-black">
      {/* Floating Code Snippets */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-cyan-400/10 font-mono text-sm animate-float">
          quantum.superposition()
        </div>
        <div className="absolute bottom-32 right-10 text-blue-400/10 font-mono text-sm animate-float-delayed">
          ml.predict_threat()
        </div>
        <div className="absolute top-1/3 right-20 text-teal-300/10 font-mono text-sm animate-float-slow">
          if(ai_thinks):
        </div>
        <div className="absolute bottom-1/3 left-20 text-cyan-400/10 font-mono text-sm animate-float">
          λ-simulate(intelligence)
        </div>
        <div className="absolute top-2/3 left-1/4 text-blue-300/10 font-mono text-sm animate-float-delayed">
          threat_detected = True
        </div>
        <div className="absolute top-1/4 left-1/3 text-teal-300/10 font-mono text-sm animate-float-slow">
          Qiskit.load_circuit()
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 h-screen flex items-center justify-center">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl w-full">
          {/* Left Side - Content */}
          <div className="text-left">
            {/* Small Name */}

            {/* About Me Section */}
            <div className="space-y-6">
              <h2 className="text-xl md:text-2xl font-semibold text-cyan-300 mb-4">
                About Me
              </h2>

              <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-4">
                I'm a passionate builder at the intersection of AI, cybersecurity, and real-time systems. With a background in engineering and a drive to solve complex, high-stakes problems, I specialize in developing intelligent systems that detect threats, decode anomalies, and learn from data at scale.
              </p>

              <div className="space-y-3">
                <p className="text-sm text-gray-300 font-medium">Currently, I'm:</p>
                
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">🧠</span>
                    <span>Researching ML applications in log-based anomaly detection (Isolation Forest, Drain3, LSTM)</span>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">🔐</span>
                    <span>Integrating AI into threat intelligence pipelines for proactive defense</span>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">⚛️</span>
                    <span>Exploring Quantum-assisted ML for next-gen decision-making</span>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">💻</span>
                    <span>Contributing to open-source tools like LogAI and sktime QuantEcon</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Image Container with Subtle Glow */}
              <div className="relative w-80 h-80 rounded-2xl overflow-hidden border border-cyan-400/20 bg-gradient-to-br from-gray-900/20 to-cyan-900/5 backdrop-blur-sm">
                <img 
                  src="/image.jpg" 
                  alt="Nityansh Pant" 
                  className="w-full h-full object-cover"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
              
              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 border border-cyan-400/30 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-cyan-400/40 to-blue-400/40 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-cyan-400/30" />
      </div>
    </section>
  );
};

export default Hero;
