<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Katalog Lengkap | Desa Bah Sumbu</title>
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
                <a href="{{ route('products.all') }}" class="text-orange-600">Katalog</a>
            </div>
        </div>
    </nav>

    <section class="py-16 px-6">
        <div class="max-w-7xl mx-auto">
            <div class="flex flex-col md:flex-row gap-12">
                
                <aside class="w-full md:w-64 space-y-8">
                    <div class="bg-white p-8 rounded-[2rem] shadow-sm border border-green-50">
                        <h2 class="text-xl font-black text-green-900 mb-6 uppercase tracking-tighter italic">Saring Produk</h2>
                        
                        <form action="{{ route('products.all') }}" method="GET" class="space-y-6">
                            <div>
                                <label class="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2">Kategori</label>
                                <select name="category" onchange="this.form.submit()" class="w-full bg-slate-50 border-none rounded-xl text-sm p-3 focus:ring-2 focus:ring-orange-500">
                                    <option value="">Semua Kategori</option>
                                    @foreach($categories as $cat)
                                        <option value="{{ $cat }}" {{ request('category') == $cat ? 'selected' : '' }}>{{ $cat }}</option>
                                    @endforeach
                                </select>
                            </div>

                            <div>
                                <label class="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2">Pilih Petani</label>
                                <select name="farmer" onchange="this.form.submit()" class="w-full bg-slate-50 border-none rounded-xl text-sm p-3 focus:ring-2 focus:ring-orange-500">
                                    <option value="">Semua Petani</option>
                                    @foreach($farmers as $farmer)
                                        <option value="{{ $farmer->id }}" {{ request('farmer') == $farmer->id ? 'selected' : '' }}>{{ $farmer->name }}</option>
                                    @endforeach
                                </select>
                            </div>

                            <div>
                                <label class="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2">Kualitas</label>
                                <div class="space-y-2">
                                    @foreach(['Grade A', 'Grade B'] as $grade)
                                    <label class="flex items-center gap-3 cursor-pointer group">
                                        <input type="radio" name="quality" value="{{ $grade }}" onchange="this.form.submit()" {{ request('quality') == $grade ? 'checked' : '' }} class="text-orange-500 focus:ring-orange-500">
                                        <span class="text-sm group-hover:text-orange-600 transition">{{ $grade }}</span>
                                    </label>
                                    @endforeach
                                </div>
                            </div>

                            <a href="{{ route('products.all') }}" class="block text-center text-[10px] font-black uppercase text-red-500 mt-4 underline">Reset Filter</a>
                        </form>
                    </div>
                </aside>

                <main class="flex-1">
                    <div class="mb-10 flex justify-between items-end px-4">
                        <div>
                            <h2 class="text-3xl font-black text-green-900 uppercase tracking-tighter">Etalase Desa</h2>
                            <p class="text-slate-400 text-sm italic">Menampilkan {{ $products->count() }} produk pilihan</p>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        @forelse($products as $product)
                        <div class="bg-white rounded-[2rem] p-4 shadow-sm border border-green-50 group hover:-translate-y-2 transition-all duration-500">
                            <div class="relative h-56 rounded-[1.5rem] overflow-hidden mb-6">
                                <img src="{{ asset('storage/' . $product->image) }}" class="w-full h-full object-cover group-hover:scale-110 transition duration-700">
                                <div class="absolute top-4 left-4 bg-green-800 text-white text-[9px] font-black px-3 py-1 rounded-full uppercase italic">{{ $product->quality }}</div>
                            </div>
                            <div class="px-2">
                                <p class="text-[9px] font-black text-orange-500 uppercase tracking-widest mb-1">{{ $product->category }}</p>
                                <h3 class="text-xl font-black text-green-900 mb-4">{{ $product->name }}</h3>
                                <div class="flex items-center justify-between border-t border-slate-50 pt-4">
                                    <span class="text-lg font-black text-green-700">Rp {{ number_format($product->price, 0, ',', '.') }}</span>
                                    <a href="{{ route('product.detail', $product->slug) }}" class="w-10 h-10 bg-green-900 rounded-xl flex items-center justify-center text-white hover:bg-orange-500 transition shadow-lg shadow-green-100">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        @empty
                        <div class="col-span-3 py-20 text-center bg-white rounded-[3rem] border-2 border-dashed border-slate-100">
                            <p class="text-slate-400 italic">Maaf, produk dengan filter tersebut belum tersedia.</p>
                        </div>
                        @endforelse
                    </div>

                    <div class="mt-12">
                        {{ $products->appends(request()->query())->links() }}
                    </div>
                </main>

            </div>
        </div>
    </section>

    <footer class="bg-white py-20 px-6 border-t border-green-50">
        <div class="max-w-7xl mx-auto text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
                <h2 class="text-2xl font-black text-green-900 uppercase italic">Bah Sumbu <span class="text-orange-500">Katalog</span></h2>
                <p class="text-slate-500 text-sm italic max-w-sm">Membangun transparansi harga dan memangkas rantai tengkulak melalui teknologi.</p>
            </div>
            <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest">&copy; 2026 Desa Bah Sumbu - Serdang Bedagai</p>
        </div>
    </footer>

</body>
</html>