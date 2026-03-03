<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\User;


class PublicController extends Controller
{
    public function index()
    {
        // Ambil 6 produk terbaru
        $products = Product::with('user')->latest()->take(6)->get();
        // Ambil list petani untuk highlight
        $farmers = User::where('role', 'petani')->take(4)->get();
        
        return view('welcome', compact('products', 'farmers'));
    }

    public function show($id)
    {
        $product = Product::with('user')->findOrFail($id);
        return view('product-detail', compact('product'));
    }
}