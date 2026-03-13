import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react'; // Pastikan cara importnya begini
import path from 'path';
export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx', // Pastikan sudah .jsx
            refresh: true,
        }),
        react(), // Panggil fungsinya di sini
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resources/js'), // Alias untuk folder js
        },
    },
    server: {
        hmr: {
            host: 'localhost',
        },
    },
});