<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cerita Kami | Desa Bah Sumbu</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;600;700;800&family=Covered+By+Your+Grace&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Plus Jakarta Sans', sans-serif; }
        .font-culture { font-family: 'Covered By Your Grace', cursive; }
        .bg-pattern { background-image: url('https://www.transparenttextures.com/patterns/wood-pattern.png'); }
    </style>
</head>
<body class="bg-[#FDFCF8] text-slate-900">

    <nav class="bg-white/90 backdrop-blur-md sticky top-0 z-[100] border-b border-green-100">
        <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div class="flex items-center gap-3">
                <div class="w-12 h-12 bg-green-800 rounded-full flex items-center justify-center text-white font-black italic shadow-lg border-2 border-orange-200">BS</div>
                <div>
                    <h1 class="text-xl font-black tracking-tighter text-green-900 uppercase leading-none">Bah Sumbu</h1>
                    <span class="text-orange-600 font-bold text-[10px] tracking-[0.2em] uppercase">E-Katalog Komoditas</span>
                </div>
            </div>
            <div class="hidden md:flex items-center gap-8 text-xs font-black uppercase tracking-widest text-green-900">
                <a href="{{ route('home') }}" class="hover:text-orange-600 transition">Beranda</a>
                <a href="{{ route('about') }}" class="text-orange-600 transition">Cerita Kami</a>
                <a href="{{ route('products.all') }}" class="{{ request()->routeIs('products.all') ? 'text-orange-600' : 'hover:text-orange-600' }} transition flex items-center gap-2">
                Katalog Lengkap
                <span class="bg-orange-100 text-orange-600 text-[8px] px-2 py-0.5 rounded-full animate-pulse">NEW</span>
            </a>
                <a href="{{ route('login') }}" class="bg-green-800 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition shadow-md">Masuk Petani</a>
            </div>
        </div>
    </nav>

    <section class="relative py-24 bg-green-900 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000" class="absolute inset-0 w-full h-full object-cover opacity-30">
        <div class="relative z-10 max-w-4xl mx-auto text-center px-6">
            <p class="font-culture text-3xl text-orange-400 mb-4 animate-pulse">"Soko Ekonomi Desa"</p>
            <h1 class="text-5xl md:text-6xl font-black text-white mt-4 leading-tight uppercase tracking-tighter">Transformasi Digital <br>Agribisnis Bah Sumbu</h1>
        </div>
    </section>

    <section class="py-24 px-6 bg-pattern">
        <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
            <div class="space-y-8">
                <div>
                    <span class="text-orange-600 font-black uppercase tracking-[0.4em] text-[10px]">Latar Belakang & Visi</span>
                    <h2 class="text-4xl font-black text-green-900 mt-3 leading-tight tracking-tighter">Memangkas Mata Rantai, <br>Menuju Ekonomi Mandiri</h2>
                </div>
                
                <div class="text-slate-600 leading-relaxed space-y-5 text-lg italic">
                    <p>
                        Transformasi digital di sektor pertanian kini menjadi katalisator utama untuk mengatasi inefisiensi rantai pasok. Di Desa Bah Sumbu, kami menghadapi tantangan nyata: ketergantungan pada jaringan tengkulak yang menyebabkan distorsi pasar dan disparitas harga ekstrem.
                    </p>
                    <p>
                        E-Katalog ini didesain dengan filosofi **simplicity**. Kami fokus pada fungsi promosi dan etalase visual untuk memotong jalur distribusi yang panjang, sehingga harga di tingkat petani tetap adil bagi produsen maupun konsumen akhir.
                    </p>
                    <p class="font-bold text-green-900 border-l-4 border-orange-500 pl-6 py-2 bg-orange-50/50 rounded-r-xl">
                        "E-Katalog ini adalah instrumen pemberdayaan sosial-ekonomi, membuka peluang bagi agripreneurs muda untuk memodernisasi wajah pertanian desa."
                    </p>
                </div>
            </div>

            <div class="relative group">
                <img src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=1000" class="relative z-10 rounded-[3rem] shadow-2xl border-8 border-white">
                <div class="absolute -bottom-8 -right-8 bg-green-800 p-10 rounded-[2.5rem] shadow-2xl z-20">
                    <p class="text-[10px] font-black text-orange-400 uppercase tracking-[0.3em] mb-2">Desa Bah Sumbu</p>
                    <p class="text-white font-bold leading-tight">Tebing Tinggi, <br>Sumatera Utara</p>
                </div>
            </div>
        </div>
    </section>

    <section class="py-24 bg-green-950 text-white rounded-[4rem] mx-4 md:mx-10 px-6 relative shadow-2xl">
        <div class="max-w-7xl mx-auto grid md:grid-cols-3 gap-16">
            <div class="text-center md:text-left">
                <div class="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center font-black text-2xl italic shadow-lg mb-6">V</div>
                <h3 class="text-2xl font-black italic mb-4">Visi Utama</h3>
                <p class="text-green-200 font-light leading-relaxed">Menghasilkan platform website yang informatif dan menarik untuk menampilkan komoditas unggulan tanpa batasan ruang dan waktu.</p>
            </div>
            <div class="text-center md:text-left">
                <div class="w-16 h-16 bg-white rounded-2xl flex items-center justify-center font-black text-2xl italic text-green-900 mb-6">M</div>
                <h3 class="text-2xl font-black italic mb-4">Misi Praktis</h3>
                <p class="text-green-200 font-light leading-relaxed">Meningkatkan posisi tawar (bargaining power) petani melalui promosi mandiri dan penyajian data stok secara real-time.</p>
            </div>
            <div class="text-center md:text-left">
                <div class="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center font-black text-2xl italic mb-6">T</div>
                <h3 class="text-2xl font-black italic mb-4">Target Terukur</h3>
                <p class="text-green-200 font-light leading-relaxed">Menciptakan ekosistem agribisnis yang transparan bagi pembeli, investor, dan masyarakat luas melalui sistem informasi yang tervalidasi.</p>
            </div>
        </div>
    </section>

    <footer class="bg-white py-20 px-6 border-t border-green-50 mt-12">
        <div class="max-w-7xl mx-auto grid md:grid-cols-2 justify-between items-center gap-12 text-center md:text-left">
            <div>
                <h2 class="text-3xl font-black text-green-900 mb-4 uppercase italic">Bah Sumbu <span class="text-orange-500">Katalog</span></h2>
                <p class="text-slate-500 max-w-sm italic">Penelitian Rancang Bangun Sistem Informasi E-Katalog Komoditas Pertanian dan Peternakan (2026).</p>
            </div>
            <div class="text-right hidden md:block">
                <p class="font-bold text-green-900 mb-2">Lokasi:</p>
                <p class="text-2xl font-black text-orange-500 leading-none uppercase tracking-tighter">Serdang Bedagai</p>
                <p class="text-slate-400 text-sm">umkm@bahsumbu.desa</p>
            </div>
        </div>
    </footer>

</body>
</html> 