import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { 
    UserGroupIcon, 
    ShoppingBagIcon, 
    ArrowUpRightIcon,
    PlusIcon,
    UserPlusIcon,
    IdentificationIcon,
    CheckBadgeIcon,
    EnvelopeIcon
} from '@heroicons/react/24/outline';

export default function Dashboard({ auth, totalFarmers, totalProducts }) {
    const isAdmin = auth.user.role === 'admin';

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex items-center gap-3">
                    <div className="h-10 w-2 bg-emerald-500 rounded-full"></div>
                    <h2 className="text-3xl font-black text-emerald-950 italic uppercase tracking-tighter">
                        Dashboard <span className="text-emerald-500">{isAdmin ? 'Admin' : 'Mitra Petani'}</span>
                    </h2>
                </div>
            }
        >
            <Head title="Dashboard System" />

            <div className="py-12 font-sans px-4">
                <div className="max-w-7xl mx-auto space-y-8">
                    
                    {/* Welcome Section - SEKARANG BERNUANSA PROFIL KUAT */}
                    <div className="bg-white p-10 rounded-[3.5rem] border border-emerald-50 shadow-sm flex flex-col md:flex-row justify-between items-center gap-8 relative overflow-hidden group">
                        {/* Decorative Background */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-bl-[8rem] -z-0 opacity-50 group-hover:scale-110 transition-transform duration-700"></div>
                        
                        <div className="flex flex-col md:flex-row items-center gap-8 z-10 w-full md:w-auto">
                            {/* Visual Avatar/Foto Profil */}
                            <div className="relative flex-shrink-0">
                                <div className="w-28 h-28 bg-emerald-950 rounded-[3rem] flex items-center justify-center text-emerald-100 font-black italic text-5xl shadow-2xl rotate-3 group-hover:rotate-0 transition-transform duration-500 border-4 border-white ring-4 ring-emerald-100">
                                    {auth.user.name.substring(0, 1)}
                                </div>
                                {/* Badge Verifikasi */}
                                <div className="absolute -bottom-2 -right-2 bg-white p-1 rounded-full shadow-lg">
                                    <CheckBadgeIcon className="w-8 h-8 text-emerald-500" />
                                </div>
                            </div>
                            
                            {/* Data Profil Ringkas */}
                            <div className="text-center md:text-left space-y-4">
                                <div className="space-y-1">
                                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-500">
                                        Selamat Datang, {isAdmin ? 'Administrator' : 'Mitra Petani Desa'}
                                    </p>
                                    <h3 className="text-4xl font-black text-emerald-950 uppercase italic leading-none tracking-tighter">
                                        {auth.user.name}
                                    </h3>
                                </div>
                                
                                <div className="flex flex-col md:flex-row gap-4 pt-2">
                                    {/* Item Profil 1 */}
                                    <div className="flex items-center gap-3 bg-slate-50 px-5 py-3 rounded-full border border-slate-100 shadow-inner">
                                        <IdentificationIcon className="w-5 h-5 text-slate-400" />
                                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Role:</span>
                                        <span className="text-[11px] font-black text-emerald-950 uppercase tracking-widest">{auth.user.role}</span>
                                    </div>
                                    {/* Item Profil 2 */}
                                    <div className="flex items-center gap-3 bg-slate-50 px-5 py-3 rounded-full border border-slate-100 shadow-inner">
                                        <EnvelopeIcon className="w-5 h-5 text-slate-400" />
                                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Email:</span>
                                        <span className="text-[11px] font-black text-emerald-950 tracking-widest">{auth.user.email}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tombol Aksi Cepat */}
                        <div className="z-10 flex flex-col md:flex-row gap-4 w-full md:w-auto">
                            {/* Tombol Spesifik Admin */}
                            {isAdmin && (
                                <Link 
                                    href="/admin/farmers/create"
                                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all shadow-lg shadow-emerald-100 flex items-center justify-center gap-3 active:scale-95"
                                >
                                    <UserPlusIcon className="w-5 h-5" /> Daftar Mitra
                                </Link>
                            )}

                            {/* Tombol Spesifik Petani/Katalog */}
                            <Link 
                                href="/products/create"
                                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all shadow-lg shadow-orange-200 flex items-center justify-center gap-3 active:scale-95"
                            >
                                <PlusIcon className="w-5 h-5" /> {isAdmin ? 'Produk Baru' : 'Jual Borongan'}
                            </Link>
                        </div>
                    </div>

                    {/* Stats Grid - DIINSPIRASI DARI GAMBAR DASHBOARD */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Total Mitra/Earning */}
                        {isAdmin && (
                            <Link href="/admin/farmers" className="bg-white p-10 rounded-[3.5rem] border border-emerald-50 shadow-sm group hover:border-emerald-500 transition-all duration-500 block relative overflow-hidden">
                                <div className="relative z-10">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="p-4 bg-emerald-50 rounded-2xl text-emerald-600">
                                            <UserGroupIcon className="w-8 h-8" />
                                        </div>
                                        <ArrowUpRightIcon className="w-5 h-5 text-slate-200 group-hover:text-emerald-500 transition-colors" />
                                    </div>
                                    <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-2">Total Mitra Desa</p>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-7xl font-black text-emerald-950 tracking-tighter">{totalFarmers}</span>
                                        <span className="text-emerald-500 text-sm font-black uppercase italic">Mitra</span>
                                    </div>
                                </div>
                            </Link>
                        )}

                        {/* Total Products */}
                        <Link href="/products" className="bg-white p-10 rounded-[3.5rem] border border-emerald-50 shadow-sm group hover:border-orange-500 transition-all duration-500 block relative overflow-hidden">
                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-4 bg-orange-50 rounded-2xl text-orange-600">
                                        <ShoppingBagIcon className="w-8 h-8" />
                                    </div>
                                    <ArrowUpRightIcon className="w-5 h-5 text-slate-200 group-hover:text-orange-500 transition-colors" />
                                </div>
                                <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-2">
                                    {isAdmin ? 'Katalog Produk Desa' : 'Jumlah Produk Saya'}
                                </p>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-7xl font-black text-emerald-950 tracking-tighter">{totalProducts}</span>
                                    <span className="text-orange-500 text-sm font-black uppercase italic">Item</span>
                                </div>
                            </div>
                        </Link>

                        {/* Management Card */}
                        <div className="bg-emerald-950 p-10 rounded-[3.5rem] shadow-2xl shadow-emerald-900/30 flex flex-col justify-between relative overflow-hidden group">
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-900 rounded-full opacity-50 transition-transform group-hover:scale-150 duration-700"></div>
                            
                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-emerald-400 mb-6 border border-white/10">
                                    <UserGroupIcon className="w-6 h-6" />
                                </div>
                                <h4 className="text-white text-2xl font-black italic uppercase leading-none tracking-tighter">
                                    Kelola<br />Ecosystem Sekarang
                                </h4>
                                <p className="text-emerald-300/50 text-[10px] font-bold uppercase tracking-[0.2em] mt-4">
                                    Digital Hub Bah Sumbu v1.2
                                </p>
                            </div>
                            
                            <Link 
                                href={isAdmin ? "/admin/farmers" : "/products"}
                                className="relative z-10 mt-12 bg-white text-emerald-950 text-center py-5 rounded-[2.5rem] font-black text-[11px] uppercase tracking-[0.2em] hover:bg-emerald-100 transition-all active:scale-95 shadow-xl"
                            >
                                {isAdmin ? 'Kelola Petani' : 'Lihat Katalog'}
                            </Link>
                        </div>
                    </div>

                    {/* Bottom Info */}
                    <div className="text-center pt-8 border-t border-emerald-50">
                        <p className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.5em]">
                            Bah Sumbu Ecosystem &copy; 2026 • Firman Azhary
                        </p>
                    </div>

                </div>
            </div>
        </AuthenticatedLayout>
    );
}