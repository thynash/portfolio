import React from "react";
import { HeroSection } from "./components/Herosections";
import { AboutSection } from "./components/AboutSection";
import { ExperienceSection } from "./components/Experience";
import { ProjectsSection } from "./components/ProjectSection";
import { SkillsSection } from "./components/SkillsSection";
import { AchievementsSection } from "./components/AchievementsSection";
import { FooterSection } from "./components/Footer";

function App() {
  return (
    <main className="bg-black text-white scroll-smooth">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <AchievementsSection />
      <FooterSection />
    </main>
  );
}

export default App;

