import React from 'react';
import { Mail, Github, Linkedin, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="connect" className="bg-gradient-to-t from-gray-900/20 to-black py-16 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Connect
          </h2>
          
          <div className="flex justify-center gap-8 mb-12">
            <a
              href="https://www.linkedin.com/in/nityanshpant"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-full bg-gradient-to-r from-gray-900/30 to-cyan-900/10 backdrop-blur-sm border border-cyan-500/10 hover:scale-110 hover:border-cyan-400/20 transition-all duration-300"
            >
              <Linkedin size={32} className="text-cyan-400 group-hover:text-white transition-colors duration-300" />
            </a>
            
            <a
              href="https://github.com/thynash"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-full bg-gradient-to-r from-gray-900/30 to-blue-900/10 backdrop-blur-sm border border-blue-500/10 hover:scale-110 hover:border-blue-400/20 transition-all duration-300"
            >
              <Github size={32} className="text-blue-400 group-hover:text-white transition-colors duration-300" />
            </a>
            
            <a
              href="mailto:pantnityansh@gmail.com"
              className="group p-4 rounded-full bg-gradient-to-r from-gray-900/30 to-teal-900/10 backdrop-blur-sm border border-teal-500/10 hover:scale-110 hover:border-teal-400/20 transition-all duration-300"
            >
              <Mail size={32} className="text-teal-400 group-hover:text-white transition-colors duration-300" />
            </a>
          </div>
          
          <div className="border-t border-gray-800/30 pt-8">
            <p className="text-gray-400 text-lg font-light mb-4">
              Built for what's next.
            </p>
            
            <button
              onClick={scrollToTop}
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-gray-900/20 to-cyan-900/5 backdrop-blur-sm border border-cyan-500/10 text-cyan-400 hover:bg-cyan-900/10 hover:text-white hover:border-cyan-400/20 transition-all duration-300 hover:scale-105"
            >
              <ArrowUp size={20} className="group-hover:animate-bounce" />
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;