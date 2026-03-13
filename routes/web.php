<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\PublicController;
use App\Http\Controllers\Admin\FarmerController;
use App\Models\Product;
use App\Models\User;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| 1. GUEST / PUBLIC ROUTES
|--------------------------------------------------------------------------
*/
Route::get('/', [PublicController::class, 'index'])->name('home');
Route::get('/about', [PublicController::class, 'about'])->name('about');
Route::get('/products-all', [PublicController::class, 'allProducts'])->name('products.all');
Route::get('/product/{slug}', [PublicController::class, 'show'])->name('product.detail');

/*
|--------------------------------------------------------------------------
| 2. PROTECTED ROUTES (Hanya Bisa Diakses Setelah Login)
|--------------------------------------------------------------------------
*/
Route::middleware(['auth', 'verified'])->group(function () {
    
    // --- DASHBOARD UTAMA (URL: /dashboard) ---
    Route::prefix('dashboard')->group(function () {
        Route::get('/', function () {
            $user = auth()->user();
            
            $totalFarmers = ($user->role === 'admin') ? User::where('role', 'petani')->count() : 0;
            $totalProducts = ($user->role === 'admin') ? Product::count() : Product::where('user_id', $user->id)->count();

            return Inertia::render('Dashboard', [
                'auth' => ['user' => $user],
                'stats' => [
                    'totalFarmers' => $totalFarmers,
                    'totalProducts' => $totalProducts,
                ]
            ]);
        })->name('dashboard');

        // --- PROFILE MANAGEMENT ---
        Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
        Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
        Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    });

    // --- B. PRODUCT MANAGEMENT (Aman karena di dalam middleware auth) ---
    // URL: /products/create
    Route::resource('products', ProductController::class);

    // --- C. FARMER MANAGEMENT (Admin Only & Aman karena di dalam auth) ---
    // URL: /admin/farmers
    Route::middleware('can:admin-only')->prefix('admin')->group(function() {
        Route::resource('farmers', FarmerController::class)->names('admin.farmers');
    });

});

/*
|--------------------------------------------------------------------------
| 3. AUTH ROUTES
|--------------------------------------------------------------------------
*/
require __DIR__.'/auth.php';