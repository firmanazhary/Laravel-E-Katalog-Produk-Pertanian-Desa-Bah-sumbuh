<x-app-layout>
    <x-slot name="header">
        <h2 class="text-3xl font-black text-emerald-900 italic uppercase tracking-tighter">
            Tambah <span class="text-emerald-500">Produk Baru</span>
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white p-10 rounded-[3rem] shadow-sm border border-emerald-50">
                <form action="{{ route('products.store') }}" method="POST" enctype="multipart/form-data" class="space-y-8">
                    @csrf
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div class="space-y-4">
                            <label class="block text-[10px] font-black uppercase tracking-widest text-slate-400">Foto Produk</label>
                            <div id="preview-box" class="relative w-full h-64 bg-emerald-50 rounded-[2.5rem] border-2 border-dashed border-emerald-100 flex items-center justify-center overflow-hidden">
                                <img id="output" class="hidden w-full h-full object-cover">
                                <div id="placeholder" class="text-center">
                                    <svg class="w-12 h-12 text-emerald-200 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.587-1.587a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                    <p class="text-[9px] font-bold text-emerald-300 uppercase mt-2">Klik untuk upload</p>
                                </div>
                                <input type="file" name="image" class="absolute inset-0 opacity-0 cursor-pointer" onchange="loadFile(event)" required>
                            </div>
                        </div>

                        <div class="space-y-5">
                            @if(auth()->user()->role === 'admin')
                            <div>
                                <label class="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Pilih Petani</label>
                                <select name="user_id" class="w-full bg-slate-50 border-none rounded-2xl px-5 py-4 text-sm font-bold text-emerald-900 focus:ring-2 focus:ring-emerald-500">
                                    @foreach($farmers as $farmer)
                                        <option value="{{ $farmer->id }}">{{ $farmer->name }}</option>
                                    @endforeach
                                </select>
                            </div>
                            @endif

                            <div>
                                <label class="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Nama Produk</label>
                                <input type="text" name="name" class="w-full bg-slate-50 border-none rounded-2xl px-5 py-4 text-sm font-bold text-emerald-900 focus:ring-2 focus:ring-emerald-500" placeholder="Contoh: Beras Organik" required>
                            </div>

                            <div class="grid grid-cols-2 gap-4">
                                <div>
                                    <label class="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Harga (Rp)</label>
                                    <input type="number" name="price" class="w-full bg-slate-50 border-none rounded-2xl px-5 py-4 text-sm font-bold text-emerald-900 focus:ring-2 focus:ring-emerald-500" placeholder="0" required>
                                </div>
                                <div>
                                    <label class="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Kualitas</label>
                                    <select name="quality" class="w-full bg-slate-50 border-none rounded-2xl px-5 py-4 text-sm font-bold text-emerald-900 focus:ring-2 focus:ring-emerald-500">
                                        <option value="Premium">Premium</option>
                                        <option value="Standar">Standar</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <label class="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Deskripsi Produk</label>
                        <textarea name="description" rows="4" class="w-full bg-slate-50 border-none rounded-[2rem] px-6 py-5 text-sm font-bold text-emerald-900 focus:ring-2 focus:ring-emerald-500" placeholder="Ceritakan keunggulan produk ini..."></textarea>
                    </div>

                    <div class="flex items-center justify-end gap-4 pt-6">
                        <a href="{{ route('products.index') }}" class="text-[10px] font-black uppercase text-slate-400 hover:text-red-500 transition">Batal</a>
                        <button type="submit" class="bg-emerald-900 text-white px-10 py-4 rounded-3xl font-black text-xs uppercase tracking-widest hover:bg-orange-500 transition shadow-xl">
                            Simpan Produk
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <script>
        var loadFile = function(event) {
            var output = document.getElementById('output');
            var placeholder = document.getElementById('placeholder');
            output.src = URL.createObjectURL(event.target.files[0]);
            output.classList.remove('hidden');
            placeholder.classList.add('hidden');
        };
    </script>
</x-app-layout>