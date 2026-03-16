import React, { useState, useEffect } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { EyeIcon, EyeSlashIcon, ArrowRightIcon, LockClosedIcon, EnvelopeIcon, UserIcon } from '@heroicons/react/24/solid';

export default function Login({ status, canResetPassword }) {
    const [showPassword, setShowPassword] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post('/login'); 
    };

    return (
        <div className="min-h-screen bg-emerald-950 flex items-center justify-center p-4 md:p-8 font-sans overflow-hidden relative">
            
            {/* Background Decor - Mirip screenshot tapi tema Bah Sumbu */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-800 rounded-full blur-[120px] opacity-50"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-500 rounded-full blur-[120px] opacity-30"></div>

            <Head title="Login System" />

            <div className="w-full max-w-5xl bg-white rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col md:flex-row min-h-[600px] z-10 border border-white/20">
                
                {/* KIRI: Area Selamat Datang (Sesuai Screenshot) */}
                <div className="md:w-1/2 bg-gradient-to-br from-emerald-800 via-emerald-900 to-emerald-950 p-12 md:p-16 flex flex-col justify-center relative overflow-hidden">
                    {/* Abstract shapes mirip screenshot */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-10 translate-x-10"></div>
                    <div className="absolute bottom-10 left-10 w-24 h-4 bg-orange-500/40 rounded-full rotate-45"></div>
                    <div className="absolute bottom-20 left-5 w-16 h-4 bg-emerald-400/20 rounded-full rotate-45"></div>
                    
                    <div className="relative z-10">
                        <Link href="/" className="inline-block mb-8">
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-emerald-900 text-3xl font-black italic shadow-xl rotate-3 hover:rotate-0 transition-transform duration-500">BS</div>
                        </Link>
                        <h1 className="text-4xl md:text-5xl font-black text-white leading-none uppercase italic tracking-tighter mb-6">
                            Selamat Datang<br />di <span className="text-orange-500">Website</span>
                        </h1>
                        <p className="text-emerald-100/60 text-sm leading-relaxed max-w-sm font-medium">
                            Akses sistem E-Katalog Desa Bah Sumbu. Kelola produk pertanian dan peternakan kamu dalam satu platform digital yang modern.
                        </p>
                    </div>

                    <div className="mt-16 pt-10 border-t border-white/10 relative z-10">
                        <p className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.5em]">Official Ecosystem v1.2</p>
                    </div>
                </div>

                {/* KANAN: Form Login (Sesuai Screenshot) */}
                <div className="md:w-1/2 bg-white p-12 md:p-16 flex flex-col justify-center">
                    <div className="max-w-sm mx-auto w-full">
                        <div className="mb-10">
                            <h2 className="text-xs font-black text-slate-300 uppercase tracking-[0.4em] mb-2 text-center">User Login</h2>
                            <div className="h-1 w-12 bg-emerald-500 mx-auto rounded-full"></div>
                        </div>

                        {status && <div className="mb-4 font-medium text-sm text-green-600 text-center">{status}</div>}

                        <form onSubmit={submit} className="space-y-6">
                            {/* Email */}
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                                    <UserIcon className="h-5 w-5 text-slate-300 group-focus-within:text-emerald-600 transition-colors" />
                                </div>
                                <input 
                                    type="email"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    className="w-full bg-slate-50 border-none rounded-full pl-14 pr-6 py-4 text-sm font-bold text-emerald-950 focus:ring-2 focus:ring-emerald-500 transition-all placeholder:text-slate-300"
                                    placeholder="Alamat Email"
                                    required
                                />
                                {errors.email && <p className="text-[10px] text-red-500 font-bold mt-2 ml-4 uppercase">{errors.email}</p>}
                            </div>

                            {/* Password */}
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                                    <LockClosedIcon className="h-5 w-5 text-slate-300 group-focus-within:text-emerald-600 transition-colors" />
                                </div>
                                <input 
                                    type={showPassword ? "text" : "password"}
                                    value={data.password}
                                    onChange={(e) => setData('password', e.target.value)}
                                    className="w-full bg-slate-50 border-none rounded-full pl-14 pr-14 py-4 text-sm font-bold text-emerald-950 focus:ring-2 focus:ring-emerald-500 transition-all placeholder:text-slate-300"
                                    placeholder="Kata Sandi"
                                    required
                                />
                                <button 
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 pr-6 flex items-center text-slate-300 hover:text-emerald-600"
                                >
                                    {showPassword ? <EyeSlashIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                                </button>
                                {errors.password && <p className="text-[10px] text-red-500 font-bold mt-2 ml-4 uppercase">{errors.password}</p>}
                            </div>

                            <div className="flex items-center justify-between px-4">
                                <label className="flex items-center cursor-pointer">
                                    <input 
                                        type="checkbox" 
                                        checked={data.remember}
                                        onChange={(e) => setData('remember', e.target.checked)}
                                        className="w-4 h-4 rounded border-slate-200 text-emerald-600 focus:ring-emerald-500" 
                                    />
                                    <span className="ml-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Remember</span>
                                </label>
                                {canResetPassword && (
                                    <Link href="/forgot-password" size="sm" className="text-[10px] font-bold text-slate-300 hover:text-emerald-600 transition-colors uppercase tracking-widest">
                                        Forgot?
                                    </Link>
                                )}
                            </div>

                            <button 
                                type="submit" 
                                disabled={processing}
                                className="w-full bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-orange-500 hover:to-orange-400 text-white py-4 rounded-full font-black uppercase text-[11px] tracking-[0.3em] shadow-xl shadow-emerald-900/10 transition-all duration-500 active:scale-95 disabled:opacity-50"
                            >
                                {processing ? 'Processing...' : 'Login'}
                            </button>
                        </form>

                
                    </div>
                </div>
            </div>
        </div>
    );
}