<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ $product->name }} | Detail Produk Desa Bah Sumbu</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;600;700;800&display=swap" rel="stylesheet">
    <style>body { font-family: 'Plus Jakarta Sans', sans-serif; }</style>
</head>
<body class="bg-[#FDFCF8]">

    <nav class="bg-white/90 backdrop-blur-md sticky top-0 z-[100] border-b border-green-100">
        <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <a href="{{ route('home') }}" class="flex items-center gap-3">
                <div class="w-10 h-10 bg-green-800 rounded-full flex items-center justify-center text-white font-black italic shadow-lg">BS</div>
                <h1 class="text-lg font-black tracking-tighter text-green-900 uppercase leading-none">Bah Sumbu</h1>
            </a>
            <div class="hidden md:flex items-center gap-8 text-xs font-black uppercase tracking-widest text-green-900">
                <a href="{{ route('home') }}">Beranda</a>
                <a href="{{ route('about') }}">Cerita Kami</a>
                <a href="{{ route('products.all') }}">Katalog Lengkap</a>
            </div>
        </div>
    </nav>

    <section class="py-16 px-6">
        <div class="max-w-7xl mx-auto">
            <nav class="flex mb-8 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                <a href="{{ route('home') }}" class="hover:text-orange-500">Home</a>
                <span class="mx-2">/</span>
                <a href="{{ route('products.all') }}" class="hover:text-orange-500">Katalog</a>
                <span class="mx-2">/</span>
                <span class="text-green-800">{{ $product->name }}</span>
            </nav>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                
                <div class="space-y-4">
                    <div class="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white group">
                        <img src="{{ asset('storage/' . $product->image) }}" class="w-full h-[500px] object-cover group-hover:scale-105 transition duration-700">
                        <div class="absolute top-6 left-6 bg-green-800 text-white text-xs font-black px-5 py-2 rounded-full uppercase italic shadow-xl">
                            Terverifikasi Grade A
                        </div>
                    </div>
                </div>

                <div class="space-y-8">
                    <div>
                        <span class="text-orange-500 font-black uppercase tracking-[0.3em] text-xs">{{ $product->category }}</span>
                        <h1 class="text-5xl font-black text-green-900 mt-2 tracking-tighter leading-tight">{{ $product->name }}</h1>
                    </div>

                    <div class="bg-white p-8 rounded-[2.5rem] shadow-sm border border-green-50">
                        <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Harga Langsung Petani</p>
                        <div class="flex items-baseline gap-2">
                            <span class="text-4xl font-black text-green-700">Rp {{ number_format($product->price, 0, ',', '.') }}</span>
                            <span class="text-slate-400 text-sm italic">/ Satuan</span>
                        </div>
                    </div>

                    <div class="prose prose-slate max-w-none">
                        <h4 class="text-sm font-black text-green-900 uppercase tracking-widest mb-3">Deskripsi Produk</h4>
                        <p class="text-slate-600 leading-relaxed italic text-lg">
                            "{{ $product->description }}"
                        </p>
                    </div>

                    <div class="bg-orange-50 p-6 rounded-[2rem] border border-orange-100 flex items-center gap-6">
                        <div class="w-16 h-16 bg-orange-200 rounded-2xl flex items-center justify-center text-2xl font-black text-orange-600 italic">
                            {{ substr($product->user->name, 0, 1) }}
                        </div>
                        <div>
                            <p class="text-[10px] font-black text-orange-600 uppercase tracking-widest mb-1">Diproduksi Oleh:</p>
                            <h4 class="text-xl font-black text-green-900 uppercase">{{ $product->user->name }}</h4>
                            <p class="text-xs text-slate-500 italic leading-none">Petani Terverifikasi Desa Bah Sumbu</p>
                        </div>
                    </div>

                    <div class="flex flex-col gap-4">
                        @php
                            $waMessage = urlencode("Halo Pak/Bu " . $product->user->name . ", saya tertarik dengan produk [" . $product->name . "] yang ada di E-Katalog Bah Sumbu. Apakah stoknya masih tersedia?");
                        @endphp
                        <a href="https://wa.me/{{ preg_replace('/[^0-9]/', '', $product->user->phone_number) }}?text={{ $waMessage }}" 
                           class="w-full bg-green-600 hover:bg-green-700 text-white py-6 rounded-[1.5rem] font-black text-center text-sm uppercase tracking-[0.2em] shadow-2xl shadow-green-200 transition-all flex items-center justify-center gap-3">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                            Amankan Produk via WhatsApp
                        </a>
                        <p class="text-[10px] text-center text-slate-400 italic italic">Klik tombol di atas untuk bernegosiasi harga langsung dengan petani.</p>
                    </div>
                </div>
            </div>

            @if($relatedProducts->count() > 0)
            <div class="mt-32">
                <h3 class="text-2xl font-black text-green-900 mb-8 uppercase italic tracking-tighter">Produk Lain dari {{ $product->user->name }}</h3>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    @foreach($relatedProducts as $related)
                    <div class="bg-white rounded-[2rem] p-4 shadow-sm border border-green-50 group">
                        <div class="relative h-48 rounded-[1.5rem] overflow-hidden mb-4">
                            <img src="{{ asset('storage/' . $related->image) }}" class="w-full h-full object-cover group-hover:scale-110 transition">
                        </div>
                        <h4 class="font-bold text-green-900">{{ $related->name }}</h4>
                        <div class="flex justify-between items-center mt-4">
                            <span class="text-green-700 font-black text-sm">Rp {{ number_format($related->price) }}</span>
                            <a href="{{ route('product.detail', $related->id) }}" class="text-orange-500 font-bold text-xs underline">Lihat Detail</a>
                        </div>
                    </div>
                    @endforeach
                </div>
            </div>
            @endif
        </div>
    </section>

    <footer class="bg-white py-20 px-6 border-t border-green-50">
        <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <h2 class="text-2xl font-black text-green-900 uppercase italic">Bah Sumbu <span class="text-orange-500">Katalog</span></h2>
            <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest">&copy; 2026 Desa Bah Sumbu - RnD Project</p>
        </div>
    </footer>

</body>
</html>