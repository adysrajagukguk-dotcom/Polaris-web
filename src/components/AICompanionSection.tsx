import React, { useState } from 'react';
import { Sparkles, MessageSquare, Compass, ShieldAlert, Send, Bot, User, Check, ArrowRight } from 'lucide-react';
import { AIMode } from '../types';

export const AICompanionSection: React.FC = () => {
  const [activeMode, setActiveMode] = useState<AIMode>('recommendations');
  const [simulatedInput, setSimulatedInput] = useState('');
  const [chatMessages, setChatMessages] = useState<Array<{ sender: 'ai' | 'user'; text: string; time: string }>>([
    {
      sender: 'ai',
      text: "Hello Alex. I've reviewed your logged activities across your 5 domains this week. How would you like to reflect today?",
      time: '9:15 PM',
    },
    {
      sender: 'user',
      text: 'I feel like I spent the entire week on lab reports and neglected my UI/UX portfolio.',
      time: '9:16 PM',
    },
    {
      sender: 'ai',
      text: "You’ve focused heavily on academics this week, advancing your capstone to 84%. That was meaningful progress, not wasted time. If it fits your energy tomorrow, would you like to set aside an unhurried 30 minutes to review your design user quotes?",
      time: '9:16 PM',
    },
  ]);

  const handleSelectMode = (mode: AIMode) => {
    setActiveMode(mode);
    if (mode === 'recommendations') {
      setChatMessages([
        {
          sender: 'ai',
          text: "Here is your contextual recommendation based on this week's logged activities:",
          time: '9:10 PM',
        },
        {
          sender: 'ai',
          text: "“You’ve focused on academics this week. If it fits your priorities, consider setting aside 30 minutes for your career portfolio tomorrow.”",
          time: '9:10 PM',
        },
      ]);
    } else if (mode === 'consultation') {
      setChatMessages([
        {
          sender: 'user',
          text: 'My final project feels overwhelming. Where should I even begin tomorrow morning?',
          time: '10:02 AM',
        },
        {
          sender: 'ai',
          text: "Let's isolate one manageable step. Rather than tackling 'Finish Chapter 4', your next smallest action could simply be: 'Write bullet points for user interview findings' (25 minutes). Does that feel reachable?",
          time: '10:03 AM',
        },
      ]);
    } else {
      setChatMessages([
        {
          sender: 'ai',
          text: "Polaris provides verified student support directories for when academic pressure, exhaustion, or distress feels heavy. Here are student counseling contacts:",
          time: '2:15 PM',
        },
        {
          sender: 'ai',
          text: "• Campus Student Counseling Center: counseling@polytechnic.ac.id\n• Sejiwa Hotline (Indonesia Mental Health Support): 119 ext. 8\n• Yayasan Pulih Crisis Support: +62 811-8436-633\n\nPlease reach out directly to licensed professionals when you need human support.",
          time: '2:15 PM',
        },
      ]);
    }
  };

  const handleQuickPrompt = (promptText: string) => {
    const userMsg = { sender: 'user' as const, text: promptText, time: 'Just now' };
    const replyText =
      activeMode === 'consultation'
        ? "That makes complete sense. Let's schedule that as a single 30-minute block linked to your Career goal so you can log it tomorrow."
        : "Noted. Polaris will keep this priority in mind during your next weekly reflection.";

    setChatMessages((prev) => [
      ...prev,
      userMsg,
      { sender: 'ai' as const, text: replyText, time: 'Just now' },
    ]);
  };

  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#FFDE70]/30 text-xs font-bold text-[#173B64] dark:text-[#FFDE70] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Intentional Guidance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#173B64] dark:text-[#F6FAFF] tracking-tight mb-4">
            Not Another AI That Tells You What to Do.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
            AI Companion membantu pengguna memperoleh saran yang relevan berdasarkan tujuan, aktivitas, prioritas, dan konteks yang diberikan — membimbing refleksi tanpa mengambil alih kendali hidupmu.
          </p>
        </div>

        {/* 3 Modes Segmented Control */}
        <div className="max-w-2xl mx-auto mb-10 flex p-1.5 bg-white dark:bg-[#13263B] rounded-2xl border border-[#A3C4EB]/30 dark:border-slate-800 shadow-xs">
          <button
            onClick={() => handleSelectMode('recommendations')}
            className={`flex-1 py-3 px-2 rounded-xl text-xs sm:text-sm font-bold transition-all text-center flex items-center justify-center gap-2 ${
              activeMode === 'recommendations'
                ? 'bg-[#173B64] text-[#FFDE70] shadow-sm'
                : 'text-slate-600 dark:text-slate-300 hover:text-[#173B64]'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Recommendations</span>
          </button>

          <button
            onClick={() => handleSelectMode('consultation')}
            className={`flex-1 py-3 px-2 rounded-xl text-xs sm:text-sm font-bold transition-all text-center flex items-center justify-center gap-2 ${
              activeMode === 'consultation'
                ? 'bg-[#173B64] text-[#FFDE70] shadow-sm'
                : 'text-slate-600 dark:text-slate-300 hover:text-[#173B64]'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>Quick Consultation</span>
          </button>

          <button
            onClick={() => handleSelectMode('support')}
            className={`flex-1 py-3 px-2 rounded-xl text-xs sm:text-sm font-bold transition-all text-center flex items-center justify-center gap-2 ${
              activeMode === 'support'
                ? 'bg-[#173B64] text-[#FFDE70] shadow-sm'
                : 'text-slate-600 dark:text-slate-300 hover:text-[#173B64]'
            }`}
          >
            <ShieldAlert className="w-4 h-4" />
            <span>Professional Support</span>
          </button>
        </div>

        {/* Interactive Chat Window & Mode Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Mode Context Description (4 cols) */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <div className="p-6 rounded-2xl bg-white dark:bg-[#13263B] border border-[#A3C4EB]/40 dark:border-slate-800 shadow-sm">
              <span className="text-xs font-bold uppercase text-slate-400">Current AI Mode</span>
              <h3 className="text-xl font-bold text-[#173B64] dark:text-[#F6FAFF] mt-1 mb-2 capitalize">
                {activeMode === 'recommendations' && 'Contextual Recommendations'}
                {activeMode === 'consultation' && 'Quick Consultation'}
                {activeMode === 'support' && 'Professional Support Directory'}
              </h3>
              
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                {activeMode === 'recommendations' &&
                  'Actionable suggestions tailored strictly to your own logged progress and active domains. Helps you notice blind spots without scolding.'}
                {activeMode === 'consultation' &&
                  'Short, focused dialogues to break daunting student milestones into one realistic 25-minute step for tomorrow.'}
                {activeMode === 'support' &&
                  'Direct pathways to verified professional counseling hotlines and university psychological services when life feels overwhelmed.'}
              </p>

              <div className="border-t border-slate-100 dark:border-slate-800 pt-3">
                <span className="text-[11px] font-semibold text-slate-400 block mb-2">Try sample prompt:</span>
                <div className="space-y-1.5">
                  {activeMode === 'recommendations' && (
                    <button
                      onClick={() => handleQuickPrompt("What should I focus on this weekend?")}
                      className="w-full text-left p-2 rounded-lg bg-[#F6FAFF] dark:bg-[#0D1B2A] text-xs text-[#173B64] dark:text-[#A3C4EB] hover:bg-[#FFDE70]/30 transition-colors font-medium flex items-center justify-between"
                    >
                      <span>&ldquo;What should I focus on this weekend?&rdquo;</span>
                      <ArrowRight className="w-3 h-3 shrink-0" />
                    </button>
                  )}
                  {activeMode === 'consultation' && (
                    <button
                      onClick={() => handleQuickPrompt("Break down my 15-page literature review.")}
                      className="w-full text-left p-2 rounded-lg bg-[#F6FAFF] dark:bg-[#0D1B2A] text-xs text-[#173B64] dark:text-[#A3C4EB] hover:bg-[#FFDE70]/30 transition-colors font-medium flex items-center justify-between"
                    >
                      <span>&ldquo;Break down my 15-page literature review.&rdquo;</span>
                      <ArrowRight className="w-3 h-3 shrink-0" />
                    </button>
                  )}
                  {activeMode === 'support' && (
                    <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-xs text-emerald-800 dark:text-emerald-400 font-medium">
                      All support contacts verified for Indonesian university students.
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Crucial Ethical AI Boundary */}
            <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/60 text-xs text-amber-900 dark:text-amber-200">
              <strong className="block font-bold mb-1">Ethical Boundary:</strong>
              Polaris AI is designed strictly as a reflective tool for self-awareness. It does not replace human agency, nor does it make unilateral scheduling decisions.
            </div>
          </div>

          {/* Interactive Chat Window (8 cols) */}
          <div className="lg:col-span-8">
            <div className="rounded-3xl bg-white dark:bg-[#13263B] border border-[#A3C4EB]/40 dark:border-slate-800 shadow-xl overflow-hidden flex flex-col h-[460px]">
              
              {/* Chat Header */}
              <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 bg-[#F6FAFF]/60 dark:bg-[#0D1B2A]/60 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#173B64] text-[#FFDE70] flex items-center justify-center">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#173B64] dark:text-[#F6FAFF]">Polaris Companion</h4>
                    <span className="text-[11px] text-slate-500">Reflective Student Assistant</span>
                  </div>
                </div>
                <span className="text-[11px] font-semibold text-slate-400">Prototype Demo</span>
              </div>

              {/* Message List */}
              <div className="flex-1 p-6 overflow-y-auto space-y-4 text-left">
                {chatMessages.map((msg, index) => {
                  const isAi = msg.sender === 'ai';
                  return (
                    <div
                      key={index}
                      className={`flex gap-3 max-w-[85%] ${isAi ? '' : 'ml-auto flex-row-reverse'}`}
                    >
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-xs font-bold ${
                          isAi
                            ? 'bg-[#173B64] text-[#FFDE70]'
                            : 'bg-[#A3C4EB] text-[#173B64]'
                        }`}
                      >
                        {isAi ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                      </div>
                      <div>
                        <div
                          className={`p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed whitespace-pre-line ${
                            isAi
                              ? 'bg-[#F6FAFF] dark:bg-[#0D1B2A] text-slate-800 dark:text-slate-200 border border-[#A3C4EB]/20 rounded-tl-xs'
                              : 'bg-[#173B64] text-white rounded-tr-xs'
                          }`}
                        >
                          {msg.text}
                        </div>
                        <span className="text-[10px] text-slate-400 mt-1 block px-1">
                          {msg.time}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Input Area */}
              <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-[#F6FAFF]/30 dark:bg-[#0D1B2A]/30 flex items-center gap-2">
                <input
                  type="text"
                  value={simulatedInput}
                  onChange={(e) => setSimulatedInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && simulatedInput.trim()) {
                      handleQuickPrompt(simulatedInput);
                      setSimulatedInput('');
                    }
                  }}
                  placeholder="Ask for advice on balancing this week's goals..."
                  className="flex-1 bg-white dark:bg-[#13263B] text-xs sm:text-sm rounded-xl px-4 py-2.5 border border-[#A3C4EB]/30 dark:border-slate-700 focus:outline-none focus:ring-1 focus:ring-[#173B64] dark:focus:ring-[#FFDE70] text-slate-800 dark:text-slate-100 placeholder:text-slate-400"
                />
                <button
                  onClick={() => {
                    if (simulatedInput.trim()) {
                      handleQuickPrompt(simulatedInput);
                      setSimulatedInput('');
                    }
                  }}
                  className="p-2.5 rounded-xl bg-[#173B64] text-[#FFDE70] hover:bg-[#122e4e] transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* Mandatory Explicit Disclaimer */}
        <div className="max-w-3xl mx-auto mt-8 p-4 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-center text-xs text-slate-600 dark:text-slate-300">
          <strong className="font-semibold text-red-600 dark:text-red-400">Important Disclaimer: </strong>
          Polaris AI is not a psychologist, does not diagnose mental-health conditions, and does not replace professional care.
        </div>

      </div>
    </section>
  );
};
