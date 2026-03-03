<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\User;

class ProductController extends Controller
{
    public function index() {
        if (auth()->user()->role === 'admin') {
            // Admin bisa lihat semua produk dari semua petani
            $products = Product::with('user')->latest()->get();
        } else {
            // Petani hanya bisa lihat produk miliknya sendiri
            $products = auth()->user()->products()->latest()->get();
        }
        return view('dashboard.products.index', compact('products'));
    }

    public function create() {
        // Admin butuh daftar petani untuk dropdown "Pilih Petani"
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
            // Jika admin, ambil ID dari form. Jika petani, pakai ID sendiri.
            'user_id' => (auth()->user()->role === 'admin') ? $request->user_id : auth()->id(),
            'name' => $request->name,
            'category' => $request->category,
            'price' => $request->price,
            'quality' => $request->quality,
            'image' => $path,
            'description' => $request->description,
        ]);

        return redirect()->route('products.index')->with('success', 'Produk Berhasil Disimpan!');
    }

     public function destroy(Product $product) {
        // Hanya admin atau pemilik produk yang bisa menghapus
        if (auth()->user()->role === 'admin' || auth()->id() === $product->user_id) {
            $product->delete();
            return redirect()->route('products.index')->with('success', 'Produk Berhasil Dihapus!');
        }
        return redirect()->route('products.index')->with('error', 'Anda Tidak Memiliki Akses!');
    }
}
