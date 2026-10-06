import React, { useState } from 'react';
import { LIFE_DOMAINS_DATA } from '../data/mockData';
import { BookOpen, Briefcase, Users, HeartPulse, Sparkles, CheckCircle2, Info } from 'lucide-react';

export const LifeDomainsSection: React.FC = () => {
  const [selectedDomainId, setSelectedDomainId] = useState<string>('academic');

  const domainIcons: Record<string, React.ElementType> = {
    academic: BookOpen,
    career: Briefcase,
    social: Users,
    wellbeing: HeartPulse,
    growth: Sparkles,
  };

  const selectedDomain =
    LIFE_DOMAINS_DATA.find((d) => d.id === selectedDomainId) || LIFE_DOMAINS_DATA[0];

  // Radar Polygon calculation (5 points, 72 degrees apart)
  // center at (150, 150), radius 110
  const cx = 150;
  const cy = 150;
  const maxRadius = 100;

  // Domain score points (Academic, Career, Social, Well-being, Growth)
  // Angles: -90 (top), -18, 54, 126, 198
  const angles = [-90, -18, 54, 126, 198].map((deg) => (deg * Math.PI) / 180);

  // Generate web rings for 25%, 50%, 75%, 100%
  const webRings = [0.25, 0.5, 0.75, 1.0].map((scale) => {
    return angles
      .map((angle) => {
        const x = cx + maxRadius * scale * Math.cos(angle);
        const y = cy + maxRadius * scale * Math.sin(angle);
        return `${x},${y}`;
      })
      .join(' ');
  });

  // Calculate polygon points based on data scores
  const scorePoints = LIFE_DOMAINS_DATA.map((domain, i) => {
    const scale = domain.score / 100;
    const x = cx + maxRadius * scale * Math.cos(angles[i]);
    const y = cy + maxRadius * scale * Math.sin(angles[i]);
    return `${x},${y}`;
  }).join(' ');

  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs uppercase tracking-widest font-bold text-slate-500 dark:text-slate-400 mb-3">
            Holistic Life Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#173B64] dark:text-[#F6FAFF] tracking-tight leading-tight mb-4">
            Your Life Is More Than One Goal.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Visualisasi radar chart pada lima bidang kehidupan — Akademik, Karier, Sosial & Organisasi, Kesejahteraan Diri, dan Pengembangan Diri — membantu Anda memahami alokasi waktu dan arah energi secara menyeluruh.
          </p>
        </div>

        {/* Visual Domain Grid / Radial Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          
          {/* Radar Chart Display (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#13263B] border border-[#A3C4EB]/40 dark:border-slate-800 shadow-lg relative">
            <div className="w-full flex justify-between items-center mb-4">
              <span className="text-xs font-bold text-[#173B64] dark:text-[#F6FAFF]">
                5-Domain Activity Radar
              </span>
              <span className="text-[11px] text-slate-500 font-medium">Prototype Visualization</span>
            </div>

            {/* SVG Radar */}
            <div className="relative w-[280px] h-[280px] sm:w-[300px] sm:h-[300px] flex items-center justify-center">
              <svg viewBox="0 0 300 300" className="w-full h-full overflow-visible">
                {/* Concentric Web Rings */}
                {webRings.map((points, idx) => (
                  <polygon
                    key={idx}
                    points={points}
                    fill="none"
                    stroke="currentColor"
                    className="text-slate-200 dark:text-slate-700 stroke-[1]"
                    strokeDasharray={idx === 3 ? 'none' : '3,3'}
                  />
                ))}

                {/* Axis lines */}
                {angles.map((angle, i) => {
                  const x2 = cx + maxRadius * Math.cos(angle);
                  const y2 = cy + maxRadius * Math.sin(angle);
                  return (
                    <line
                      key={i}
                      x1={cx}
                      y1={cy}
                      x2={x2}
                      y2={y2}
                      stroke="currentColor"
                      className="text-slate-200 dark:text-slate-700 stroke-[1]"
                    />
                  );
                })}

                {/* Score polygon */}
                <polygon
                  points={scorePoints}
                  fill="#FFDE70"
                  fillOpacity="0.45"
                  stroke="#173B64"
                  strokeWidth="2.5"
                  className="transition-all duration-300 dark:stroke-[#FFDE70]"
                />

                {/* Radar Vertex Points */}
                {LIFE_DOMAINS_DATA.map((domain, i) => {
                  const scale = domain.score / 100;
                  const vx = cx + maxRadius * scale * Math.cos(angles[i]);
                  const vy = cy + maxRadius * scale * Math.sin(angles[i]);
                  const isSelected = selectedDomainId === domain.id;

                  // Label positions pushed further out
                  const lx = cx + (maxRadius + 24) * Math.cos(angles[i]);
                  const ly = cy + (maxRadius + 24) * Math.sin(angles[i]);

                  return (
                    <g key={domain.id} className="cursor-pointer" onClick={() => setSelectedDomainId(domain.id)}>
                      <circle
                        cx={vx}
                        cy={vy}
                        r={isSelected ? 6 : 4}
                        fill={isSelected ? '#173B64' : '#FFDE70'}
                        stroke="#173B64"
                        strokeWidth="2"
                        className="transition-all hover:scale-125"
                      />
                      <text
                        x={lx}
                        y={ly}
                        textAnchor="middle"
                        dominantBaseline="central"
                        className={`text-[10px] font-bold ${
                          isSelected
                            ? 'fill-[#173B64] dark:fill-[#FFDE70] font-extrabold'
                            : 'fill-slate-500 dark:fill-slate-400'
                        }`}
                      >
                        {domain.name.split(' ')[0]} ({domain.score}%)
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            <div className="mt-4 text-[11px] text-slate-500 dark:text-slate-400 text-center">
              Click any domain vertex or card to view detailed alignment.
            </div>
          </div>

          {/* Interactive Domain Detail Card (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Horizontal Domain Switcher */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {LIFE_DOMAINS_DATA.map((domain) => {
                const Icon = domainIcons[domain.id];
                const isSelected = selectedDomainId === domain.id;
                return (
                  <button
                    key={domain.id}
                    onClick={() => setSelectedDomainId(domain.id)}
                    className={`p-3 rounded-xl text-left transition-all border flex flex-col justify-between ${
                      isSelected
                        ? 'bg-[#173B64] text-white border-[#173B64] shadow-sm'
                        : 'bg-white dark:bg-[#13263B] text-slate-700 dark:text-slate-200 border-[#A3C4EB]/30 dark:border-slate-800 hover:border-[#173B64]/30'
                    }`}
                  >
                    <Icon className={`w-4 h-4 mb-2 ${isSelected ? 'text-[#FFDE70]' : 'text-[#173B64] dark:text-[#A3C4EB]'}`} />
                    <div>
                      <div className="text-xs font-bold leading-tight">{domain.name}</div>
                      <div className={`text-[10px] tabular-nums mt-0.5 ${isSelected ? 'text-[#FFDE70]' : 'text-slate-500'}`}>
                        {domain.score}% logged
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Domain Focus Panel */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#13263B] border border-[#A3C4EB]/40 dark:border-slate-800 shadow-sm text-left">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
                <div>
                  <div className="text-xs uppercase font-bold text-slate-400">
                    Domain Focus · {selectedDomain.indonesian}
                  </div>
                  <h3 className="text-xl font-bold text-[#173B64] dark:text-[#F6FAFF]">
                    {selectedDomain.name}
                  </h3>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-extrabold text-[#173B64] dark:text-[#FFDE70] tabular-nums">
                    {selectedDomain.score}%
                  </div>
                  <span className="text-[10px] text-slate-400">Activity Completion</span>
                </div>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                {selectedDomain.description}
              </p>

              {/* Sample Linked Goal */}
              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-[#F6FAFF] dark:bg-[#0D1B2A] border border-[#A3C4EB]/30">
                  <span className="text-[10px] uppercase font-bold text-slate-400">Sample Linked Goal</span>
                  <div className="text-sm font-bold text-[#173B64] dark:text-[#F6FAFF] mt-0.5">
                    {selectedDomain.sampleGoal}
                  </div>
                </div>

                {/* Sample Daily Activity */}
                <div className="p-3.5 rounded-xl bg-[#F6FAFF] dark:bg-[#0D1B2A] border border-[#A3C4EB]/30 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400">Sample Daily Activity</span>
                    <div className="text-xs font-semibold text-slate-700 dark:text-slate-200 mt-0.5">
                      {selectedDomain.sampleActivity}
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Mandatory Honesty Disclaimer */}
        <div className="max-w-2xl mx-auto rounded-xl p-4 bg-[#A3C4EB]/15 dark:bg-[#13263B] border border-[#A3C4EB]/40 dark:border-slate-800 flex items-start gap-3 text-xs text-slate-600 dark:text-slate-300 text-left">
          <Info className="w-4 h-4 text-[#173B64] dark:text-[#FFDE70] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="font-semibold text-[#173B64] dark:text-[#F6FAFF]">Product Notice: </strong>
            Polaris visualizes user-entered activity and progress indicators. It is not a measurement of life quality, happiness, or mental health.
          </p>
        </div>

      </div>
    </section>
  );
};
