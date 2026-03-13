import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { 
    UserGroupIcon, 
    ShoppingBagIcon, 
    ArrowUpRightIcon,
    PlusIcon,
    UserPlusIcon 
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
                    
                    {/* Welcome Section */}
                    <div className="bg-white p-10 rounded-[3.5rem] border border-emerald-50 shadow-sm flex flex-col md:flex-row justify-between items-center gap-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-[5rem] -z-0 opacity-50"></div>
                        
                        <div className="flex items-center gap-6 z-10">
                            <div className="w-24 h-24 bg-emerald-950 rounded-[2.5rem] flex items-center justify-center text-emerald-100 font-black italic text-4xl shadow-2xl rotate-3">
                                {auth.user.name.substring(0, 1)}
                            </div>
                            <div>
                                <h3 className="text-3xl font-black text-emerald-950 uppercase italic leading-tight">Halo, {auth.user.name}!</h3>
                                <p className="text-slate-400 text-[11px] font-black uppercase tracking-[0.3em] mt-2 flex items-center gap-2">
                                    <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                                    {isAdmin ? 'Administrator Utama Desa' : 'Partner Mitra Desa Bah Sumbu'}
                                </p>
                            </div>
                        </div>

                        <div className="z-10 flex flex-wrap gap-4 justify-center md:justify-end">
                            {/* Tombol Lihat Produk */}
                            <Link 
                                href="/products"
                                className="bg-slate-100 hover:bg-emerald-950 hover:text-white text-emerald-950 p-4 rounded-3xl transition-all duration-300 shadow-sm"
                            >
                                <ShoppingBagIcon className="w-6 h-6" />
                            </Link>

                            {/* Tombol Tambah Petani - KHUSUS ADMIN */}
                            {isAdmin && (
                                <Link 
                                    href="/admin/farmers/create"
                                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-3xl font-black text-[10px] uppercase tracking-widest transition-all shadow-lg shadow-emerald-100 flex items-center gap-2"
                                >
                                    <UserPlusIcon className="w-4 h-4" /> Tambah Petani
                                </Link>
                            )}

                            {/* Tombol Tambah Produk */}
                            <Link 
                                href="/products/create"
                                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-3xl font-black text-[10px] uppercase tracking-widest transition-all shadow-lg shadow-orange-200 flex items-center gap-2"
                            >
                                <PlusIcon className="w-4 h-4" /> Tambah Produk
                            </Link>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Total Farmers - Admin Only */}
                        {isAdmin && (
                            <Link href="/admin/farmers" className="bg-white p-10 rounded-[3.5rem] border border-emerald-50 shadow-sm group hover:border-emerald-500 transition-all duration-500 block">
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
                            </Link>
                        )}

                        {/* Total Products */}
                        <Link href="/products" className="bg-white p-10 rounded-[3.5rem] border border-emerald-50 shadow-sm group hover:border-orange-500 transition-all duration-500 block">
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-4 bg-orange-50 rounded-2xl text-orange-600">
                                    <ShoppingBagIcon className="w-8 h-8" />
                                </div>
                                <ArrowUpRightIcon className="w-5 h-5 text-slate-200 group-hover:text-orange-500 transition-colors" />
                            </div>
                            <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-2">
                                {isAdmin ? 'Katalog Produk Desa' : 'Produk Saya'}
                            </p>
                            <div className="flex items-baseline gap-2">
                                <span className="text-7xl font-black text-emerald-950 tracking-tighter">{totalProducts}</span>
                                <span className="text-orange-500 text-sm font-black uppercase italic">Item</span>
                            </div>
                        </Link>

                        {/* Management Card */}
                        <div className="bg-emerald-950 p-10 rounded-[3.5rem] shadow-2xl shadow-emerald-900/30 flex flex-col justify-between relative overflow-hidden group">
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-900 rounded-full opacity-50 transition-transform group-hover:scale-150 duration-700"></div>
                            
                            <div className="relative z-10">
                                <h4 className="text-white text-2xl font-black italic uppercase leading-none tracking-tighter">
                                    Kelola<br />Sistem Sekarang
                                </h4>
                                <p className="text-emerald-300/50 text-[10px] font-bold uppercase tracking-[0.2em] mt-4">
                                    E-Katalog Digital Bah Sumbu v1.2
                                </p>
                            </div>
                            
                            <Link 
                                href={isAdmin ? "/admin/farmers" : "/products"}
                                className="relative z-10 mt-12 bg-white text-emerald-950 text-center py-5 rounded-[2rem] font-black text-[11px] uppercase tracking-[0.2em] hover:bg-emerald-100 transition-all active:scale-95 shadow-xl"
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