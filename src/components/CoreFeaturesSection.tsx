import React, { useState } from 'react';
import {
  Compass,
  Target,
  Activity,
  LayoutDashboard,
  Sparkles,
  Bell,
  CheckCircle2,
  GitBranch,
  Smartphone,
  ChevronRight,
  ArrowRight,
  Plus,
  Calendar,
  User,
  Shield,
  Layers,
  FileText,
} from 'lucide-react';

export const CoreFeaturesSection: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<number>(0);
  const [viewMode, setViewMode] = useState<'ui' | 'flow'>('ui');
  const [showFullArchitecture, setShowFullArchitecture] = useState<boolean>(false);

  const features = [
    {
      id: 'onboarding-profile',
      index: '01',
      title: 'Onboarding dan Profil Pengguna',
      subtitle: 'Pengenalan konsep dan personalisasi pengalaman',
      description:
        'Fitur onboarding dirancang untuk memperkenalkan konsep Polaris kepada pengguna serta mengumpulkan informasi dasar yang diperlukan dalam personalisasi pengalaman.',
      userFlowLabel: 'Gambar 1.1 Flowchart Onboarding User',
      flowSteps: [
        { label: 'Mulai Aplikasi', note: 'SplashScreen Polaris' },
        { label: 'Onboarding 1–4', note: 'Edukasi konsep arah & 5 domain kehidupan' },
        { label: 'Sign-In / Registrasi', note: 'Autentikasi akun mahasiswa' },
        { label: 'Setup Profil Dasar', note: 'Nama, kampus, dan prioritas awal' },
        { label: 'Masuk Home Dashboard', note: 'Menuju beranda utama Polaris' },
      ],
      uiPages: ['Halaman Onboarding 1–4', 'Sign-In User'],
      icon: Compass,
      renderUI: () => (
        <div className="space-y-3">
          <div className="p-4 rounded-2xl bg-[#F6FAFF] dark:bg-[#0D1B2A] border border-[#A3C4EB]/40 dark:border-slate-800 text-left">
            <span className="text-[10px] uppercase font-bold text-slate-400">
              Gambar 1.2 Tampilan Onboarding User (1–4)
            </span>
            <div className="flex items-center justify-between mt-2 mb-3">
              <span className="text-xs font-bold text-[#173B64] dark:text-[#FFDE70]">Langkah 1 dari 4</span>
              <div className="flex gap-1">
                <span className="w-5 h-1.5 rounded-full bg-[#173B64] dark:bg-[#FFDE70]" />
                <span className="w-2 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                <span className="w-2 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                <span className="w-2 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700" />
              </div>
            </div>
            <h4 className="text-sm font-extrabold text-[#173B64] dark:text-[#F6FAFF] mb-1">
              Temukan Arah di Tengah Kesibukan
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
              Polaris menyelaraskan aktivitas harianmu dengan tujuan jangka panjang di 5 bidang kehidupan.
            </p>
            <div className="flex justify-between items-center pt-2 border-t border-slate-200 dark:border-slate-800">
              <span className="text-[11px] text-slate-400">Lewati</span>
              <button className="px-3.5 py-1.5 rounded-lg bg-[#FFDE70] text-[#173B64] font-bold text-xs">
                Lanjut
              </button>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-white dark:bg-[#13263B] border border-slate-200 dark:border-slate-800 text-left">
            <span className="text-[10px] uppercase font-bold text-slate-400">
              Gambar 1.3 Tampilan Halaman Sign-In User
            </span>
            <div className="mt-1 flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-700 dark:text-slate-200">Email & Password</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-400 font-bold">
                Tervalidasi
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'setting-goals',
      index: '02',
      title: 'Setting Goals',
      subtitle: 'Manajemen tujuan hidup berstruktur',
      description:
        'Platform Polaris menyediakan fitur untuk membuat, mengubah, menghapus, dan memantau tujuan pengguna.',
      userFlowLabel: 'Gambar 1.4 Flowchart Goals Setting',
      flowSteps: [
        { label: 'Buka Halaman Goals', note: 'Akses dari bottom navigation' },
        { label: 'Pilih Buat / Edit Goal', note: 'Menentukan kategori dari 5 bidang' },
        { label: 'Input Target & Deadline', note: 'Kriteria terukur dan milestone' },
        { label: 'Simpan ke Database', note: 'Goal aktif tampil pada Goals List' },
        { label: 'Pantau / Ubah / Hapus', note: 'Pembaruan status berkala' },
      ],
      uiPages: ['Halaman Goals List', 'Halaman Create Goals'],
      icon: Target,
      renderUI: () => (
        <div className="space-y-3">
          <div className="p-3.5 rounded-2xl bg-white dark:bg-[#13263B] border border-[#A3C4EB]/40 dark:border-slate-800 text-left shadow-xs">
            <div className="flex justify-between items-center mb-2 pb-1 border-b border-slate-100 dark:border-slate-800">
              <span className="text-[10px] uppercase font-bold text-slate-400">
                Gambar 1.5 Tampilan Halaman Goals (Goals List)
              </span>
              <span className="text-[10px] text-emerald-600 font-bold">4 Aktif</span>
            </div>
            <div className="p-2.5 rounded-xl bg-[#F6FAFF] dark:bg-[#0D1B2A] mb-2 border border-[#A3C4EB]/20">
              <div className="flex justify-between text-xs font-bold mb-1">
                <span className="text-[#173B64] dark:text-[#F6FAFF]">Sidang Proyek Akhir Capstone</span>
                <span className="text-[#173B64] dark:text-[#FFDE70]">84%</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                <div className="bg-[#173B64] dark:bg-[#FFDE70] h-full w-[84%]" />
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white dark:bg-[#13263B] border border-[#173B64]/30 dark:border-[#FFDE70]/40 text-left shadow-xs">
            <span className="text-[10px] uppercase font-bold text-slate-400">
              Gambar 1.6 Tampilan Halaman Create Goals
            </span>
            <div className="mt-2 space-y-1.5 text-xs">
              <div className="flex justify-between p-1.5 rounded bg-slate-50 dark:bg-slate-900">
                <span className="text-slate-500">Kategori:</span>
                <strong className="text-[#173B64] dark:text-[#FFDE70]">Karier & Portofolio</strong>
              </div>
              <div className="flex justify-between p-1.5 rounded bg-slate-50 dark:bg-slate-900">
                <span className="text-slate-500">Target:</span>
                <strong className="text-slate-700 dark:text-slate-200">Publikasi Case Study UI/UX</strong>
              </div>
              <div className="flex justify-between p-1.5 rounded bg-slate-50 dark:bg-slate-900">
                <span className="text-slate-500">Tenggat Waktu:</span>
                <strong className="text-slate-700 dark:text-slate-200">15 November 2026</strong>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'pencatatan-aktivitas',
      index: '03',
      title: 'Pencatatan Aktivitas',
      subtitle: 'Sinkronisasi kegiatan terencana & terselesaikan',
      description:
        'Polaris menyediakan fitur pencatatan aktivitas yang memungkinkan pengguna menambahkan kegiatan yang telah direncanakan maupun diselesaikan.',
      userFlowLabel: 'Gambar 1.5 Flowchart User Dalam Input Catatan Aktivitas',
      flowSteps: [
        { label: 'Buka Halaman Activity', note: 'Melihat timeline kegiatan' },
        { label: 'Klik Tambah Aktivitas', note: 'Membuka form Add Activity' },
        { label: 'Pilih Status Kegiatan', note: 'Direncanakan atau Diselesaikan' },
        { label: 'Hubungkan ke Goals', note: 'Memilih tujuan yang relevan' },
        { label: 'Simpan Aktivitas', note: 'Otomatis memperbarui progres & dashboard' },
      ],
      uiPages: ['Halaman Activity List', 'Halaman Create Activity (Add Activity)'],
      icon: Activity,
      renderUI: () => (
        <div className="space-y-3">
          <div className="p-3.5 rounded-2xl bg-white dark:bg-[#13263B] border border-slate-200 dark:border-slate-800 text-left">
            <div className="flex justify-between items-center mb-2 pb-1 border-b border-slate-100 dark:border-slate-800">
              <span className="text-[10px] uppercase font-bold text-slate-400">
                Gambar 1.6 Tampilan Halaman Activity List
              </span>
              <span className="text-[10px] text-slate-500">Hari ini</span>
            </div>
            <div className="space-y-1.5 text-xs">
              <div className="p-2 rounded-lg bg-[#F6FAFF] dark:bg-[#0D1B2A] flex justify-between items-center">
                <span className="font-semibold text-slate-800 dark:text-slate-200">
                  Uji Coba Rangkaian Mikrokontroler
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">
                  Selesai
                </span>
              </div>
              <div className="p-2 rounded-lg bg-[#F6FAFF] dark:bg-[#0D1B2A] flex justify-between items-center">
                <span className="font-semibold text-slate-800 dark:text-slate-200">
                  Rapat Koordinasi Divisi Acara
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 font-bold">
                  Terencana
                </span>
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white dark:bg-[#13263B] border border-[#173B64]/30 dark:border-slate-800 text-left">
            <span className="text-[10px] uppercase font-bold text-slate-400">
              Gambar 1.7 Tampilan Halaman Add Activity
            </span>
            <div className="mt-2 p-2.5 rounded-xl bg-[#F6FAFF] dark:bg-[#0D1B2A] border border-[#A3C4EB]/30 text-xs">
              <div className="text-[10px] text-slate-400">Hubungkan Kegiatan ke Goal:</div>
              <div className="font-bold text-[#173B64] dark:text-[#FFDE70] mt-0.5">
                Sidang Proyek Akhir Capstone [Akademik]
              </div>
              <div className="flex justify-between text-[11px] text-slate-500 mt-2">
                <span>Durasi: 90 menit</span>
                <span className="font-semibold text-emerald-600">Simpan ✓</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'life-balance-dashboard',
      index: '04',
      title: 'Life Balance Dashboard',
      subtitle: 'Visualisasi radar chart pada lima bidang kehidupan',
      description:
        'Dashboard menampilkan ringkasan tujuan, aktivitas, dan progres pengguna dengan visualisasi radar chart pada lima bidang kehidupan.',
      userFlowLabel: 'Gambar 1.8 Flowchart User Melihat Life Balance',
      flowSteps: [
        { label: 'Buka Home Dashboard', note: 'Tampilan utama aplikasi' },
        { label: 'Baca Ringkasan Hari Ini', note: 'Status tujuan dan kegiatan harian' },
        { label: 'Amati Radar Chart 5 Bidang', note: 'Akademik, Karier, Sosial, Sehat, Tumbuh' },
        { label: 'Filter Rentang Waktu', note: 'Weekly, Monthly, Annually, All Time' },
        { label: 'Ketahui Keseimbangan', note: 'Deteksi dini bidang yang kurang teralokasi' },
      ],
      uiPages: ['Halaman Home Dashboard', 'Tampilan Life Balance'],
      icon: LayoutDashboard,
      renderUI: () => (
        <div className="p-4 rounded-2xl bg-white dark:bg-[#13263B] border border-[#A3C4EB]/40 dark:border-slate-800 text-left shadow-sm">
          <div className="flex justify-between items-center mb-3 pb-2 border-b border-slate-100 dark:border-slate-800">
            <span className="text-[10px] uppercase font-bold text-slate-400">
              Gambar 1.9 Tampilan Halaman Life Balance Pada Home Dashboard
            </span>
            <span className="text-[10px] font-bold text-[#173B64] dark:text-[#FFDE70]">5 Bidang</span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs mb-3">
            <div className="p-2 rounded-xl bg-[#F6FAFF] dark:bg-[#0D1B2A]">
              <span className="text-[10px] text-slate-400 block">Akademik</span>
              <strong className="text-[#173B64] dark:text-[#FFDE70]">84%</strong>
            </div>
            <div className="p-2 rounded-xl bg-[#F6FAFF] dark:bg-[#0D1B2A]">
              <span className="text-[10px] text-slate-400 block">Karier</span>
              <strong className="text-[#173B64] dark:text-[#FFDE70]">72%</strong>
            </div>
            <div className="p-2 rounded-xl bg-[#F6FAFF] dark:bg-[#0D1B2A]">
              <span className="text-[10px] text-slate-400 block">Sosial & Organisasi</span>
              <strong className="text-[#173B64] dark:text-[#FFDE70]">68%</strong>
            </div>
            <div className="p-2 rounded-xl bg-[#F6FAFF] dark:bg-[#0D1B2A]">
              <span className="text-[10px] text-slate-400 block">Kesejahteraan Diri</span>
              <strong className="text-[#173B64] dark:text-[#FFDE70]">76%</strong>
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 text-[11px] text-slate-500">
            Visualisasi radar chart memetakan alokasi aktivitas secara proporsional.
          </div>
        </div>
      ),
    },
    {
      id: 'ai-companion',
      index: '05',
      title: 'AI Companion',
      subtitle: 'Saran relevan berbasis tujuan, aktivitas & prioritas',
      description:
        'AI Companion membantu pengguna memperoleh saran yang relevan berdasarkan tujuan, aktivitas, prioritas, dan konteks yang diberikan.',
      userFlowLabel: 'Gambar 2.0 Flowchart User Menggunakan Fitur AI',
      flowSteps: [
        { label: 'Buka Halaman AI', note: 'Akses melalui menu AI' },
        { label: 'Analisis Data Aktivitas', note: 'Evaluasi konteks 5 domain pengguna' },
        { label: 'Pilih Konsultasi / Saran', note: 'Pilih topik refleksi atau ajukan pertanyaan' },
        { label: 'Terima Rekomendasi', note: 'Saran tindakan manageable next step' },
        { label: 'Implementasi Tindakan', note: 'Jadikan aktivitas terencana' },
      ],
      uiPages: ['Halaman AI Companion', 'Halaman Chat Polaris AI'],
      icon: Sparkles,
      renderUI: () => (
        <div className="space-y-3">
          <div className="p-3.5 rounded-2xl bg-white dark:bg-[#13263B] border border-slate-200 dark:border-slate-800 text-left">
            <span className="text-[10px] uppercase font-bold text-slate-400">
              Gambar 2.1 Tampilan Halaman AI Companion
            </span>
            <div className="mt-2 p-2.5 rounded-xl bg-[#F6FAFF] dark:bg-[#0D1B2A] border border-[#A3C4EB]/20 text-xs text-slate-700 dark:text-slate-300">
              “Kamu telah fokus pada akademik minggu ini. Jika sesuai dengan prioritasmu, pertimbangkan luangkan 30 menit untuk portofolio karier besok.”
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white dark:bg-[#13263B] border border-[#173B64]/30 dark:border-slate-800 text-left">
            <span className="text-[10px] uppercase font-bold text-slate-400">
              Gambar 2.2 Tampilan Halaman Chat Polaris AI
            </span>
            <div className="mt-1.5 flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-700 dark:text-slate-200">Refleksi Konseptual</span>
              <span className="text-[10px] text-[#173B64] dark:text-[#FFDE70] font-bold">Aktif</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'notifikasi-pengingat',
      index: '06',
      title: 'Notifikasi dan Pengingat',
      subtitle: 'Pengingat terkonfigurasi untuk berbagai keperluan',
      description:
        'Platform Polaris menyediakan pengingat yang dapat dikonfigurasi oleh pengguna untuk berbagai keperluan.',
      userFlowLabel: 'Gambar 2.3 Flowchart User Dalam Mengatur Notifikasi dan Pengingat',
      flowSteps: [
        { label: 'Buka Halaman Profile', note: 'Navigasi profil pengguna' },
        { label: 'Masuk Notification Settings', note: 'Menu pengaturan pengingat' },
        { label: 'Atur Frekuensi & Waktu', note: 'Pengingat tujuan, aktivitas & refleksi' },
        { label: 'Simpan Konfigurasi', note: 'Preferensi disimpan lokal di aplikasi' },
        { label: 'Terima Notifikasi Tepat Waktu', note: 'Nudge lembut tanpa alert fatigue' },
      ],
      uiPages: ['Halaman Profile', 'Tampilan Pengaturan Pada Profile'],
      icon: Bell,
      renderUI: () => (
        <div className="space-y-3">
          <div className="p-3.5 rounded-2xl bg-white dark:bg-[#13263B] border border-slate-200 dark:border-slate-800 text-left">
            <span className="text-[10px] uppercase font-bold text-slate-400">
              Gambar 2.4 Tampilan Halaman Profile
            </span>
            <div className="mt-2 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300">
                <User className="w-5 h-5" />
              </div>
              <div className="text-xs">
                <div className="font-bold text-[#173B64] dark:text-[#F6FAFF]">Chris Pratama</div>
                <div className="text-[10px] text-slate-400">Mahasiswa Informatika Politeknik</div>
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white dark:bg-[#13263B] border border-slate-200 dark:border-slate-800 text-left">
            <span className="text-[10px] uppercase font-bold text-slate-400">
              Gambar 2.5 Tampilan Pengaturan Pada Profile
            </span>
            <div className="mt-2 space-y-1.5 text-xs">
              <div className="flex justify-between items-center p-2 rounded bg-[#F6FAFF] dark:bg-[#0D1B2A]">
                <span>Pengingat Refleksi Malam (21:00)</span>
                <span className="text-emerald-600 font-bold">Aktif</span>
              </div>
              <div className="flex justify-between items-center p-2 rounded bg-[#F6FAFF] dark:bg-[#0D1B2A]">
                <span>Pengingat Evaluasi Mingguan (Minggu)</span>
                <span className="text-emerald-600 font-bold">Aktif</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const current = features[activeFeature];
  const Icon = current.icon;

  return (
    <section id="features" className="py-20 md:py-28 bg-[#F6FAFF] dark:bg-[#0D1B2A] border-t border-b border-[#A3C4EB]/20 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Aligned with competition prototype documentation */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#A3C4EB]/25 dark:bg-[#173B64]/60 text-xs font-bold text-[#173B64] dark:text-[#FFDE70] mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Dokumentasi Sistem & Fitur Utama</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#173B64] dark:text-[#F6FAFF] tracking-tight mb-4">
            Prototipe Platform Polaris
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Hasil utama pengembangan berupa prototipe platform Polaris yang mencakup beberapa fungsi utama. Setiap fitur dilengkapi dengan alur penggunaan (user flow) dan rancangan antarmuka (user interface).
          </p>

          {/* Toggle Button for Full Architectural Diagram */}
          <div className="mt-6 flex justify-center">
            <button
              onClick={() => setShowFullArchitecture(!showFullArchitecture)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-[#173B64] text-[#FFDE70] hover:bg-[#102947] transition-all shadow-xs"
            >
              <GitBranch className="w-4 h-4" />
              <span>
                {showFullArchitecture ? 'Tutup Diagram Lengkap' : 'Lihat 4.1.2 Ilustrasi Flow Mobile App (Diagram Lengkap)'}
              </span>
            </button>
          </div>
        </div>

        {/* 4.1.2 Ilustrasi Flow Mobile App (Diagram Lengkap) Drawer / Expandable Panel */}
        {showFullArchitecture && (
          <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#13263B] border-2 border-[#173B64] dark:border-[#FFDE70] shadow-xl text-left animate-in fade-in duration-200">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100 dark:border-slate-800">
              <div>
                <span className="text-xs uppercase font-extrabold text-[#173B64] dark:text-[#FFDE70]">
                  4.1.2 ILUSTRASI FLOW MOBILE APP
                </span>
                <h3 className="text-xl font-extrabold text-[#173B64] dark:text-[#F6FAFF]">
                  Gambar 2.6 Flowchart Keseluruhan Mobile App Polaris
                </h3>
              </div>
              <button
                onClick={() => setShowFullArchitecture(false)}
                className="text-xs font-semibold text-slate-400 hover:text-slate-600"
              >
                Tutup
              </button>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Diagram alur komprehensif mengintegrasikan alur mulai dari Onboarding Pengguna, Autentikasi, Pengaturan Tujuan (Goals), Pencatatan Aktivitas, Visualisasi Life Balance Dashboard, Konsultasi AI Companion, hingga Konfigurasi Pengingat & Notifikasi.
            </p>

            {/* Architecture Node Map */}
            <div className="grid grid-cols-1 md:grid-cols-6 gap-3 text-center text-xs">
              <div className="p-3.5 rounded-xl bg-[#F6FAFF] dark:bg-[#0D1B2A] border border-[#A3C4EB]/40 flex flex-col justify-center">
                <span className="font-bold text-[#173B64] dark:text-[#FFDE70] block mb-1">01. Onboarding</span>
                <span className="text-[11px] text-slate-500">Intro 1–4 & Sign-In</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#F6FAFF] dark:bg-[#0D1B2A] border border-[#A3C4EB]/40 flex flex-col justify-center">
                <span className="font-bold text-[#173B64] dark:text-[#FFDE70] block mb-1">02. Goals Setting</span>
                <span className="text-[11px] text-slate-500">Create, Edit, Delete, Monitor</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#F6FAFF] dark:bg-[#0D1B2A] border border-[#A3C4EB]/40 flex flex-col justify-center">
                <span className="font-bold text-[#173B64] dark:text-[#FFDE70] block mb-1">03. Aktivitas</span>
                <span className="text-[11px] text-slate-500">Rencana & Selesai</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#F6FAFF] dark:bg-[#0D1B2A] border border-[#A3C4EB]/40 flex flex-col justify-center">
                <span className="font-bold text-[#173B64] dark:text-[#FFDE70] block mb-1">04. Dashboard</span>
                <span className="text-[11px] text-slate-500">Radar Chart 5 Bidang</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#F6FAFF] dark:bg-[#0D1B2A] border border-[#A3C4EB]/40 flex flex-col justify-center">
                <span className="font-bold text-[#173B64] dark:text-[#FFDE70] block mb-1">05. AI Companion</span>
                <span className="text-[11px] text-slate-500">Saran & Konteks</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#F6FAFF] dark:bg-[#0D1B2A] border border-[#A3C4EB]/40 flex flex-col justify-center">
                <span className="font-bold text-[#173B64] dark:text-[#FFDE70] block mb-1">06. Notifikasi</span>
                <span className="text-[11px] text-slate-500">Jadwal Pengingat</span>
              </div>
            </div>
          </div>
        )}

        {/* Feature Selector Tabs (6 Feature Modules) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 6 Feature Cards List (7 cols) */}
          <div className="lg:col-span-7 space-y-3">
            {features.map((item, idx) => {
              const ItemIcon = item.icon;
              const isSelected = activeFeature === idx;

              return (
                <div
                  key={item.id}
                  onClick={() => setActiveFeature(idx)}
                  className={`p-5 rounded-2xl cursor-pointer transition-all border text-left flex items-start gap-4 ${
                    isSelected
                      ? 'bg-white dark:bg-[#13263B] border-[#173B64] dark:border-[#FFDE70] shadow-md scale-[1.01]'
                      : 'bg-white/60 dark:bg-[#13263B]/40 border-[#A3C4EB]/30 dark:border-slate-800 hover:border-[#173B64]/30'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isSelected
                        ? 'bg-[#173B64] text-[#FFDE70] dark:bg-[#FFDE70] dark:text-[#173B64]'
                        : 'bg-[#A3C4EB]/20 text-[#173B64] dark:text-slate-300'
                    }`}
                  >
                    <ItemIcon className="w-5 h-5 stroke-[2]" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-400 dark:text-slate-500 tabular-nums">
                          {item.index}
                        </span>
                        <h3 className="text-base font-bold text-[#173B64] dark:text-[#F6FAFF]">
                          {item.title}
                        </h3>
                      </div>
                      <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 hidden sm:inline">
                        {item.subtitle}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                      {item.description}
                    </p>

                    {/* Meta Indicators: Alur & UI */}
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-slate-500 dark:text-slate-400">
                      <span>Flow: {item.userFlowLabel.split(' ')[2] || 'User Flow'}</span>
                      <span className="opacity-40">·</span>
                      <span>UI: {item.uiPages.join(' & ')}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Interactive Detail Inspector (UI Design vs User Flow) (5 cols) */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="p-6 rounded-3xl bg-white dark:bg-[#13263B] border border-[#A3C4EB]/40 dark:border-slate-800 shadow-xl text-left">
              
              {/* Header with Switcher between UI Design and User Flow */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400">
                    Fitur {current.index}
                  </span>
                  <h4 className="text-sm font-extrabold text-[#173B64] dark:text-[#F6FAFF]">
                    {current.title}
                  </h4>
                </div>

                <div className="flex p-1 bg-[#F6FAFF] dark:bg-[#0D1B2A] rounded-xl border border-slate-200 dark:border-slate-700 text-xs">
                  <button
                    onClick={() => setViewMode('ui')}
                    className={`px-2.5 py-1 rounded-lg font-bold transition-all ${
                      viewMode === 'ui'
                        ? 'bg-[#173B64] text-[#FFDE70] shadow-xs'
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    Rancangan UI
                  </button>
                  <button
                    onClick={() => setViewMode('flow')}
                    className={`px-2.5 py-1 rounded-lg font-bold transition-all ${
                      viewMode === 'flow'
                        ? 'bg-[#173B64] text-[#FFDE70] shadow-xs'
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    User Flow
                  </button>
                </div>
              </div>

              {/* View 1: Rancangan Antarmuka (UI Design) */}
              {viewMode === 'ui' ? (
                <div className="min-h-[300px] flex flex-col justify-center">
                  <div className="mb-2 text-[11px] font-semibold text-slate-400">
                    Rancangan Antarmuka ({current.uiPages.join(', ')}):
                  </div>
                  {current.renderUI()}
                </div>
              ) : (
                /* View 2: Alur Penggunaan (User Flowchart) */
                <div className="min-h-[300px] flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] font-bold text-[#173B64] dark:text-[#FFDE70] mb-3">
                      {current.userFlowLabel}
                    </div>

                    <div className="space-y-2">
                      {current.flowSteps.map((step, sIdx) => (
                        <div key={sIdx} className="flex items-start gap-2.5 text-xs">
                          <div className="w-5 h-5 rounded-full bg-[#173B64] text-[#FFDE70] text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                            {sIdx + 1}
                          </div>
                          <div className="flex-1 pb-1">
                            <strong className="text-slate-800 dark:text-slate-200 block">
                              {step.label}
                            </strong>
                            <span className="text-[11px] text-slate-500">{step.note}</span>
                          </div>
                          {sIdx < current.flowSteps.length - 1 && (
                            <ArrowRight className="w-3.5 h-3.5 text-slate-300 shrink-0 mt-1" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-[10px] text-slate-400">
                    Alur penggunaan diverifikasi sesuai dengan diagram alur aplikasi mobile Polaris.
                  </div>
                </div>
              )}

              {/* Footer info in container */}
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
                <span>Modul {activeFeature + 1} dari 6</span>
                <span className="font-semibold text-[#173B64] dark:text-[#FFDE70]">
                  {current.uiPages[0]}
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
