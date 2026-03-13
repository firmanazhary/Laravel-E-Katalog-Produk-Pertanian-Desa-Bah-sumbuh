<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PublicController extends Controller
{
    /**
     * Menampilkan Halaman Home (Landing Page)
     */
    public function index()
    {
        // Ambil 6 produk terbaru dengan data petaninya
        $products = Product::with('user')->latest()->take(6)->get();
        
        // Ambil list petani untuk di-highlight di halaman depan
        $farmers = User::where('role', 'petani')->withCount('products')->take(4)->get();
        
        return Inertia::render('Home', [
            'products' => $products,
            'farmers'  => $farmers,
        ]);
    }

    /**
     * Menampilkan Halaman About (Cerita Desa)
     */
    public function about()
    {
        return Inertia::render('About');
    }

    /**
     * Menampilkan Katalog Lengkap dengan Fitur Filter
     */
    public function allProducts(Request $request)
    {
        $query = Product::with('user');

        // Filter Logic
        if ($request->filled('farmer')) {
            $query->where('user_id', $request->farmer);
        }
        if ($request->filled('category')) {
            $query->where('category', $request->category);
        }
        if ($request->filled('quality')) {
            $query->where('quality', $request->quality);
        }

        return Inertia::render('Products/All', [
            'products' => $query->latest()->paginate(9)->withQueryString(),
            'farmers' => User::where('role', 'petani')->get(),
            'categories' => Product::select('category')->distinct()->pluck('category'),
            'filters' => $request->only(['farmer', 'category', 'quality'])
        ]);
    }

    /**
     * Menampilkan Detail Produk (Sudah Inertia)
     */
    public function show($slug)
    {
        // Cari produk utama
        $product = Product::with('user')->where('slug', $slug)->firstOrFail();

        // Ambil produk lain dari petani yang sama sebagai rekomendasi
        $relatedProducts = Product::where('user_id', $product->user_id)
                                    ->where('id', '!=', $product->id)
                                    ->take(3)
                                    ->get();

        // GANTI: Sekarang render ke React, bukan Blade view lagi
        return Inertia::render('ProductDetail', [
            'product' => $product,
            'relatedProducts' => $relatedProducts
        ]);
    }
}