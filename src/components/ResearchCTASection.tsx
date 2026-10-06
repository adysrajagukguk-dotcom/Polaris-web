import React from 'react';
import { Users, ClipboardCheck, ArrowUpRight, ChevronRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface ResearchCTASectionProps {
  onJoinResearch: () => void;
  onExplorePrototype: () => void;
}

export const ResearchCTASection: React.FC<ResearchCTASectionProps> = ({
  onJoinResearch,
  onExplorePrototype,
}) => {
  return (
    <section id="research" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Research Callout Card */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-white dark:bg-[#13263B] border-2 border-[#173B64] dark:border-[#FFDE70] p-8 sm:p-12 shadow-xl text-left relative overflow-hidden">
          
          {/* Subtle background motif */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#FFDE70]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#A3C4EB]/25 dark:bg-[#173B64] text-xs font-bold text-[#173B64] dark:text-[#FFDE70] mb-4">
              <ClipboardCheck className="w-4 h-4" />
              <span>Participatory User Research</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#173B64] dark:text-[#F6FAFF] tracking-tight mb-4">
              Help Us Build Polaris Better.
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-2xl">
              We’re validating how students manage goals, activities, priorities, and progress. Your perspective can help shape the next version of Polaris.
            </p>

            {/* What participants do (bulleted research value) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 text-xs text-slate-600 dark:text-slate-300">
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F6FAFF] dark:bg-[#0D1B2A] border border-[#A3C4EB]/30">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-800 dark:text-slate-200 block mb-0.5">3-Minute Survey</strong>
                  Share how you currently handle deadlines and life domains.
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F6FAFF] dark:bg-[#0D1B2A] border border-[#A3C4EB]/30">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-800 dark:text-slate-200 block mb-0.5">Early Prototype Access</strong>
                  Test new feature builds on mobile before competition showcase.
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F6FAFF] dark:bg-[#0D1B2A] border border-[#A3C4EB]/30">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-800 dark:text-slate-200 block mb-0.5">Student Co-Design</strong>
                  Directly influence UI workflows, reminder cadences, and domains.
                </div>
              </div>
            </div>

            {/* CTAs: Research Prominent */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onJoinResearch}
                className="px-6 py-3.5 rounded-xl font-bold text-sm text-[#173B64] bg-[#FFDE70] hover:bg-[#ffd653] shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group active:scale-[0.98]"
              >
                <span>Join User Research</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </button>

              <button
                onClick={onExplorePrototype}
                className="px-6 py-3.5 rounded-xl font-semibold text-sm text-[#173B64] dark:text-[#F6FAFF] bg-white dark:bg-[#0D1B2A] border border-[#173B64]/20 dark:border-[#A3C4EB]/30 hover:bg-[#A3C4EB]/15 dark:hover:bg-[#173B64]/50 transition-colors flex items-center justify-center gap-2"
              >
                <span>Explore Prototype</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            <div className="mt-6 text-[11px] text-slate-400">
              *All student feedback is handled strictly in accordance with academic research privacy protocols.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
