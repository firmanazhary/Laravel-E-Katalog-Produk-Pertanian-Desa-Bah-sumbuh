import React from 'react';
import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div className="bg-[#FDFCF8] text-slate-900 min-h-screen">
            {/* Navigation */}
            <nav className="bg-white/90 backdrop-blur-md sticky top-0 z-[100] border-b border-green-100">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-green-800 rounded-full flex items-center justify-center text-white font-black italic shadow-lg border-2 border-orange-200">BS</div>
                        <div>
                            <h1 className="text-xl font-black tracking-tighter text-green-900 uppercase leading-none">Bah Sumbu</h1>
                            <span className="text-orange-600 font-bold text-[10px] tracking-[0.2em] uppercase">E-Katalog Komoditas</span>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center gap-8 text-xs font-black uppercase tracking-widest text-green-900">
                        <Link href="/" className="hover:text-orange-600 transition">Beranda</Link>
                        <Link href="/about" className="hover:text-orange-600 transition">Cerita Kami</Link>
                        <Link href="/products-all" className="hover:text-orange-600 transition flex items-center gap-2">
                            Katalog Lengkap
                            <span className="bg-orange-100 text-orange-600 text-[8px] px-2 py-0.5 rounded-full animate-pulse">NEW</span>
                        </Link>
                        <Link href="/login" className="bg-green-800 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition shadow-md">Masuk Petani</Link>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main>{children}</main>

            {/* Footer */}
            <footer className="bg-white py-20 px-6 border-t border-green-50">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 justify-between items-center gap-12">
                    <div>
                        <h2 className="text-3xl font-black text-green-900 mb-4 uppercase italic">Bah Sumbu <span className="text-orange-500">Katalog</span></h2>
                        <p className="text-slate-500 max-w-sm italic">Meningkatkan posisi tawar (bargaining power) petani Desa Bah Sumbu melalui sistem informasi e-katalog yang transparan.</p>
                    </div>
                    <div className="text-right">
                        <p className="font-bold text-green-900 mb-2">Kontak Desa:</p>
                        <p className="text-2xl font-black text-orange-500 leading-none mb-1 uppercase tracking-tighter">Tebing Tinggi, Sumatera Utara</p>
                        <p className="text-slate-400 text-sm">umkm@bahsumbu.desa</p>
                    </div>
                </div>
            </footer>
            
            {/* WhatsApp Floating Button bisa ditaruh di sini juga */}
        </div>
    );
}