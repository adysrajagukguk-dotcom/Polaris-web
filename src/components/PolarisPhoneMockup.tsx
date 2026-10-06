import React, { useState } from 'react';
import { User, Plus, ChevronRight, Calendar, Flag, Scan, Compass } from 'lucide-react';

interface PolarisPhoneMockupProps {
  onDefineGoal?: () => void;
  className?: string;
}

export const PolarisPhoneMockup: React.FC<PolarisPhoneMockupProps> = ({
  onDefineGoal,
  className = '',
}) => {
  const [selectedTimeRange, setSelectedTimeRange] = useState<'Weekly' | 'Monthly' | 'Annually' | 'All Time'>('All Time');
  const [activeBottomTab, setActiveBottomTab] = useState<'Home' | 'Goals' | 'Activities' | 'AI' | 'Profile'>('Home');

  return (
    <div
      className={`relative w-full h-full bg-gradient-to-b from-[#DCEAF8] via-[#F4F8FD] to-[#DCEAF8] text-slate-800 flex flex-col justify-between overflow-hidden select-none font-sans text-left ${className}`}
    >
      {/* Background Celestial Wave Lines & Constellation Star Decor */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft flowing wave SVGs */}
        <svg className="absolute top-20 left-0 w-full h-96 opacity-60" viewBox="0 0 375 400" fill="none">
          <path
            d="M-50 120 C 60 70, 160 220, 280 140 C 340 100, 390 180, 450 160"
            stroke="#A3C4EB"
            strokeWidth="1.2"
            strokeDasharray="3 3"
          />
          <path
            d="M-30 260 C 80 190, 180 290, 320 220 C 380 190, 400 240, 440 220"
            stroke="#A3C4EB"
            strokeWidth="1.5"
            opacity="0.7"
          />
          <path
            d="M-20 310 C 90 270, 200 360, 350 290 C 400 270, 420 310, 450 300"
            stroke="#A3C4EB"
            strokeWidth="1"
            opacity="0.5"
          />
        </svg>

        {/* Small sparkling stars */}
        <span className="absolute top-28 left-12 text-[#A3C4EB] text-xs opacity-75">✦</span>
        <span className="absolute top-44 left-10 text-[#A3C4EB] text-sm opacity-60">✦</span>
        <span className="absolute top-24 right-16 text-[#FFDE70] text-sm opacity-80">✦</span>
        <span className="absolute top-36 right-10 text-[#FFDE70] text-base opacity-90">✦</span>
        <span className="absolute top-52 right-24 text-[#A3C4EB] text-xs opacity-70">✦</span>
      </div>

      {/* 1. Android Status Bar */}
      <div className="relative z-10 pt-2.5 px-6 flex items-center justify-between text-[11px] font-semibold text-slate-600">
        <div className="flex items-center gap-1.5">
          <span>4:27</span>
          <svg className="w-3 h-3 text-slate-500 fill-current opacity-80" viewBox="0 0 24 24">
            <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
          </svg>
        </div>
        <div className="flex items-center gap-1.5">
          {/* Signal */}
          <div className="flex items-end gap-0.5 h-2.5">
            <span className="w-0.5 h-1 bg-slate-600 rounded-2xs" />
            <span className="w-0.5 h-1.5 bg-slate-600 rounded-2xs" />
            <span className="w-0.5 h-2 bg-slate-600 rounded-2xs" />
            <span className="w-0.5 h-2.5 bg-slate-600 rounded-2xs" />
          </div>
          {/* Wifi */}
          <svg className="w-3.5 h-3.5 text-slate-600" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 4C7.31 4 3.07 5.9 0 8.98L12 21 24 8.98C20.93 5.9 16.69 4 12 4zm0 3.5c3.67 0 7.02 1.44 9.52 3.8L12 19.12 2.48 11.3C4.98 8.94 8.33 7.5 12 7.5z" />
          </svg>
          {/* Battery */}
          <div className="w-5 h-2.5 rounded-2xs border border-slate-600 p-0.5 flex items-center">
            <div className="w-full h-full bg-slate-600 rounded-3xs" />
          </div>
        </div>
      </div>

      {/* Scrollable Screen Content */}
      <div className="relative z-10 flex-1 overflow-y-auto px-5 pt-3 pb-2 space-y-4">
        
        {/* 2. User Greeting Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Gray avatar circle with silhouette */}
            <div className="w-12 h-12 rounded-full bg-slate-200/90 border border-slate-300/60 flex items-center justify-center text-slate-500 shadow-xs">
              <User className="w-6 h-6 stroke-[2] text-slate-500" />
            </div>
            <div>
              <div className="text-[11px] font-medium text-slate-500">Friday, 2 October 2026</div>
              <h2 className="text-xl font-extrabold text-[#173B64] tracking-tight leading-tight">
                Hello, Chris
              </h2>
              <p className="text-[11px] text-slate-500 leading-tight">
                Small steps today, big changes tomorrow.
              </p>
            </div>
          </div>

          {/* Yellow Circular + Button */}
          <button
            onClick={onDefineGoal}
            aria-label="Add goal"
            className="w-11 h-11 rounded-full bg-[#FFDE70] hover:bg-[#ffd757] text-[#173B64] flex items-center justify-center shadow-md active:scale-95 transition-transform shrink-0"
          >
            <Plus className="w-6 h-6 stroke-[2.5]" />
          </button>
        </div>

        {/* 3. Hero Celestial Compass Card / Empty State */}
        <div className="relative flex flex-col items-center justify-center text-center pt-2 pb-1">
          {/* Orbits and Compass SVG */}
          <div className="relative w-44 h-44 flex items-center justify-center my-1">
            {/* Outer dotted orbit */}
            <div className="absolute inset-0 rounded-full border border-dashed border-[#A3C4EB]/70 animate-[spin_60s_linear_infinite]" />
            {/* Orbit dot */}
            <div className="absolute top-2 left-10 w-2 h-2 rounded-full bg-[#173B64]/70 shadow-xs" />
            <div className="absolute bottom-6 right-8 w-2 h-2 rounded-full bg-[#FFDE70]" />

            {/* Inner faint orbit */}
            <div className="absolute inset-5 rounded-full border border-dashed border-[#A3C4EB]/60" />
            <div className="absolute top-8 right-6 w-1.5 h-1.5 rounded-full bg-[#173B64]/60" />

            {/* Glowing disc background */}
            <div className="w-24 h-24 rounded-full bg-[#A3C4EB]/30 backdrop-blur-xs flex items-center justify-center shadow-inner">
              <div className="w-16 h-16 rounded-full bg-white/90 shadow-md flex items-center justify-center">
                {/* 8-Pointed Polaris Compass Star */}
                <div className="w-8 h-8 text-[#FFDE70] drop-shadow-xs">
                  <svg viewBox="0 0 40 40" fill="currentColor">
                    <path d="M20 0 L22.8 15.2 L38 20 L22.8 24.8 L20 40 L17.2 24.8 L2 20 L17.2 15.2 Z" />
                    <circle cx="20" cy="20" r="3.5" fill="#173B64" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-lg font-extrabold text-[#173B64] tracking-tight mb-1">
            Start with one direction.
          </h3>
          <p className="text-xs text-slate-600 max-w-[270px] leading-relaxed mb-4">
            Your goals give you focus. Choose what matters most to you.
          </p>

          <button
            onClick={onDefineGoal}
            className="px-6 py-2.5 rounded-full bg-[#FFDE70] hover:bg-[#ffd757] text-[#173B64] font-bold text-xs sm:text-sm shadow-sm hover:shadow active:scale-[0.98] transition-all flex items-center gap-1.5"
          >
            <Plus className="w-4 h-4 stroke-[2.5]" />
            <span>Define First Goal</span>
          </button>
        </div>

        {/* 4. Life Balance Section */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <div>
              <h4 className="text-base font-bold text-[#173B64] leading-tight">Life Balance</h4>
              <p className="text-[10px] text-slate-500">
                Based on your completed activities • Tap for overview
              </p>
            </div>
            <button className="text-xs font-bold text-[#173B64] flex items-center gap-0.5 hover:underline">
              <span>Overview</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Time Filter Pills: Weekly, Monthly, Annually, All Time */}
          <div className="flex items-center gap-1.5 my-2.5 overflow-x-auto no-scrollbar">
            {(['Weekly', 'Monthly', 'Annually', 'All Time'] as const).map((tab) => {
              const isActive = selectedTimeRange === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setSelectedTimeRange(tab)}
                  className={`px-3 py-1 rounded-full text-[11px] font-semibold transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-[#173B64] text-white shadow-xs font-bold'
                      : 'bg-white/90 text-slate-600 border border-slate-200/60 hover:bg-white'
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          {/* Life Balance Pentagon Radar Card */}
          <div className="bg-white rounded-2xl p-3.5 border border-slate-200/60 shadow-xs flex items-center justify-between gap-3">
            {/* Pentagon Radar Chart SVG */}
            <div className="relative w-24 h-24 shrink-0 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {/* 5 concentric pentagons */}
                {[0.2, 0.4, 0.6, 0.8, 1.0].map((scale, sIdx) => {
                  const pts = [-90, -18, 54, 126, 198]
                    .map((deg) => {
                      const rad = (deg * Math.PI) / 180;
                      const r = 40 * scale;
                      return `${50 + r * Math.cos(rad)},${50 + r * Math.sin(rad)}`;
                    })
                    .join(' ');
                  return (
                    <polygon
                      key={sIdx}
                      points={pts}
                      fill="none"
                      stroke="#A3C4EB"
                      strokeWidth={sIdx === 4 ? '1.5' : '1'}
                      opacity={sIdx === 4 ? 0.9 : 0.6}
                    />
                  );
                })}

                {/* Concentric colored central circles/dots (representing starting 0% state) */}
                <circle cx="50" cy="50" r="9" fill="#FFDE70" opacity="0.6" />
                <circle cx="48" cy="48" r="5" fill="#2563EB" />
                <circle cx="52" cy="48" r="4.5" fill="#F97316" />
                <circle cx="52" cy="52" r="4" fill="#10B981" />
                <circle cx="47" cy="52" r="4" fill="#6366F1" />
                <circle cx="50" cy="50" r="3" fill="#A855F7" />
              </svg>
            </div>

            {/* Domains Legend List */}
            <div className="flex-1 space-y-1 text-[11px]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
                  <span className="font-semibold text-slate-700">Academic</span>
                </div>
                <span className="text-slate-500 font-medium tabular-nums">0%</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#F97316]" />
                  <span className="font-semibold text-slate-700">Career</span>
                </div>
                <span className="text-slate-500 font-medium tabular-nums">0%</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                  <span className="font-semibold text-slate-700">Social & Organization</span>
                </div>
                <span className="text-slate-500 font-medium tabular-nums">0%</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#6366F1]" />
                  <span className="font-semibold text-slate-700">Well-being</span>
                </div>
                <span className="text-slate-500 font-medium tabular-nums">0%</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#A855F7]" />
                  <span className="font-semibold text-slate-700">Personal Growth</span>
                </div>
                <span className="text-slate-500 font-medium tabular-nums">0%</span>
              </div>
            </div>
          </div>
        </div>

        {/* 5. Today Section */}
        <div className="pb-1">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-base font-bold text-[#173B64]">Today</h4>
            <span className="text-xs text-slate-500 font-medium">See all (0)</span>
          </div>

          <div className="bg-white rounded-2xl p-3.5 border border-slate-200/60 shadow-xs flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#E8F1FC] flex items-center justify-center text-[#173B64]">
                <Calendar className="w-4 h-4 stroke-[2.2]" />
              </div>
              <span className="text-xs font-bold text-[#173B64]">
                No activities scheduled for today.
              </span>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </div>
        </div>

      </div>

      {/* 6. Bottom Navigation Bar */}
      <div className="relative z-20 bg-white/95 backdrop-blur-md border-t border-slate-200/70 pt-2 pb-2 px-3 flex flex-col">
        <div className="flex items-center justify-around">
          
          {/* Home Tab (Active) */}
          <button
            onClick={() => setActiveBottomTab('Home')}
            className={`flex flex-col items-center gap-0.5 ${
              activeBottomTab === 'Home' ? 'text-[#173B64] font-bold' : 'text-slate-400'
            }`}
          >
            <div
              className={`px-3 py-1 rounded-full transition-colors ${
                activeBottomTab === 'Home' ? 'bg-[#A3C4EB]/35 text-[#173B64]' : ''
              }`}
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
              </svg>
            </div>
            <span className="text-[10px]">Home</span>
          </button>

          {/* Goals Tab */}
          <button
            onClick={() => setActiveBottomTab('Goals')}
            className={`flex flex-col items-center gap-0.5 ${
              activeBottomTab === 'Goals' ? 'text-[#173B64] font-bold' : 'text-slate-400'
            }`}
          >
            <div className="p-1">
              <Flag className="w-5 h-5 stroke-[2]" />
            </div>
            <span className="text-[10px]">Goals</span>
          </button>

          {/* Activities Tab */}
          <button
            onClick={() => setActiveBottomTab('Activities')}
            className={`flex flex-col items-center gap-0.5 ${
              activeBottomTab === 'Activities' ? 'text-[#173B64] font-bold' : 'text-slate-400'
            }`}
          >
            <div className="p-1">
              <Calendar className="w-5 h-5 stroke-[2]" />
            </div>
            <span className="text-[10px]">Activities</span>
          </button>

          {/* AI Tab */}
          <button
            onClick={() => setActiveBottomTab('AI')}
            className={`flex flex-col items-center gap-0.5 ${
              activeBottomTab === 'AI' ? 'text-[#173B64] font-bold' : 'text-slate-400'
            }`}
          >
            <div className="p-1">
              <Scan className="w-5 h-5 stroke-[2]" />
            </div>
            <span className="text-[10px]">AI</span>
          </button>

          {/* Profile Tab */}
          <button
            onClick={() => setActiveBottomTab('Profile')}
            className={`flex flex-col items-center gap-0.5 ${
              activeBottomTab === 'Profile' ? 'text-[#173B64] font-bold' : 'text-slate-400'
            }`}
          >
            <div className="p-1">
              <User className="w-5 h-5 stroke-[2]" />
            </div>
            <span className="text-[10px]">Profile</span>
          </button>

        </div>

        {/* Android Navigation Home Bar */}
        <div className="w-28 h-1 bg-slate-800 rounded-full mx-auto mt-2" />
      </div>

    </div>
  );
};
