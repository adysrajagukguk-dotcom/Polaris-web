import React from 'react';
import { Layers, AlertCircle, Unlink, EyeOff, HelpCircle } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      index: '01',
      title: 'Too Many Responsibilities',
      subtitle: 'The fragmented calendar problem',
      description:
        'Classes, assignments, student organizations, career preparation, relationships, and personal goals compete for the same limited hours every week.',
      icon: Layers,
      context: 'Students juggle up to 7 distinct obligations simultaneously without a unifying framework.',
    },
    {
      index: '02',
      title: 'Busy ≠ Progress',
      subtitle: 'The illusion of false productivity',
      description:
        'Completing reactive to-do tasks feels satisfying in the moment, but does not always mean those actions are helping you advance toward your bigger ambitions.',
      icon: AlertCircle,
      context: 'Checking off 10 urgent errands often leaves your most meaningful milestone untouched.',
    },
    {
      index: '03',
      title: 'Goals Feel Disconnected',
      subtitle: 'The drifting ambition dilemma',
      description:
        'Long-term aspirations—like building a portfolio, preparing for scholarships, or improving health—easily become forgotten when urgent day-to-day firefighting takes over.',
      icon: Unlink,
      context: 'Goals kept in notes apps remain passive wishes instead of actively shaping daily choices.',
    },
    {
      index: '04',
      title: 'Progress Is Hard to See',
      subtitle: 'The lack of holistic awareness',
      description:
        'Without an integrated view across different life dimensions, it becomes difficult to understand where your precious time and mental energy are actually going.',
      icon: EyeOff,
      context: 'Burnout strikes when weeks pass with no clear visibility into whether effort created momentum.',
    },
  ];

  return (
    <section id="why-polaris" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs uppercase tracking-widest font-bold text-slate-500 dark:text-slate-400 mb-3">
            The Student Reality
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#173B64] dark:text-[#F6FAFF] tracking-tight leading-tight mb-6 text-balance">
            You’re Busy. But Are You Moving in the Right Direction?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Every semester starts with ambitious resolutions. Yet as midterms, campus organizations, and daily chores pile up, the link between daily routines and your future identity gets lost.
          </p>
        </div>

        {/* 4 Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {problems.map((problem) => {
            const Icon = problem.icon;
            return (
              <div
                key={problem.index}
                className="group p-8 rounded-2xl bg-white dark:bg-[#13263B] border border-[#A3C4EB]/30 dark:border-slate-800 hover:border-[#173B64]/40 dark:hover:border-[#FFDE70]/40 transition-all duration-200 shadow-xs hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#A3C4EB]/20 dark:bg-[#173B64]/50 flex items-center justify-center text-[#173B64] dark:text-[#FFDE70] transition-transform group-hover:scale-105">
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>
                    <span className="text-sm font-bold text-slate-400 dark:text-slate-500 tabular-nums">
                      {problem.index}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#173B64] dark:text-[#F6FAFF] mb-1">
                    {problem.title}
                  </h3>
                  <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-3">
                    {problem.subtitle}
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    “{problem.description}”
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">Observation: </span>
                  {problem.context}
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing Provocative Reflection Callout */}
        <div className="max-w-3xl mx-auto rounded-2xl p-8 sm:p-10 bg-[#173B64] text-[#F6FAFF] shadow-lg text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#A3C4EB]/10 rounded-full blur-2xl pointer-events-none" />
          <div className="relative z-10">
            <div className="w-10 h-10 rounded-full bg-[#FFDE70] text-[#173B64] mx-auto mb-4 flex items-center justify-center shadow-xs">
              <HelpCircle className="w-5 h-5 stroke-[2.2]" />
            </div>
            <p className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-[#FFDE70] mb-3 text-balance">
              What if your daily actions could point you toward the life you want to build?
            </p>
            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
              Not by adding more pressure to do everything, but by giving you clarity on which actions actually matter today.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
