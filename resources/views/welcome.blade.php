<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>E-Katalog Desa Bah Sumbuh | Digitalisasi UMKM Desa</title>
    
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;600;700;800&display=swap" rel="stylesheet">
    
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
    
    <style>
        body { font-family: 'Plus Jakarta Sans', sans-serif; }
        .swiper-button-next, .swiper-button-prev { color: white !important; }
        .swiper-pagination-bullet-active { background: #f97316 !important; }
    </style>
</head>
<body class="bg-slate-50 text-slate-900">

    <nav class="bg-white/80 backdrop-blur-md sticky top-0 z-[100] border-b border-slate-100">
        <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div class="flex items-center gap-2">
                <div class="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center text-white font-black italic">BS</div>
                <h1 class="text-xl font-black tracking-tighter text-slate-800 uppercase">Bah Sumbuh <span class="text-orange-500 font-medium text-xs block -mt-1 tracking-widest">E-Katalog UMKM</span></h1>
            </div>
            <div class="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-widest text-slate-600">
                <a href="/" class="hover:text-green-600 transition">Home</a>
                <a href="#about" class="hover:text-green-600 transition">Tentang</a>
                <a href="#katalog" class="hover:text-green-600 transition">Katalog</a>
                @if (Route::has('login'))
                    @auth
                        <a href="{{ url('/dashboard') }}" class="bg-slate-900 text-white px-5 py-2.5 rounded-xl hover:bg-green-600 transition">Dashboard</a>
                    @else
                        <a href="{{ route('login') }}" class="border-2 border-slate-900 px-5 py-2 rounded-xl hover:bg-slate-900 hover:text-white transition">Login Petani</a>
                    @endauth
                @endif
            </div>
        </div>
    </nav>

    <div class="swiper mySwiper h-[550px] md:h-[650px]">
        <div class="swiper-wrapper">
            <div class="swiper-slide relative flex items-center bg-slate-900">
                <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000" class="absolute inset-0 w-full h-full object-cover opacity-50">
                <div class="relative z-10 max-w-7xl mx-auto px-6 w-full text-white">
                    <span class="inline-block bg-orange-500 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6">🌱 Dari Desa untuk Indonesia</span>
                    <h2 class="text-5xl md:text-7xl font-extrabold leading-[1.1] max-w-4xl">Hasil Pertanian & Peternakan Berkualitas Langsung dari Petani.</h2>
                    <p class="mt-6 text-lg md:text-xl text-slate-200 max-w-2xl font-light italic">Segar. Aman. Terpercaya. Digital. Langsung dari Desa Bah Sumbuh.</p>
                    <div class="mt-10 flex gap-4">
                        <a href="#katalog" class="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-bold transition shadow-xl">Lihat Produk</a>
                        <a href="https://wa.me/6282246431454" class="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 px-8 py-4 rounded-2xl font-bold transition">Jadi Mitra</a>
                    </div>
                </div>
            </div>
            <div class="swiper-slide relative flex items-center bg-green-950">
                <img src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=2000" class="absolute inset-0 w-full h-full object-cover opacity-40">
                <div class="relative z-10 max-w-7xl mx-auto px-6 w-full text-white">
                    <span class="inline-block bg-green-500 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6">🏅 Grade A Quality</span>
                    <h2 class="text-5xl md:text-7xl font-extrabold leading-[1.1] max-w-4xl">Produk Pilihan Standar Tinggi.</h2>
                    <p class="mt-6 text-lg md:text-xl text-slate-200 max-w-2xl font-light">Kami menghadirkan hasil terbaik dengan standar sortir ketat langsung dari peternak lokal.</p>
                    <div class="mt-10 flex gap-4">
                        <a href="#katalog" class="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-2xl font-bold transition shadow-xl text-center">Produk Terbaru</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-pagination"></div>
    </div>

    <section id="katalog" class="py-24 px-6">
        <div class="max-w-7xl mx-auto">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-black text-slate-900 mb-4">🌟 Produk Terbaru Minggu Ini</h2>
                <div class="w-20 h-1.5 bg-orange-500 mx-auto rounded-full mb-6"></div>
                <p class="text-slate-500 max-w-2xl mx-auto italic">Temukan hasil panen dan ternak pilihan yang baru saja tersedia langsung dari Desa Bah Sumbuh.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
                @forelse($products as $product)
                <div class="group bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden relative">
                    <div class="relative h-72 overflow-hidden">
                        <img src="{{ asset('storage/' . $product->image) }}" class="w-full h-full object-cover group-hover:scale-110 transition duration-700">
                        <div class="absolute top-5 left-5 bg-white/90 backdrop-blur shadow-sm px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-green-700 border border-green-100">Grade A</div>
                    </div>
                    <div class="p-8">
                        <div class="flex justify-between items-start mb-4">
                            <div>
                                <p class="text-[10px] font-black text-orange-500 uppercase tracking-widest mb-1">{{ $product->category }}</p>
                                <h3 class="text-2xl font-bold text-slate-800">{{ $product->name }}</h3>
                            </div>
                        </div>
                        <p class="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-2 italic">"{{ $product->description }}"</p>
                        <div class="flex items-center justify-between border-t border-slate-50 pt-6">
                            <span class="text-2xl font-black text-slate-900">Rp {{ number_format($product->price, 0, ',', '.') }}</span>
                            <a href="/product/{{ $product->id }}" class="bg-slate-900 text-white px-6 py-3 rounded-2xl text-xs font-bold hover:bg-orange-500 transition shadow-lg shadow-slate-200">Lihat Detail</a>
                        </div>
                    </div>
                </div>
                @empty
                <p class="text-center col-span-3 text-slate-400 py-20 italic font-light">Belum ada produk yang ditampilkan...</p>
                @endforelse
            </div>
        </div>
    </section>

    <section id="about" class="py-24 bg-white px-6">
        <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
            <div>
                <span class="text-green-600 font-black uppercase tracking-[0.3em] text-xs">Transformasi Digital</span>
                <h2 class="text-4xl md:text-5xl font-black text-slate-900 mt-4 mb-8 leading-tight">🌱 Mengapa E-Katalog Ini Didirikan?</h2>
                <div class="space-y-6 text-slate-600 text-lg leading-relaxed">
                    <p>Bah Sumbuh adalah salah satu desa di Kecamatan Tebing Tinggi, Kabupaten Serdang Bedagai. Desa ini memiliki potensi pertanian yang sangat besar, namun pemasarannya masih tradisional.</p>
                    <p class="font-bold text-slate-800 italic border-l-4 border-orange-500 pl-6 py-2">"Kami percaya, ketika desa naik kelas, Indonesia ikut maju."</p>
                    <p>E-Katalog ini didirikan sebagai langkah awal transformasi untuk membuka akses pasar lebih luas, memberikan transparansi harga, dan meningkatkan kepercayaan pembeli.</p>
                </div>
            </div>
            
            <div class="bg-slate-900 p-12 rounded-[3.5rem] text-white shadow-2xl relative">
                <div class="absolute -top-6 -right-6 w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center font-black text-xs uppercase tracking-tighter -rotate-12 border-4 border-white">Grade A<br>Pilihan</div>
                <h3 class="text-3xl font-bold mb-8 italic">🏅 Kualitas Grade A Standar Terbaik Desa</h3>
                <p class="text-slate-400 mb-10 font-light">Produk Grade A adalah hasil seleksi kualitas terbaik berdasarkan kesegaran dan standar kebersihan yang ketat.</p>
                <div class="space-y-5">
                    <div class="flex items-center gap-4 border-b border-white/10 pb-4">
                        <span class="w-8 h-8 bg-green-500/20 text-green-500 rounded-lg flex items-center justify-center font-bold text-sm">✓</span>
                        <span class="text-slate-200 font-medium">Seleksi Kualitas Ketat</span>
                    </div>
                    <div class="flex items-center gap-4 border-b border-white/10 pb-4">
                        <span class="w-8 h-8 bg-green-500/20 text-green-500 rounded-lg flex items-center justify-center font-bold text-sm">✓</span>
                        <span class="text-slate-200 font-medium">Fresh From Farm</span>
                    </div>
                    <div class="flex items-center gap-4">
                        <span class="w-8 h-8 bg-green-500/20 text-green-500 rounded-lg flex items-center justify-center font-bold text-sm">✓</span>
                        <span class="text-slate-200 font-medium">Mendukung Ekonomi Desa</span>
                    </div>
                </div>
                <a href="#katalog" class="mt-12 block text-center bg-white text-slate-900 py-5 rounded-[1.5rem] font-black hover:bg-orange-500 hover:text-white transition uppercase tracking-widest text-xs">Lihat Semua Produk</a>
            </div>
        </div>
    </section>

    <footer class="bg-slate-900 text-slate-500 py-16 px-6">
        <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-12 gap-8">
            <div class="text-center md:text-left">
                <h2 class="text-white text-2xl font-black italic mb-2 tracking-tighter uppercase">Bah Sumbuh <span class="text-orange-500">E-Katalog</span></h2>
                <p class="text-sm font-light">Membantu UMKM Desa Go-Digital. &copy; 2026. <br>Kecamatan Tebing Tinggi, Sumatera Utara.</p>
            </div>
            <div class="flex gap-4">
                <a href="#" class="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-orange-500 hover:text-white transition">FB</a>
                <a href="#" class="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-orange-500 hover:text-white transition">IG</a>
                <a href="#" class="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-orange-500 hover:text-white transition">WA</a>
            </div>
        </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
    <script>
        var swiper = new Swiper(".mySwiper", {
            loop: true,
            autoplay: { delay: 5000 },
            navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
            pagination: { el: ".swiper-pagination", clickable: true },
        });
    </script>
</body>
</html>