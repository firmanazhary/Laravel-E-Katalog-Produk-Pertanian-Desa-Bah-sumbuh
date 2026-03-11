<!DOCTYPE html>
<html lang="id">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title inertia>E-Katalog Bah Sumbu</title>

        @viteReactRefresh
        {{-- Cukup panggil app.jsx saja, jangan panggil folder Pages di sini --}}
       
        @vite(['resources/css/app.css', 'resources/js/app.jsx'])
        @inertiaHead
    </head>
    <body class="antialiased">
        @inertia
    </body>
</html>