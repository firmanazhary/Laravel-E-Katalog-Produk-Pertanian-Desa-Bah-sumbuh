import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, Link } from '@inertiajs/react';

export default function Create({ auth }) {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        phone_number: '',
        password: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post('/admin/farmers');
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="text-3xl font-black text-emerald-950 italic uppercase tracking-tighter">Tambah <span className="text-emerald-500">Petani Baru</span></h2>}
        >
            <Head title="Tambah Akun Petani" />

            <div className="py-12 max-w-3xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white p-12 rounded-[3.5rem] border border-emerald-50 shadow-sm">
                    <form onSubmit={submit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Nama Lengkap</label>
                            <input 
                                type="text" 
                                value={data.name} 
                                onChange={e => setData('name', e.target.value)} 
                                className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 text-sm font-bold text-emerald-950 focus:ring-2 focus:ring-emerald-500" 
                                placeholder="Contoh: Budi Santoso"
                            />
                            {errors.name && <p className="text-red-500 text-[10px] font-bold uppercase ml-2">{errors.name}</p>}
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Alamat Email</label>
                            <input 
                                type="email" 
                                value={data.email} 
                                onChange={e => setData('email', e.target.value)} 
                                className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 text-sm font-bold text-emerald-950 focus:ring-2 focus:ring-emerald-500" 
                                placeholder="budi@example.com"
                            />
                            {errors.email && <p className="text-red-500 text-[10px] font-bold uppercase ml-2">{errors.email}</p>}
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Nomor WhatsApp</label>
                            <input 
                                type="text" 
                                value={data.phone_number} 
                                onChange={e => setData('phone_number', e.target.value)} 
                                className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 text-sm font-bold text-emerald-950 focus:ring-2 focus:ring-emerald-500" 
                                placeholder="62822..."
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Password Sementara</label>
                            <input 
                                type="password" 
                                value={data.password} 
                                onChange={e => setData('password', e.target.value)} 
                                className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 text-sm font-bold text-emerald-950 focus:ring-2 focus:ring-emerald-500" 
                            />
                        </div>

                        <div className="flex gap-4 pt-6">
                            <Link href="/admin/farmers" className="w-1/3 text-center py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest bg-slate-50 rounded-2xl hover:bg-slate-100 transition">Batal</Link>
                            <button 
                                disabled={processing} 
                                className="flex-1 bg-emerald-950 text-white py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-orange-500 transition-all shadow-xl shadow-emerald-950/20"
                            >
                                {processing ? 'Menyimpan...' : 'Simpan Akun Petani'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}