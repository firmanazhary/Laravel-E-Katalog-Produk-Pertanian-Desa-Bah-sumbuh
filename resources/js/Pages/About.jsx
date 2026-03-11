import React from 'react';
import GuestLayout from '@/Layouts/GuestLayouts';
import { Head } from '@inertiajs/react';

export default function About() {
    return (
        <GuestLayout>
            <Head title="Cerita Kami | Desa Bah Sumbu" />

            {/* HERO SECTION */}
            <section className="relative py-24 bg-green-900 overflow-hidden">
                <img 
                    src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000" 
                    className="absolute inset-0 w-full h-full object-cover opacity-30"
                    alt="Hero About"
                />
                <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
                    <p className="font-culture text-3xl text-orange-400 mb-4 animate-pulse">"Soko Ekonomi Desa"</p>
                    <h1 className="text-5xl md:text-6xl font-black text-white mt-4 leading-tight uppercase tracking-tighter">
                        Transformasi Digital <br />Agribisnis Bah Sumbu
                    </h1>
                </div>
            </section>

            {/* CONTENT SECTION */}
            <section className="py-24 px-6 bg-[#FDFCF8]" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/wood-pattern.png')" }}>
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
                    <div className="space-y-8">
                        <div>
                            <span className="text-orange-600 font-black uppercase tracking-[0.4em] text-[10px]">Latar Belakang & Visi</span>
                            <h2 className="text-4xl font-black text-green-900 mt-3 leading-tight tracking-tighter">
                                Memangkas Mata Rantai, <br />Menuju Ekonomi Mandiri
                            </h2>
                        </div>
                        
                        <div className="text-slate-600 leading-relaxed space-y-5 text-lg italic">
                            <p>
                                Transformasi digital di sektor pertanian kini menjadi katalisator utama untuk mengatasi inefisiensi rantai pasok. Di Desa Bah Sumbu, kami menghadapi tantangan nyata: ketergantungan pada jaringan tengkulak yang menyebabkan distorsi pasar dan disparitas harga ekstrem.
                            </p>
                            <p>
                                E-Katalog ini didesain dengan filosofi **simplicity**. Kami fokus pada fungsi promosi dan etalase visual untuk memotong jalur distribusi yang panjang, sehingga harga di tingkat petani tetap adil bagi produsen maupun konsumen akhir.
                            </p>
                            <p className="font-bold text-green-900 border-l-4 border-orange-500 pl-6 py-2 bg-orange-50/50 rounded-r-xl">
                                "E-Katalog ini adalah instrumen pemberdayaan sosial-ekonomi, membuka peluang bagi agripreneurs muda untuk memodernisasi wajah pertanian desa."
                            </p>
                        </div>
                    </div>

                    <div className="relative group">
                        <img 
                            src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=1000" 
                            className="relative z-10 rounded-[3rem] shadow-2xl border-8 border-white"
                            alt="Pertanian Desa"
                        />
                        <div className="absolute -bottom-8 -right-8 bg-green-800 p-10 rounded-[2.5rem] shadow-2xl z-20">
                            <p className="text-[10px] font-black text-orange-400 uppercase tracking-[0.3em] mb-2">Desa Bah Sumbu</p>
                            <p className="text-white font-bold leading-tight">Tebing Tinggi, <br />Sumatera Utara</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* VISI MISI SECTION */}
            <section className="py-24 bg-green-950 text-white rounded-[4rem] mx-4 md:mx-10 px-6 mb-24 relative shadow-2xl">
                <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16">
                    <div className="text-center md:text-left">
                        <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center font-black text-2xl italic shadow-lg mb-6">V</div>
                        <h3 className="text-2xl font-black italic mb-4">Visi Utama</h3>
                        <p className="text-green-200 font-light leading-relaxed">Menghasilkan platform website yang informatif dan menarik untuk menampilkan komoditas unggulan tanpa batasan ruang dan waktu.</p>
                    </div>
                    <div className="text-center md:text-left">
                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center font-black text-2xl italic text-green-900 mb-6">M</div>
                        <h3 className="text-2xl font-black italic mb-4">Misi Praktis</h3>
                        <p className="text-green-200 font-light leading-relaxed">Meningkatkan posisi tawar (bargaining power) petani melalui promosi mandiri dan penyajian data stok secara real-time.</p>
                    </div>
                    <div className="text-center md:text-left">
                        <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center font-black text-2xl italic mb-6">T</div>
                        <h3 className="text-2xl font-black italic mb-4">Target Terukur</h3>
                        <p className="text-green-200 font-light leading-relaxed">Menciptakan ekosistem agribisnis yang transparan bagi pembeli, investor, dan masyarakat luas melalui sistem informasi yang tervalidasi.</p>
                    </div>
                </div>
            </section>
        </GuestLayout>
    );
}