<x-app-layout>
    <x-slot name="header">
        <h2 class="font-black text-xl text-green-900 leading-tight uppercase italic tracking-tighter">
            {{ __('Registrasi Petani Baru') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-3xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white p-10 rounded-[2.5rem] shadow-sm border border-green-50">
                <form action="{{ route('admin.farmers.store') }}" method="POST" class="space-y-6">
                    @csrf
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="col-span-2">
                            <x-input-label for="name" :value="__('Nama Lengkap')" class="uppercase tracking-widest text-[10px] font-black" />
                            <x-text-input id="name" name="name" type="text" class="mt-1 block w-full rounded-2xl border-slate-200" required autofocus />
                        </div>
                        <div>
                            <x-input-label for="email" :value="__('Email Akun')" class="uppercase tracking-widest text-[10px] font-black" />
                            <x-text-input id="email" name="email" type="email" class="mt-1 block w-full rounded-2xl border-slate-200" required />
                        </div>
                        <div>
                            <x-input-label for="phone_number" :value="__('Nomor WhatsApp (628...)')" class="uppercase tracking-widest text-[10px] font-black" />
                            <x-text-input id="phone_number" name="phone_number" type="text" class="mt-1 block w-full rounded-2xl border-slate-200" placeholder="Contoh: 62822..." required />
                        </div>
                        <div class="col-span-2">
                            <x-input-label for="password" :value="__('Password Sementara')" class="uppercase tracking-widest text-[10px] font-black" />
                            <x-text-input id="password" name="password" type="password" class="mt-1 block w-full rounded-2xl border-slate-200" required />
                            <p class="mt-2 text-[10px] text-slate-400 italic font-bold uppercase tracking-tighter">* Berikan password ini kepada petani untuk login pertama kali.</p>
                        </div>
                    </div>

                    <div class="flex items-center justify-end gap-4 pt-6 border-t border-slate-50">
                        <a href="{{ route('admin.farmers.index') }}" class="text-xs font-black uppercase text-slate-400 hover:text-red-500 transition">Batal</a>
                        <button type="submit" class="bg-green-900 text-white px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-orange-500 transition shadow-xl">
                            Simpan Data Petani
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</x-app-layout>