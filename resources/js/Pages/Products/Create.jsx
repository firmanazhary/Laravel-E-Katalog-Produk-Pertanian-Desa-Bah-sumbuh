import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, Link } from '@inertiajs/react';

export default function Create({ auth, farmers }) {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        price: '',
        category: '',
        quality: 'Premium',
        description: '',
        image: null,
        user_id: auth.user.role === 'admin' ? '' : auth.user.id,
    });

    const submit = (e) => {
        e.preventDefault();
        // Menggunakan URL manual agar tidak bentrok dengan Ziggy
        post('/products'); 
    };

    return (
        <AuthenticatedLayout 
            user={auth.user}
            header={<h2 className="text-3xl font-black text-emerald-950 italic uppercase tracking-tighter">Tambah <span className="text-emerald-500">Produk Baru</span></h2>}
        >
            <Head title="Tambah Produk" />
            <div className="py-12 max-w-4xl mx-auto sm:px-6 lg:px-8 font-sans">
                <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-emerald-50">
                    <form onSubmit={submit} className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400">Foto Komoditas</label>
                                <div className="relative w-full h-64 bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2.5rem] flex flex-col items-center justify-center overflow-hidden group hover:border-emerald-500 transition-colors">
                                    {data.image ? (
                                        <img src={URL.createObjectURL(data.image)} className="w-full h-full object-cover" />
                                    ) : (
                                        <div className="text-center">
                                            <p className="text-[10px] font-black text-slate-400 uppercase">Pilih Gambar</p>
                                        </div>
                                    )}
                                    <input type="file" onChange={e => setData('image', e.target.files[0])} className="absolute inset-0 opacity-0 cursor-pointer" />
                                </div>
                                {errors.image && <div className="text-red-500 text-[10px] font-bold uppercase">{errors.image}</div>}
                            </div>

                            <div className="space-y-5">
                                {auth.user.role === 'admin' && (
                                    <select value={data.user_id} onChange={e => setData('user_id', e.target.value)} className="w-full bg-slate-50 border-none rounded-2xl text-sm font-bold text-emerald-900 focus:ring-2 focus:ring-emerald-500 px-5 py-4">
                                        <option value="">Pilih Pemilik (Petani)</option>
                                        {farmers.map(f => <option key={f.id} value={f.id}>{f.name}</option>)}
                                    </select>
                                )}

                                <input type="text" placeholder="Nama Produk" value={data.name} onChange={e => setData('name', e.target.value)} className="w-full bg-slate-50 border-none rounded-2xl text-sm font-bold px-5 py-4 focus:ring-2 focus:ring-emerald-500" />
                                
                                <div className="grid grid-cols-2 gap-4">
                                    <input type="number" placeholder="Harga" value={data.price} onChange={e => setData('price', e.target.value)} className="w-full bg-slate-50 border-none rounded-2xl text-sm font-bold px-5 py-4 focus:ring-2 focus:ring-emerald-500" />
                                    <select value={data.category} onChange={e => setData('category', e.target.value)} className="w-full bg-slate-50 border-none rounded-2xl text-sm font-bold px-5 py-4 focus:ring-2 focus:ring-emerald-500">
                                        <option value="">Kategori</option>
                                        <option value="Pertanian">Pertanian</option>
                                        <option value="Peternakan">Peternakan</option>
                                    </select>
                                </div>

                                <select value={data.quality} onChange={e => setData('quality', e.target.value)} className="w-full bg-slate-50 border-none rounded-2xl text-sm font-bold px-5 py-4 focus:ring-2 focus:ring-emerald-500">
                                    <option value="Premium">Premium (Terbaik)</option>
                                    <option value="Standar">Standar (Biasa)</option>
                                </select>
                            </div>
                        </div>
                        <textarea rows="4" placeholder="Tuliskan deskripsi produk di sini..." value={data.description} onChange={e => setData('description', e.target.value)} className="w-full bg-slate-50 border-none rounded-[2rem] text-sm font-bold px-6 py-5 focus:ring-2 focus:ring-emerald-500"></textarea>
                        
                        <div className="flex gap-4">
                            <Link href="/products" className="w-1/3 bg-slate-100 text-slate-500 text-center py-4 rounded-3xl font-black uppercase text-[10px] tracking-widest hover:bg-slate-200 transition">Batal</Link>
                            <button disabled={processing} className="flex-1 bg-emerald-900 text-white py-4 rounded-3xl font-black uppercase tracking-widest hover:bg-orange-500 transition disabled:opacity-50 shadow-xl shadow-emerald-900/10">
                                {processing ? 'Menyimpan...' : 'Simpan Produk'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}