# Panduan DTSEN — Web Edukasi (Versi BPS Paser)

Web edukasi untuk perangkat desa, agen statistik, kader posyandu, pendamping PKH, dan
RT/RW dalam memahami DTSEN, indikator kemiskinan, dan determinan stunting.

**Bagian dari program Desa Cinta Statistik (Desa Cantik) BPS Kabupaten Paser.**

## Status

Versi: **2026** — Disusun oleh **Saidinur**, BPS Kabupaten Paser.

## Cara Membuka

**Opsi 1 — Buka langsung di komputer**
Klik dua kali file `index.html`. Web akan terbuka di peramban default.

**Opsi 2 — Jalankan local server (untuk demo lebih realistis)**
```
cd folder-ini
python3 -m http.server 8000
```
Lalu buka `http://localhost:8000` di peramban.

## Struktur File

```
panduan-dtsen/
├── index.html              # Beranda
├── dtsen.html              # Bagian 01: DTSEN dalam 5 Menit
├── desil.html              # Bagian 02: Memahami Desil
├── kemiskinan.html         # Bagian 03: Indikator Kemiskinan
├── stunting.html           # Bagian 04: Kemiskinan & Stunting
├── musdes.html             # Bagian 05: Panduan Musdes
├── tanya-jawab.html        # Bagian 06: Tanya-Jawab & Glosarium
├── PANDUAN-EDIT.md         # Panduan modifikasi konten
└── assets/
    ├── css/styles.css      # Stylesheet utama
    └── js/main.js          # JS untuk navigasi mobile
```

## Karakteristik Teknis

- **Statis murni** — tidak ada backend, database, atau API
- **Mobile-first** — desain dimulai dari layar kecil
- **Ringan** — total ~135 KB, cocok untuk koneksi terbatas
- **Print-friendly** — bisa dicetak rapi dari peramban (Ctrl+P)
- **No JavaScript needed** untuk konten utama (JS hanya untuk drawer menu)

## Hosting Gratis

Web ini dirancang agar bisa di-host gratis di:
- **GitHub Pages** — push ke repo dan aktifkan Pages
- **Netlify Drop** — drag-drop folder ini ke netlify.com/drop
- **Cloudflare Pages** — connect repo ke Cloudflare

Tidak ada biaya server berkelanjutan.

## Mengganti Logo

Saat ini logo header masih placeholder (huruf "BPS" di lingkaran emas).
Untuk menggantinya dengan logo BPS resmi, lihat panduan di
**`PANDUAN-EDIT.md`**.

## Tim Penyusun

**Saidinur**
BPS Kabupaten Paser
Bagian dari program Desa Cinta Statistik (Desa Cantik) 2026

---

Dasar penyusunan: Inpres Nomor 4 Tahun 2025 tentang DTSEN, Permensos Nomor 3 Tahun 2025,
dan materi sosialisasi resmi BPS & Kemensos.
