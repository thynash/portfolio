import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-black/30 backdrop-blur-xl border-b border-cyan-500/10' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
            Nityansh Pant
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('domains')} 
              className="text-gray-300 hover:text-cyan-400 transition-all duration-300"
            >
              Domains
            </button>
            <button 
              onClick={() => scrollToSection('projects')} 
              className="text-gray-300 hover:text-cyan-400 transition-all duration-300"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('tech')} 
              className="text-gray-300 hover:text-cyan-400 transition-all duration-300"
            >
              Technology
            </button>
            <button 
              onClick={() => scrollToSection('experience')} 
              className="text-gray-300 hover:text-cyan-400 transition-all duration-300"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('recognition')} 
              className="text-gray-300 hover:text-cyan-400 transition-all duration-300"
            >
              Recognition
            </button>
            <button 
              onClick={() => scrollToSection('connect')} 
              className="text-gray-300 hover:text-cyan-400 transition-all duration-300"
            >
              Connect
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-cyan-400 p-2 hover:bg-cyan-500/10 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-black/30 backdrop-blur-xl rounded-xl border border-cyan-500/10">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('domains')} className="text-gray-300 hover:text-cyan-400 transition-colors text-left px-4">
                Domains
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-cyan-400 transition-colors text-left px-4">
                Projects
              </button>
              <button onClick={() => scrollToSection('tech')} className="text-gray-300 hover:text-cyan-400 transition-colors text-left px-4">
                Technology
              </button>
              <button onClick={() => scrollToSection('experience')} className="text-gray-300 hover:text-cyan-400 transition-colors text-left px-4">
                Experience
              </button>
              <button onClick={() => scrollToSection('recognition')} className="text-gray-300 hover:text-cyan-400 transition-colors text-left px-4">
                Recognition
              </button>
              <button onClick={() => scrollToSection('connect')} className="text-gray-300 hover:text-cyan-400 transition-colors text-left px-4">
                Connect
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
