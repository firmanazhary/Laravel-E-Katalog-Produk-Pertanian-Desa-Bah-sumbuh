<x-guest-layout>
    <div class="min-h-screen flex items-center justify-center bg-[#F8FAFC] px-4">
        <div class="w-full max-w-[400px]">
            
            <div class="text-center mb-12">
                <h2 class="text-3xl font-black text-emerald-950 tracking-tighter uppercase italic">
                    Bah Sumbu<span class="text-orange-500">.</span>
                </h2>
                <p class="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mt-1">E-Katalog Digital System</p>
            </div>

            <div class="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
                <div class="mb-8">
                    <h1 class="text-xl font-extrabold text-emerald-950 uppercase tracking-tight">Login Sistem</h1>
                    <p class="text-xs text-slate-500 mt-1">Gunakan kredensial yang telah didaftarkan admin.</p>
                </div>

                <form method="POST" action="{{ route('login') }}">
                    @csrf

                    <div class="space-y-5">
                        <div>
                            <label class="block text-[10px] font-black text-emerald-900 uppercase tracking-widest mb-2 ml-1">Email Mitra</label>
                            <input type="email" name="email" :value="old('email')" required autofocus 
                                class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all placeholder:text-slate-300"
                                placeholder="nama@email.com">
                            <x-input-error :messages="$errors->get('email')" class="mt-2 text-[10px]" />
                        </div>

                        <div>
                            <label class="block text-[10px] font-black text-emerald-900 uppercase tracking-widest mb-2 ml-1">Kata Sandi</label>
                            <input type="password" name="password" required 
                                class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                                placeholder="••••••••">
                            <x-input-error :messages="$errors->get('password')" class="mt-2 text-[10px]" />
                        </div>
                    </div>

                    <div class="flex items-center justify-between mt-6 px-1">
                        <label class="flex items-center group cursor-pointer">
                            <input id="remember_me" type="checkbox" class="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" name="remember">
                            <span class="ms-2 text-[10px] font-bold text-slate-400 group-hover:text-emerald-900 transition-colors uppercase">Ingat Saya</span>
                        </label>
                        @if (Route::has('password.request'))
                            <a class="text-[10px] font-bold text-emerald-600 hover:text-orange-600 uppercase transition-colors" href="{{ route('password.request') }}">Lupa?</a>
                        @endif
                    </div>

                    <button type="submit" class="w-full mt-8 bg-emerald-950 text-white font-black py-4 rounded-xl text-xs uppercase tracking-[0.2em] hover:bg-emerald-800 active:scale-[0.98] transition-all shadow-lg shadow-emerald-900/10">
                        Masuk Sekarang
                    </button>
                </form>
            </div>

            <div class="mt-10 text-center opacity-50">
                <p class="text-[9px] font-bold text-slate-500 uppercase tracking-widest leading-relaxed">
                    &copy; 2026 Bah Sumbu Ecosystem<br>
                    <span class="text-emerald-950">Dev: Firman Azhary</span>
                </p>
            </div>
        </div>
    </div>
</x-guest-layout>