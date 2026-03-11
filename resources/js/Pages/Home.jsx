import React from "react";
import { Head, Link } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayouts";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function Home({ products }) {
    return (
        <GuestLayout>
            <Head title="Beranda - E-Katalog Desa Bah Sumbu" />

            {/* HERO SLIDER */}
            <div className="h-[650px] overflow-hidden">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000 }}
                    loop={true}
                    className="h-full"
                >
                    <SwiperSlide>
                        <div className="relative h-full flex items-center bg-green-900">
                            <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000" className="absolute inset-0 w-full h-full object-cover opacity-50" />
                            <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
                                <p className="font-culture text-3xl text-orange-400 mb-2">🌱 Dari Desa untuk Indonesia</p>
                                <h2 className="text-5xl md:text-7xl font-black leading-tight max-w-4xl">Hasil Pertanian & Peternakan Kualitas Unggul.</h2>
                                <p className="mt-6 text-lg text-green-100 max-w-2xl">Segar. Aman. Terpercaya. Digital. Langsung dari tangan petani Desa Bah Sumbu.</p>
                                <div className="mt-10 flex gap-4">
                                    <a href="#katalog" className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-full font-black transition shadow-xl">Lihat Produk</a>
                                    <a href="https://wa.me/6282246431454" className="bg-white/10 backdrop-blur-md border border-white/20 px-8 py-4 rounded-full font-black transition text-white">Jadi Mitra</a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <div className="relative h-full flex items-center bg-slate-900">
                            <img src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=2000" className="absolute inset-0 w-full h-full object-cover opacity-40" />
                            <div className="relative z-10 max-w-7xl mx-auto px-6 text-white text-center w-full">
                                <span className="inline-block bg-orange-500 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">🏅 Grade A Quality</span>
                                <h2 className="text-5xl md:text-7xl font-black mb-6">Produk Pilihan Grade A</h2>
                                <p className="text-xl text-slate-300 max-w-2xl mx-auto italic">Standar kesegaran dan kebersihan tertinggi melalui proses sortir manual oleh ahli desa.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            {/* KATALOG PRODUK */}
            <section id="katalog" className="py-20 px-6 bg-white relative">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16 border-l-8 border-emerald-900 pl-8">
                        <span className="text-emerald-600 font-bold uppercase tracking-[0.3em] text-[10px] block mb-2">Dokumentasi Komoditas Desa</span>
                        <h2 className="text-4xl font-black text-emerald-950 uppercase tracking-tighter italic">Katalog Produk Unggulan</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product) => (
                            <div key={product.id} className="group bg-white rounded-[2rem] border border-slate-100 overflow-hidden hover:border-emerald-200 hover:shadow-2xl transition-all duration-500">
                                <div className="relative h-56 overflow-hidden bg-slate-50">
                                    <img src={`/storage/${product.image}`} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-black text-emerald-950 uppercase mb-4">{product.name}</h3>
                                    <div className="flex items-center justify-between pt-5 border-t border-slate-50">
                                        <div className="flex flex-col">
                                            <span className="text-[8px] font-bold text-slate-300 uppercase mb-1">Estimasi Harga</span>
                                            <div className="flex items-baseline gap-1 font-black text-emerald-900">
                                                <span className="text-xs italic">Rp</span>
                                                <span className="text-2xl tracking-tighter">
                                                    {new Intl.NumberFormat('id-ID').format(product.price)}
                                                </span>
                                            </div>
                                        </div>
                                        <Link href={`/product/${product.slug}`} className="bg-emerald-50 text-emerald-900 p-3 rounded-xl hover:bg-emerald-900 hover:text-white transition-all">
                                            →
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* CALL TO ACTION (CTA) */}
            <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto bg-orange-500 rounded-[3rem] p-12 relative overflow-hidden shadow-2xl">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left text-white">
                    <h2 className="text-3xl md:text-4xl font-black leading-tight">Beli Borongan atau <br />Ingin Jadi Reseller Kami?</h2>
                    <p className="text-orange-100 mt-4 max-w-lg italic">Dapatkan harga kompetitif langsung dari sumbernya untuk kebutuhan bisnis katering atau restoran Anda.</p>
                </div>
                <a href="https://wa.me/6282246431454" className="bg-green-900 text-white px-10 py-5 rounded-2xl font-black hover:bg-white hover:text-orange-600 transition shadow-lg">Hubungi Kerjasama</a>
            </div>
        </div>
    </section>

            {/* TESTIMONI SECTION */}
            <section className="py-24 bg-green-900 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-green-800 rounded-full blur-[120px] -mr-40 -mt-40 opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-500 rounded-full blur-[150px] -ml-40 -mb-40 opacity-20"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <span className="font-culture text-3xl text-orange-400">"Apa Kata Mereka?"</span>
                        <h2 className="text-4xl font-black text-white mt-4 uppercase tracking-tighter italic">Testimoni Pembeli Setia</h2>
                        <div className="w-24 h-1 bg-orange-500 mx-auto mt-6"></div>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Testimoni 1 */}
                        <div className="bg-white/10 backdrop-blur-md p-10 rounded-[3rem] border border-white/10 text-white hover:bg-white/20 transition duration-500">
                            <div className="flex text-orange-400 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                                ))}
                            </div>
                            <p className="italic mb-10 font-light leading-relaxed text-lg text-green-50">"Daging sapi potong dari Bah Sumbu beneran segar dan seratnya bagus. Kelihatan banget kalau dirawat dengan pakan alami. Gak nyesel beli di sini!"</p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center font-bold text-white shadow-lg italic">B</div>
                                <div>
                                    <h4 className="font-bold text-white uppercase tracking-widest text-xs">Pak Bambang</h4>
                                    <p className="text-[10px] text-green-400 font-medium">Pemilik Resto Sate, Medan</p>
                                </div>
                            </div>
                        </div>

                        {/* Testimoni 2 - Highlighted */}
                        <div className="bg-white p-10 rounded-[3rem] text-green-950 shadow-2xl transform md:-translate-y-6">
                            <div className="flex text-orange-500 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                                ))}
                            </div>
                            <p className="italic mb-10 font-bold leading-relaxed text-lg">"Beras organiknya harum sekali pas dimasak. Harganya jauh lebih terjangkau karena kita beli langsung ke petaninya. Sistem e-katalog ini ngebantu banget!"</p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-green-900 rounded-2xl flex items-center justify-center font-bold text-white shadow-lg italic">S</div>
                                <div>
                                    <h4 className="font-bold text-green-900 uppercase tracking-widest text-xs">Ibu Siti</h4>
                                    <p className="text-[10px] text-slate-400 font-medium">Ibu Rumah Tangga, Tebing Tinggi</p>
                                </div>
                            </div>
                        </div>

                        {/* Testimoni 3 */}
                        <div className="bg-white/10 backdrop-blur-md p-10 rounded-[3rem] border border-white/10 text-white hover:bg-white/20 transition duration-500">
                            <div className="flex text-orange-400 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                                ))}
                            </div>
                            <p className="italic mb-10 font-light leading-relaxed text-lg text-green-50">"Puas banget belanja jagung pipil di sini. Respon petaninya lewat WhatsApp cepet, pengiriman aman. Berkah terus buat Desa Bah Sumbu!"</p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center font-bold text-white shadow-lg italic">R</div>
                                <div>
                                    <h4 className="font-bold text-white uppercase tracking-widest text-xs">Rizky</h4>
                                    <p className="text-[10px] text-green-400 font-medium">Agen Pakan Ternak</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="fixed bottom-6 right-6 z-[999] flex flex-col items-end gap-4">
                {/* Status Admin (Hanya muncul di Desktop) */}
                <div className="bg-white px-4 py-2 rounded-2xl shadow-2xl border border-green-100 mb-2 animate-bounce hidden md:block">
                    <p className="text-[10px] font-black text-green-800 uppercase tracking-widest flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        Admin Desa Online
                    </p>
                    <p className="text-[11px] text-slate-500 italic">Ada yang bisa kami bantu?</p>
                </div>

                <a href="https://wa.me/6282246431454?text=Halo%20Admin%20E-Katalog%20Bah%20Sumbu,%20saya%20ingin%20tanya%20mengenai%20produk%20desa..." 
                   target="_blank"
                   rel="noopener noreferrer"
                   className="group relative flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-[2rem] shadow-[0_20px_50px_rgba(37,211,102,0.4)] hover:scale-110 hover:rotate-6 transition-all duration-300">
                    
                    {/* Efek Ping di Belakang Tombol */}
                    <span className="absolute inset-0 rounded-[2rem] bg-[#25D366] animate-ping opacity-20"></span>
                    
                    {/* Logo WhatsApp (SVG) */}
                    <svg className="w-8 h-8 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>

                    {/* Tooltip on Hover */}
                    <span className="absolute right-20 bg-green-900 text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl">
                        Hubungi Admin Desa
                    </span>
                </a>
            </div>
        </GuestLayout>
    );
}