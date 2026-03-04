<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\User;
use Illuminate\Http\Request;

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
        
        return view('home', compact('products', 'farmers'));
    }

    /**
     * Menampilkan Halaman About (Cerita Desa)
     */
    public function about()
    {
        return view('about');
    }

    /**
     * Menampilkan Katalog Lengkap dengan Fitur Filter
     */
    public function allProducts(Request $request)
    {
        $query = Product::with('user');

        // Filter berdasarkan Petani (User ID)
        if ($request->has('farmer') && $request->farmer != '') {
            $query->where('user_id', $request->farmer);
        }

        // Filter berdasarkan Kategori
        if ($request->has('category') && $request->category != '') {
            $query->where('category', $request->category);
        }

        // Filter berdasarkan Grade (Quality)
        if ($request->has('quality') && $request->quality != '') {
            $query->where('quality', $request->quality);
        }

        // Pagination 9 produk per halaman
        $products = $query->latest()->paginate(9); 
        
        $farmers = User::where('role', 'petani')->get();
        $categories = Product::select('category')->distinct()->pluck('category');

        return view('all-products', compact('products', 'farmers', 'categories'));
    }

    /**
     * Menampilkan Detail Produk & Rekomendasi Produk Petani Terkait
     */
    public function show($slug)
    {
        // Cari produk utama
        $product = Product::with('user')->where('slug', $slug)->firstOrFail();

        // Ambil produk lain dari petani yang sama sebagai rekomendasi (Related Products)
        $relatedProducts = Product::where('user_id', $product->user_id)
                                    ->where('id', '!=', $product->id)
                                    ->take(3)
                                    ->get();

        return view('product-detail', compact('product', 'relatedProducts'));
    }
}