<x-guest-layout>
    <div class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gradient-to-br from-emerald-50 via-white to-emerald-100 px-4">
        
        <div class="mb-10 text-center transform hover:scale-105 transition-all duration-500">
            <h2 class="text-4xl font-black text-emerald-900 italic tracking-tighter uppercase leading-none">
                Bah Sumbu<span class="text-orange-500">.</span>
            </h2>
            <div class="mt-3 flex items-center justify-center gap-2">
                <span class="h-[1px] w-8 bg-emerald-200"></span>
                <p class="text-[9px] font-black text-emerald-600 uppercase tracking-[0.4em]">Integrated Ecosystem</p>
                <span class="h-[1px] w-8 bg-emerald-200"></span>
            </div>
        </div>

        <div class="w-full sm:max-w-md px-10 py-12 bg-white/70 backdrop-blur-2xl border border-white/50 shadow-[0_32px_64px_-12px_rgba(5,150,105,0.15)] rounded-[3.5rem] relative overflow-hidden">
            <div class="absolute -top-10 -right-10 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl"></div>
            
            <div class="mb-10 text-center relative z-10">
                <h1 class="text-2xl font-black text-emerald-900 uppercase italic tracking-tight">Akses Sistem</h1>
                <p class="text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-2">Masuk sebagai Admin atau Mitra</p>
            </div>

            <x-auth-session-status class="mb-4" :status="session('status')" />

            <form method="POST" action="{{ route('login') }}" class="relative z-10">
                @csrf

                <div class="space-y-6">
                    <div>
                        <x-input-label for="email" value="Alamat Email" class="text-[10px] font-black uppercase tracking-widest text-emerald-800 ml-4 mb-2" />
                        <x-text-input id="email" class="block w-full !rounded-2xl border-emerald-100 bg-white/80 focus:border-emerald-500 focus:ring-emerald-500 placeholder:text-slate-300 text-sm py-4 px-6" type="email" name="email" :value="old('email')" required autofocus placeholder="Masukkan email terdaftar" />
                        <x-input-error :messages="$errors->get('email')" class="mt-2 text-[10px] font-bold uppercase ml-4" />
                    </div>

                    <div>
                        <x-input-label for="password" value="Kata Sandi" class="text-[10px] font-black uppercase tracking-widest text-emerald-800 ml-4 mb-2" />
                        <x-text-input id="password" class="block w-full !rounded-2xl border-emerald-100 bg-white/80 focus:border-emerald-500 focus:ring-emerald-500 placeholder:text-slate-300 text-sm py-4 px-6" type="password" name="password" required placeholder="••••••••" />
                        <x-input-error :messages="$errors->get('password')" class="mt-2 text-[10px] font-bold uppercase ml-4" />
                    </div>
                </div>

                <div class="mt-8 px-2 flex items-center justify-between">
                    <label class="flex items-center group cursor-pointer">
                        <input id="remember_me" type="checkbox" class="rounded-lg border-emerald-200 text-emerald-600 shadow-sm focus:ring-emerald-500" name="remember">
                        <span class="ms-2 text-[10px] font-black text-slate-500 uppercase tracking-widest group-hover:text-emerald-700 transition-colors">Ingat Saya</span>
                    </label>
                    @if (Route::has('password.request'))
                        <a class="text-[10px] font-black text-emerald-600 hover:text-orange-500 uppercase tracking-widest transition-colors" href="{{ route('password.request') }}">Lupa Sandi?</a>
                    @endif
                </div>

                <div class="mt-10">
                    <button type="submit" class="w-full bg-emerald-900 hover:bg-emerald-800 text-white font-black py-5 rounded-2xl shadow-xl shadow-emerald-200 transition-all duration-300 transform active:scale-95 uppercase text-[10px] tracking-[0.3em] flex items-center justify-center gap-2">
                        Masuk Sekarang
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
                    </button>
                </div>
            </form>
        </div>

        <div class="mt-12 text-center">
            <p class="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em]">
                &copy; 2026 Bah Sumbu Ecosystem
            </p>
            <p class="text-[9px] font-black text-emerald-800 uppercase tracking-[0.3em] mt-1">
                Developed by Firman Azhary
            </p>
        </div>
    </div>
</x-guest-layout>