<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProductController;
use App\Models\Product;
use App\Models\User;
use App\Http\Controllers\PublicController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| 1. GUEST / PUBLIC ROUTES
|--------------------------------------------------------------------------
| Rute yang bisa diakses oleh siapa saja tanpa perlu login.
*/
Route::get('/', [PublicController::class, 'index'])->name('home');
Route::get('/about', [PublicController::class, 'about'])->name('about');
Route::get('/products', [PublicController::class, 'allProducts'])->name('products.all');
Route::get('/product/{slug}', [PublicController::class, 'show'])->name('product.detail');


/*
|--------------------------------------------------------------------------
| 2. PROTECTED ROUTES (DASHBOARD AREA)
|--------------------------------------------------------------------------
| Semua rute di bawah ini wajib LOGIN dan VERIFIED.
| URL akan diawali dengan /dashboard/...
*/
Route::middleware(['auth', 'verified'])->prefix('dashboard')->group(function () {
    
    // Halaman Utama Dashboard
  Route::get('/', function () {
    $user = auth()->user();
    
    // Jika Admin: Hitung semua petani & semua produk desa
  if ($user->role === 'admin') {
            $totalFarmers = User::where('role', 'petani')->count();
            $totalProducts = Product::count();
        }
    // Jika Petani: Hanya hitung produk milik dia sendiri
   else {
            $totalFarmers = 0; // Variabel harus tetap ada agar tidak error
            $totalProducts = Product::where('user_id', $user->id)->count();
        }

    return view('dashboard', compact('totalFarmers', 'totalProducts'));
    })->middleware(['auth', 'verified'])->name('dashboard');

    // --- A. PROFILE MANAGEMENT (Bawaan Breeze) ---
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // --- B. PRODUCT MANAGEMENT (Admin & Petani) ---
    // Mencakup: index, create, store, show, edit, update, destroy
    Route::resource('products', ProductController::class);

    // --- C. FARMER MANAGEMENT (Khusus Admin) ---
    Route::middleware('can:admin-only')->prefix('admin')->group(function() {
        // Menggunakan resource agar otomatis punya fitur Edit & Delete Petani
      Route::resource('farmers', \App\Http\Controllers\Admin\FarmerController::class)->names('admin.farmers');
    });

});

/*
|--------------------------------------------------------------------------
| 3. AUTH ROUTES (Breeze Core)
|--------------------------------------------------------------------------
| Menghubungkan file auth.php (Login, Register, Reset Password, dll)
*/
require __DIR__.'/auth.php';