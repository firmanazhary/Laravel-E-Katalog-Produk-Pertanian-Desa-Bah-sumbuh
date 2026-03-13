import React from 'react';
import { Link } from '@inertiajs/react';

export default function AuthenticatedLayout({ user, header, children }) {
    return (
        <div className="min-h-screen bg-[#F8FAFC]">
            <nav className="bg-white border-b border-emerald-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-20">
                        <div className="flex items-center">
                            <Link href="/dashboard" className="text-2xl font-black text-emerald-950 italic uppercase tracking-tighter">
                                Bah Sumbu<span className="text-orange-500">.</span>
                            </Link>
                        </div>
                        <div className="flex items-center gap-6">
                            <span className="text-[10px] font-black text-emerald-900/40 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full">
                                {user.role}
                            </span>
                            <Link 
                                href="/logout" 
                                method="post" 
                                as="button" 
                                className="text-[10px] font-black text-red-500 uppercase tracking-widest hover:text-red-700 transition-colors"
                            >
                                Keluar
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {header && (
                <header className="bg-white shadow-sm border-b border-emerald-50">
                    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>
            )}

            <main>{children}</main>
        </div>
    );
}