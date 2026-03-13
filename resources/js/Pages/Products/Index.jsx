import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Index({ auth, products, flash }) {
    const { delete: destroy } = useForm();

    const handleDelete = (id) => {
        if (confirm('Hapus produk ini dari katalog?')) {
            // GANTI: Menggunakan URL manual agar tidak crash
            destroy(`/products/${id}`);
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <span className="bg-emerald-100 text-emerald-700 text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full">E-Katalog</span>
                            <span className="text-slate-300">•</span>
                            <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Desa Bah Sumbu</span>
                        </div>
                        <h2 className="text-3xl font-black text-emerald-900 leading-none tracking-tighter italic uppercase">
                            Katalog <span className="text-emerald-600">Produk</span>
                        </h2>
                    </div>
                    
                    {/* GANTI: href manual */}
                    <Link href="/products/create" className="group inline-flex items-center gap-3 bg-emerald-900 hover:bg-orange-600 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all duration-500 shadow-xl shadow-emerald-200">
                        <svg className="w-4 h-4 group-hover:rotate-90 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 4v16m8-8H4"/></svg>
                        Tambah Produk
                    </Link>
                </div>
            }
        >
            <Head title="Katalog Produk" />

            <div className="py-12 max-w-7xl mx-auto sm:px-6 lg:px-8">
                {flash?.success && (
                    <div className="mb-8 p-5 bg-emerald-600 text-white rounded-3xl font-bold text-sm shadow-lg">
                        {flash.success}
                    </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="bg-white rounded-[3rem] border border-emerald-50 shadow-sm overflow-hidden group hover:shadow-2xl hover:shadow-emerald-100 transition-all duration-500">
                            <div className="relative h-60 overflow-hidden">
                                <img src={`/storage/${product.image}`} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute top-5 left-5">
                                    <span className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-widest text-emerald-900 shadow-sm border border-emerald-50">
                                        {product.quality || 'Standar'}
                                    </span>
                                </div>
                            </div>

                            <div className="p-8">
                                <div className="mb-4">
                                    <p className="text-[9px] font-black text-orange-500 uppercase tracking-[0.2em] mb-1">{product.category}</p>
                                    <h3 className="text-lg font-black text-emerald-900 uppercase italic tracking-tighter leading-tight">{product.name}</h3>
                                    {auth?.user?.role === 'admin' && (
                                        <p className="text-[8px] font-bold text-slate-400 uppercase mt-1 italic">Oleh: {product.user?.name}</p>
                                    )}
                                </div>

                                <div className="flex items-baseline gap-1 mb-6">
                                    <span className="text-xs font-bold text-emerald-600 italic">Rp</span>
                                    <span className="text-2xl font-black text-emerald-900 tracking-tighter">
                                        {new Intl.NumberFormat('id-ID').format(product.price)}
                                    </span>
                                </div>

                                <div className="flex gap-2 pt-6 border-t border-emerald-50">
                                    {/* GANTI: href manual untuk edit */}
                                    <Link href={`/products/${product.id}/edit`} className="flex-1 bg-emerald-50 text-emerald-700 text-center py-3 rounded-xl font-black text-[9px] uppercase tracking-widest hover:bg-emerald-900 hover:text-white transition-all duration-300">
                                        Edit
                                    </Link>
                                    <button onClick={() => handleDelete(product.id)} className="p-3 bg-red-50 text-red-400 rounded-xl hover:bg-red-500 hover:text-white transition-all">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}