import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, Link } from '@inertiajs/react';

export default function Edit({ auth, product }) {
    const { data, setData, post, processing, errors } = useForm({
        _method: 'PUT', // WAJIB: Untuk handle update file multipart di Laravel
        name: product.name || '',
        price: product.price || '',
        category: product.category || '',
        quality: product.quality || 'Grade A',
        description: product.description || '',
        image: null,
    });

    const submit = (e) => {
        e.preventDefault();
        // Gunakan post ke URL manual agar tidak error 'route is not defined'
        // Laravel akan membaca _method: 'PUT' di dalam data
        post(`/products/${product.id}`); 
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-2 bg-orange-500 rounded-full"></div>
                        <h2 className="text-3xl font-black text-emerald-950 italic uppercase tracking-tighter">
                            Edit <span className="text-emerald-500">Produk</span>
                        </h2>
                    </div>
                    <Link 
                        href="/products" 
                        className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-emerald-900 transition-colors"
                    >
                        ← Kembali ke Katalog
                    </Link>
                </div>
            }
        >
            <Head title={`Edit ${product.name}`} />

            <div className="py-12 max-w-5xl mx-auto sm:px-6 lg:px-8 px-4">
                <div className="bg-white p-10 md:p-12 rounded-[3.5rem] border border-emerald-50 shadow-sm relative overflow-hidden">
                    {/* Decor */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-[4rem] -z-0 opacity-40"></div>

                    <form onSubmit={submit} className="space-y-10 relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                            
                            {/* Kiri: Preview & Upload Foto */}
                            <div className="lg:col-span-5 space-y-4">
                                <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-emerald-900/40 ml-4">
                                    Visual Produk
                                </label>
                                <div className="relative w-full h-[350px] bg-slate-50 rounded-[3rem] overflow-hidden group border-4 border-white shadow-xl ring-1 ring-emerald-50">
                                    <img 
                                        src={data.image ? URL.createObjectURL(data.image) : `/storage/${product.image}`} 
                                        className="w-full h-full object-cover transition duration-700 group-hover:scale-110" 
                                        alt="Preview"
                                    />
                                    <input 
                                        type="file" 
                                        onChange={e => setData('image', e.target.files[0])} 
                                        className="absolute inset-0 opacity-0 cursor-pointer z-20" 
                                    />
                                    <div className="absolute inset-0 bg-emerald-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center pointer-events-none z-10">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-emerald-400 mb-2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15a2.25 2.25 0 002.25-2.25V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                                        </svg>
                                        <span className="text-white text-[10px] font-black uppercase tracking-widest">Ganti Gambar</span>
                                    </div>
                                </div>
                                {errors.image && <p className="text-[10px] text-red-500 font-bold ml-4 uppercase">{errors.image}</p>}
                            </div>

                            {/* Kanan: Input Form */}
                            <div className="lg:col-span-7 space-y-6">
                                <div>
                                    <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-emerald-900/40 ml-4 mb-2">Nama Komoditas</label>
                                    <input 
                                        type="text" 
                                        value={data.name} 
                                        onChange={e => setData('name', e.target.value)} 
                                        className="w-full bg-emerald-50/50 border-none rounded-[1.5rem] px-6 py-4 text-sm font-bold text-emerald-950 focus:ring-2 focus:ring-emerald-500 transition-all shadow-inner"
                                        placeholder="Contoh: Sayur Kangkung Segar"
                                    />
                                    {errors.name && <p className="text-[10px] text-red-500 font-bold mt-2 ml-4 uppercase">{errors.name}</p>}
                                </div>

                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-emerald-900/40 ml-4 mb-2">Harga (Rp)</label>
                                        <input 
                                            type="number" 
                                            value={data.price} 
                                            onChange={e => setData('price', e.target.value)} 
                                            className="w-full bg-emerald-50/50 border-none rounded-[1.5rem] px-6 py-4 text-sm font-bold text-emerald-950 focus:ring-2 focus:ring-emerald-500 transition-all shadow-inner"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-emerald-900/40 ml-4 mb-2">Kualitas</label>
                                        <select 
                                            value={data.quality} 
                                            onChange={e => setData('quality', e.target.value)} 
                                            className="w-full bg-emerald-50/50 border-none rounded-[1.5rem] px-6 py-4 text-sm font-bold text-emerald-950 focus:ring-2 focus:ring-emerald-500 transition-all shadow-inner"
                                        >
                                            <option value="Grade A">Grade A (Premium)</option>
                                            <option value="Grade B">Grade B (Standar)</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-emerald-900/40 ml-4 mb-2">Kategori</label>
                                    <input 
                                        type="text" 
                                        value={data.category} 
                                        onChange={e => setData('category', e.target.value)} 
                                        className="w-full bg-emerald-50/50 border-none rounded-[1.5rem] px-6 py-4 text-sm font-bold text-emerald-950 focus:ring-2 focus:ring-emerald-500 transition-all shadow-inner"
                                        placeholder="Contoh: Sayur, Buah, Daging"
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-emerald-900/40 ml-6 mb-2">Deskripsi Lengkap</label>
                            <textarea 
                                rows="4" 
                                value={data.description} 
                                onChange={e => setData('description', e.target.value)} 
                                className="w-full bg-emerald-50/50 border-none rounded-[2.5rem] px-8 py-6 text-sm font-bold text-emerald-950 focus:ring-2 focus:ring-emerald-500 transition-all shadow-inner italic"
                                placeholder="Jelaskan detail produk kamu..."
                            ></textarea>
                            {errors.description && <p className="text-[10px] text-red-500 font-bold mt-2 ml-6 uppercase">{errors.description}</p>}
                        </div>

                        <div className="flex items-center justify-end gap-6 pt-6 border-t border-emerald-50">
                            <Link href="/products" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-red-500 transition-colors">Batal</Link>
                            <button 
                                type="submit" 
                                disabled={processing} 
                                className="bg-emerald-950 text-white px-14 py-5 rounded-[2rem] font-black text-xs uppercase tracking-[0.2em] hover:bg-orange-600 transition-all shadow-2xl shadow-emerald-900/20 active:scale-95 disabled:opacity-50"
                            >
                                {processing ? 'Menyimpan...' : 'Simpan Perubahan'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}