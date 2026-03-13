import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import '../css/app.css';
import { route } from 'ziggy-js';
window.route = route;

createInertiaApp({
  resolve: name => {
    // Baris ini yang bertugas mencari file Home.jsx di folder Pages
    const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
    return pages[`./Pages/${name}.jsx`]
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  },
})