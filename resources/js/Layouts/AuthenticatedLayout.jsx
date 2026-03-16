import React from 'react';
import { Link } from '@inertiajs/react';

export default function AuthenticatedLayout({ user, header, children }) {
    return (
        <div className="min-h-screen bg-[#FDFCF8] font-sans">
            {/* Top Navigation */}
            <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-[100] border-b border-emerald-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-24">
                        
                        {/* Logo Area */}
                        <div className="flex items-center gap-4">
                            <Link href="/dashboard" className="flex items-center gap-3 group">
                                <div className="w-10 h-10 bg-emerald-950 rounded-xl flex items-center justify-center text-white font-black italic shadow-lg rotate-3 group-hover:rotate-0 transition-transform">
                                    BS
                                </div>
                                <h1 className="text-2xl font-black text-emerald-950 italic uppercase tracking-tighter">
                                    Bah Sumbu<span className="text-orange-500">.</span>
                                </h1>
                            </Link>
                        </div>

                        {/* User Profile Navigation Area */}
                        <div className="flex items-center gap-4">
                            {/* Profile Info Card */}
                            <div className="hidden md:flex items-center gap-3 bg-emerald-50/50 px-4 py-2 rounded-2xl border border-emerald-100">
                                <div className="text-right">
                                    <p className="text-[10px] font-black text-emerald-950 uppercase leading-none">{user.name}</p>
                                    <p className="text-[8px] font-bold text-emerald-500 uppercase tracking-[0.2em] mt-1">{user.role}</p>
                                </div>
                                <div className="w-8 h-8 bg-emerald-950 rounded-lg flex items-center justify-center text-white text-xs font-black italic">
                                    {user.name.substring(0, 1)}
                                </div>
                            </div>

                            {/* Logout Button */}
                            <Link 
                                href="/logout" 
                                method="post" 
                                as="button" 
                                className="p-3 bg-white border border-red-50 text-red-500 rounded-2xl hover:bg-red-500 hover:text-white transition-all duration-300 shadow-sm active:scale-95"
                                title="Keluar Sistem"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Sub-Header Section */}
            {header && (
                <div className="bg-white border-b border-emerald-50 relative overflow-hidden">
                    {/* Background Decor */}
                    <div className="absolute top-0 right-0 w-64 h-full bg-emerald-50/30 rounded-l-full -z-0 opacity-40"></div>
                    
                    <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8 relative z-10">
                        {header}
                    </div>
                </div>
            )}

            {/* Main Page Content */}
            <main className="max-w-7xl mx-auto py-6 relative z-0">
                {children}
            </main>

            {/* Optional: Dashboard Footer */}
            <footer className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
                <div className="border-t border-emerald-50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.5em]">
                        Bah Sumbu Digital Dashboard &copy; 2026
                    </p>
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                        <span className="text-[9px] font-black text-emerald-950 uppercase tracking-widest italic">System Online</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}