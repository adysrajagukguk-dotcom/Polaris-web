import React from 'react';
import { X, ShieldCheck, Scale, AlertCircle } from 'lucide-react';

interface TermsPrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TermsPrivacyModal: React.FC<TermsPrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white dark:bg-[#13263B] w-full max-w-2xl rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#A3C4EB]/40 dark:border-slate-700 relative text-left max-h-[85vh] overflow-y-auto">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-4">
          <ShieldCheck className="w-5 h-5 text-[#173B64] dark:text-[#FFDE70]" />
          <h3 className="text-xl font-bold text-[#173B64] dark:text-[#F6FAFF]">
            Polaris Prototype Disclosures & Terms
          </h3>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          <div className="p-3.5 rounded-xl bg-[#F6FAFF] dark:bg-[#0D1B2A] border border-[#A3C4EB]/30">
            <h4 className="font-bold text-[#173B64] dark:text-[#FFDE70] mb-1">
              1. Academic Competition Prototype Status
            </h4>
            <p>
              Polaris is an exploratory prototype designed for the <em>Technology Appropriate Use Competition for private polytechnics in Indonesia</em>. All current data models, wearable interfaces, and telemetry representations are illustrative prototypes developed for research evaluation.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-[#173B64] dark:text-[#F6FAFF] mb-1">
              2. Non-Clinical & Mental Health Boundary
            </h4>
            <p>
              Polaris visualizes user-entered activity and progress indicators. It is not a measurement of life quality, happiness, or mental health. Polaris AI is not a psychologist, does not diagnose mental-health conditions, and does not replace professional medical or psychiatric care.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-[#173B64] dark:text-[#F6FAFF] mb-1">
              3. Research Participant Privacy
            </h4>
            <p>
              Any contact details provided via the User Research form will be utilized solely by the collegiate project team (Gladys, Chris, Leo, Jovi) for usability testing and user feedback interviews. No personal information is sold, shared with advertisers, or stored indefinitely.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-[#173B64] dark:text-[#F6FAFF] mb-1">
              4. Hardware & Wearable Concepts
            </h4>
            <p>
              Wearable capabilities shown represent the current prototype concept. Standalone calling and advanced biometric integrations require compatible hardware, cellular connectivity, and technical validation.
            </p>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl font-bold text-xs bg-[#173B64] text-[#FFDE70] hover:bg-[#102947] transition-colors"
          >
            I Understand & Agree
          </button>
        </div>

      </div>
    </div>
  );
};
