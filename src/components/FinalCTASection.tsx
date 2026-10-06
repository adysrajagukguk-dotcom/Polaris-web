import React from 'react';
import { Compass, ChevronRight, ArrowUpRight } from 'lucide-react';

interface FinalCTASectionProps {
  onExplorePrototype: () => void;
  onJoinResearch: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({
  onExplorePrototype,
  onJoinResearch,
}) => {
  return (
    <section className="py-24 md:py-32 bg-[#173B64] text-[#F6FAFF] relative overflow-hidden text-center">
      {/* Background Star & Compass subtle glow */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FFDE70] rounded-full blur-[140px] opacity-20" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Star Icon */}
        <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 text-[#FFDE70] mx-auto mb-8 flex items-center justify-center shadow-lg">
          <Compass className="w-8 h-8 stroke-[2]" />
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F6FAFF] leading-tight mb-6 text-balance">
          Find Your Direction.<br />
          Align Your Actions.<br />
          <span className="text-[#FFDE70]">Build Your Future.</span>
        </h2>

        {/* Supporting Copy */}
        <p className="text-lg sm:text-xl text-[#A3C4EB] max-w-xl mx-auto mb-10 leading-relaxed">
          Start with one goal. One activity. One next step.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <button
            onClick={onExplorePrototype}
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-extrabold text-sm text-[#173B64] bg-[#FFDE70] hover:bg-[#ffd757] shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group active:scale-[0.98]"
          >
            <span>Explore Polaris</span>
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </button>

          <button
            onClick={onJoinResearch}
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm text-[#F6FAFF] bg-white/10 hover:bg-white/15 border border-white/20 transition-all flex items-center justify-center gap-2"
          >
            <span>Join User Research</span>
            <ArrowUpRight className="w-4 h-4 text-[#A3C4EB]" />
          </button>
        </div>

        {/* Indonesian Subtext */}
        <div className="mt-12 text-xs text-[#A3C4EB]/70 font-medium tracking-wide">
          Temukan arah. Selaraskan tindakan. • Prototipe Kompetisi 2026
        </div>

      </div>
    </section>
  );
};
