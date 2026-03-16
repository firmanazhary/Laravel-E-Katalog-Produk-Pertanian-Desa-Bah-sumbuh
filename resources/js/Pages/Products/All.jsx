import React from 'react';
import GuestLayout from '@/Layouts/GuestLayouts';
import { Head, Link, router } from '@inertiajs/react';

export default function All({ products, farmers, categories, filters }) {
    
    // Fungsi untuk handle perubahan filter (Kategori & Petani saja)
    const handleFilter = (key, value) => {
        router.get('/products-all', { ...filters, [key]: value }, {
            preserveState: true,
            replace: true
        });
    };

    return (
        <GuestLayout>
            <Head title="Katalog Lengkap | Desa Bah Sumbu" />
            
            <section className="py-16 px-6 bg-[#FDFCF8]">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-12">
                        
                        {/* SIDEBAR FILTER */}
                        <aside className="w-full md:w-64 space-y-8">
                            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-emerald-50 sticky top-24">
                                <h2 className="text-xl font-black text-emerald-950 mb-6 uppercase tracking-tighter italic border-b-2 border-orange-500 pb-2 inline-block">Saring</h2>
                                
                                <div className="space-y-6 mt-4">
                                    {/* Filter Kategori */}
                                    <div>
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 block mb-3">Kategori Komoditas</label>
                                        <select 
                                            value={filters.category || ''} 
                                            onChange={(e) => handleFilter('category', e.target.value)}
                                            className="w-full bg-slate-50 border-none rounded-xl text-sm p-4 font-bold text-emerald-900 focus:ring-2 focus:ring-emerald-500 transition-all"
                                        >
                                            <option value="">Semua Kategori</option>
                                            {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                                        </select>
                                    </div>

                                    {/* Filter Petani */}
                                    <div>
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 block mb-3">Mitra Petani</label>
                                        <select 
                                            value={filters.farmer || ''} 
                                            onChange={(e) => handleFilter('farmer', e.target.value)}
                                            className="w-full bg-slate-50 border-none rounded-xl text-sm p-4 font-bold text-emerald-900 focus:ring-2 focus:ring-emerald-500 transition-all"
                                        >
                                            <option value="">Semua Petani</option>
                                            {farmers.map(f => <option key={f.id} value={f.id}>{f.name}</option>)}
                                        </select>
                                    </div>

                                    <Link 
                                        href="/products-all" 
                                        className="block text-center text-[10px] font-black uppercase tracking-widest text-red-500 mt-8 hover:text-red-700 transition"
                                    >
                                        × Bersihkan Filter
                                    </Link>
                                </div>
                            </div>
                        </aside>

                        {/* MAIN CONTENT */}
                        <main className="flex-1">
                            <div className="mb-12 flex flex-col md:flex-row justify-between items-baseline gap-4 px-4">
                                <div>
                                    <h2 className="text-4xl font-black text-emerald-950 uppercase tracking-tighter italic">Etalase <span className="text-orange-500">Desa</span></h2>
                                    <p className="text-slate-400 text-sm mt-1 font-medium italic underline decoration-orange-300 underline-offset-4">Menampilkan {products.data.length} produk komoditas unggulan</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {products.data.map((product) => (
                                    <div key={product.id} className="bg-white rounded-[2.5rem] p-4 shadow-sm border border-emerald-50 group hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-900/5 transition-all duration-500">
                                        <div className="relative h-60 rounded-[1.8rem] overflow-hidden mb-6">
                                            <img 
                                                src={`/storage/${product.image}`} 
                                                className="w-full h-full object-cover group-hover:scale-110 transition duration-1000" 
                                                alt={product.name}
                                            />
                                            {/* Badge Kualitas (Tetap tampil di card tapi tanpa filter) */}
                                            <div className="absolute top-4 left-4 bg-emerald-950/80 backdrop-blur-md text-white text-[9px] font-black px-4 py-2 rounded-full uppercase italic tracking-widest border border-white/20">
                                                {product.quality}
                                            </div>
                                        </div>
                                        
                                        <div className="px-3 pb-2">
                                            <span className="text-[9px] font-black text-orange-500 uppercase tracking-[0.3em] mb-2 block">{product.category}</span>
                                            <h3 className="text-xl font-black text-emerald-900 uppercase italic tracking-tighter mb-4 group-hover:text-orange-600 transition-colors leading-tight">
                                                {product.name}
                                            </h3>
                                            
                                            <div className="flex items-center justify-between border-t border-slate-50 pt-5">
                                                <div className="flex flex-col">
                                                    <span className="text-[8px] font-black text-slate-300 uppercase tracking-widest">Harga Terbaik</span>
                                                    <span className="text-xl font-black text-emerald-800 tracking-tighter">
                                                        Rp {new Intl.NumberFormat('id-ID').format(product.price)}
                                                    </span>
                                                </div>
                                                <Link 
                                                    href={`/product/${product.slug}`} 
                                                    className="w-12 h-12 bg-emerald-950 rounded-2xl flex items-center justify-center text-white hover:bg-orange-500 transition-all shadow-lg active:scale-90"
                                                >
                                                    <span className="text-lg">→</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* PAGINATION SIMPLE */}
                            <div className="mt-20 flex gap-3 justify-center">
                                {products.links.map((link, i) => (
                                    <Link 
                                        key={i}
                                        href={link.url || '#'}
                                        dangerouslySetInnerHTML={{ __html: link.label }}
                                        className={`px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${
                                            link.active 
                                            ? 'bg-emerald-950 text-white shadow-xl shadow-emerald-900/20' 
                                            : 'bg-white text-slate-400 hover:bg-emerald-50 border border-slate-50'
                                        }`}
                                    />
                                ))}
                            </div>
                        </main>
                    </div>
                </div>
            </section>
        </GuestLayout>
    );
}