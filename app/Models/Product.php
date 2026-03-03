<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;


use Illuminate\Support\Str;

class Product extends Model
{
    //
    protected $fillable = [
        'user_id',    // ID Petani pemilik produk
        'name',       // Nama produk (misal: Sapi Limousin)
        'slug',       // URL unik (misal: sapi-limousin-123)
        'category',   // Hewan Ternak atau Tumbuhan
        'price',      // Harga
        'quality',    // Kualitas (Grade A, Super, dll)
        'image',      // Path foto produk
        'description' // Keterangan detail
    ];
    public function user()
    {
        return $this->belongsTo(User::class);
    }
   protected static function boot()
    {
        parent::boot();

        static::creating(function ($product) {
            // Membuat slug dari nama produk + string acak agar selalu unik
            $product->slug = Str::slug($product->name) . '-' . Str::lower(Str::random(5));
        });
    }
}
