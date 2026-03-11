<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\PublicController;
use App\Http\Controllers\Admin\FarmerController;
use App\Models\Product;
use App\Models\User;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia; // Penting untuk rute yang pakai React

/*
|--------------------------------------------------------------------------
| 1. GUEST / PUBLIC ROUTES (SUDAH INERTIA/REACT)
|--------------------------------------------------------------------------
*/
// Halaman Home sudah pakai Home.jsx via PublicController
Route::get('/', [PublicController::class, 'index'])->name('home');

// Sementara rute ini masih Blade (Pindahkan ke Inertia satu per satu nanti)
Route::get('/about', [PublicController::class, 'about'])->name('about');
Route::get('/products', [PublicController::class, 'allProducts'])->name('products.all');
Route::get('/product/{slug}', [PublicController::class, 'show'])->name('product.detail');


/*
|--------------------------------------------------------------------------
| 2. PROTECTED ROUTES (MASIH BLADE - UNTUK TRANSISI BERTAHAP)
|--------------------------------------------------------------------------
*/
Route::middleware(['auth', 'verified'])->prefix('dashboard')->group(function () {
    
    // Dashboard Utama: Masih pakai VIEW (Blade) agar tidak bingung
    Route::get('/', function () {
        $user = auth()->user();
        
        if ($user->role === 'admin') {
            $totalFarmers = User::where('role', 'petani')->count();
            $totalProducts = Product::count();
        } else {
            $totalFarmers = 0;
            $totalProducts = Product::where('user_id', $user->id)->count();
        }

        // Pakai return view() untuk memanggil resources/views/dashboard.blade.php
        return view('dashboard', compact('totalFarmers', 'totalProducts'));
    })->name('dashboard');

    // --- A. PROFILE MANAGEMENT (Bawaan Breeze - Blade) ---
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // --- B. PRODUCT MANAGEMENT (Masih Blade) ---
    Route::resource('products', ProductController::class);

    // --- C. FARMER MANAGEMENT (Khusus Admin - Masih Blade) ---
    Route::middleware('can:admin-only')->prefix('admin')->group(function() {
        Route::resource('farmers', FarmerController::class)->names('admin.farmers');
    });

});

/*
|--------------------------------------------------------------------------
| 3. AUTH ROUTES (Breeze Core)
|--------------------------------------------------------------------------
*/
require __DIR__.'/auth.php';