<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserController;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware(['auth'])->prefix('dashboard')->group(function () {
  // 1. CRUD Produk (Bisa diakses Admin & Petani)
    Route::resource('products', ProductController::class);
    
    // 2. Khusus Admin (Manajemen Akun Petani)
    Route::middleware('can:admin-only')->group(function() {
        // Menampilkan daftar petani
        Route::get('/users', [UserController::class, 'index'])->name('users.index');
        
        // Menampilkan halaman form tambah petani (ini yang tadi kurang)
        Route::get('/users/create', [UserController::class, 'create'])->name('users.create');
        
        // Proses simpan data petani ke database
        Route::post('/users', [UserController::class, 'store'])->name('users.store');
    });
});
require __DIR__.'/auth.php';
