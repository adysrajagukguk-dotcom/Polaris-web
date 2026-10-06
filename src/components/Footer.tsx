import React from 'react';
import { Compass, Sun, Moon } from 'lucide-react';

interface FooterProps {
  onOpenPrivacyTerms: () => void;
  onExplorePrototype: () => void;
  onJoinResearch: () => void;
  isDark?: boolean;
  onToggleTheme?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacyTerms,
  onExplorePrototype,
  onJoinResearch,
  isDark = false,
  onToggleTheme,
}) => {
  const footerLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Wearable', href: '#wearable' },
    { label: 'Research', href: '#research' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0B1726] text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand lockup */}
          <div>
            <div className="flex items-center gap-2 mb-2 text-white">
              <div className="w-7 h-7 rounded-lg bg-[#173B64] flex items-center justify-center text-[#FFDE70]">
                <Compass className="w-4 h-4 stroke-[2.2]" />
              </div>
              <span className="font-extrabold text-lg tracking-wider">POLARIS</span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm">
              “Find your direction. Align your actions. Build your future.”
            </p>
          </div>

          {/* Clean text navigation links + Footer Theme Switch */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium text-slate-300">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="hover:text-[#FFDE70] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {onToggleTheme && (
              <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900 border border-slate-800 text-xs">
                <button
                  onClick={() => isDark && onToggleTheme()}
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-lg transition-all ${
                    !isDark ? 'bg-[#173B64] text-white font-bold' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                  <span>Terang</span>
                </button>
                <button
                  onClick={() => !isDark && onToggleTheme()}
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-lg transition-all ${
                    isDark ? 'bg-[#FFDE70] text-[#173B64] font-bold' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Moon className="w-3.5 h-3.5" />
                  <span>Gelap</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Bottom credits & honest competition notices */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs text-slate-500">
          <div>
            <span>Competition Prototype • September 2026</span>
            <span className="mx-2">·</span>
            <span>Technology Appropriate Use Competition</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPrivacyTerms}
              className="hover:text-slate-300 transition-colors underline-offset-4 hover:underline"
            >
              Privacy Policy
            </button>
            <button
              onClick={onOpenPrivacyTerms}
              className="hover:text-slate-300 transition-colors underline-offset-4 hover:underline"
            >
              Terms & Prototype Scope
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
