import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Index({ auth, farmers, flash }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div>
                        <h2 className="text-3xl font-black text-emerald-950 italic uppercase tracking-tighter">
                            Daftar <span className="text-emerald-500">Petani Desa</span>
                        </h2>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Kelola akun mitra Bah Sumbu</p>
                    </div>
                    <Link 
                        href="/admin/farmers/create" 
                        className="bg-emerald-900 hover:bg-orange-600 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-xl shadow-emerald-900/10"
                    >
                        + Tambah Petani
                    </Link>
                </div>
            }
        >
            <Head title="Manajemen Petani" />

            <div className="py-12 max-w-7xl mx-auto sm:px-6 lg:px-8">
                {flash?.success && (
                    <div className="mb-8 p-5 bg-emerald-600 text-white rounded-3xl font-bold text-sm shadow-lg">
                        {flash.success}
                    </div>
                )}

                <div className="bg-white rounded-[3rem] border border-emerald-50 shadow-sm overflow-hidden">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-slate-50/50 border-b border-slate-100">
                                <th className="p-8 text-[10px] font-black text-slate-400 uppercase tracking-widest">Informasi Petani</th>
                                <th className="p-8 text-[10px] font-black text-slate-400 uppercase tracking-widest">WhatsApp</th>
                                <th className="p-8 text-[10px] font-black text-slate-400 uppercase tracking-widest">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {farmers.map((farmer) => (
                                <tr key={farmer.id} className="hover:bg-slate-50/50 transition-colors">
                                    <td className="p-8">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-700 font-black italic">
                                                {farmer.name.substring(0, 1)}
                                            </div>
                                            <div>
                                                <p className="font-black text-emerald-950 text-sm uppercase">{farmer.name}</p>
                                                <p className="text-xs text-slate-400 font-medium">{farmer.email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-8">
                                        <span className="text-xs font-bold text-slate-600 bg-slate-100 px-4 py-2 rounded-full uppercase tracking-tighter">
                                            {farmer.phone_number || '-'}
                                        </span>
                                    </td>
                                    <td className="p-8">
                                        <div className="flex gap-4">
                                            <Link href={`/admin/farmers/${farmer.id}/edit`} className="text-[10px] font-black text-emerald-600 uppercase tracking-widest hover:text-emerald-950">Edit</Link>
                                            <button className="text-[10px] font-black text-red-400 uppercase tracking-widest hover:text-red-600">Hapus</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {farmers.length === 0 && (
                                <tr>
                                    <td colSpan="3" className="p-20 text-center text-slate-400 font-bold uppercase text-xs tracking-widest italic">Belum ada data petani terdaftar.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}