import React from "react";
import { HeroSection } from "./components/Herosection";
import { AboutSection } from "./components/AboutSection";
import { ExperienceEducation } from "./components/ExperienceEducation";
import { ProjectsSection } from "./components/ProjectsSection";
import { SkillsSection } from "./components/SkillsSection";
import { AchievementsSection } from "./components/AchievementsSection";
import { FooterSection } from "./components/FooterSection";

function App() {
  return (
    <main className="bg-black text-white scroll-smooth">
      <HeroSection />
      <AboutSection />
      <ExperienceEducation />
      <ProjectsSection />
      <SkillsSection />
      <AchievementsSection />
      <FooterSection />
    </main>
  );
}

export default App;

