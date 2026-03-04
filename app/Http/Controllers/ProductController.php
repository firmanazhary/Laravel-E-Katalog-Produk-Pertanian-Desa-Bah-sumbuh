<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\User;
use Illuminate\Support\Str; // Tambahkan ini untuk Slug
use Illuminate\Support\Facades\Storage; // Tambahkan ini untuk hapus gambar

class ProductController extends Controller
{
    public function index() {
        if (auth()->user()->role === 'admin') {
            $products = Product::with('user')->latest()->get();
        } else {
            // Menggunakan relasi: pastikan di model User sudah ada public function products()
            $products = auth()->user()->products()->latest()->get();
        }
        return view('dashboard.products.index', compact('products'));
    }

    public function create() {
        $farmers = User::where('role', 'petani')->get();
        return view('dashboard.products.create', compact('farmers'));
    }

    public function store(Request $request) {
        $request->validate([
            'name' => 'required',
            'price' => 'required|numeric',
            'image' => 'image|mimes:jpg,png,jpeg|max:2048',
        ]);

        $path = $request->file('image') ? $request->file('image')->store('products', 'public') : null;

        Product::create([
            'user_id' => (auth()->user()->role === 'admin') ? $request->user_id : auth()->id(),
            'name' => $request->name,
            'slug' => Str::slug($request->name) . '-' . Str::random(5), // Slug otomatis & unik
            'category' => $request->category,
            'price' => $request->price,
            'quality' => $request->quality,
            'image' => $path,
            'description' => $request->description,
        ]);

        return redirect()->route('products.index')->with('success', 'Produk Berhasil Disimpan!');
    }
    // ... baris kode lainnya

public function edit(Product $product)
{
    // Keamanan: Petani tidak boleh edit produk milik petani lain
    if (auth()->user()->role !== 'admin' && $product->user_id !== auth()->id()) {
        abort(403, 'Anda tidak memiliki akses ke produk ini.');
    }

    // Admin butuh daftar petani jika ingin memindahkan kepemilikan produk
    $farmers = \App\Models\User::where('role', 'petani')->get();
    
    return view('dashboard.products.edit', compact('product', 'farmers'));
}

public function update(Request $request, Product $product)
{
    $request->validate([
        'name' => 'required|max:255',
        'price' => 'required|numeric',
        'image' => 'nullable|image|mimes:jpeg,png,jpg|max:2048', // Nullable karena foto tidak wajib diganti
    ]);

    // Update data dasar
    $product->name = $request->name;
    $product->price = $request->price;
    $product->quality = $request->quality;
    $product->description = $request->description;

    // Jika Admin yang edit, dia bisa ganti pemilik produk
    if (auth()->user()->role === 'admin') {
        $product->user_id = $request->user_id;
    }

    // Logika Ganti Gambar
    if ($request->hasFile('image')) {
        // Hapus foto lama agar tidak memenuhi storage
        if ($product->image) {
            \Illuminate\Support\Facades\Storage::disk('public')->delete($product->image);
        }
        // Simpan foto baru
        $product->image = $request->file('image')->store('products', 'public');
    }

    $product->save();

    return redirect()->route('products.index')->with('success', 'Produk berhasil diperbarui!');
}

    public function destroy(Product $product) {
        if (auth()->user()->role === 'admin' || auth()->id() === $product->user_id) {
            
            // Hapus file gambar dari storage biar gak jadi sampah
            if ($product->image) {
                Storage::disk('public')->delete($product->image);
            }

            $product->delete();
            return redirect()->route('products.index')->with('success', 'Produk Berhasil Dihapus!');
        }
        return redirect()->route('products.index')->with('error', 'Anda Tidak Memiliki Akses!');
    }
}