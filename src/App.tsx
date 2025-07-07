import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Domains from './components/Domains';
import Projects from './components/Projects';
import Technology from './components/Technology';
import Experience from './components/Experience';
import Recognition from './components/Recognition';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <Domains />
      <Projects />
      <Technology />
      <Experience />
      <Recognition />
      <Footer />
    </div>
  );
}

export default App;