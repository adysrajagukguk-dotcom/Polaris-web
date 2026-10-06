import React, { useState, useEffect } from 'react';
import { Menu, X, Compass, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  onExplorePrototype: () => void;
  onJoinResearch: () => void;
  isDark: boolean;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onExplorePrototype,
  onJoinResearch,
  isDark,
  onToggleTheme,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Why Polaris', href: '#why-polaris' },
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Wearable', href: '#wearable' },
    { label: 'Research', href: '#research' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? isDark
            ? 'bg-[#0D1B2A]/90 backdrop-blur-md border-b border-[#173B64]/50 shadow-sm'
            : 'bg-[#F6FAFF]/90 backdrop-blur-md border-b border-[#A3C4EB]/30 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Zone 1: Single text wordmark with subtle star compass */}
        <a
          href="#hero"
          onClick={(e) => handleLinkClick(e, '#hero')}
          className="flex items-center gap-2 group text-xl font-bold tracking-tight text-[#173B64] dark:text-[#F6FAFF]"
        >
          <div className="w-8 h-8 rounded-lg bg-[#173B64] dark:bg-[#A3C4EB] flex items-center justify-center text-[#FFDE70] dark:text-[#173B64] shadow-sm transition-transform group-hover:scale-105">
            <Compass className="w-5 h-5 stroke-[2.2]" />
          </div>
          <span className="font-extrabold tracking-wider">POLARIS</span>
        </a>

        {/* Zone 2: 4-6 text navigation links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="hover:text-[#173B64] dark:hover:text-[#FFDE70] transition-colors relative py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1-2 primary actions + theme switch */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onToggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-[#A3C4EB]/20 dark:hover:bg-[#173B64]/40 transition-colors"
          >
            {isDark ? <Sun className="w-4 h-4 text-[#FFDE70]" /> : <Moon className="w-4 h-4 text-[#173B64]" />}
          </button>

          <button
            onClick={onJoinResearch}
            className="px-3.5 py-2 text-xs font-semibold rounded-lg text-[#173B64] dark:text-[#F6FAFF] border border-[#173B64]/20 dark:border-[#A3C4EB]/30 hover:bg-[#A3C4EB]/15 dark:hover:bg-[#173B64]/50 transition-colors whitespace-nowrap"
          >
            Join User Research
          </button>

          <button
            onClick={onExplorePrototype}
            className="px-4 py-2 text-xs font-bold rounded-lg text-[#173B64] bg-[#FFDE70] hover:bg-[#ffd653] shadow-xs hover:shadow transition-all whitespace-nowrap active:scale-[0.98]"
          >
            Explore Polaris
          </button>
        </div>

        {/* Mobile menu & theme trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300"
          >
            {isDark ? <Sun className="w-4 h-4 text-[#FFDE70]" /> : <Moon className="w-4 h-4 text-[#173B64]" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open main menu"
            className="p-2 rounded-lg text-[#173B64] dark:text-[#F6FAFF] hover:bg-[#A3C4EB]/20"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-2 pb-6 border-b border-[#A3C4EB]/30 dark:border-[#173B64]/60 bg-[#F6FAFF] dark:bg-[#0D1B2A] shadow-lg animate-in fade-in duration-150">
          <nav className="flex flex-col gap-3 py-3 border-b border-[#A3C4EB]/20 dark:border-slate-800">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-base font-medium text-[#173B64] dark:text-slate-200 py-1.5 px-2 rounded-md hover:bg-[#A3C4EB]/15 dark:hover:bg-[#173B64]/30"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-2.5 pt-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onExplorePrototype();
              }}
              className="w-full py-2.5 text-center text-sm font-bold rounded-lg text-[#173B64] bg-[#FFDE70] hover:bg-[#ffd653]"
            >
              Explore Polaris
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onJoinResearch();
              }}
              className="w-full py-2.5 text-center text-sm font-semibold rounded-lg text-[#173B64] dark:text-[#F6FAFF] border border-[#173B64]/20 dark:border-[#A3C4EB]/30"
            >
              Join User Research
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
