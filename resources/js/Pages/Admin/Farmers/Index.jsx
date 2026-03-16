import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router } from '@inertiajs/react'; // Tambahkan 'router'

export default function Index({ auth, farmers, flash }) {
    
    // FUNGSI DELETE
    const handleDelete = (id, name) => {
        if (confirm(`Apakah Anda yakin ingin menghapus akun petani: ${name}? Semua produk terkait juga mungkin akan terhapus.`)) {
            router.delete(`/admin/farmers/${id}`, {
                preserveScroll: true,
                onSuccess: () => {
                    // Berhasil dihapus
                }
            });
        }
    };

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

            <div className="py-12 max-w-7xl mx-auto sm:px-6 lg:px-8 px-4">
                {flash?.success && (
                    <div className="mb-8 p-5 bg-emerald-600 text-white rounded-[2rem] font-bold text-sm shadow-lg animate-bounce">
                        {flash.success}
                    </div>
                )}

                <div className="bg-white rounded-[3rem] border border-emerald-50 shadow-sm overflow-hidden overflow-x-auto">
                    <table className="w-full text-left min-w-[600px]">
                        <thead>
                            <tr className="bg-slate-50/50 border-b border-slate-100">
                                <th className="p-8 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Informasi Petani</th>
                                <th className="p-8 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">WhatsApp</th>
                                <th className="p-8 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] text-center">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {farmers.map((farmer) => (
                                <tr key={farmer.id} className="hover:bg-slate-50/50 transition-colors group">
                                    <td className="p-8">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-emerald-950 rounded-2xl flex items-center justify-center text-emerald-400 font-black italic shadow-inner">
                                                {farmer.name.substring(0, 1)}
                                            </div>
                                            <div>
                                                <p className="font-black text-emerald-950 text-sm uppercase tracking-tight">{farmer.name}</p>
                                                <p className="text-[10px] text-slate-400 font-bold">{farmer.email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-8">
                                        <span className="text-[10px] font-black text-emerald-700 bg-emerald-50 px-4 py-2 rounded-full uppercase tracking-widest border border-emerald-100">
                                            {farmer.phone_number || 'Belum Ada'}
                                        </span>
                                    </td>
                                    <td className="p-8">
                                        <div className="flex justify-center gap-6">
                                            <Link 
                                                href={`/admin/farmers/${farmer.id}/edit`} 
                                                className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.2em] hover:text-orange-500 transition-colors"
                                            >
                                                Edit
                                            </Link>
                                            {/* GANTI: Sekarang memanggil fungsi handleDelete */}
                                            <button 
                                                onClick={() => handleDelete(farmer.id, farmer.name)}
                                                className="text-[10px] font-black text-red-400 uppercase tracking-[0.2em] hover:text-red-700 transition-colors"
                                            >
                                                Hapus
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {farmers.length === 0 && (
                                <tr>
                                    <td colSpan="3" className="p-20 text-center text-slate-300 font-black uppercase text-[10px] tracking-[0.5em] italic">Belum ada data petani terdaftar.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}