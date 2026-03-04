<x-app-layout>
    <x-slot name="header">
        <h2 class="text-3xl font-black text-emerald-900 italic uppercase tracking-tighter">
            Edit <span class="text-emerald-500">Produk</span>
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white p-10 rounded-[3rem] shadow-sm border border-emerald-50">
                <form action="{{ route('products.update', $product->id) }}" method="POST" enctype="multipart/form-data" class="space-y-8">
                    @csrf
                    @method('PUT')
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div class="space-y-4">
                            <label class="block text-[10px] font-black uppercase tracking-widest text-slate-400">Ubah Foto (Opsional)</label>
                            <div class="relative w-full h-64 bg-emerald-50 rounded-[2.5rem] overflow-hidden">
                                <img id="output" src="{{ asset('storage/' . $product->image) }}" class="w-full h-full object-cover">
                                <input type="file" name="image" class="absolute inset-0 opacity-0 cursor-pointer" onchange="loadFile(event)">
                            </div>
                        </div>

                        <div class="space-y-5">
                            <div>
                                <label class="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Nama Produk</label>
                                <input type="text" name="name" value="{{ $product->name }}" class="w-full bg-slate-50 border-none rounded-2xl px-5 py-4 text-sm font-bold text-emerald-900 focus:ring-2 focus:ring-emerald-500" required>
                            </div>

                            <div class="grid grid-cols-2 gap-4">
                                <div>
                                    <label class="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Harga (Rp)</label>
                                    <input type="number" name="price" value="{{ $product->price }}" class="w-full bg-slate-50 border-none rounded-2xl px-5 py-4 text-sm font-bold text-emerald-900 focus:ring-2 focus:ring-emerald-500" required>
                                </div>
                                <div>
                                    <label class="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Kualitas</label>
                                    <select name="quality" class="w-full bg-slate-50 border-none rounded-2xl px-5 py-4 text-sm font-bold text-emerald-900 focus:ring-2 focus:ring-emerald-500">
                                        <option value="Premium" {{ $product->quality == 'Premium' ? 'selected' : '' }}>Premium</option>
                                        <option value="Standar" {{ $product->quality == 'Standar' ? 'selected' : '' }}>Standar</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <label class="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Deskripsi Produk</label>
                        <textarea name="description" rows="4" class="w-full bg-slate-50 border-none rounded-[2rem] px-6 py-5 text-sm font-bold text-emerald-900 focus:ring-2 focus:ring-emerald-500">{{ $product->description }}</textarea>
                    </div>

                    <div class="flex items-center justify-end gap-4 pt-6">
                        <button type="submit" class="bg-emerald-900 text-white px-12 py-4 rounded-3xl font-black text-xs uppercase tracking-widest hover:bg-orange-600 transition shadow-xl">
                            Update Produk
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</x-app-layout>