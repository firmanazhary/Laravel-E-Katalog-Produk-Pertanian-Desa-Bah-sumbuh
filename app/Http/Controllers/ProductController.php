<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia; 

class ProductController extends Controller
{
    public function index() {
        $user = auth()->user();
        
        if ($user->role === 'admin') {
            $products = Product::with('user')->latest()->get();
        } else {
            $products = $user->products()->with('user')->latest()->get();
        }

        return Inertia::render('Products/Index', [
            'auth' => ['user' => $user], 
            'products' => $products
        ]);
    }

    public function create() {
        $farmers = User::where('role', 'petani')->get();

        return Inertia::render('Products/Create', [
            'auth' => ['user' => auth()->user()], 
            'farmers' => $farmers
        ]);
    }

    public function store(Request $request) {
        $request->validate([
            'name' => 'required',
            'price' => 'required|numeric',
            'category' => 'required|in:Pertanian,Peternakan', 
            'quality' => 'required',
            'image' => 'required|image|mimes:jpg,png,jpeg|max:2048',
        ]);

        $path = $request->file('image') ? $request->file('image')->store('products', 'public') : null;

        Product::create([
            'user_id' => (auth()->user()->role === 'admin') ? $request->user_id : auth()->id(),
            'name' => $request->name,
            'slug' => Str::slug($request->name) . '-' . Str::random(5),
            'category' => $request->category,
            'price' => $request->price,
            'quality' => $request->quality,
            'image' => $path,
            'description' => $request->description,
        ]);

        return redirect()->route('products.index')->with('success', 'Produk Berhasil Disimpan!');
    }

    public function edit(Product $product)
    {
        $user = auth()->user();

        if ($user->role !== 'admin' && $product->user_id !== $user->id) {
            abort(403, 'Anda tidak memiliki akses ke produk ini.');
        }

        $farmers = User::where('role', 'petani')->get();

        return Inertia::render('Products/Edit', [
            'auth' => ['user' => $user], 
            'product' => $product,
            'farmers' => $farmers
        ]);
    }

    public function update(Request $request, Product $product)
    {
        $request->validate([
            'name' => 'required|max:255',
            'price' => 'required|numeric',
            'image' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
        ]);

        $product->name = $request->name;
        $product->price = $request->price;
        $product->quality = $request->quality;
        $product->description = $request->description;

        if (auth()->user()->role === 'admin') {
            $product->user_id = $request->user_id;
        }

        if ($request->hasFile('image')) {
            if ($product->image) {
                Storage::disk('public')->delete($product->image);
            }
            $product->image = $request->file('image')->store('products', 'public');
        }

        $product->save();

        return redirect()->route('products.index')->with('success', 'Produk berhasil diperbarui!');
    }

    public function destroy(Product $product) {
        if (auth()->user()->role === 'admin' || auth()->id() === $product->user_id) {
            if ($product->image) {
                Storage::disk('public')->delete($product->image);
            }
            $product->delete();
            return redirect()->route('products.index')->with('success', 'Produk Berhasil Dihapus!');
        }
        return redirect()->route('products.index')->with('error', 'Anda Tidak Memiliki Akses!');
    }
}