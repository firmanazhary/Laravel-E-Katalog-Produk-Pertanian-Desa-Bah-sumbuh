import React from 'react';
import GuestLayout from '@/Layouts/GuestLayouts';
import { Head, Link, router } from '@inertiajs/react';

export default function All({ products, farmers, categories, filters }) {
    
    // Fungsi untuk handle perubahan filter
    const handleFilter = (key, value) => {
        router.get('/products', { ...filters, [key]: value }, {
            preserveState: true,
            replace: true
        });
    };

    return (
        <GuestLayout>
            <Head title="Katalog Lengkap | Desa Bah Sumbu" />
            
            <section className="py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-12">
                        
                        {/* SIDEBAR FILTER */}
                        <aside className="w-full md:w-64 space-y-8">
                            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-green-50">
                                <h2 className="text-xl font-black text-green-900 mb-6 uppercase tracking-tighter italic">Saring Produk</h2>
                                
                                <div className="space-y-6">
                                    <div>
                                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2">Kategori</label>
                                        <select 
                                            value={filters.category || ''} 
                                            onChange={(e) => handleFilter('category', e.target.value)}
                                            className="w-full bg-slate-50 border-none rounded-xl text-sm p-3 focus:ring-2 focus:ring-orange-500"
                                        >
                                            <option value="">Semua Kategori</option>
                                            {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                                        </select>
                                    </div>

                                    <div>
                                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2">Pilih Petani</label>
                                        <select 
                                            value={filters.farmer || ''} 
                                            onChange={(e) => handleFilter('farmer', e.target.value)}
                                            className="w-full bg-slate-50 border-none rounded-xl text-sm p-3 focus:ring-2 focus:ring-orange-500"
                                        >
                                            <option value="">Semua Petani</option>
                                            {farmers.map(f => <option key={f.id} value={f.id}>{f.name}</option>)}
                                        </select>
                                    </div>

                                    <div>
                                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2">Kualitas</label>
                                        <div className="space-y-2">
                                            {['Grade A', 'Grade B'].map((grade) => (
                                                <label key={grade} className="flex items-center gap-3 cursor-pointer group">
                                                    <input 
                                                        type="radio" 
                                                        name="quality" 
                                                        value={grade}
                                                        checked={filters.quality === grade}
                                                        onChange={(e) => handleFilter('quality', e.target.value)}
                                                        className="text-orange-500 focus:ring-orange-500" 
                                                    />
                                                    <span className="text-sm group-hover:text-orange-600 transition">{grade}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    <Link href="/products" className="block text-center text-[10px] font-black uppercase text-red-500 mt-4 underline">Reset Filter</Link>
                                </div>
                            </div>
                        </aside>

                        {/* MAIN CONTENT */}
                        <main className="flex-1">
                            <div className="mb-10 flex justify-between items-end px-4">
                                <div>
                                    <h2 className="text-3xl font-black text-green-900 uppercase tracking-tighter">Etalase Desa</h2>
                                    <p className="text-slate-400 text-sm italic">Menampilkan {products.data.length} produk pilihan</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {products.data.map((product) => (
                                    <div key={product.id} className="bg-white rounded-[2rem] p-4 shadow-sm border border-green-50 group hover:-translate-y-2 transition-all duration-500">
                                        <div className="relative h-56 rounded-[1.5rem] overflow-hidden mb-6">
                                            <img src={`/storage/${product.image}`} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                                            <div className="absolute top-4 left-4 bg-green-800 text-white text-[9px] font-black px-3 py-1 rounded-full uppercase italic">{product.quality}</div>
                                        </div>
                                        <div className="px-2">
                                            <p className="text-[9px] font-black text-orange-500 uppercase tracking-widest mb-1">{product.category}</p>
                                            <h3 className="text-xl font-black text-green-900 mb-4">{product.name}</h3>
                                            <div className="flex items-center justify-between border-t border-slate-50 pt-4">
                                                <span className="text-lg font-black text-green-700">Rp {new Intl.NumberFormat('id-ID').format(product.price)}</span>
                                                <Link href={`/product/${product.slug}`} className="w-10 h-10 bg-green-900 rounded-xl flex items-center justify-center text-white hover:bg-orange-500 transition shadow-lg">
                                                    →
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* PAGINATION SIMPLE */}
                            <div className="mt-12 flex gap-2 justify-center">
                                {products.links.map((link, i) => (
                                    <Link 
                                        key={i}
                                        href={link.url || '#'}
                                        dangerouslySetInnerHTML={{ __html: link.label }}
                                        className={`px-4 py-2 rounded-lg text-xs font-bold ${link.active ? 'bg-orange-500 text-white' : 'bg-white text-slate-400 hover:bg-green-50'}`}
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