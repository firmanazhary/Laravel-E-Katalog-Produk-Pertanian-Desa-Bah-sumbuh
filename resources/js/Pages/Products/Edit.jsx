import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, router } from '@inertiajs/react';

export default function Edit({ auth, product }) {
    const { data, setData, post, processing, errors } = useForm({
        _method: 'PUT', // Penting untuk upload file saat update
        name: product.name,
        price: product.price,
        category: product.category,
        quality: product.quality,
        description: product.description,
        image: null,
    });

    const submit = (e) => {
        e.preventDefault();
        // Gunakan post dengan _method PUT karena browser tidak dukung PUT untuk file secara native
        post(route('products.update', product.id));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="text-3xl font-black text-emerald-900 italic uppercase tracking-tighter">Edit <span className="text-emerald-500">Produk</span></h2>}
        >
            <Head title="Edit Produk" />
            <div className="py-12 max-w-4xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-emerald-50">
                    <form onSubmit={submit} className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400">Ubah Foto (Opsional)</label>
                                <div className="relative w-full h-64 bg-emerald-50 rounded-[2.5rem] overflow-hidden group">
                                    <img src={data.image ? URL.createObjectURL(data.image) : `/storage/${product.image}`} className="w-full h-full object-cover transition duration-500 group-hover:scale-105" />
                                    <input type="file" onChange={e => setData('image', e.target.files[0])} className="absolute inset-0 opacity-0 cursor-pointer" />
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                                        <span className="text-white text-[10px] font-black uppercase tracking-widest">Klik untuk ganti</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-5">
                                <div>
                                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Nama Produk</label>
                                    <input type="text" value={data.name} onChange={e => setData('name', e.target.value)} className="w-full bg-slate-50 border-none rounded-2xl px-5 py-4 text-sm font-bold text-emerald-900 focus:ring-2 focus:ring-emerald-500" />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Harga (Rp)</label>
                                        <input type="number" value={data.price} onChange={e => setData('price', e.target.value)} className="w-full bg-slate-50 border-none rounded-2xl px-5 py-4 text-sm font-bold text-emerald-900" />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Kualitas</label>
                                        <select value={data.quality} onChange={e => setData('quality', e.target.value)} className="w-full bg-slate-50 border-none rounded-2xl px-5 py-4 text-sm font-bold text-emerald-900">
                                            <option value="Premium">Premium</option>
                                            <option value="Standar">Standar</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Deskripsi Produk</label>
                            <textarea rows="4" value={data.description} onChange={e => setData('description', e.target.value)} className="w-full bg-slate-50 border-none rounded-[2rem] px-6 py-5 text-sm font-bold text-emerald-900"></textarea>
                        </div>

                        <div className="flex items-center justify-end gap-4 pt-6">
                            <button type="submit" disabled={processing} className="bg-emerald-900 text-white px-12 py-4 rounded-3xl font-black text-xs uppercase tracking-widest hover:bg-orange-600 transition shadow-xl disabled:opacity-50">
                                {processing ? 'Memproses...' : 'Update Produk'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}