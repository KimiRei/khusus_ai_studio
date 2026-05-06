# khusus_ai_studio

Repo ini untuk bereksperimen dengan [Google AI Studio](https://aistudio.google.com/) (Gemini API).

## Prasyarat

- [Node.js](https://nodejs.org/) v18 atau lebih baru
- API key dari Google AI Studio → <https://aistudio.google.com/apikey>

## Instalasi

```bash
# 1. Install dependensi
npm install

# 2. Buat file .env dari contoh
cp .env.example .env

# 3. Isi GEMINI_API_KEY di file .env dengan API key Anda
```

## Menjalankan contoh

```bash
npm start
```

Script `index.js` mengirim satu prompt ke model **gemini-1.5-flash** dan mencetak responsnya di terminal.

## Struktur proyek

```
khusus_ai_studio/
├── index.js          # contoh penggunaan Gemini API
├── package.json      # dependensi Node.js
├── .env.example      # template variabel lingkungan
└── .gitignore        # mengabaikan node_modules & .env
```

## Dependensi utama

| Paket | Versi | Keterangan |
|-------|-------|------------|
| `@google/generative-ai` | `^0.24.1` | SDK resmi Google Gemini |
