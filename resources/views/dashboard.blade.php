<x-app-layout>
    <x-slot name="header">
        <h2 class="text-3xl font-black text-emerald-900 italic uppercase tracking-tighter">
            Dashboard <span class="text-emerald-500">{{ Auth::user()->role === 'admin' ? 'Admin' : 'Mitra Petani' }}</span>
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-8">
            
            <div class="bg-white p-8 rounded-[2.5rem] border border-emerald-50 shadow-sm flex items-center gap-6">
                <div class="w-20 h-20 bg-emerald-900 rounded-3xl flex items-center justify-center text-emerald-100 font-black italic text-3xl shadow-lg">
                    {{ substr(Auth::user()->name, 0, 1) }}
                </div>
                <div>
                    <h3 class="text-2xl font-black text-emerald-900 uppercase italic">Halo, {{ Auth::user()->name }}!</h3>
                    <p class="text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-1">
                        {{ Auth::user()->role === 'admin' ? 'Administrator Desa Bah Sumbu' : 'Kelola produk unggulanmu di sini' }}
                    </p>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                @if(Auth::user()->role === 'admin')
                <div class="bg-white p-10 rounded-[3rem] border border-emerald-50 shadow-sm">
                    <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Total Mitra Desa</p>
                    <div class="flex items-baseline gap-2">
                        <span class="text-6xl font-black text-emerald-900 tracking-tighter">{{ $totalFarmers }}</span>
                        <span class="text-emerald-500 text-xs font-black uppercase italic">Mitra</span>
                    </div>
                </div>
                @endif

                <div class="bg-white p-10 rounded-[3rem] border border-emerald-50 shadow-sm">
                    <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">
                        {{ Auth::user()->role === 'admin' ? 'Total Produk Desa' : 'Produk Saya' }}
                    </p>
                    <div class="flex items-baseline gap-2">
                        <span class="text-6xl font-black text-emerald-900 tracking-tighter">{{ $totalProducts }}</span>
                        <span class="text-orange-500 text-xs font-black uppercase italic">Item</span>
                    </div>
                </div>

                <div class="bg-emerald-900 p-10 rounded-[3rem] shadow-xl flex flex-col justify-between">
                    <h4 class="text-white text-lg font-black italic uppercase leading-tight">
                        {{ Auth::user()->role === 'admin' ? 'Daftarkan petani baru?' : 'Tambah dagangan baru?' }}
                    </h4>
                    <a href="{{ Auth::user()->role === 'admin' ? route('admin.farmers.create') : route('products.create') }}" 
                       class="mt-6 bg-white text-emerald-900 text-center py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-orange-500 hover:text-white transition-all">
                        {{ Auth::user()->role === 'admin' ? '+ Tambah Petani' : '+ Tambah Produk' }}
                    </a>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>