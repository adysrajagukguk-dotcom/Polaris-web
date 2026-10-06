import React, { useState } from 'react';
import { Watch, Bell, Shield, CheckCircle, Clock, Battery, Wifi, Sparkles, AlertTriangle } from 'lucide-react';

export const WearableSection: React.FC = () => {
  const [activeWatchScreen, setActiveWatchScreen] = useState<'focus' | 'checkin' | 'sos' | 'activity'>('focus');

  return (
    <section id="wearable" className="py-20 md:py-28 bg-[#173B64] text-[#F6FAFF] relative overflow-hidden">
      {/* Subtle cosmic background grid and light bleed */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#FFDE70] rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#A3C4EB] rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          {/* Concept Prototype Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFDE70]/20 border border-[#FFDE70]/40 text-xs font-bold text-[#FFDE70] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#FFDE70] animate-ping" />
            <span>CONCEPT PROTOTYPE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            Your Direction, At a Glance.
          </h2>

          <p className="text-base sm:text-lg text-[#A3C4EB] leading-relaxed max-w-2xl mx-auto">
            The Polaris wearable concept brings your most important reminders closer to you—without requiring you to constantly check your phone.
          </p>
        </div>

        {/* Wearable Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-12">
          
          {/* Left: Smartwatch Realistic Mockup (6 cols) */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            
            {/* Watch Hardware Frame */}
            <div className="relative flex items-center justify-center pt-6 pb-8">
              {/* Watch Strap (Top & Bottom) */}
              <div className="absolute top-0 w-28 sm:w-32 h-12 bg-slate-800 rounded-t-3xl border-t-2 border-slate-700/60 shadow-inner -z-10" />
              <div className="absolute bottom-1 w-28 sm:w-32 h-12 bg-slate-800 rounded-b-3xl border-b-2 border-slate-700/60 shadow-inner -z-10" />

              {/* Watch Bezel Case */}
              <div className="relative z-10 w-72 h-84 sm:w-80 sm:h-92 bg-slate-900 rounded-[52px] p-4 shadow-2xl border-4 border-slate-700/80 ring-8 ring-slate-950/40">
                {/* Crown Button on right */}
                <div className="absolute -right-3 top-28 w-3 h-10 bg-slate-700 rounded-r-md border border-slate-600 shadow-sm" />
                <div className="absolute -right-2 top-44 w-2 h-7 bg-slate-700 rounded-r-xs border border-slate-600 shadow-sm" />

                {/* Watch OLED Screen Display */}
                <div className="w-full h-full bg-black rounded-[40px] p-5 flex flex-col justify-between text-left border border-slate-800 relative overflow-hidden select-none">
                  
                  {/* Top Status Indicators */}
                  <div className="flex items-center justify-between text-[11px] text-slate-400 font-semibold pt-1">
                    <span className="text-[#FFDE70] font-bold">18:00</span>
                    <div className="flex items-center gap-1.5 text-[10px]">
                      <Wifi className="w-3 h-3 text-[#A3C4EB]" />
                      <Battery className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                  </div>

                  {/* Active Watch Face View */}
                  <div className="my-auto py-2">
                    {activeWatchScreen === 'focus' && (
                      <div className="animate-in fade-in duration-200">
                        <div className="text-[10px] uppercase font-bold text-[#FFDE70] tracking-wider mb-1 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FFDE70]" />
                          Focus Today
                        </div>
                        <h4 className="text-base font-extrabold text-white leading-tight mb-2">
                          Finish UI/UX Case Study
                        </h4>
                        <div className="flex items-center gap-2 text-xs text-slate-300 mb-3">
                          <Clock className="w-3.5 h-3.5 text-[#A3C4EB]" />
                          <span>Target: 6:00 PM</span>
                        </div>
                        <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-[#FFDE70] h-full w-[72%]" />
                        </div>
                        <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                          <span>Career Domain</span>
                          <span className="text-[#FFDE70]">72%</span>
                        </div>
                      </div>
                    )}

                    {activeWatchScreen === 'checkin' && (
                      <div className="animate-in fade-in duration-200">
                        <div className="text-[10px] uppercase font-bold text-[#A3C4EB] tracking-wider mb-1 flex items-center gap-1">
                          <CheckCircle className="w-3 h-3 text-emerald-400" />
                          Quick Check-In
                        </div>
                        <h4 className="text-sm font-bold text-white mb-2">
                          Completed 30m reading?
                        </h4>
                        <div className="flex gap-2 mt-3">
                          <button
                            onClick={() => setActiveWatchScreen('focus')}
                            className="flex-1 py-1.5 rounded-lg bg-emerald-500 text-slate-950 font-extrabold text-xs text-center"
                          >
                            Yes, Log
                          </button>
                          <button
                            onClick={() => setActiveWatchScreen('focus')}
                            className="flex-1 py-1.5 rounded-lg bg-slate-800 text-slate-300 font-semibold text-xs text-center"
                          >
                            Later
                          </button>
                        </div>
                      </div>
                    )}

                    {activeWatchScreen === 'activity' && (
                      <div className="animate-in fade-in duration-200">
                        <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1">
                          Upcoming Activity
                        </div>
                        <h4 className="text-sm font-bold text-white mb-1">
                          Capstone Project Defense Sync
                        </h4>
                        <p className="text-xs text-[#A3C4EB] mb-2">In 45 minutes · Lab 304</p>
                        <div className="text-[10px] text-slate-400">
                          Domain: Academic (84% on track)
                        </div>
                      </div>
                    )}

                    {activeWatchScreen === 'sos' && (
                      <div className="animate-in fade-in duration-200">
                        <div className="text-[10px] uppercase font-bold text-rose-400 tracking-wider mb-1 flex items-center gap-1">
                          <Shield className="w-3 h-3" />
                          Trusted Safety Check
                        </div>
                        <h4 className="text-xs font-bold text-white mb-2">
                          Notify Trusted Emergency Contact?
                        </h4>
                        <div className="p-2 rounded-lg bg-rose-950/60 border border-rose-800 text-[10px] text-rose-200 mb-2">
                          Concept feature: Sends current location & status to designated contact.
                        </div>
                        <div className="text-[9px] text-slate-400">
                          Hold 3s to trigger signal
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Watch Bottom Mini Navigation */}
                  <div className="flex justify-around pt-2 border-t border-slate-900 text-[10px]">
                    <span className="text-[#FFDE70] font-bold">Polaris OS</span>
                    <span className="text-slate-500">v0.9 Preview</span>
                  </div>

                </div>
              </div>
            </div>

            {/* Interactive Screen Toggles */}
            <div className="flex flex-wrap gap-2 justify-center mt-8 sm:mt-10 relative z-20">
              <button
                onClick={() => setActiveWatchScreen('focus')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeWatchScreen === 'focus'
                    ? 'bg-[#FFDE70] text-[#173B64]'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                Today&apos;s Focus
              </button>
              <button
                onClick={() => setActiveWatchScreen('checkin')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeWatchScreen === 'checkin'
                    ? 'bg-[#FFDE70] text-[#173B64]'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                Quick Check-in
              </button>
              <button
                onClick={() => setActiveWatchScreen('activity')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeWatchScreen === 'activity'
                    ? 'bg-[#FFDE70] text-[#173B64]'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                Upcoming Activity
              </button>
              <button
                onClick={() => setActiveWatchScreen('sos')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeWatchScreen === 'sos'
                    ? 'bg-rose-500 text-white'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                Trusted SOS Shortcut
              </button>
            </div>
          </div>

          {/* Right: Feature Descriptions & Design Intent (6 cols) */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-2">
                Glanceable Focus, Minimal Distraction
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Smartphones are double-edged: you open your screen to check a task, and you end up scrolling social media for 40 minutes. The Polaris wearable keeps your daily compass visible in under 2 seconds.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-[#FFDE70]/20 text-[#FFDE70] flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Targeted Goal Reminders</h4>
                  <p className="text-xs text-slate-300 leading-relaxed mt-0.5">
                    Gentle haptic pulses remind you of your primary priority window for the afternoon.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-[#FFDE70]/20 text-[#FFDE70] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">One-Tap Activity Check-In</h4>
                  <p className="text-xs text-slate-300 leading-relaxed mt-0.5">
                    Confirm finished study sessions or restorative breaks with a single tap, syncing straight to your daily log.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-[#FFDE70]/20 text-[#FFDE70] flex items-center justify-center shrink-0 mt-0.5">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Trusted Contact Safety Shortcut</h4>
                  <p className="text-xs text-slate-300 leading-relaxed mt-0.5">
                    A quick shortcut to notify designated friends or emergency contacts if traveling late after study groups.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Mandatory Product Honesty Note */}
        <div className="max-w-3xl mx-auto p-4 rounded-xl bg-slate-900/80 border border-slate-700/80 text-xs text-slate-300 flex items-start gap-3 text-left">
          <AlertTriangle className="w-4 h-4 text-[#FFDE70] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-[#FFDE70]">Product Honesty & Technical Notice: </strong>
            Wearable capabilities shown here represent the current prototype concept. Standalone calling and advanced integrations require compatible hardware, connectivity, and technical validation.
          </p>
        </div>

      </div>
    </section>
  );
};
