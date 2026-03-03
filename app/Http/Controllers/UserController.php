<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    // Menampilkan daftar semua Petani (Hanya untuk Admin)
    public function index()
    {
        $farmers = User::where('role', 'petani')->latest()->get();
        return view('dashboard.users.index', compact('farmers'));
    }

    // Menampilkan form tambah petani
    public function create()
    {
        return view('dashboard.users.create');
    }

    // Menyimpan akun petani baru ke database
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'phone_number' => 'required|string',
            'password' => 'required|string|min:8',
        ]);

        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'phone_number' => $request->phone_number,
            'password' => Hash::make($request->password),
            'role' => 'petani', // Otomatis set role sebagai petani
        ]);

        return redirect()->route('users.index')->with('success', 'Akun Petani berhasil dibuat!');
    }
}