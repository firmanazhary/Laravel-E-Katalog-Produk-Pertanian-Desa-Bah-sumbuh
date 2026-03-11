import React, { useState, useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayouts'; // Pastikan path layout benar
import { Head, Link, useForm } from '@inertiajs/react';
import { EyeIcon, EyeSlashIcon, ArrowRightIcon, LockClosedIcon, EnvelopeIcon } from '@heroicons/react/24/solid';

export default function Login({ status, canResetPassword }) {
    const [showPassword, setShowPassword] = useState(false);

    // 1. Logika Form Inertia (Menggantikan input manual)
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    // 2. Cleanup password saat selesai
    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route('login'));
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            <div className="min-h-[80vh] flex items-center justify-center px-4 relative font-sans">
                {/* Decorative Background */}
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-100/50 rounded-full blur-[100px] -z-10" />
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-orange-100/50 rounded-full blur-[100px] -z-10" />

                <div className="w-full max-w-[420px] z-10">
                    
                    {/* Logo Section */}
                    <div className="text-center mb-10 group">
                        <Link href="/" className="inline-block p-4 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2rem] mb-5 border border-slate-50 transition-transform duration-500 hover:scale-105">
                            <h2 className="text-4xl font-black text-emerald-950 tracking-tighter uppercase italic leading-none">
                                Bah Sumbu<span className="text-orange-500">.</span>
                            </h2>
                        </Link>
                        <p className="text-[10px] font-black text-emerald-900/40 uppercase tracking-[0.5em] ml-1">
                            E-Katalog Digital System
                        </p>
                    </div>

                    {/* Card Container */}
                    <div className="bg-white/70 backdrop-blur-2xl border border-white shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] rounded-[3rem] p-10 md:p-12 relative">
                        
                        <div className="mb-10 text-center">
                            <h1 className="text-2xl font-black text-emerald-950 uppercase tracking-tight">Otentikasi</h1>
                            <p className="text-xs text-slate-500 mt-2 font-medium tracking-wide">
                                Gunakan kredensial yang telah didaftarkan admin.
                            </p>
                        </div>

                        {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

                        <form onSubmit={submit} className="space-y-6">
                            {/* Email Input */}
                            <div className="space-y-2">
                                <label className="block text-[10px] font-black text-emerald-900 uppercase tracking-[0.2em] ml-2 opacity-60">
                                    Email Mitra
                                </label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                                        <EnvelopeIcon className={`h-5 w-5 transition-colors ${errors.email ? 'text-red-400' : 'text-emerald-900/20 group-focus-within:text-emerald-500'}`} />
                                    </div>
                                    <input 
                                        type="email" 
                                        name="email"
                                        value={data.email}
                                        autoComplete="username"
                                        onChange={(e) => setData('email', e.target.value)}
                                        className={`w-full bg-slate-100/40 border-2 rounded-[1.25rem] pl-14 pr-5 py-4 text-sm font-bold text-emerald-950 focus:bg-white focus:ring-4 focus:ring-emerald-500/5 transition-all outline-none placeholder:text-slate-400 placeholder:font-normal ${errors.email ? 'border-red-300' : 'border-transparent focus:border-emerald-500/10'}`}
                                        placeholder="nama@email.com"
                                        required
                                    />
                                </div>
                                {errors.email && <p className="text-[10px] text-red-500 font-bold ml-2 uppercase tracking-wide">{errors.email}</p>}
                            </div>

                            {/* Password Input */}
                            <div className="space-y-2">
                                <label className="block text-[10px] font-black text-emerald-900 uppercase tracking-[0.2em] ml-2 opacity-60">
                                    Kata Sandi
                                </label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                                        <LockClosedIcon className={`h-5 w-5 transition-colors ${errors.password ? 'text-red-400' : 'text-emerald-900/20 group-focus-within:text-emerald-500'}`} />
                                    </div>
                                    <input 
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        value={data.password}
                                        autoComplete="current-password"
                                        onChange={(e) => setData('password', e.target.value)}
                                        className={`w-full bg-slate-100/40 border-2 rounded-[1.25rem] pl-14 pr-14 py-4 text-sm font-bold text-emerald-950 focus:bg-white focus:ring-4 focus:ring-emerald-500/5 transition-all outline-none ${errors.password ? 'border-red-300' : 'border-transparent focus:border-emerald-500/10'}`}
                                        placeholder="••••••••"
                                        required
                                    />
                                    <button 
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute inset-y-0 right-0 pr-5 flex items-center text-slate-400 hover:text-emerald-600 transition-colors"
                                    >
                                        {showPassword ? <EyeSlashIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                                    </button>
                                </div>
                                {errors.password && <p className="text-[10px] text-red-500 font-bold ml-2 uppercase tracking-wide">{errors.password}</p>}
                            </div>

                            {/* Remember & Forgot */}
                            <div className="flex items-center justify-between px-2">
                                <label className="flex items-center cursor-pointer group">
                                    <input 
                                        type="checkbox" 
                                        name="remember"
                                        checked={data.remember}
                                        onChange={(e) => setData('remember', e.target.checked)}
                                        className="w-4 h-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 transition-all cursor-pointer" 
                                    />
                                    <span className="ms-3 text-[10px] font-black text-slate-400 group-hover:text-emerald-900 transition-colors uppercase tracking-widest">Ingat Saya</span>
                                </label>
                                {canResetPassword && (
                                    <Link 
                                        href={route('password.request')} 
                                        className="text-[10px] font-black text-emerald-600 hover:text-orange-600 uppercase tracking-widest transition-all"
                                    >
                                        Lupa?
                                    </Link>
                                )}
                            </div>

                            {/* Submit Button */}
                            <button 
                                type="submit" 
                                disabled={processing}
                                className={`group relative w-full mt-4 overflow-hidden rounded-2xl bg-emerald-950 p-px font-black uppercase tracking-[0.2em] text-white shadow-2xl shadow-emerald-900/20 transition-all active:scale-[0.97] ${processing ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                <div className="relative flex items-center justify-center bg-gradient-to-r from-emerald-950 to-emerald-900 px-8 py-5 rounded-2xl">
                                    <span className="text-xs">{processing ? 'Memproses...' : 'Masuk Sekarang'}</span>
                                    {!processing && <ArrowRightIcon className="h-4 w-4 ml-3 transition-transform group-hover:translate-x-1" />}
                                </div>
                            </button>
                        </form>
                    </div>

                    {/* Footer */}
                    <div className="mt-12 text-center opacity-70">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] leading-loose">
                            © 2026 <span className="text-emerald-950">Bah Sumbu Ecosystem</span>
                            <br />
                            <span className="inline-flex items-center mt-3 px-4 py-1.5 bg-white border border-slate-100 text-emerald-800 rounded-full text-[9px] shadow-sm">
                                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse mr-2"></span>
                                Dev: Firman Azhary
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}