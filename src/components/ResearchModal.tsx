import React, { useState } from 'react';
import { X, CheckCircle2, Loader2, Sparkles, AlertCircle } from 'lucide-react';

interface ResearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResearchModal: React.FC<ResearchModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    institution: '',
    year: 'Year 2',
    major: '',
    primaryChallenge: 'Balancing academic assignments with career portfolio building',
    email: '',
    willingForInterview: true,
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.institution.trim()) {
      setErrorMessage('Please fill in your name, institution, and valid email.');
      return;
    }
    setErrorMessage('');
    setLoading(true);

    // Simulate submission delay
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white dark:bg-[#13263B] w-full max-w-lg rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#A3C4EB]/40 dark:border-slate-700 relative text-left max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center">
            <div className="w-16 h-16 rounded-2xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-[#173B64] dark:text-[#F6FAFF] mb-2">
              Thank You, {formData.name}!
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed mb-6">
              Your insights have been recorded for the Polaris research team. We will send an early access test link to <strong className="text-slate-800 dark:text-slate-200">{formData.email}</strong>.
            </p>
            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-xl font-bold text-sm bg-[#FFDE70] text-[#173B64] hover:bg-[#ffd757] transition-all"
            >
              Back to Overview
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-xs uppercase font-bold text-slate-400">PARTICIPATORY USER RESEARCH</span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#173B64] dark:text-[#F6FAFF] mt-1 mb-2">
                Join the Polaris Student Study
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Help us discover how polytechnic and university students prioritize daily actions against multi-year aspirations.
              </p>
            </div>

            {errorMessage && (
              <div className="mb-4 p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 text-xs text-rose-700 dark:text-rose-300 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Dian Sastro"
                  className="w-full text-xs sm:text-sm rounded-xl px-3.5 py-2.5 bg-[#F6FAFF] dark:bg-[#0D1B2A] border border-[#A3C4EB]/40 dark:border-slate-700 focus:outline-none focus:ring-1 focus:ring-[#173B64] dark:focus:ring-[#FFDE70] text-slate-800 dark:text-slate-100"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1">
                    Polytechnic / Campus *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.institution}
                    onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                    placeholder="e.g. Politeknik Astra / ITB"
                    className="w-full text-xs sm:text-sm rounded-xl px-3.5 py-2.5 bg-[#F6FAFF] dark:bg-[#0D1B2A] border border-[#A3C4EB]/40 dark:border-slate-700 focus:outline-none focus:ring-1 focus:ring-[#173B64] text-slate-800 dark:text-slate-100"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1">
                    Current Study Level
                  </label>
                  <select
                    value={formData.year}
                    onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                    className="w-full text-xs sm:text-sm rounded-xl px-3.5 py-2.5 bg-[#F6FAFF] dark:bg-[#0D1B2A] border border-[#A3C4EB]/40 dark:border-slate-700 focus:outline-none focus:ring-1 focus:ring-[#173B64] text-slate-800 dark:text-slate-100"
                  >
                    <option value="Year 1">Year 1 (Semester 1–2)</option>
                    <option value="Year 2">Year 2 (Semester 3–4)</option>
                    <option value="Year 3">Year 3 (Semester 5–6)</option>
                    <option value="Final Year">Final Year / Capstone</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1">
                  Primary Balancing Obstacle
                </label>
                <select
                  value={formData.primaryChallenge}
                  onChange={(e) => setFormData({ ...formData, primaryChallenge: e.target.value })}
                  className="w-full text-xs sm:text-sm rounded-xl px-3.5 py-2.5 bg-[#F6FAFF] dark:bg-[#0D1B2A] border border-[#A3C4EB]/40 dark:border-slate-700 focus:outline-none focus:ring-1 focus:ring-[#173B64] text-slate-800 dark:text-slate-100"
                >
                  <option value="Balancing academic assignments with career portfolio building">
                    Balancing coursework with career portfolio prep
                  </option>
                  <option value="Too many reactive errands leaves long-term goals untouched">
                    Reactive errands crowd out long-term milestones
                  </option>
                  <option value="Organizational leadership burning out personal well-being">
                    Student organization duties neglecting sleep & health
                  </option>
                  <option value="Lack of visibility into where my time actually goes">
                    No clear visibility into weekly time distribution
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="student@campus.ac.id"
                  className="w-full text-xs sm:text-sm rounded-xl px-3.5 py-2.5 bg-[#F6FAFF] dark:bg-[#0D1B2A] border border-[#A3C4EB]/40 dark:border-slate-700 focus:outline-none focus:ring-1 focus:ring-[#173B64] text-slate-800 dark:text-slate-100"
                />
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <input
                  type="checkbox"
                  id="interview-opt-in"
                  checked={formData.willingForInterview}
                  onChange={(e) => setFormData({ ...formData, willingForInterview: e.target.checked })}
                  className="mt-0.5 rounded text-[#173B64] focus:ring-[#173B64]"
                />
                <label htmlFor="interview-opt-in" className="text-xs text-slate-600 dark:text-slate-300 leading-snug">
                  I&apos;m open to a 15-minute usability session or prototype feedback interview with the student team.
                </label>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-xl font-bold text-sm bg-[#FFDE70] text-[#173B64] hover:bg-[#ffd757] transition-all flex items-center justify-center gap-2 shadow-sm disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <span>Submit & Join Research</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
