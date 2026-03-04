<x-app-layout>
    <x-slot name="header">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
                <h2 class="text-3xl font-black text-emerald-900 tracking-tighter italic uppercase leading-none">
                    Manajemen <span class="text-emerald-500">Petani</span>
                </h2>
                <p class="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mt-2">Desa Bah Sumbu • Administrator</p>
            </div>
            <a href="{{ route('admin.farmers.create') }}" class="group inline-flex items-center gap-3 bg-emerald-900 hover:bg-orange-600 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all duration-500 shadow-xl shadow-emerald-200">
                <svg class="w-4 h-4 group-hover:rotate-90 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 4v16m8-8H4"/></svg>
                Registrasi Petani
            </a>
        </div>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-8">
            
            <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div class="bg-white p-8 rounded-[2.5rem] shadow-sm border border-emerald-50 relative overflow-hidden group">
                    <div class="absolute -right-6 -top-6 w-24 h-24 bg-emerald-50 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                    <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 relative italic">Total Mitra Aktif</p>
                    <div class="flex items-baseline gap-2 relative">
                        <span class="text-5xl font-black text-emerald-900 tracking-tighter">{{ $farmers->count() }}</span>
                        <span class="text-emerald-500 text-xs font-black uppercase italic tracking-tighter">Verified</span>
                    </div>
                </div>
            </div>

            <div class="bg-white rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.02)] border border-emerald-50 overflow-hidden">
                <div class="overflow-x-auto">
                    <table class="w-full text-left border-collapse">
                        <thead>
                            <tr class="bg-emerald-50/30">
                                <th class="py-8 px-10 text-[11px] font-black uppercase text-emerald-900 tracking-[0.2em]">Identitas Petani</th>
                                <th class="py-8 px-10 text-[11px] font-black uppercase text-emerald-900 tracking-[0.2em]">Info Kontak</th>
                                <th class="py-8 px-10 text-[11px] font-black uppercase text-emerald-900 tracking-[0.2em] text-center whitespace-nowrap">Status & Aksi</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-emerald-50/50">
                            @forelse($farmers as $farmer)
                            <tr class="hover:bg-emerald-50/20 transition-all duration-300 group">
                                <td class="py-8 px-10 whitespace-nowrap">
                                    <div class="flex items-center gap-5">
                                        <div class="w-16 h-16 bg-emerald-900 rounded-3xl flex items-center justify-center text-emerald-100 font-black italic text-2xl shadow-lg group-hover:rotate-6 transition-transform">
                                            {{ substr($farmer->name, 0, 1) }}
                                        </div>
                                        <div>
                                            <p class="font-black text-emerald-900 text-xl tracking-tighter leading-none mb-1 uppercase italic group-hover:text-emerald-600 transition-colors">{{ $farmer->name }}</p>
                                            <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Mitra Sejak {{ $farmer->created_at->format('M Y') }}</p>
                                        </div>
                                    </div>
                                </td>
                                <td class="py-8 px-10">
                                    <div class="flex flex-col gap-1">
                                        <span class="text-sm font-bold text-slate-500">{{ $farmer->email }}</span>
                                        <span class="text-sm font-black text-emerald-700 tracking-tight">+{{ $farmer->phone_number }}</span>
                                    </div>
                                </td>
                                <td class="py-8 px-10">
                                    <div class="flex justify-center items-center gap-4">
                                        <span class="hidden lg:block text-[9px] font-black uppercase tracking-widest text-emerald-500 bg-emerald-50 px-4 py-2 rounded-xl">Verified</span>
                                        
                                        <a href="{{ route('admin.farmers.edit', $farmer->id) }}" class="p-4 bg-white border border-emerald-50 text-emerald-600 rounded-2xl hover:bg-emerald-600 hover:text-white transition-all shadow-sm">
                                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/></svg>
                                        </a>
                                        
                                        <form action="{{ route('admin.farmers.destroy', $farmer->id) }}" method="POST" onsubmit="return confirm('Hapus mitra tani ini?')">
                                            @csrf @method('DELETE')
                                            <button type="submit" class="p-4 bg-white border border-red-50 text-red-400 rounded-2xl hover:bg-red-500 hover:text-white transition-all shadow-sm">
                                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                                            </button>
                                        </form>
                                    </div>
                                </td>
                            </tr>
                            @empty
                            <tr>
                                <td colspan="3" class="py-20 text-center">
                                    <p class="text-slate-400 font-bold italic">Belum ada mitra tani yang terdaftar.</p>
                                </td>
                            </tr>
                            @endforelse
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>