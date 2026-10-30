import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { LearningJourney } from './components/LearningJourney';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] text-[#DFE2F1] relative selection:bg-[#38BDF8]/30 selection:text-white">
      {/* Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero 
          onExploreWork={() => scrollToSection('projects')}
          onConnect={() => scrollToSection('contact')}
        />

        {/* 2. About Me */}
        <About />

        {/* 3. Skills and Technologies */}
        <Skills />

        {/* 4. Featured Projects (Only the 4 verified projects) */}
        <Projects />

        {/* 5. Education Timeline */}
        <Education />

        {/* 6. Learning Journey ("Always Learning, Always Building") */}
        <LearningJourney />

        {/* 7. Contact Section */}
        <Contact />
      </main>

      {/* 8. Footer */}
      <Footer />

      {/* Academic Profile Brief Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
