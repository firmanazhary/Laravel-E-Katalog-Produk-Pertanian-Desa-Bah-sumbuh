<x-app-layout>
    <div class="py-12">
        <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white p-10 rounded-[3rem] shadow-sm border border-emerald-50">
                <form action="{{ route('products.store') }}" method="POST" enctype="multipart/form-data" class="space-y-8">
                    @csrf
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div class="space-y-4">
                            <label class="block text-[10px] font-black uppercase tracking-widest text-slate-400">Foto Produk</label>
                            <input type="file" name="image" class="w-full text-xs" required>
                        </div>

                        <div class="space-y-5">
                            @if(auth()->user()->role === 'admin')
                            <select name="user_id" class="w-full bg-slate-50 border-none rounded-2xl">
                                @foreach($farmers as $farmer)
                                    <option value="{{ $farmer->id }}">{{ $farmer->name }}</option>
                                @endforeach
                            </select>
                            @endif

                            <input type="text" name="name" placeholder="Nama Produk" class="w-full bg-slate-50 border-none rounded-2xl" required>

                            <div class="grid grid-cols-2 gap-4">
                                <input type="number" name="price" placeholder="Harga" class="w-full bg-slate-50 border-none rounded-2xl" required>
                                
                                <select name="category" class="w-full bg-slate-50 border-none rounded-2xl" required>
                                    <option value="" disabled selected>Kategori</option>
                                    <option value="Pertanian">Pertanian</option>
                                    <option value="Peternakan">Peternakan</option>
                                </select>
                            </div>

                            <select name="quality" class="w-full bg-slate-50 border-none rounded-2xl">
                                <option value="Premium">Premium</option>
                                <option value="Standar">Standar</option>
                            </select>
                        </div>
                    </div>
                    <textarea name="description" rows="4" class="w-full bg-slate-50 border-none rounded-2xl" placeholder="Deskripsi..."></textarea>
                    
                    <button type="submit" class="w-full bg-emerald-900 text-white py-4 rounded-3xl font-black uppercase tracking-widest hover:bg-orange-500 transition">
                        Simpan Produk
                    </button>
                </form>
            </div>
        </div>
    </div>
</x-app-layout>