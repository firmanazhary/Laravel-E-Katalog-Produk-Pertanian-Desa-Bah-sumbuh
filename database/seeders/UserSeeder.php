<?php

namespace Database\Seeders;


use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'Administrator Desa',
            'email' => 'admin@gmail.com',
            'phone_number' => '628123456789', // Opsional untuk admin
            'password' => Hash::make('password123'), // Ganti sesuai keinginan
            'role' => 'admin',
        ]);

        // Opsi: Membuat satu contoh akun petani untuk testing
        User::create([
            'name' => 'Petani Sukses',
            'email' => 'petani@gmail.com',
            'phone_number' => '6282246431454', 
            'password' => Hash::make('password123'),
            'role' => 'petani',
        ]);
    }
}
