import React from 'react';
import { Compass, Sparkles, Target, ArrowUpRight, ChevronRight, Activity } from 'lucide-react';
import { PolarisPhoneMockup } from './PolarisPhoneMockup';

interface HeroProps {
  onExplorePrototype: () => void;
  onJoinResearch: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplorePrototype, onJoinResearch }) => {
  return (
    <section id="hero" className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden">
      {/* Subtle Star/Polaris directional celestial backdrop */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-b from-[#A3C4EB]/25 via-[#FFDE70]/10 to-transparent rounded-full blur-3xl opacity-70 dark:opacity-20" />
        {/* Subtle coordinate lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#173B6408_1px,transparent_1px),linear-gradient(to_bottom,#173B6408_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#A3C4EB08_1px,transparent_1px),linear-gradient(to_bottom,#A3C4EB08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />
        
        {/* Polaris guiding star symbol */}
        <div className="absolute top-16 right-12 md:right-32 w-12 h-12 text-[#FFDE70] opacity-60 dark:opacity-40 animate-pulse">
          <svg viewBox="0 0 40 40" fill="currentColor">
            <path d="M20 0 L22.5 15.5 L38 20 L22.5 24.5 L20 40 L17.5 24.5 L2 20 L17.5 15.5 Z" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & Intent */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Direction Badge / Subtitle */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#A3C4EB]/25 dark:bg-[#173B64]/50 border border-[#A3C4EB]/40 dark:border-[#173B64] text-xs font-semibold text-[#173B64] dark:text-[#A3C4EB] mb-5">
              <Compass className="w-3.5 h-3.5 text-[#173B64] dark:text-[#FFDE70]" />
              <span>Temukan arah. Selaraskan tindakan.</span>
              <span className="text-[#173B64]/40 dark:text-[#A3C4EB]/40">|</span>
              <span className="text-slate-600 dark:text-slate-300">Competition Prototype 2026</span>
            </div>

            {/* Core Value Proposition Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#173B64] dark:text-[#F6FAFF] leading-[1.1] mb-6 max-w-2xl text-balance">
              Your Goals Deserve More Than a To-Do List.
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-xl">
              Polaris helps you connect daily activities with your life goals, understand your progress, and make more intentional decisions — one day at a time.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={onExplorePrototype}
                className="px-6 py-3.5 rounded-xl font-bold text-sm text-[#173B64] bg-[#FFDE70] hover:bg-[#ffd757] shadow-sm hover:shadow transition-all duration-150 flex items-center justify-center gap-2 group active:scale-[0.98]"
              >
                <span>Explore Polaris</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </button>

              <button
                onClick={onJoinResearch}
                className="px-6 py-3.5 rounded-xl font-semibold text-sm text-[#173B64] dark:text-[#F6FAFF] bg-white dark:bg-[#13263B] border border-[#173B64]/20 dark:border-[#A3C4EB]/30 hover:bg-[#A3C4EB]/15 dark:hover:bg-[#173B64]/60 transition-colors duration-150 flex items-center justify-center gap-2"
              >
                <span>Join Our User Research</span>
                <ArrowUpRight className="w-4 h-4 text-slate-500" />
              </button>
            </div>

            {/* Trust / Clarification Line */}
            <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Designed for university students balancing academic deadlines, career prep, and personal life.</span>
            </div>
          </div>

          {/* Right Column: High-Fidelity Floating Mobile Mockup */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Floating Prototype UI Card 1: Top-Left "3 Active Goals" */}
            <div className="absolute -top-4 -left-4 sm:-left-8 z-20 bg-white dark:bg-[#13263B] p-3 rounded-2xl shadow-lg border border-[#A3C4EB]/40 dark:border-slate-700/80 max-w-[190px] animate-bounce [animation-duration:6s]">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#173B64] dark:text-[#FFDE70]">
                <Target className="w-4 h-4 text-[#173B64] dark:text-[#FFDE70]" />
                <span>3 Active Goals</span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-300 mt-1 line-clamp-1">
                Semester 6 Capstone Project
              </p>
              <div className="w-full bg-[#A3C4EB]/30 h-1.5 rounded-full mt-2 overflow-hidden">
                <div className="bg-[#173B64] dark:bg-[#FFDE70] h-full rounded-full w-[84%]" />
              </div>
            </div>

            {/* Floating Prototype UI Card 2: Right-Top "Academic 84%" */}
            <div className="absolute top-16 -right-4 sm:-right-8 z-20 bg-white dark:bg-[#13263B] p-3 rounded-2xl shadow-lg border border-[#A3C4EB]/40 dark:border-slate-700/80 text-right animate-bounce [animation-duration:7s] [animation-delay:1s]">
              <div className="text-[11px] uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400">
                Academic
              </div>
              <div className="text-xl font-extrabold text-[#173B64] dark:text-[#F6FAFF] tabular-nums">
                84%
              </div>
              <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium flex items-center justify-end gap-1">
                <span>+6% this week</span>
              </div>
            </div>

            {/* Floating Prototype UI Card 3: Bottom-Left "Career 72%" */}
            <div className="absolute bottom-20 -left-6 sm:-left-10 z-20 bg-white dark:bg-[#13263B] p-3 rounded-2xl shadow-lg border border-[#A3C4EB]/40 dark:border-slate-700/80 animate-bounce [animation-duration:6.5s] [animation-delay:2s]">
              <div className="text-[11px] uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400">
                Career Prep
              </div>
              <div className="text-lg font-bold text-[#173B64] dark:text-[#F6FAFF] tabular-nums">
                72%
              </div>
              <span className="text-[10px] text-slate-500 dark:text-slate-400">UI/UX Case Study</span>
            </div>

            {/* Floating Prototype UI Card 4: Bottom-Right "Weekly Progress" */}
            <div className="absolute -bottom-4 -right-4 sm:-right-6 z-20 bg-white dark:bg-[#13263B] p-3 rounded-2xl shadow-lg border border-[#A3C4EB]/40 dark:border-slate-700/80 max-w-[180px] animate-bounce [animation-duration:8s] [animation-delay:1.5s]">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200">
                <Activity className="w-3.5 h-3.5 text-[#173B64] dark:text-[#FFDE70]" />
                <span>Weekly Balance</span>
              </div>
              <div className="text-xs font-medium text-emerald-600 dark:text-emerald-400 mt-0.5">
                5 Domains Active
              </div>
              <span className="text-[10px] text-slate-400 block mt-1">Reflected yesterday</span>
            </div>

            {/* Main Phone Mockup */}
            <div className="relative w-[310px] sm:w-[340px] h-[640px] bg-slate-900 rounded-[50px] p-3 shadow-2xl shadow-[#173B64]/25 border-4 border-slate-800 flex flex-col">
              {/* Dynamic Island / speaker */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-3.5 bg-slate-950 rounded-full z-30 pointer-events-none" />

              {/* Exact Prototype Screen Mockup */}
              <div className="w-full h-full rounded-[40px] overflow-hidden shadow-inner flex flex-col">
                <PolarisPhoneMockup onDefineGoal={onExplorePrototype} />
              </div>
            </div>

          </div>

        </div>

        {/* Prototype Honesty Disclaimer Banner under Hero */}
        <div className="mt-14 pt-4 border-t border-[#A3C4EB]/30 dark:border-slate-800 text-center text-xs text-slate-500 dark:text-slate-400">
          <span className="font-semibold text-[#173B64] dark:text-[#FFDE70]">Note on Prototype UI:</span> Visual mockups illustrate planned student life alignment flows for the Technology Appropriate Use Competition. Values shown are illustrative prototype demonstrations.
        </div>
      </div>
    </section>
  );
};
