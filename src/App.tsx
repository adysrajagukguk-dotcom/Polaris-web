import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { LifeDomainsSection } from './components/LifeDomainsSection';
import { CoreFeaturesSection } from './components/CoreFeaturesSection';
import { AICompanionSection } from './components/AICompanionSection';
import { WearableSection } from './components/WearableSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { ProductExperienceSection } from './components/ProductExperienceSection';
import { WhyPolarisSection } from './components/WhyPolarisSection';
import { ResearchCTASection } from './components/ResearchCTASection';
import { FinalCTASection } from './components/FinalCTASection';
import { Footer } from './components/Footer';
import { ResearchModal } from './components/ResearchModal';
import { PrototypeModal } from './components/PrototypeModal';
import { TermsPrivacyModal } from './components/TermsPrivacyModal';

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('polaris_theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [researchModalOpen, setResearchModalOpen] = useState(false);
  const [prototypeModalOpen, setPrototypeModalOpen] = useState(false);
  const [termsModalOpen, setTermsModalOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
      document.body.classList.add('dark');
      localStorage.setItem('polaris_theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
      document.body.classList.remove('dark');
      localStorage.setItem('polaris_theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-[#F6FAFF] dark:bg-[#0B1726] text-[#173B64] dark:text-[#F6FAFF] transition-colors duration-300">
      {/* Navigation */}
      <Navbar
        onExplorePrototype={() => setPrototypeModalOpen(true)}
        onJoinResearch={() => setResearchModalOpen(true)}
        isDark={isDark}
        onToggleTheme={toggleTheme}
      />

      {/* Main Content Sections */}
      <main>
        {/* Section 1: Hero */}
        <Hero
          onExplorePrototype={() => setPrototypeModalOpen(true)}
          onJoinResearch={() => setResearchModalOpen(true)}
        />

        {/* Section 2: The Problem */}
        <ProblemSection />

        {/* Section 3: The Solution */}
        <SolutionSection />

        {/* Section 4: Life Domains */}
        <LifeDomainsSection />

        {/* Section 5: Core Features */}
        <CoreFeaturesSection />

        {/* Section 6: AI Companion */}
        <AICompanionSection />

        {/* Section 7: Wearable Concept */}
        <WearableSection />

        {/* Section 8: How It Works */}
        <HowItWorksSection />

        {/* Section 9: Product Experience */}
        <ProductExperienceSection />

        {/* Section 10: Why Polaris (Comparison) */}
        <WhyPolarisSection />

        {/* Section 11: Research / Validation CTA */}
        <ResearchCTASection
          onJoinResearch={() => setResearchModalOpen(true)}
          onExplorePrototype={() => setPrototypeModalOpen(true)}
        />

        {/* Section 13: Final CTA */}
        <FinalCTASection
          onExplorePrototype={() => setPrototypeModalOpen(true)}
          onJoinResearch={() => setResearchModalOpen(true)}
        />
      </main>

      {/* Floating Quick Theme Toggle Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={toggleTheme}
          aria-label={isDark ? 'Beralih ke Mode Terang' : 'Beralih ke Mode Gelap'}
          title={isDark ? 'Klik untuk Mode Terang' : 'Klik untuk Mode Gelap'}
          className="group flex items-center gap-2.5 px-3.5 py-2.5 rounded-full bg-white/95 dark:bg-[#13263B]/95 text-[#173B64] dark:text-[#FFDE70] border-2 border-[#A3C4EB]/50 dark:border-slate-700 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer backdrop-blur-md"
        >
          <div className="w-6 h-6 rounded-full bg-[#173B64] dark:bg-[#FFDE70] text-[#FFDE70] dark:text-[#173B64] flex items-center justify-center shrink-0 shadow-xs">
            {isDark ? <Sun className="w-3.5 h-3.5 stroke-[2.5]" /> : <Moon className="w-3.5 h-3.5 stroke-[2.5]" />}
          </div>
          <span className="text-xs font-bold pr-1 select-none hidden sm:inline text-slate-800 dark:text-slate-100">
            {isDark ? 'Mode Terang' : 'Mode Gelap'}
          </span>
        </button>
      </div>

      {/* Footer */}
      <Footer
        onOpenPrivacyTerms={() => setTermsModalOpen(true)}
        onExplorePrototype={() => setPrototypeModalOpen(true)}
        onJoinResearch={() => setResearchModalOpen(true)}
        isDark={isDark}
        onToggleTheme={toggleTheme}
      />

      {/* Interactive Modals */}
      <ResearchModal
        isOpen={researchModalOpen}
        onClose={() => setResearchModalOpen(false)}
      />

      <PrototypeModal
        isOpen={prototypeModalOpen}
        onClose={() => setPrototypeModalOpen(false)}
      />

      <TermsPrivacyModal
        isOpen={termsModalOpen}
        onClose={() => setTermsModalOpen(false)}
      />
    </div>
  );
}
