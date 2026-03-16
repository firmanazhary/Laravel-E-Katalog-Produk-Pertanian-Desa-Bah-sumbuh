import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function GuestLayout({ children }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="bg-[#FDFCF8] text-slate-900 min-h-screen font-sans">
            {/* Navigation */}
            <nav className="bg-white/90 backdrop-blur-md sticky top-0 z-[100] border-b border-green-100">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    {/* Logo Area */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-12 h-12 bg-green-800 rounded-full flex items-center justify-center text-white font-black italic shadow-lg border-2 border-orange-200 group-hover:rotate-12 transition-transform">BS</div>
                        <div>
                            <h1 className="text-xl font-black tracking-tighter text-green-900 uppercase leading-none">Bah Sumbu</h1>
                            <span className="text-orange-600 font-bold text-[10px] tracking-[0.2em] uppercase">E-Katalog Komoditas</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation (Hidden on Mobile) */}
                    <div className="hidden md:flex items-center gap-8 text-[10px] font-black uppercase tracking-widest text-green-900">
                        <Link href="/" className="hover:text-orange-600 transition">Beranda</Link>
                        <Link href="/about" className="hover:text-orange-600 transition">Cerita Kami</Link>
                        <Link href="/products-all" className="hover:text-orange-600 transition flex items-center gap-2">
                            Katalog
                            <span className="bg-orange-100 text-orange-600 text-[8px] px-2 py-0.5 rounded-full animate-pulse">NEW</span>
                        </Link>
                        <Link href="/login" className="bg-green-800 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition shadow-md">Masuk Petani</Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 text-green-900 hover:bg-green-50 rounded-xl transition"
                    >
                        {isMenuOpen ? <XMarkIcon className="w-8 h-8" /> : <Bars3Icon className="w-8 h-8" />}
                    </button>
                </div>

                {/* Mobile Navigation Drawer */}
                <div className={`md:hidden absolute w-full bg-white border-b border-green-100 transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-[400px] opacity-100 py-6' : 'max-h-0 opacity-0 pointer-events-none'}`}>
                    <div className="flex flex-col px-6 gap-6 text-sm font-black uppercase tracking-[0.2em] text-green-900">
                        <Link href="/" onClick={() => setIsMenuOpen(false)} className="hover:text-orange-600">Beranda</Link>
                        <Link href="/about" onClick={() => setIsMenuOpen(false)} className="hover:text-orange-600">Cerita Kami</Link>
                        <Link href="/products-all" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 hover:text-orange-600">
                            Katalog Lengkap
                            <span className="bg-orange-100 text-orange-600 text-[8px] px-2 py-0.5 rounded-full">NEW</span>
                        </Link>
                        <Link href="/login" onClick={() => setIsMenuOpen(false)} className="bg-green-800 text-white px-6 py-4 rounded-2xl text-center shadow-lg active:scale-95 transition-all">Masuk Petani</Link>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="relative z-0">{children}</main>

            {/* Footer */}
       <footer className="bg-white pt-24 pb-12 px-6 border-t border-emerald-50 relative overflow-hidden">
    {/* Ornamen Daun Halus di Pojok Footer */}
    <div className="absolute top-0 right-0 w-64 opacity-[0.03] pointer-events-none">
        <img src="https://cdn-icons-png.flaticon.com/512/2921/2921822.png" alt="decor" className="w-full grayscale" />
    </div>

    <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
            
            {/* Kolom 1: Brand & Visi (Col-5) */}
            <div className="md:col-span-5 space-y-6">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-emerald-900 rounded-xl flex items-center justify-center text-white font-black italic shadow-lg">BS</div>
                    <h2 className="text-2xl font-black text-emerald-950 uppercase italic tracking-tighter">
                        Bah Sumbu <span className="text-orange-500">Katalog</span>
                    </h2>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed italic max-w-sm">
                    "Meningkatkan posisi tawar (bargaining power) petani Desa Bah Sumbu melalui sistem informasi e-katalog yang transparan dan terintegrasi secara digital."
                </p>
                <div className="flex gap-4 pt-4">
                    {/* Placeholder Sosmed Icon */}
                    <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-700 hover:bg-emerald-900 hover:text-white transition-all cursor-pointer">
                        <span className="text-[10px] font-black">IG</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-700 hover:bg-emerald-900 hover:text-white transition-all cursor-pointer">
                        <span className="text-[10px] font-black">FB</span>
                    </div>
                </div>
            </div>

            {/* Kolom 2: Navigasi Cepat (Col-3) */}
            <div className="md:col-span-3 space-y-6">
                <h4 className="text-[10px] font-black text-emerald-900 uppercase tracking-[0.4em] opacity-40">Tautan Cepat</h4>
                <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-slate-400">
                    <li><Link href="/" className="hover:text-orange-500 transition">Beranda</Link></li>
                    <li><Link href="/about" className="hover:text-orange-600 transition">Cerita Kami</Link></li>
                    <li><Link href="/products-all" className="hover:text-orange-600 transition">Katalog Produk</Link></li>
                    <li><Link href="/login" className="hover:text-emerald-900 transition underline decoration-orange-500 underline-offset-4">Portal Petani</Link></li>
                </ul>
            </div>

            {/* Kolom 3: Kontak & Lokasi (Col-4) */}
            <div className="md:col-span-4 md:text-right space-y-6">
                <h4 className="text-[10px] font-black text-emerald-900 uppercase tracking-[0.4em] opacity-40">Hubungi Kami</h4>
                <div className="space-y-2">
                    <p className="text-2xl font-black text-emerald-950 leading-none uppercase tracking-tighter italic">
                        Tebing Tinggi, <span className="text-orange-500">Sumatera Utara</span>
                    </p>
                    <p className="text-slate-400 font-bold text-[11px] uppercase tracking-widest">Kecamatan Tebing Syahbandar</p>
                </div>
                <div className="pt-4">
                    <a href="mailto:umkm@bahsumbu.desa" className="inline-block bg-emerald-50 text-emerald-900 px-6 py-3 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-emerald-100 transition">
                        umkm@bahsumbu.desa
                    </a>
                </div>
            </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="mt-24 pt-10 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.5em]">
                Bah Sumbu Ecosystem &copy; 2026 • RnD Project
            </p>
            <div className="flex items-center gap-3">
                <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">Dikembangkan Oleh</span>
                <span className="px-4 py-1.5 bg-emerald-950 text-white rounded-full text-[9px] font-black tracking-widest italic shadow-lg shadow-emerald-900/20">
                    FIRMAN AZHARY
                </span>
            </div>
        </div>
    </div>
</footer>
        </div>
    );
}