<x-app-layout>
    <x-slot name="header">
        <div class="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
                <div class="flex items-center gap-2 mb-1">
                    <span class="bg-emerald-100 text-emerald-700 text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full">E-Katalog</span>
                    <span class="text-slate-300">•</span>
                    <span class="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Desa Bah Sumbu</span>
                </div>
                <h2 class="text-3xl font-black text-emerald-900 leading-none tracking-tighter italic uppercase">
                    Katalog <span class="text-emerald-600">Produk</span>
                </h2>
            </div>
            
            <a href="{{ route('products.create') }}" class="group inline-flex items-center gap-3 bg-emerald-900 hover:bg-orange-600 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all duration-500 shadow-xl shadow-emerald-200">
                <svg class="w-4 h-4 group-hover:rotate-90 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 4v16m8-8H4"/></svg>
                Tambah Produk
            </a>
        </div>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            
            @if(session('success'))
                <div class="mb-8 p-5 bg-emerald-600 text-white rounded-3xl font-bold text-sm shadow-lg shadow-emerald-100 animate-fade-in-down">
                    {{ session('success') }}
                </div>
            @endif

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                @forelse($products as $product)
                    <div class="bg-white rounded-[3rem] border border-emerald-50 shadow-sm overflow-hidden group hover:shadow-2xl hover:shadow-emerald-100 transition-all duration-500">
                        <div class="relative h-60 overflow-hidden">
                            <img src="{{ asset('storage/' . $product->image) }}" 
                                 alt="{{ $product->name }}" 
                                 class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                            
                            <div class="absolute top-5 left-5">
                                <span class="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-widest text-emerald-900 shadow-sm border border-emerald-50">
                                    {{ $product->quality ?? 'Standar' }}
                                </span>
                            </div>
                        </div>

                        <div class="p-8">
                            <div class="mb-4">
                                <p class="text-[9px] font-black text-orange-500 uppercase tracking-[0.2em] mb-1">{{ $product->category }}</p>
                                <h3 class="text-lg font-black text-emerald-900 uppercase italic tracking-tighter leading-tight">
                                    {{ $product->name }}
                                </h3>
                                @if(auth()->user()->role === 'admin')
                                    <p class="text-[8px] font-bold text-slate-400 uppercase mt-1 italic">Oleh: {{ $product->user->name }}</p>
                                @endif
                            </div>

                            <div class="flex items-baseline gap-1 mb-6">
                                <span class="text-xs font-bold text-emerald-600 italic">Rp</span>
                                <span class="text-2xl font-black text-emerald-900 tracking-tighter">
                                    {{ number_format($product->price, 0, ',', '.') }}
                                </span>
                            </div>

                            <div class="flex gap-2 pt-6 border-t border-emerald-50">
                                <a href="{{ route('products.edit', $product->id) }}" class="flex-1 bg-emerald-50 text-emerald-700 text-center py-3 rounded-xl font-black text-[9px] uppercase tracking-widest hover:bg-emerald-900 hover:text-white transition-all duration-300">
                                    Edit
                                </a>
                                
                                <form action="{{ route('products.destroy', $product->id) }}" method="POST" class="inline" onsubmit="return confirm('Hapus produk?')">
                                    @csrf @method('DELETE')
                                    <button type="submit" class="p-3 bg-red-50 text-red-400 rounded-xl hover:bg-red-500 hover:text-white transition-all">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                @empty
                    <div class="col-span-full py-20 text-center bg-white rounded-[3rem] border border-dashed border-emerald-100">
                        <p class="text-slate-400 font-bold italic uppercase tracking-widest text-xs">Belum ada produk untuk ditampilkan.</p>
                    </div>
                @endforelse
            </div>
        </div>
    </div>
</x-app-layout>