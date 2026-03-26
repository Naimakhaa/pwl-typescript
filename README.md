Praktikum TypeScript - Pemrograman Web Lanjutan
Proyek ini adalah repositori latihan praktikum untuk mata kuliah Pemrograman Web Lanjutan. Fokus utama dari praktikum ini adalah memahami dasar-dasar TypeScript sebagai superset dari JavaScript yang memberikan fitur static typing untuk membangun aplikasi yang lebih aman dan terstruktur.

📋 Daftar Tugas dan Materi
Setiap file di dalam folder src/ merepresentasikan satu sub-materi dari modul praktikum:
Tugas 1: Program Sederhana Tipe Data (tugas1.ts)
Tujuan: Memahami penggunaan variabel dengan tipe data dasar (string, number).
Fitur: Menampilkan sapaan dan melakukan operasi aritmatika sederhana untuk menghitung usia di masa depan.

Tugas 2: Menggunakan Interface (tugas2.ts)
Tujuan: Mendefinisikan struktur objek menggunakan interface.
Fitur: Pembuatan kontrak objek Book yang mencakup judul, pengarang, tahun terbit, dan status ketersediaan.

Tugas 3: Class & Object-Oriented Programming (tugas3.ts)
Tujuan: Implementasi pemrograman berorientasi objek (OOP).
Fitur: Class Lingkaran dengan constructor dan method untuk menghitung luas menggunakan rumus matematik $\pi \times r^{2}$.

Tugas 4: Union Types & Type Guarding (tugas4.ts)
Tujuan: Menangani fleksibilitas input dengan tetap menjaga keamanan tipe data.
Fitur: Fungsi sapaan yang dapat menerima parameter berupa string atau number secara dinamis.

📂 Struktur Folder

pwl-typescript/
│
├── src/                   # Tempat semua file TypeScript
│   ├── index.ts           # File utama
│   ├── tipe-data.ts       # Latihan tipe data
│   ├── fungsi.ts          # Latihan fungsi
│   ├── interface.ts       # Latihan interface
│   └── class.ts           # Latihan class
│
├── package.json                # Daftar dependency
├── tsconfig.json               # Konfigurasi TypeScript
└── README.md                   # Penjelasan project

⚙️ Persiapan & Instalasi
Jika ingin menjalankan proyek ini secara lokal atau di GitHub Codespaces, pastikan langkah-langkah berikut sudah dilakukan:

Instalasi Dependensi
Jalankan perintah berikut untuk menginstal TypeScript dan alat pendukung lainnya:
npm install

Konfigurasi TypeScript
Pastikan file tsconfig.json sudah terkonfigurasi untuk mengarah ke folder src.

🚀 Cara Menjalankan
Cara menjalankan kode TypeScript secara langsung menggunakan ts-node tanpa harus melakukan kompilasi manual ke JavaScript terlebih dahulu.

Tugas
Perintah Eksekusi
Utama
npx ts-node src/index.ts

Tugas 1
npx ts-node src/tipe-data.ts

Tugas 2
npx ts-node src/interface.ts

Tugas 3
npx ts-node src/class.ts

Tugas 4
npx ts-node src/fungsi.ts

Jika ingin melakukan kompilasi menjadi file JavaScript standar:
npx tsc

Hasil kompilasi akan muncul di folder dist/ (tergantung konfigurasi outDir Anda).

🛠️ Teknologi yang Digunakan
TypeScript: Bahasa pemrograman utama dengan sistem tipe statis.
Node.js: Runtime environment untuk menjalankan JavaScript/TypeScript di luar browser.
ts-node: Engine untuk menjalankan TypeScript secara langsung di environment Node.js.
GitHub Codespaces: Cloud-based IDE untuk lingkungan pengembangan yang identik bagi seluruh mahasiswa.
