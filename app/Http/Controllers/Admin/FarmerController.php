<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class FarmerController extends Controller
{
    public function index()
    {
        $farmers = User::where('role', 'petani')->latest()->get();
        return view('admin.farmers.index', compact('farmers'));
    }

    public function create()
    {
        return view('admin.farmers.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|min:8',
            'phone_number' => 'required',
        ]);

        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'phone_number' => $request->phone_number,
            'role' => 'petani',
        ]);

        return redirect()->route('admin.farmers.index')->with('success', 'Petani berhasil ditambahkan!');
    }

    public function edit(User $farmer)
    {
        return view('admin.farmers.edit', compact('farmer'));
    }

    public function update(Request $request, User $farmer)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email,' . $farmer->id,
            'phone_number' => 'required',
        ]);

        $farmer->update($request->only('name', 'email', 'phone_number'));

        if ($request->filled('password')) {
            $farmer->update(['password' => Hash::make($request->password)]);
        }

        return redirect()->route('admin.farmers.index')->with('success', 'Data petani diperbarui!');
    }

    public function destroy(User $farmer)
    {
        $farmer->delete();
        return redirect()->route('admin.farmers.index')->with('success', 'Petani berhasil dihapus!');
    }
}