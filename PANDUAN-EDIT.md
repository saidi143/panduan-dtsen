# Panduan Edit Web Panduan DTSEN

Dokumen ini menjelaskan cara melakukan modifikasi pada web setelah serah-terima.
Web ini dirancang sederhana — tidak memerlukan tools khusus selain text editor biasa
(Notepad++, VS Code, Sublime Text, atau bahkan Notepad bawaan Windows).

---

## A. CARA MENGGANTI LOGO

Logo BPS resmi sudah terpasang di file `assets/img/logo-bps.png`.

### Jika ingin mengganti dengan logo lain (misal logo BPS Paser khusus)

1. Siapkan file dengan format **PNG transparan**
2. Ukuran ideal: 200×200 px (tidak terlalu besar agar web ringan)
3. Replace file `assets/img/logo-bps.png` dengan file baru — **nama file harus sama**
4. Tidak perlu edit HTML atau CSS

### Jika ingin mengubah ukuran/style container logo

Buka `assets/css/styles.css`, cari blok `.site-header__logo`:

```css
.site-header__logo {
  width: 42px;        /* ← ubah ukuran lingkaran */
  height: 42px;
  background: #ffffff; /* ← ubah background lingkaran */
  border-radius: 50%;
  padding: 4px;        /* ← jarak logo ke tepi lingkaran */
  box-shadow: 0 0 0 2px var(--gold);  /* ← border luar emas */
}
```

---

## B. CARA MENGEDIT TEKS

### Edit teks pendek (judul, paragraf)

Buka file HTML yang ingin diedit dengan text editor biasa. Cari teks yang ingin
diubah, edit langsung. Save. Refresh browser.

**Contoh:** kalau ingin mengganti judul beranda:

1. Buka `index.html`
2. Cari teks: `Data yang Anda input hari ini`
3. Ganti dengan teks baru
4. Save

### Edit footer di semua halaman sekaligus

Footer sama persis di 7 file. Untuk mengubahnya, kamu perlu edit 7 file.

**Cara cepat dengan find-replace:**

Di VS Code atau Notepad++, gunakan fitur "Find in Folder" atau "Find & Replace
in Files":

1. Tekan `Ctrl+Shift+H` (VS Code) atau `Ctrl+Shift+F` (Notepad++)
2. Masukkan teks yang ingin diganti di kolom **Find**
3. Masukkan teks pengganti di kolom **Replace**
4. Klik **Replace All**

Contoh skenario:

| Yang ingin diganti | Find | Replace |
|---|---|---|
| Tahun di footer | `&mdash; 2026.` | `&mdash; 2027.` |
| Penyusun | `Disusun oleh Saidinur` | `Disusun oleh Saidinur, dkk.` |
| Versi | `Versi: 2026.` | `Versi: 2026 v2.` |

---

## C. STRUKTUR PALET WARNA

Semua warna terdefinisi di awal file `assets/css/styles.css` sebagai CSS Variables.
Kalau ingin ubah palet (misal pakai biru BPS), cukup ubah nilainya satu kali di
`:root` dan akan otomatis berlaku di seluruh website.

Saat ini palet:
- Hijau toska gelap: `#0a3a3a` (header, judul)
- Hijau toska: `#0f766e` (aksen utama)
- Cream: `#fdfbf5` (background)
- Emas: `#c89933` (logo, garis bawah header)
- Terracotta: `#c2562d` (eyebrow, kata yang di-italic)

---

## D. MENAMBAH HALAMAN BARU

Kalau ingin tambah bagian baru (misal "Bagian 07: Studi Kasus"):

1. Copy file `dtsen.html` jadi `studi-kasus.html`
2. Edit isinya sesuai kebutuhan
3. **Tambahkan link di menu navigasi** semua 7 file lain. Cari:
   ```html
   <li class="site-nav__item"><a href="tanya-jawab.html"...
   ```
   Lalu tambahkan setelahnya:
   ```html
   <li class="site-nav__item"><a href="studi-kasus.html" class="site-nav__link"><span class="site-nav__num">07</span>Studi Kasus</a></li>
   ```
4. Update `index.html` (beranda) — tambah card baru di bagian "Mulai dari mana?"

---

## E. HOSTING DI GITHUB PAGES (GRATIS)

Cara paling mudah untuk publikasi web ini supaya bisa diakses orang dari HP:

1. **Daftar GitHub** di github.com (gratis)
2. **Buat repository baru** dengan nama: `panduan-dtsen` (atau nama lain)
3. **Upload semua file** dari folder ini ke repository
4. **Aktifkan GitHub Pages**:
   - Klik tab **Settings**
   - Klik **Pages** di sidebar kiri
   - Di bagian **Source**, pilih branch **main** dan folder **/ (root)**
   - Klik **Save**
5. **Tunggu 1-2 menit**, lalu kamu akan dapat URL seperti:
   `https://username.github.io/panduan-dtsen/`

URL ini bisa dibagikan ke perangkat desa, dipakai untuk QR code di poster,
atau di-embed di website BPS Paser.

---

## F. EKSPOR JADI PDF

Setiap halaman bisa diekspor jadi PDF langsung dari browser:

1. Buka halaman yang ingin di-PDF (misal `desil.html`)
2. Tekan `Ctrl+P` (Print)
3. Pilih **Save as PDF** sebagai destination
4. Pastikan setting:
   - **Margins:** Default
   - **Background graphics:** Centang (penting agar warna ikut tercetak)
5. Klik **Save**

CSS sudah punya rules khusus untuk print:
- Header navigasi otomatis disembunyikan
- Halaman dibreak rapi
- Warna tetap terjaga

---

## G. JIKA ADA MASALAH

**Logo BPS tidak muncul setelah ganti:**
- Cek path file: pastikan `assets/img/logo-bps.png` ada
- Cek case-sensitive: di server (GitHub Pages), `Logo-BPS.png` ≠ `logo-bps.png`
- Buka Developer Tools (F12) di browser, lihat tab Console untuk error

**Teks tidak berubah setelah edit:**
- Refresh browser dengan `Ctrl+F5` (hard refresh)
- Pastikan kamu save file
- Cek apakah ada lebih dari satu kemunculan teks yang sama

**CSS rusak setelah edit:**
- Restore dari backup. Selalu backup folder ini sebelum edit besar.
- Atau minta tolong ke teman yang bisa baca CSS untuk bantu cek.

---

## H. KONTAK

Untuk pertanyaan teknis, modifikasi besar, atau pengembangan lanjut,
silakan hubungi tim penyusun melalui kanal komunikasi BPS Kabupaten Paser.

---

*Dokumen panduan ini disusun untuk mendukung kemandirian pengelolaan web
oleh tim BPS Kabupaten Paser dalam jangka panjang.*
