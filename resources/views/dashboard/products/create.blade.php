<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Tambah Produk Baru') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                <form action="{{ route('products.store') }}" method="POST" enctype="multipart/form-data">
                    @csrf

                    @if(auth()->user()->role === 'admin')
                    <div class="mb-4">
                        <label class="block font-medium text-sm text-gray-700">Pilih Petani (Pemilik Produk)</label>
                        <select name="user_id" class="border-gray-300 rounded-md shadow-sm mt-1 block w-full" required>
                            <option value="">-- Pilih Petani --</option>
                            @foreach($farmers as $farmer)
                                <option value="{{ $farmer->id }}">{{ $farmer->name }}</option>
                            @endforeach
                        </select>
                    </div>
                    @endif

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="mb-4">
                            <label class="block font-medium text-sm text-gray-700">Nama Produk</label>
                            <input type="text" name="name" class="border-gray-300 rounded-md shadow-sm mt-1 block w-full" placeholder="Contoh: Sapi Limousin / Beras Organik" required>
                        </div>

                        <div class="mb-4">
                            <label class="block font-medium text-sm text-gray-700">Kategori</label>
                            <select name="category" class="border-gray-300 rounded-md shadow-sm mt-1 block w-full">
                                <option value="Hewan Ternak">Hewan Ternak</option>
                                <option value="Tumbuhan">Tumbuhan / Hasil Tani</option>
                            </select>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="mb-4">
                            <label class="block font-medium text-sm text-gray-700">Harga (Rp)</label>
                            <input type="number" name="price" class="border-gray-300 rounded-md shadow-sm mt-1 block w-full" required>
                        </div>

                        <div class="mb-4">
                            <label class="block font-medium text-sm text-gray-700">Kualitas / Grade</label>
                            <input type="text" name="quality" class="border-gray-300 rounded-md shadow-sm mt-1 block w-full" placeholder="Contoh: Grade A / Super" required>
                        </div>
                    </div>

                    <div class="mb-4">
                        <label class="block font-medium text-sm text-gray-700">Foto Produk</label>
                        <input type="file" name="image" class="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200">
                    </div>

                    <div class="mb-4">
                        <label class="block font-medium text-sm text-gray-700">Deskripsi Singkat</label>
                        <textarea name="description" rows="3" class="border-gray-300 rounded-md shadow-sm mt-1 block w-full"></textarea>
                    </div>

                    <div class="flex items-center justify-end mt-4">
                        <button type="submit" class="bg-green-600 hover:bg-green-700 text-black font-bold py-2 px-6 rounded-lg transition">
                            Simpan Produk
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</x-app-layout>