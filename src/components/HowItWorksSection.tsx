import React from 'react';
import { Target, CalendarCheck, BarChart2, Sparkles, Navigation, ArrowDown } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Set a Goal',
      description: 'Choose a life domain. Give your aspiration a concrete milestone and target deadline.',
      example: 'Example: “Publish UI/UX Case Study by Nov 15” (Career Domain)',
      icon: Target,
    },
    {
      number: '02',
      title: 'Plan or Log an Activity',
      description: 'Record what you actually do throughout your day. Connect each session to its parent goal.',
      example: 'Example: “45 mins conducting user heuristic testing”',
      icon: CalendarCheck,
    },
    {
      number: '03',
      title: 'See Your Progress',
      description: 'Watch your 5-domain radar expand. Understand where your focus was invested this week.',
      example: 'Example: Academic: 84% · Career: 72% · Well-being: 76%',
      icon: BarChart2,
    },
    {
      number: '04',
      title: 'Reflect with Polaris',
      description: 'Receive thoughtful, objective insights without judgment or pressure to do more.',
      example: 'Example: “You made major headway on academic labs. Well-being was balanced.”',
      icon: Sparkles,
    },
    {
      number: '05',
      title: 'Choose Your Next Step',
      description: 'Select one manageable action for tomorrow to keep your momentum without burnout.',
      example: 'Example: “Tomorrow 10 AM: Outline case study design personas”',
      icon: Navigation,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs uppercase tracking-widest font-bold text-slate-500 dark:text-slate-400 mb-3">
            Daily Operational Rhythm
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#173B64] dark:text-[#F6FAFF] tracking-tight leading-tight mb-4">
            One Direction. One Day at a Time.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Progress is not about frantic multitasking. It is about steady, aligned actions accumulated day after day.
          </p>
        </div>

        {/* 5-Step Process Timeline Cards */}
        <div className="relative">
          {/* Subtle Connecting Line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 bg-[#A3C4EB]/40 dark:bg-slate-800 -translate-y-6 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="p-6 rounded-2xl bg-white dark:bg-[#13263B] border border-[#A3C4EB]/30 dark:border-slate-800 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between text-left group"
                >
                  <div>
                    {/* Header: Number & Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#173B64] text-[#FFDE70] dark:bg-[#FFDE70] dark:text-[#173B64] flex items-center justify-center font-bold shadow-xs transition-transform group-hover:scale-105">
                        <Icon className="w-6 h-6 stroke-[2]" />
                      </div>
                      <span className="text-xs font-bold text-slate-400 dark:text-slate-500 tabular-nums">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-[#173B64] dark:text-[#F6FAFF] mb-2">
                      {step.title}
                    </h3>

                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 italic block">
                      {step.example}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
