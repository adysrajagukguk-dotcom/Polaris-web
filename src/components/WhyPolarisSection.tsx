import React from 'react';
import { Check, Compass, ArrowRight, HelpCircle, CheckCircle2 } from 'lucide-react';

export const WhyPolarisSection: React.FC = () => {
  const comparisonItems = [
    {
      category: 'Primary Organizing Unit',
      traditional: 'Isolated Tasks (e.g. "Submit report", "Reply email")',
      polaris: 'Hierarchical Life Goals with Connected Activities',
    },
    {
      category: 'Driving Metric',
      traditional: 'Binary Completion (checked off vs. unchecked)',
      polaris: 'Intentional Progress & Life Domain Balance',
    },
    {
      category: 'Temporal Horizon',
      traditional: 'Immediate Short-Term (Today’s urgent fires)',
      polaris: 'Long-Term Trajectory shaped by Daily Actions',
    },
    {
      category: 'Mental Context',
      traditional: 'Reactive guilt when tasks carry over to tomorrow',
      polaris: 'Non-judgmental weekly reflection & domain awareness',
    },
    {
      category: 'Next Step Formulation',
      traditional: 'An intimidating endless backlog of 40+ to-dos',
      polaris: 'One clearly defined, manageable 25–45 min action',
    },
  ];

  return (
    <section id="why-polaris-comparison" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs uppercase tracking-widest font-bold text-slate-500 dark:text-slate-400 mb-3">
            Philosophical Shift
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#173B64] dark:text-[#F6FAFF] tracking-tight leading-tight mb-4">
            Productivity Tells You What to Do.<br />Polaris Helps You Understand Why.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Traditional task managers excel at capturing urgent errands. Polaris complements your workflow by making sure your effort builds toward the future you actually desire.
          </p>
        </div>

        {/* Side-by-Side Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-14">
          
          {/* Card 1: Traditional To-Do Lists */}
          <div className="p-8 rounded-3xl bg-white dark:bg-[#13263B] border border-slate-200 dark:border-slate-800 text-left shadow-xs">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100 dark:border-slate-800">
              <div>
                <span className="text-xs font-semibold text-slate-400 uppercase">Standard Approach</span>
                <h3 className="text-xl font-bold text-slate-700 dark:text-slate-200">Traditional To-Do Lists</h3>
              </div>
              <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 flex items-center justify-center font-bold text-xs">
                VS
              </div>
            </div>

            <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-300 mb-6">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                <div>
                  <strong className="text-slate-800 dark:text-slate-200 block">Isolated Tasks:</strong>
                  Focuses on checking boxes off a list, regardless of whether they matter.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                <div>
                  <strong className="text-slate-800 dark:text-slate-200 block">Short-Term Urgency:</strong>
                  Prioritizes whatever is loudest today over what is strategically important.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                <div>
                  <strong className="text-slate-800 dark:text-slate-200 block">Unseen Imbalance:</strong>
                  Gives no warning when 100% of your time is spent on academics while health suffers.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                <div>
                  <strong className="text-slate-800 dark:text-slate-200 block">Task Backlog Fatigue:</strong>
                  Accumulates dozens of uncompleted items, generating quiet student anxiety.
                </div>
              </li>
            </ul>

            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 text-xs text-slate-500">
              Helpful for quick groceries and simple chores, but insufficient for multi-year ambitions.
            </div>
          </div>

          {/* Card 2: Polaris Ecosystem */}
          <div className="p-8 rounded-3xl bg-white dark:bg-[#13263B] border-2 border-[#173B64] dark:border-[#FFDE70] text-left shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#FFDE70] text-[#173B64] text-[10px] font-extrabold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
              Direction-First
            </div>

            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100 dark:border-slate-800">
              <div>
                <span className="text-xs font-semibold text-[#173B64] dark:text-[#FFDE70] uppercase">The Polaris Model</span>
                <h3 className="text-xl font-bold text-[#173B64] dark:text-[#F6FAFF]">POLARIS Life Ecosystem</h3>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#173B64] text-[#FFDE70] flex items-center justify-center">
                <Compass className="w-4 h-4" />
              </div>
            </div>

            <ul className="space-y-4 text-sm text-slate-700 dark:text-slate-200 mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-1 shrink-0" />
                <div>
                  <strong className="text-[#173B64] dark:text-[#F6FAFF] block">Connected Actions:</strong>
                  Every logged hour is tied to a specific milestone across your 5 life domains.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-1 shrink-0" />
                <div>
                  <strong className="text-[#173B64] dark:text-[#F6FAFF] block">Holistic Radar Balance:</strong>
                  Instantly visualizes if Career, Academics, or Well-being are being neglected.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-1 shrink-0" />
                <div>
                  <strong className="text-[#173B64] dark:text-[#F6FAFF] block">Reflective Insights:</strong>
                  Encourages weekly check-ins to celebrate real progress rather than counting checked boxes.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-1 shrink-0" />
                <div>
                  <strong className="text-[#173B64] dark:text-[#F6FAFF] block">Manageable Next Steps:</strong>
                  Breaks lofty aspirations into one bite-sized, scheduled session for tomorrow.
                </div>
              </li>
            </ul>

            <div className="p-3 rounded-xl bg-[#F6FAFF] dark:bg-[#0D1B2A] text-xs text-[#173B64] dark:text-[#A3C4EB] font-medium border border-[#A3C4EB]/30">
              Designed around clarity and calm progress, so you build the life you want with intention.
            </div>
          </div>

        </div>

        {/* Detailed Criteria Row */}
        <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#13263B] text-left">
          <div className="grid grid-cols-12 bg-[#F6FAFF] dark:bg-[#0D1B2A] p-4 text-xs font-bold text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800">
            <div className="col-span-4">Evaluation Dimension</div>
            <div className="col-span-4">Standard Task List</div>
            <div className="col-span-4 text-[#173B64] dark:text-[#FFDE70]">Polaris Ecosystem</div>
          </div>

          {comparisonItems.map((item, idx) => (
            <div
              key={item.category}
              className={`grid grid-cols-12 p-4 text-xs ${
                idx % 2 === 0 ? 'bg-transparent' : 'bg-slate-50/50 dark:bg-slate-900/30'
              } border-b border-slate-100 dark:border-slate-800/60 items-center`}
            >
              <div className="col-span-4 font-semibold text-slate-800 dark:text-slate-200">
                {item.category}
              </div>
              <div className="col-span-4 text-slate-500 dark:text-slate-400">
                {item.traditional}
              </div>
              <div className="col-span-4 font-bold text-[#173B64] dark:text-[#FFDE70]">
                {item.polaris}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
