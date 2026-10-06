import React, { useState } from 'react';
import { X, Compass, Target, Activity, Sparkles, PieChart, CheckCircle2, Plus, Clock, ChevronRight } from 'lucide-react';
import { SAMPLE_GOALS, SAMPLE_ACTIVITIES, LIFE_DOMAINS_DATA } from '../data/mockData';
import { Goal, Activity as ActivityType } from '../types';
import { PolarisPhoneMockup } from './PolarisPhoneMockup';

interface PrototypeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrototypeModal: React.FC<PrototypeModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'today' | 'goals' | 'log' | 'ai' | 'radar'>('today');
  const [goals, setGoals] = useState<Goal[]>(SAMPLE_GOALS);
  const [activities, setActivities] = useState<ActivityType[]>(SAMPLE_ACTIVITIES);

  // New activity form inside simulator
  const [newActTitle, setNewActTitle] = useState('');
  const [selectedGoalTitle, setSelectedGoalTitle] = useState(SAMPLE_GOALS[0].title);
  const [newDuration, setNewDuration] = useState('30 mins');
  const [showSavedFeedback, setShowSavedFeedback] = useState(false);

  if (!isOpen) return null;

  const handleAddActivity = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newActTitle.trim()) return;

    const matchedGoal = goals.find((g) => g.title === selectedGoalTitle) || goals[0];
    const newAct: ActivityType = {
      id: `act-${Date.now()}`,
      title: newActTitle,
      domain: matchedGoal.domain,
      duration: newDuration,
      date: 'Just now',
      goalTitle: matchedGoal.title,
      status: 'Completed',
    };

    setActivities([newAct, ...activities]);
    // Increment goal activities count
    setGoals(
      goals.map((g) =>
        g.title === matchedGoal.title
          ? { ...g, linkedActivitiesCount: g.linkedActivitiesCount + 1, progress: Math.min(100, g.progress + 4) }
          : g
      )
    );

    setNewActTitle('');
    setShowSavedFeedback(true);
    setTimeout(() => {
      setShowSavedFeedback(false);
      setActiveTab('today');
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white dark:bg-[#13263B] w-full max-w-4xl rounded-3xl p-4 sm:p-6 shadow-2xl border border-[#A3C4EB]/40 dark:border-slate-700 relative max-h-[95vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[#173B64] text-[#FFDE70] flex items-center justify-center">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-[#173B64] dark:text-[#F6FAFF]">
                Polaris Interactive Prototype
              </h3>
              <span className="text-[11px] text-slate-400">
                Functional Competition Sandbox · Click tabs and test logging
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Close prototype"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Prototype Body: Side Controls + Mobile Chassis */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-4 overflow-y-auto">
          
          {/* Left Guide Panel (4 cols on desktop) */}
          <div className="md:col-span-4 text-left space-y-4 hidden md:block">
            <div className="p-4 rounded-2xl bg-[#F6FAFF] dark:bg-[#0D1B2A] border border-[#A3C4EB]/30">
              <span className="text-[10px] uppercase font-bold text-slate-400">Prototype Walkthrough</span>
              <h4 className="text-sm font-bold text-[#173B64] dark:text-[#F6FAFF] mt-1 mb-2">
                How to test the ecosystem:
              </h4>
              <ol className="text-xs text-slate-600 dark:text-slate-300 space-y-2 list-decimal list-inside leading-relaxed">
                <li>
                  <strong>Today:</strong> Inspect active priority goal and recent linked actions.
                </li>
                <li>
                  <strong>Log Action:</strong> Type an activity (e.g. &ldquo;Study for test&rdquo;) and link to a goal.
                </li>
                <li>
                  <strong>Goals:</strong> See progress bar update immediately.
                </li>
                <li>
                  <strong>Reflect:</strong> Test AI assistant contextual response.
                </li>
              </ol>
            </div>

            <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 text-[11px] text-amber-900 dark:text-amber-200 leading-snug">
              <strong>Notice:</strong> This live prototype runs client-side in memory for the Technology Appropriate Use Competition.
            </div>
          </div>

          {/* Right Mobile Device Simulator (8 cols) */}
          <div className="md:col-span-8 flex justify-center">
            
            {/* Phone Chassis */}
            <div className="w-[320px] sm:w-[350px] bg-slate-900 rounded-[44px] p-3 shadow-2xl border-4 border-slate-800">
              {/* Dynamic Island */}
              <div className="mx-auto w-24 h-4 bg-slate-950 rounded-full mb-2 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-800 mr-2" />
                <div className="w-2 h-2 rounded-full bg-slate-900" />
              </div>

              {/* Screen Area */}
              <div className="w-full h-[520px] bg-[#F6FAFF] dark:bg-[#0D1B2A] rounded-[36px] overflow-hidden flex flex-col justify-between text-left text-slate-800 dark:text-slate-100">
                
                {/* Screen Scrollable View */}
                <div className="flex-1 p-4 overflow-y-auto">
                  
                  {/* TAB 1: TODAY */}
                  {activeTab === 'today' && (
                    <div className="-m-4 h-[470px] overflow-hidden animate-in fade-in duration-150">
                      <PolarisPhoneMockup onDefineGoal={() => setActiveTab('log')} />
                    </div>
                  )}

                  {/* TAB 2: GOALS */}
                  {activeTab === 'goals' && (
                    <div className="space-y-3 animate-in fade-in duration-150">
                      <div className="flex justify-between items-center text-xs pb-1 border-b border-slate-200 dark:border-slate-800">
                        <span className="font-bold text-[#173B64] dark:text-[#F6FAFF]">Active Goals (5 Domains)</span>
                        <span className="text-[10px] text-slate-400">All On Track</span>
                      </div>

                      <div className="space-y-2">
                        {goals.map((g) => (
                          <div
                            key={g.id}
                            className="p-3 rounded-2xl bg-white dark:bg-[#13263B] border border-[#A3C4EB]/30 dark:border-slate-800 text-xs"
                          >
                            <div className="flex justify-between items-start mb-1">
                              <div>
                                <span className="text-[9px] uppercase font-bold text-slate-400">
                                  {g.domain}
                                </span>
                                <h5 className="font-bold text-[#173B64] dark:text-[#F6FAFF] leading-snug">
                                  {g.title}
                                </h5>
                              </div>
                              <span className="font-bold text-[#173B64] dark:text-[#FFDE70] text-xs tabular-nums">
                                {g.progress}%
                              </span>
                            </div>

                            <div className="w-full bg-slate-100 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden mt-1.5 mb-2">
                              <div
                                className="bg-[#173B64] dark:bg-[#FFDE70] h-full rounded-full transition-all"
                                style={{ width: `${g.progress}%` }}
                              />
                            </div>

                            <div className="flex justify-between text-[10px] text-slate-400">
                              <span>{g.linkedActivitiesCount} linked actions</span>
                              <span>Target: {g.deadline}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* TAB 3: LOG ACTIVITY */}
                  {activeTab === 'log' && (
                    <div className="animate-in fade-in duration-150">
                      <div className="text-xs font-bold text-[#173B64] dark:text-[#F6FAFF] pb-2 border-b border-slate-200 dark:border-slate-800 mb-3">
                        Log Connected Activity
                      </div>

                      {showSavedFeedback && (
                        <div className="p-3 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-300 text-xs font-bold mb-3 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4" /> Action connected & goal progress updated!
                        </div>
                      )}

                      <form onSubmit={handleAddActivity} className="space-y-3 text-xs">
                        <div>
                          <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">
                            Activity Title *
                          </label>
                          <input
                            type="text"
                            required
                            value={newActTitle}
                            onChange={(e) => setNewActTitle(e.target.value)}
                            placeholder="e.g. Reviewed 3 literature papers"
                            className="w-full rounded-xl p-2.5 bg-white dark:bg-[#13263B] border border-slate-200 dark:border-slate-700 text-xs"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">
                            Link To Life Goal *
                          </label>
                          <select
                            value={selectedGoalTitle}
                            onChange={(e) => setSelectedGoalTitle(e.target.value)}
                            className="w-full rounded-xl p-2.5 bg-white dark:bg-[#13263B] border border-slate-200 dark:border-slate-700 text-xs"
                          >
                            {goals.map((g) => (
                              <option key={g.id} value={g.title}>
                                [{g.domain}] {g.title}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">
                            Duration
                          </label>
                          <select
                            value={newDuration}
                            onChange={(e) => setNewDuration(e.target.value)}
                            className="w-full rounded-xl p-2.5 bg-white dark:bg-[#13263B] border border-slate-200 dark:border-slate-700 text-xs"
                          >
                            <option value="25 mins (Pomodoro)">25 mins (Pomodoro focus)</option>
                            <option value="45 mins">45 mins</option>
                            <option value="1 hr 15 mins">1 hr 15 mins</option>
                            <option value="2 hrs">2 hrs deep work</option>
                          </select>
                        </div>

                        <button
                          type="submit"
                          className="w-full py-2.5 rounded-xl bg-[#FFDE70] text-[#173B64] font-bold text-xs hover:bg-[#ffd757] transition-all"
                        >
                          Save Connected Activity
                        </button>
                      </form>
                    </div>
                  )}

                  {/* TAB 4: AI REFLECTION */}
                  {activeTab === 'ai' && (
                    <div className="space-y-3 animate-in fade-in duration-150 text-xs">
                      <div className="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800">
                        <span className="font-bold text-[#173B64] dark:text-[#FFDE70] flex items-center gap-1">
                          <Sparkles className="w-3.5 h-3.5" /> AI Reflection Session
                        </span>
                        <span className="text-[10px] text-slate-400">Contextual</span>
                      </div>

                      <div className="p-3 rounded-2xl bg-white dark:bg-[#13263B] border border-[#A3C4EB]/30 leading-relaxed text-slate-700 dark:text-slate-200">
                        “You’ve successfully logged {activities.length} activities this week. Your primary momentum is in Academics (84%) and Career (72%). Would you like to schedule 30m for your reading goal on Saturday?”
                      </div>

                      <div className="p-2.5 rounded-xl bg-[#F6FAFF] dark:bg-[#0D1B2A] border border-[#A3C4EB]/20 text-[11px]">
                        <strong>Manageable Next Step:</strong> Review 2 user quotes tomorrow morning at 10:00 AM.
                      </div>
                    </div>
                  )}

                  {/* TAB 5: RADAR BALANCE */}
                  {activeTab === 'radar' && (
                    <div className="space-y-3 animate-in fade-in duration-150 text-xs">
                      <div className="font-bold text-[#173B64] dark:text-[#F6FAFF] pb-1 border-b border-slate-200 dark:border-slate-800">
                        5-Domain Life Distribution
                      </div>

                      <div className="space-y-2">
                        {LIFE_DOMAINS_DATA.map((d) => (
                          <div key={d.id} className="p-2.5 rounded-xl bg-white dark:bg-[#13263B] border border-slate-100 dark:border-slate-800">
                            <div className="flex justify-between items-center mb-1">
                              <span className="font-semibold">{d.name}</span>
                              <span className="font-bold text-[#173B64] dark:text-[#FFDE70]">{d.score}%</span>
                            </div>
                            <div className="w-full bg-slate-100 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                              <div
                                className="bg-[#173B64] dark:bg-[#FFDE70] h-full"
                                style={{ width: `${d.score}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="text-[10px] text-slate-400 italic text-center">
                        *Visualizes user-entered activities and progress indicators.
                      </div>
                    </div>
                  )}

                </div>

                {/* Bottom App Navigation Mockup */}
                <div className="p-2 border-t border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-[#13263B]/70 flex justify-around text-[10px] text-slate-400">
                  <button
                    onClick={() => setActiveTab('today')}
                    className={`flex flex-col items-center ${activeTab === 'today' ? 'text-[#173B64] dark:text-[#FFDE70] font-bold' : ''}`}
                  >
                    <Compass className="w-4 h-4" />
                    <span>Today</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('goals')}
                    className={`flex flex-col items-center ${activeTab === 'goals' ? 'text-[#173B64] dark:text-[#FFDE70] font-bold' : ''}`}
                  >
                    <Target className="w-4 h-4" />
                    <span>Goals</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('log')}
                    className={`flex flex-col items-center ${activeTab === 'log' ? 'text-[#173B64] dark:text-[#FFDE70] font-bold' : ''}`}
                  >
                    <Plus className="w-4 h-4" />
                    <span>Log</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('ai')}
                    className={`flex flex-col items-center ${activeTab === 'ai' ? 'text-[#173B64] dark:text-[#FFDE70] font-bold' : ''}`}
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Reflect</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('radar')}
                    className={`flex flex-col items-center ${activeTab === 'radar' ? 'text-[#173B64] dark:text-[#FFDE70] font-bold' : ''}`}
                  >
                    <PieChart className="w-4 h-4" />
                    <span>Radar</span>
                  </button>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
