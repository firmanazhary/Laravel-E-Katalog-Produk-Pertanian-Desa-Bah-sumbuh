# 🌾 E-Katalog Desa Bah Sumbu
**Digitalizing Local Commodities for a Better Bargaining Power.**

E-Katalog Bah Sumbu is a modern full-stack web application designed to showcase and manage local agricultural and livestock products from Bah Sumbu Village. Built with the **Laravel-Inertia-React** stack, this platform connects local farmers directly with potential buyers through a premium digital experience.

---

## ✨ Key Features

* **Premium Public Catalog:** High-end product display with Grade A/B quality indicators and botanical aesthetics.
* **Direct WhatsApp Integration:** Facilitates direct transactions between buyers and farmers.
* **Role-Based Dashboard:**
    * **Admin:** Full control over farmers' data and village commodities.
    * **Farmers:** Profile-centric dashboard to manage personal products (CRUD).
* **Modern UI/UX:** Responsive Emerald-Orange theme, optimized for mobile with a clean white interface.
* **Seamless Navigation:** No-reload SPA experience powered by Inertia.js.

---

## 🛠️ Tech Stack

* **Framework:** Laravel 11
* **Frontend:** React.js + Inertia.js
* **Styling:** Tailwind CSS
* **Icons:** Heroicons
* **Build Tool:** Vite

---

## 🚀 Installation Guide

Ikuti langkah-langkah berikut untuk menjalankan project di lokal:

```bash
# 1. Clone Project
git clone [https://github.com/firmanazhary/e-katalog-tani.git](https://github.com/firmanazhary/e-katalog-tani.git)
cd e-katalog-tani

# 2. Install Dependencies
composer install
npm install

# 3. Environment Setup
cp .env.example .env
php artisan key:generate

# 4. Database & Storage
php artisan migrate --seed
php artisan storage:link

# 5. Run Project
npm run dev
# Buka terminal baru
php artisan serve