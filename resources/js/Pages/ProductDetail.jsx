import React from 'react';
import GuestLayouts from '@/Layouts/GuestLayouts'; 
import { Head, Link } from '@inertiajs/react';

export default function ProductDetail({ product, relatedProducts = [] }) {
    const formatPhoneNumber = (phone) => phone?.replace(/[^0-9]/g, '') || '';

    const waMessage = encodeURIComponent(
        `Halo Pak/Bu ${product.user.name}, saya tertarik dengan produk [${product.name}] di E-Katalog Bah Sumbu. Apakah stoknya tersedia?`
    );

    return (
        <GuestLayouts>
            <Head title={`${product.name} - Detail Produk`} />

            <div className="py-16 bg-[#FDFCF8] min-h-screen">
                <div className="max-w-7xl mx-auto px-6">
                    
                    {/* Breadcrumb */}
                    <nav className="flex mb-10 text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">
                        <Link href="/" className="hover:text-emerald-600 transition-colors">Beranda</Link>
                        <span className="mx-4 text-slate-200">/</span>
                        <Link href="/products-all" className="hover:text-emerald-600 transition-colors">Katalog</Link>
                        <span className="mx-4 text-slate-200">/</span>
                        <span className="text-emerald-900 italic tracking-widest">{product.name}</span>
                    </nav>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                        {/* Kiri: Frame Foto */}
                        <div className="lg:col-span-7 relative">
                            <div className="relative rounded-[4rem] overflow-hidden shadow-2xl border-[16px] border-white group">
                                <img 
                                    src={`/storage/${product.image}`} 
                                    className="w-full h-[500px] object-cover group-hover:scale-110 transition-transform duration-[2s] ease-out"
                                    alt={product.name}
                                />
                            </div>
                            <div className="absolute -bottom-8 -left-8 bg-emerald-950 text-white p-10 rounded-[3rem] shadow-2xl rotate-3 border-4 border-white hidden md:block">
                                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-400 mb-1">Kualitas</p>
                                <h4 className="text-2xl font-black italic uppercase tracking-tighter leading-none">Grade <span className="text-orange-500">A+</span></h4>
                            </div>
                        </div>

                        {/* Kanan: Info */}
                        <div className="lg:col-span-5 flex flex-col space-y-10 lg:pl-10">
                            <div>
                                <span className="text-orange-500 font-black uppercase tracking-[0.4em] text-[10px]">Komoditas {product.category}</span>
                                <h1 className="text-6xl font-black text-emerald-950 tracking-tighter italic uppercase leading-none mt-2">{product.name}</h1>
                            </div>

                            <div className="bg-white p-10 rounded-[3.5rem] border border-emerald-50 shadow-sm">
                                <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-2">Harga Mitra Petani</p>
                                <div className="flex items-baseline gap-3">
                                    <span className="text-5xl font-black text-emerald-900 tracking-tighter">Rp{new Intl.NumberFormat('id-ID').format(product.price)}</span>
                                    <span className="text-slate-400 font-bold italic text-base uppercase">/ Unit</span>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h4 className="text-[11px] font-black text-emerald-950 uppercase tracking-[0.3em] opacity-30">Informasi Produk</h4>
                                <p className="text-slate-600 text-xl leading-relaxed italic font-light border-l-4 border-orange-100 pl-8">"{product.description}"</p>
                            </div>

                            <div className="flex items-center gap-8 p-10 bg-emerald-950 rounded-[3.5rem] text-white shadow-2xl shadow-emerald-950/20">
                                <div className="w-16 h-16 bg-emerald-800 rounded-2xl flex items-center justify-center text-3xl font-black italic text-emerald-400">{product.user.name.substring(0, 1)}</div>
                                <div>
                                    <p className="text-[9px] font-black text-emerald-500 uppercase tracking-[0.3em] mb-1">Dikelola Oleh:</p>
                                    <h4 className="text-xl font-black uppercase tracking-tight italic">{product.user.name}</h4>
                                </div>
                            </div>

                            <div className="pt-4">
                                <a 
                                    href={`https://wa.me/${formatPhoneNumber(product.user.phone_number)}?text=${waMessage}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group w-full bg-emerald-600 hover:bg-orange-600 text-white py-8 rounded-[2.5rem] font-black text-center text-sm uppercase tracking-[0.3em] transition-all duration-500 shadow-xl flex items-center justify-center gap-4 active:scale-95"
                                >
                                    Tanya Stok via WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Section Produk Terkait */}
                    {relatedProducts.length > 0 && (
                        <div className="mt-32 pt-20 border-t border-emerald-50">
                            <h3 className="text-3xl font-black text-emerald-950 uppercase italic tracking-tighter mb-10">Produk Lain <span className="text-orange-500">dari {product.user.name}</span></h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {relatedProducts.map((item) => (
                                    <Link key={item.id} href={`/product/${item.slug}`} className="group">
                                        <div className="bg-white p-6 rounded-[3rem] border border-emerald-50 shadow-sm hover:shadow-xl transition-all duration-500">
                                            <div className="aspect-square rounded-[2.5rem] overflow-hidden mb-6">
                                                <img src={`/storage/${item.image}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={item.name} />
                                            </div>
                                            <h4 className="font-black text-emerald-900 uppercase italic leading-none">{item.name}</h4>
                                            <p className="text-orange-500 font-black text-sm mt-4">Rp {new Intl.NumberFormat('id-ID').format(item.price)}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </GuestLayouts>
    );
}