import React, { useState } from 'react';
import { PRODUCT_SCREENS } from '../data/mockData';
import { Target, Activity, PieChart, Sparkles, User, CheckCircle2, ChevronRight, Compass, Shield, Bell, Calendar } from 'lucide-react';
import { PolarisPhoneMockup } from './PolarisPhoneMockup';

export const ProductExperienceSection: React.FC = () => {
  const [activeScreenIndex, setActiveScreenIndex] = useState<number>(0);

  const activeScreen = PRODUCT_SCREENS[activeScreenIndex];

  // Render mock UI for the active screen
  const renderScreenMockup = (screenId: string) => {
    switch (screenId) {
      case 'dashboard':
        return (
          <div className="-m-4 h-[440px] overflow-hidden rounded-[30px]">
            <PolarisPhoneMockup />
          </div>
        );

      case 'onboarding':
        return (
          <div className="space-y-3">
            <div className="flex justify-between items-center pb-2 border-b border-slate-200 dark:border-slate-800">
              <span className="text-xs font-bold text-[#173B64] dark:text-[#F6FAFF]">
                Onboarding & Sign-In
              </span>
              <span className="text-[10px] text-slate-400 font-semibold">Gambar 1.2 & 1.3</span>
            </div>

            <div className="p-3.5 rounded-2xl bg-white dark:bg-[#13263B] border border-[#A3C4EB]/30 text-left">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Halaman Onboarding 1–4</span>
                <span className="text-[10px] font-bold text-[#173B64] dark:text-[#FFDE70]">3 / 4</span>
              </div>
              <h5 className="text-xs font-bold text-[#173B64] dark:text-[#F6FAFF] mb-1">
                Selaraskan 5 Bidang Kehidupan
              </h5>
              <p className="text-[11px] text-slate-500 leading-relaxed mb-3">
                Akademik, karier, sosial, kesejahteraan, dan pengembangan diri saling terhubung.
              </p>
              <div className="w-full bg-slate-100 dark:bg-slate-700 h-1 rounded-full overflow-hidden">
                <div className="bg-[#173B64] dark:bg-[#FFDE70] h-full w-[75%]" />
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white dark:bg-[#13263B] border border-slate-200 dark:border-slate-800 text-left">
              <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">
                Tampilan Sign-In User
              </span>
              <div className="p-2 rounded-lg bg-[#F6FAFF] dark:bg-[#0D1B2A] text-xs text-slate-700 dark:text-slate-300 flex justify-between items-center">
                <span>chris@politeknik.ac.id</span>
                <span className="text-emerald-600 font-bold text-[10px]">Terverifikasi ✓</span>
              </div>
            </div>
          </div>
        );

      case 'goals':
        return (
          <div className="space-y-2.5">
            <div className="flex justify-between items-center pb-2 border-b border-slate-200 dark:border-slate-800">
              <span className="text-xs font-bold text-[#173B64] dark:text-[#F6FAFF]">
                Halaman Goals List (Gambar 1.5)
              </span>
              <span className="text-[10px] font-semibold text-[#173B64] dark:text-[#FFDE70]">+ Buat Goal</span>
            </div>

            <div className="p-2.5 rounded-xl bg-white dark:bg-[#13263B] border border-[#A3C4EB]/30">
              <div className="flex justify-between items-start text-xs">
                <div>
                  <span className="text-[9px] uppercase font-bold text-slate-400">Akademik</span>
                  <div className="font-bold text-[#173B64] dark:text-[#F6FAFF]">Sidang Proyek Akhir Capstone</div>
                </div>
                <span className="text-[10px] font-bold text-emerald-600">On Track</span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-700 h-1.5 rounded-full mt-2 overflow-hidden">
                <div className="bg-[#173B64] dark:bg-[#FFDE70] h-full w-[84%]" />
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-white dark:bg-[#13263B] border border-[#A3C4EB]/30">
              <div className="flex justify-between items-start text-xs">
                <div>
                  <span className="text-[9px] uppercase font-bold text-slate-400">Karier</span>
                  <div className="font-bold text-[#173B64] dark:text-[#F6FAFF]">Publikasi UI/UX Case Study</div>
                </div>
                <span className="text-[10px] font-bold text-emerald-600">On Track</span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-700 h-1.5 rounded-full mt-2 overflow-hidden">
                <div className="bg-[#173B64] dark:bg-[#FFDE70] h-full w-[72%]" />
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-white dark:bg-[#13263B] border border-[#A3C4EB]/30">
              <div className="flex justify-between items-start text-xs">
                <div>
                  <span className="text-[9px] uppercase font-bold text-slate-400">Kesejahteraan Diri</span>
                  <div className="font-bold text-[#173B64] dark:text-[#F6FAFF]">Tidur Cukup 7.5 Jam Konsisten</div>
                </div>
                <span className="text-[10px] font-bold text-amber-600">Aktif</span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-700 h-1.5 rounded-full mt-2 overflow-hidden">
                <div className="bg-[#173B64] dark:bg-[#FFDE70] h-full w-[76%]" />
              </div>
            </div>
          </div>
        );

      case 'create-goal':
        return (
          <div className="space-y-3">
            <div className="flex justify-between items-center pb-2 border-b border-slate-200 dark:border-slate-800">
              <span className="text-xs font-bold text-[#173B64] dark:text-[#F6FAFF]">
                Halaman Create Goals (Gambar 1.6)
              </span>
              <span className="text-[10px] text-slate-400">Formulir</span>
            </div>

            <div className="p-3.5 rounded-2xl bg-white dark:bg-[#13263B] border border-[#A3C4EB]/40 text-left space-y-2.5">
              <div>
                <label className="text-[9px] font-bold text-slate-400 block uppercase">PILIH BIDANG KEHIDUPAN</label>
                <div className="text-xs font-bold text-[#173B64] dark:text-[#FFDE70] mt-0.5">
                  Karier & Portofolio
                </div>
              </div>

              <div>
                <label className="text-[9px] font-bold text-slate-400 block uppercase">NAMA TUJUAN (GOAL)</label>
                <div className="text-xs font-semibold text-slate-800 dark:text-slate-100 mt-0.5">
                  Publikasi Case Study Human-Centered Design
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[11px] pt-1 border-t border-slate-100 dark:border-slate-800">
                <div>
                  <span className="text-slate-400 block text-[9px]">TENGGAT WAKTU</span>
                  <strong>15 Nov 2026</strong>
                </div>
                <div>
                  <span className="text-slate-400 block text-[9px]">TARGET AKHIR</span>
                  <strong>Medium / Behance</strong>
                </div>
              </div>

              <button className="w-full py-2 rounded-xl bg-[#FFDE70] text-[#173B64] font-bold text-xs mt-2">
                Simpan Tujuan Baru
              </button>
            </div>
          </div>
        );

      case 'activity-list':
        return (
          <div className="space-y-3">
            <div className="flex justify-between items-center pb-2 border-b border-slate-200 dark:border-slate-800">
              <span className="text-xs font-bold text-[#173B64] dark:text-[#F6FAFF]">
                Halaman Activity List (Gambar 1.6)
              </span>
              <span className="text-[10px] text-slate-400">Timeline</span>
            </div>

            <div className="space-y-2 text-xs">
              <div className="p-2.5 rounded-xl bg-white dark:bg-[#13263B] border border-slate-100 dark:border-slate-800 flex justify-between items-center">
                <div>
                  <div className="font-bold text-[#173B64] dark:text-[#F6FAFF]">Pengujian Mikrokontroler</div>
                  <span className="text-[10px] text-slate-400">Akademik · 90 menit</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">
                  Selesai
                </span>
              </div>

              <div className="p-2.5 rounded-xl bg-white dark:bg-[#13263B] border border-slate-100 dark:border-slate-800 flex justify-between items-center">
                <div>
                  <div className="font-bold text-[#173B64] dark:text-[#F6FAFF]">Rapat Divisi Acara Kampus</div>
                  <span className="text-[10px] text-slate-400">Sosial · 45 menit</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-bold">
                  Terencana
                </span>
              </div>

              <div className="p-2.5 rounded-xl bg-white dark:bg-[#13263B] border border-slate-100 dark:border-slate-800 flex justify-between items-center">
                <div>
                  <div className="font-bold text-[#173B64] dark:text-[#F6FAFF]">Lari Sore & Relaksasi</div>
                  <span className="text-[10px] text-slate-400">Kesejahteraan · 30 menit</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">
                  Selesai
                </span>
              </div>
            </div>
          </div>
        );

      case 'add-activity':
        return (
          <div className="space-y-3">
            <div className="flex justify-between items-center pb-2 border-b border-slate-200 dark:border-slate-800">
              <span className="text-xs font-bold text-[#173B64] dark:text-[#F6FAFF]">
                Halaman Add Activity (Gambar 1.7)
              </span>
              <span className="text-[10px] text-slate-400">Input</span>
            </div>

            <div className="p-3 rounded-xl bg-white dark:bg-[#13263B] border border-[#A3C4EB]/30">
              <label className="text-[10px] text-slate-400 font-bold block mb-1">NAMA KEGIATAN</label>
              <div className="text-xs font-semibold text-[#173B64] dark:text-[#F6FAFF] pb-2 mb-2 border-b border-slate-100 dark:border-slate-800">
                Penyusunan Bab Metodologi Proyek
              </div>

              <label className="text-[10px] text-slate-400 font-bold block mb-1">HUBUNGKAN KE GOAL</label>
              <div className="text-xs font-semibold text-[#173B64] dark:text-[#FFDE70] pb-2 mb-2 border-b border-slate-100 dark:border-slate-800">
                Sidang Proyek Akhir Capstone [Akademik]
              </div>

              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-500">Durasi: <strong>90 menit</strong></span>
                <button className="px-3 py-1 rounded-lg bg-[#FFDE70] text-[#173B64] font-bold text-[11px]">
                  Simpan Catatan
                </button>
              </div>
            </div>
          </div>
        );

      case 'companion':
        return (
          <div className="space-y-2.5">
            <div className="flex justify-between items-center pb-2 border-b border-slate-200 dark:border-slate-800">
              <span className="text-xs font-bold text-[#173B64] dark:text-[#FFDE70] flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Halaman AI Companion (Gambar 2.1 & 2.2)
              </span>
              <span className="text-[10px] text-slate-400">Chat AI</span>
            </div>

            <div className="p-2.5 rounded-xl bg-white dark:bg-[#13263B] text-[11px] leading-relaxed text-slate-700 dark:text-slate-300">
              “Chris, kamu telah menuntaskan tugas akademik minggu ini. Pertimbangkan 30 menit besok pagi untuk portofolio desain agar progres tetap seimbang.”
            </div>

            <div className="p-2 rounded-lg bg-[#FFDE70]/20 border border-[#FFDE70] text-[10px] font-semibold text-[#173B64] dark:text-[#FFDE70]">
              Next Step: Tulis 2 temuan wawancara pengguna (30m)
            </div>
          </div>
        );

      case 'profile':
      default:
        return (
          <div className="space-y-3">
            <div className="flex justify-between items-center pb-2 border-b border-slate-200 dark:border-slate-800">
              <span className="text-xs font-bold text-[#173B64] dark:text-[#F6FAFF]">
                Profile & Settings (Gambar 2.4 & 2.5)
              </span>
              <span className="text-[10px] text-slate-400">Pengaturan</span>
            </div>

            <div className="p-3 rounded-xl bg-white dark:bg-[#13263B] flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#173B64] text-[#FFDE70] text-xs font-bold flex items-center justify-center">
                CH
              </div>
              <div>
                <div className="text-xs font-bold text-[#173B64] dark:text-[#F6FAFF]">Chris Pratama</div>
                <span className="text-[10px] text-slate-400">Mahasiswa Informatika Politeknik</span>
              </div>
            </div>

            <div className="space-y-1.5 text-xs">
              <div className="p-2 rounded-lg bg-white dark:bg-[#13263B] flex justify-between items-center">
                <span className="flex items-center gap-2">
                  <Bell className="w-3.5 h-3.5 text-slate-400" /> Pengingat Refleksi Malam
                </span>
                <span className="text-[10px] text-emerald-600 font-semibold">21:00 Aktif</span>
              </div>
              <div className="p-2 rounded-lg bg-white dark:bg-[#13263B] flex justify-between items-center">
                <span className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" /> Evaluasi Radar Mingguan
                </span>
                <span className="text-[10px] text-emerald-600 font-semibold">Minggu Aktif</span>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <section className="py-20 md:py-28 bg-[#F6FAFF] dark:bg-[#0D1B2A] border-t border-b border-[#A3C4EB]/20 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs uppercase tracking-widest font-bold text-slate-500 dark:text-slate-400 mb-3">
            Unified Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#173B64] dark:text-[#F6FAFF] tracking-tight mb-4">
            Product Experience.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Seven cohesive interfaces designed around clarity, low cognitive load, and intentional student momentum.
          </p>
        </div>

        {/* Interactive Screen Explorer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Screen Navigation Tabs (7 cols) */}
          <div className="lg:col-span-7 space-y-2">
            {PRODUCT_SCREENS.map((screen, idx) => {
              const isSelected = activeScreenIndex === idx;
              return (
                <div
                  key={screen.id}
                  onClick={() => setActiveScreenIndex(idx)}
                  className={`p-4 rounded-xl cursor-pointer transition-all border text-left flex items-center justify-between ${
                    isSelected
                      ? 'bg-white dark:bg-[#13263B] border-[#173B64] dark:border-[#FFDE70] shadow-sm'
                      : 'bg-white/50 dark:bg-[#13263B]/30 border-transparent hover:bg-white dark:hover:bg-[#13263B]/60'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-xs font-bold text-slate-400 tabular-nums">0{idx + 1}</span>
                      <h4 className="text-sm font-bold text-[#173B64] dark:text-[#F6FAFF]">
                        {screen.name}
                      </h4>
                      <span className="text-[10px] text-slate-400 hidden sm:inline">
                        ({screen.screenCategory})
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                      {screen.shortDesc}
                    </p>
                  </div>

                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? 'text-[#173B64] dark:text-[#FFDE70] translate-x-1' : 'text-slate-300'
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* Right Phone Mockup Display (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            <div className="relative w-[280px] sm:w-[300px] bg-slate-900 rounded-[44px] p-3 shadow-xl border-4 border-slate-800">
              {/* Dynamic Island */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-20 h-3.5 bg-slate-950 rounded-full z-30" />

              {/* Screen Frame */}
              <div className="w-full h-[480px] bg-[#F6FAFF] dark:bg-[#0D1B2A] rounded-[36px] overflow-hidden pt-8 pb-4 px-4 text-slate-800 dark:text-slate-100 flex flex-col justify-between text-left">
                
                {/* Content based on active screen */}
                <div className="flex-1 overflow-y-auto">
                  {renderScreenMockup(activeScreen.id)}
                </div>

                {/* Bottom App Navigation Mockup */}
                <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex justify-around text-[9px] text-slate-400">
                  <div className="flex flex-col items-center text-[#173B64] dark:text-[#FFDE70] font-semibold">
                    <Compass className="w-3.5 h-3.5" />
                    <span>Focus</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Target className="w-3.5 h-3.5" />
                    <span>Goals</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Activity className="w-3.5 h-3.5" />
                    <span>Track</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Reflect</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Screen Context Callout */}
            <div className="mt-4 text-center max-w-xs text-xs text-slate-500 dark:text-slate-400">
              <strong className="text-[#173B64] dark:text-[#FFDE70]">{activeScreen.name}: </strong>
              {activeScreen.highlight}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
