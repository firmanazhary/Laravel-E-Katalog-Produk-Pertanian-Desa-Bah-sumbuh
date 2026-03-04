<nav x-data="{ open: false }" class="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-emerald-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-20">
            <div class="flex">
                <div class="shrink-0 flex items-center">
                    <a href="{{ route('dashboard') }}" class="flex items-center gap-2">
                        <span class="text-2xl font-black text-emerald-900 italic tracking-tighter uppercase">
                            Bah Sumbu<span class="text-orange-500">.</span>
                        </span>
                    </a>
                </div>

                <div class="hidden space-x-4 sm:-my-px sm:ms-10 sm:flex items-center">
                    <x-nav-link :href="route('dashboard')" :active="request()->routeIs('dashboard')" 
                        class="px-4 py-2 rounded-xl transition-all duration-300 font-bold uppercase text-[10px] tracking-widest {{ request()->routeIs('dashboard') ? 'bg-emerald-900 text-white shadow-lg shadow-emerald-100' : 'text-slate-400 hover:text-emerald-600' }}">
                        {{ __('Overview') }}
                    </x-nav-link>

                    @can('admin-only')
                    <x-nav-link :href="route('admin.farmers.index')" :active="request()->routeIs('admin.farmers.*')"
                        class="px-4 py-2 rounded-xl transition-all duration-300 font-bold uppercase text-[10px] tracking-widest {{ request()->routeIs('admin.farmers.*') ? 'bg-emerald-900 text-white shadow-lg shadow-emerald-100' : 'text-slate-400 hover:text-emerald-600' }}">
                        {{ __('Mitra Petani') }}
                    </x-nav-link>
                    @endcan

                    <x-nav-link :href="route('products.index')" :active="request()->routeIs('products.*')"
                        class="px-4 py-2 rounded-xl transition-all duration-300 font-bold uppercase text-[10px] tracking-widest {{ request()->routeIs('products.*') ? 'bg-emerald-900 text-white shadow-lg shadow-emerald-100' : 'text-slate-400 hover:text-emerald-600' }}">
                        {{ __('Katalog Produk') }}
                    </x-nav-link>
                    
                    <a href="/" target="_blank" class="px-4 py-2 rounded-xl text-slate-400 hover:text-orange-500 transition-all duration-300 font-bold uppercase text-[10px] tracking-widest flex items-center gap-2">
                        Lihat Web 
                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                    </a>
                </div>
            </div>

            <div class="hidden sm:flex sm:items-center sm:ms-6">
                <x-dropdown align="right" width="48">
                    <x-slot name="trigger">
                        <button class="inline-flex items-center px-4 py-2 border border-emerald-50 text-[10px] font-black uppercase tracking-widest rounded-xl text-emerald-900 bg-emerald-50/50 hover:bg-emerald-100 transition duration-150 ease-in-out">
                            <div class="flex items-center gap-2">
                                <div class="w-6 h-6 bg-emerald-900 text-white rounded-lg flex items-center justify-center text-[10px]">
                                    {{ substr(Auth::user()->name, 0, 1) }}
                                </div>
                                {{ Auth::user()->name }}
                            </div>

                            <div class="ms-1">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </div>
                        </button>
                    </x-slot>

                    <x-slot name="content">
                        <x-dropdown-link :href="route('profile.edit')" class="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                            {{ __('Profil Saya') }}
                        </x-dropdown-link>

                        <form method="POST" action="{{ route('logout') }}">
                            @csrf
                            <x-dropdown-link :href="route('logout')"
                                    onclick="event.preventDefault();
                                                this.closest('form').submit();"
                                    class="text-[10px] font-bold uppercase tracking-widest text-red-500">
                                {{ __('Keluar Sistem') }}
                            </x-dropdown-link>
                        </form>
                    </x-slot>
                </x-dropdown>
            </div>

            <div class="-me-2 flex items-center sm:hidden">
                <button @click="open = ! open" class="inline-flex items-center justify-center p-2 rounded-xl text-emerald-900 bg-emerald-50 hover:bg-emerald-100 transition duration-150 ease-in-out">
                    <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path :class="{'hidden': open, 'inline-flex': ! open }" class="inline-flex" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        <path :class="{'hidden': ! open, 'inline-flex': open }" class="hidden" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
</nav>