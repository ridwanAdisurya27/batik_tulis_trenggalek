---
description: Langkah-langkah deploy proyek Batik Tulis Trenggalek (Vite + React + TS) ke Vercel
---

# Deploy ke Vercel — Batik Tulis Trenggalek

## Prasyarat

- Node.js ≥ 18 sudah terinstal
- Akun GitHub (https://github.com) — gratis
- Akun Vercel (https://vercel.com) — gratis, bisa login pakai GitHub

---

## FASE 1 — Persiapan Repository GitHub

### Langkah 1: Pastikan Git sudah terpasang
```powershell
git --version
```

### Langkah 2: Inisialisasi Git (jika belum)
```powershell
cd "D:\Ridwan coding file\Batik Tulis Trenggalek"
git init
```

### Langkah 3: Pastikan .gitignore sudah benar
File `.gitignore` harus sudah berisi `.env` agar file rahasia tidak ter-commit.

### Langkah 4: Tambahkan semua file ke staging
```powershell
git add .
```

### Langkah 5: Buat commit pertama
```powershell
git commit -m "feat: initial commit — Batik Tulis Trenggalek website"
```

### Langkah 6: Buat repository baru di GitHub
1. Buka https://github.com/new
2. Repository name: `batik-tulis-trenggalek`
3. Pilih **Private** atau **Public** sesuai kebutuhan
4. Klik **Create repository**
5. Salin URL repository (contoh: `https://github.com/username/batik-tulis-trenggalek.git`)

### Langkah 7: Hubungkan ke GitHub dan push
```powershell
git remote add origin https://github.com/USERNAME/batik-tulis-trenggalek.git
git branch -M main
git push -u origin main
```
> Ganti `USERNAME` dengan username GitHub kamu.

---

## FASE 2 — Deploy ke Vercel via Dashboard (Cara Termudah)

### Langkah 8: Login ke Vercel
1. Buka https://vercel.com
2. Klik **Sign Up** → pilih **Continue with GitHub**
3. Izinkan akses Vercel ke akun GitHub

### Langkah 9: Import proyek
1. Di dashboard Vercel, klik tombol **Add New... → Project**
2. Pilih repository `batik-tulis-trenggalek` dari daftar
3. Klik **Import**

### Langkah 10: Konfigurasi Build di Vercel
Vercel akan otomatis mendeteksi Vite. Pastikan setting-nya seperti ini:

| Setting | Nilai |
|---|---|
| **Framework Preset** | Vite |
| **Build Command** | `npm run build` |
| **Output Directory** | `dist` |
| **Install Command** | `npm install` |

> Tidak perlu diubah, Vercel sudah mendeteksinya secara otomatis.

### Langkah 11: Tambahkan Environment Variables di Vercel
1. Masih di halaman konfigurasi, scroll ke bawah ke bagian **Environment Variables**
2. Tambahkan variabel satu per satu:

| Key | Value | Environment |
|---|---|---|
| `VITE_APP_NAME` | `Batik Tulis Trenggalek` | All |
| `VITE_APP_VERSION` | `1.0.0` | All |
| `VITE_APP_URL` | `https://nama-proyek.vercel.app` | Production |
| `VITE_ENV` | `production` | Production |
| `VITE_ENV` | `development` | Preview |

> ⚠️ **PENTING**: Jangan salin isi file `.env` langsung. Isi nilai yang sebenarnya secara manual di sini.

### Langkah 12: Deploy!
1. Klik tombol **Deploy**
2. Tunggu 1–3 menit proses build selesai
3. Vercel akan memberikan URL publik, contoh: `https://batik-tulis-trenggalek.vercel.app`

---

## FASE 3 — Deploy via Vercel CLI (Opsional, untuk Developer)

### Langkah A: Install Vercel CLI
```powershell
npm install -g vercel
```

### Langkah B: Login
```powershell
vercel login
```
Pilih **Continue with GitHub** dan ikuti instruksinya.

### Langkah C: Deploy (pertama kali)
```powershell
cd "D:\Ridwan coding file\Batik Tulis Trenggalek"
vercel
```
Ikuti pertanyaan interaktif:
- Set up and deploy? → `Y`
- Which scope? → pilih akun kamu
- Link to existing project? → `N`
- Project name: `batik-tulis-trenggalek`
- In which directory is your code located? → `./`

### Langkah D: Deploy ke Production
```powershell
vercel --prod
```

### Langkah E: Set Environment Variables via CLI
```powershell
vercel env add VITE_APP_NAME production
# Ketik nilai: Batik Tulis Trenggalek
# Ulangi untuk variabel lainnya
```

---

## FASE 4 — Auto-Deploy (Continuous Deployment)

Setelah proyek terhubung, setiap kali kamu push ke branch `main`:
```powershell
git add .
git commit -m "fix: update konten homepage"
git push
```
→ Vercel akan **otomatis build dan deploy** dalam 1–3 menit.

---

## Tips & Troubleshooting

| Masalah | Solusi |
|---|---|
| Build gagal: `tsc` error | Jalankan `npm run build` lokal dulu untuk cek error TypeScript |
| Gambar/aset tidak muncul | Pastikan aset ada di folder `public/` bukan `src/` |
| Environment variable tidak terbaca | Pastikan nama variabel diawali `VITE_` |
| Routing error 404 | Tambahkan file `vercel.json` (lihat di bawah) |

### vercel.json (untuk SPA Routing)
Buat file `vercel.json` di root proyek jika ada masalah routing:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

---

*Workflow ini dibuat untuk proyek Batik Tulis Trenggalek — Vite + React 18 + TypeScript.*
