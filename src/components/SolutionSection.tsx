import React, { useState } from 'react';
import { Target, Activity, PieChart, Sparkles, Footprints, ArrowRight, Check, Compass } from 'lucide-react';
import { CORE_JOURNEY_STEPS } from '../data/mockData';

export const SolutionSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const stepIcons = [Target, Activity, PieChart, Sparkles, Footprints];

  // Dynamic preview UI content depending on which journey step is active
  const renderInteractiveStepPreview = () => {
    switch (activeStepIndex) {
      case 0: // Set Goals
        return (
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-700 pb-2.5">
              <span className="text-xs font-bold text-[#173B64] dark:text-[#FFDE70]">Active Goals (5 Domains)</span>
              <span className="text-[11px] text-slate-500 font-medium">+ New Life Target</span>
            </div>
            
            <div className="p-3 rounded-xl bg-white dark:bg-[#13263B] border border-[#A3C4EB]/40 dark:border-slate-700 shadow-xs">
              <div className="flex justify-between items-start mb-1.5">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400">Academic · Capstone</span>
                  <h4 className="text-sm font-bold text-[#173B64] dark:text-[#F6FAFF]">Semester 6 Capstone Defense</h4>
                </div>
                <span className="text-xs font-bold text-[#173B64] dark:text-[#FFDE70] tabular-nums">84%</span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                <div className="bg-[#173B64] dark:bg-[#FFDE70] h-full rounded-full w-[84%]" />
              </div>
              <div className="flex justify-between text-[11px] text-slate-500 dark:text-slate-400 mt-2">
                <span>Target: A Grade Defense</span>
                <span>Due Dec 10, 2026</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white dark:bg-[#13263B] border border-[#A3C4EB]/40 dark:border-slate-700 shadow-xs">
              <div className="flex justify-between items-start mb-1.5">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400">Career · Design</span>
                  <h4 className="text-sm font-bold text-[#173B64] dark:text-[#F6FAFF]">Publish UI/UX Case Study</h4>
                </div>
                <span className="text-xs font-bold text-[#173B64] dark:text-[#FFDE70] tabular-nums">72%</span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                <div className="bg-[#173B64] dark:bg-[#FFDE70] h-full rounded-full w-[72%]" />
              </div>
              <div className="flex justify-between text-[11px] text-slate-500 dark:text-slate-400 mt-2">
                <span>Target: Medium & Behance</span>
                <span>Due Nov 15, 2026</span>
              </div>
            </div>
          </div>
        );

      case 1: // Track Activities
        return (
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-700 pb-2.5">
              <span className="text-xs font-bold text-[#173B64] dark:text-[#FFDE70]">Connected Activity Logger</span>
              <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">Goal Connected ✓</span>
            </div>

            <div className="p-3.5 rounded-xl bg-white dark:bg-[#13263B] border border-[#173B64]/30 dark:border-[#FFDE70]/40 shadow-xs">
              <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 mb-1">What did you work on?</div>
              <div className="text-sm font-semibold text-[#173B64] dark:text-[#F6FAFF] mb-3">
                Conduct Heuristic Testing & User Interview #3
              </div>

              <div className="bg-[#F6FAFF] dark:bg-[#0D1B2A] p-2.5 rounded-lg border border-[#A3C4EB]/30 mb-3">
                <div className="text-[10px] text-slate-500 mb-0.5">Connected Goal:</div>
                <div className="text-xs font-bold text-[#173B64] dark:text-[#FFDE70] flex items-center gap-1.5">
                  <Target className="w-3.5 h-3.5" />
                  <span>Publish Human-Centered Design Case Study</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>Duration: <strong className="text-slate-800 dark:text-slate-200">50 mins</strong></span>
                <span className="px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 font-semibold text-[11px]">
                  Logged Just Now
                </span>
              </div>
            </div>
          </div>
        );

      case 2: // Visualize
        return (
          <div className="space-y-3 text-left">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-700 pb-2.5">
              <span className="text-xs font-bold text-[#173B64] dark:text-[#FFDE70]">5-Domain Life Radar</span>
              <span className="text-[11px] text-slate-500 font-medium">Week 41 Distribution</span>
            </div>

            {/* Radar summary rows */}
            <div className="p-3 rounded-xl bg-white dark:bg-[#13263B] border border-[#A3C4EB]/40 dark:border-slate-700 shadow-xs">
              <div className="space-y-2 text-xs">
                <div>
                  <div className="flex justify-between font-medium mb-1">
                    <span className="text-slate-700 dark:text-slate-200">Academic (Thesis & Labs)</span>
                    <span className="text-[#173B64] dark:text-[#FFDE70] font-bold">84%</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#173B64] dark:bg-[#FFDE70] h-full w-[84%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between font-medium mb-1">
                    <span className="text-slate-700 dark:text-slate-200">Well-being (Rest & Movement)</span>
                    <span className="text-[#173B64] dark:text-[#FFDE70] font-bold">76%</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#173B64] dark:bg-[#FFDE70] h-full w-[76%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between font-medium mb-1">
                    <span className="text-slate-700 dark:text-slate-200">Career Prep (Portfolio & Certs)</span>
                    <span className="text-[#173B64] dark:text-[#FFDE70] font-bold">72%</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#173B64] dark:bg-[#FFDE70] h-full w-[72%]" />
                  </div>
                </div>
              </div>

              <div className="mt-3 pt-2 border-t border-slate-100 dark:border-slate-800 text-[10px] text-slate-400">
                Visualizes user-entered activity and progress indicators.
              </div>
            </div>
          </div>
        );

      case 3: // Reflect
        return (
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-700 pb-2.5">
              <span className="text-xs font-bold text-[#173B64] dark:text-[#FFDE70]">Polaris Weekly Reflection</span>
              <span className="text-[10px] text-slate-500 font-medium">Non-judgmental insight</span>
            </div>

            <div className="p-3.5 rounded-xl bg-white dark:bg-[#13263B] border border-[#A3C4EB]/40 dark:border-slate-700 shadow-xs">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-[#FFDE70]" />
                <span className="text-xs font-bold text-[#173B64] dark:text-[#FFDE70]">Pattern Observation</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                “You invested 12 hours into academic lab work this week, moving your capstone milestone to 84%. However, personal growth reading has been paused for 10 days.”
              </p>
              <div className="p-2.5 rounded-lg bg-[#F6FAFF] dark:bg-[#0D1B2A] border border-[#A3C4EB]/30 text-[11px] text-slate-700 dark:text-slate-300">
                <span className="font-semibold text-[#173B64] dark:text-[#FFDE70]">Reflection prompt: </span>
                Would you like to schedule an unpressured 20 minutes for reading on Saturday afternoon?
              </div>
            </div>
          </div>
        );

      case 4: // Take Action
      default:
        return (
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-700 pb-2.5">
              <span className="text-xs font-bold text-[#173B64] dark:text-[#FFDE70]">Manageable Next Step</span>
              <span className="text-[10px] text-emerald-600 font-semibold">Ready to begin</span>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-[#13263B] border-2 border-[#173B64] dark:border-[#FFDE70] shadow-sm">
              <div className="text-[10px] uppercase font-bold text-slate-400 mb-1">Defined Action for Tomorrow</div>
              <h4 className="text-sm font-bold text-[#173B64] dark:text-[#F6FAFF] mb-2">
                Draft 2 User Persona Journey Quotes (30 mins)
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 mb-3">
                Linked directly to goal: <em>Publish Human-Centered Design Case Study</em>.
              </p>
              <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800">
                <span className="text-[11px] text-slate-500">Scheduled: 10:30 AM</span>
                <span className="text-xs font-bold text-[#173B64] dark:text-[#FFDE70] flex items-center gap-1">
                  Start Timer <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <section className="py-20 md:py-28 bg-[#F6FAFF] dark:bg-[#0D1B2A] relative border-t border-b border-[#A3C4EB]/20 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#A3C4EB]/25 dark:bg-[#173B64]/50 text-xs font-semibold text-[#173B64] dark:text-[#A3C4EB] mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>The Polaris Core Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#173B64] dark:text-[#F6FAFF] tracking-tight mb-4">
            Meet Polaris.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
            A goal-oriented life management ecosystem designed around your direction—not just your tasks.
          </p>
        </div>

        {/* 5-Step Core Journey Visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Step Selector List (7 columns on desktop) */}
          <div className="lg:col-span-7 space-y-3">
            {CORE_JOURNEY_STEPS.map((step, idx) => {
              const Icon = stepIcons[idx];
              const isActive = activeStepIndex === idx;

              return (
                <div
                  key={step.number}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`p-5 rounded-2xl cursor-pointer transition-all duration-200 border text-left flex items-start gap-4 ${
                    isActive
                      ? 'bg-white dark:bg-[#13263B] border-[#173B64] dark:border-[#FFDE70] shadow-md scale-[1.01]'
                      : 'bg-white/60 dark:bg-[#13263B]/50 border-[#A3C4EB]/30 dark:border-slate-800 hover:border-[#173B64]/30 dark:hover:border-slate-700'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isActive
                        ? 'bg-[#173B64] text-[#FFDE70] dark:bg-[#FFDE70] dark:text-[#173B64]'
                        : 'bg-[#A3C4EB]/20 text-[#173B64] dark:text-slate-300 dark:bg-slate-800'
                    }`}
                  >
                    <Icon className="w-5 h-5 stroke-[2]" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-400 dark:text-slate-500 tabular-nums">
                          {step.number}
                        </span>
                        <h3 className="text-base font-bold text-[#173B64] dark:text-[#F6FAFF]">
                          {step.title}
                        </h3>
                      </div>
                      <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                        {step.tag}
                      </span>
                    </div>

                    <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      {step.subtitle}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      {step.details}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Screen Preview Container (5 columns on desktop) */}
          <div className="lg:col-span-5">
            <div className="bg-white dark:bg-[#13263B] rounded-3xl p-6 shadow-xl border border-[#A3C4EB]/40 dark:border-slate-700 relative overflow-hidden">
              
              {/* Header inside container */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="text-xs font-bold text-[#173B64] dark:text-[#F6FAFF]">
                    Step {CORE_JOURNEY_STEPS[activeStepIndex].number} Preview
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                  {CORE_JOURNEY_STEPS[activeStepIndex].title}
                </span>
              </div>

              {/* Dynamic Interactive UI Preview */}
              <div className="min-h-[290px] flex flex-col justify-center">
                {renderInteractiveStepPreview()}
              </div>

              {/* Step Navigation Bar */}
              <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-500">
                  Step {activeStepIndex + 1} of 5 in Core Journey
                </span>
                <div className="flex gap-1.5">
                  <button
                    disabled={activeStepIndex === 0}
                    onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                    className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 disabled:opacity-40 hover:bg-slate-200 transition-colors"
                  >
                    Prev
                  </button>
                  <button
                    disabled={activeStepIndex === CORE_JOURNEY_STEPS.length - 1}
                    onClick={() => setActiveStepIndex((prev) => Math.min(CORE_JOURNEY_STEPS.length - 1, prev + 1))}
                    className="px-2.5 py-1 rounded bg-[#173B64] text-[#FFDE70] disabled:opacity-40 hover:bg-[#102a49] transition-colors font-semibold"
                  >
                    Next
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
