# Formulir Pengajuan Naskah → Google Spreadsheet

**Date:** 2026-06-08
**Status:** Approved

## Goal

Wire the existing "Formulir Pengajuan Naskah" form (`src/pages/penulis.astro`) to a
Google Spreadsheet via Google Apps Script, with a nicely formatted sheet, optional
file upload to Drive, anti-spam, and a themed success UX.

Also (separate, already done): remove "Brand Structure" box from `tentang.astro`
and "Dirancang bersama ahli" box from `nuurkids.astro`.

## Constraints

- Site is `output: 'static'` on Cloudflare — **no server runtime**. Form must POST
  client-side directly to a deployed Apps Script Web App URL.
- Apps Script web apps do not answer CORS preflight. To avoid preflight, the POST body
  is sent as a plain string (`fetch` default `text/plain`), a "simple request". Apps
  Script reads `e.postData.contents` and `JSON.parse`s it. Response stays readable so
  the client can confirm success.

## Architecture

```
penulis.astro form
   │  fetch POST (body = JSON.stringify(payload), text/plain)
   ▼
Apps Script Web App doPost(e)
   ├─ honeypot check → reject if filled
   ├─ if fileData present (≤8MB) → save to Drive folder → shareable link
   ├─ append row to sheet "Pengajuan Naskah"
   ├─ optional admin email notification (toggle)
   └─ return JSON { ok: true } | { ok:false, error }
```

## Components

### 1. Apps Script (`apps-script/Code.gs`)

- `doPost(e)`: parse → honeypot → optional Drive upload → append row → email → JSON resp.
- `setupSheet()`: idempotent helper — creates/styles header row (frozen, bold, emerald
  `#0b5233` bg white text), banded rows, sets a Status data-validation dropdown
  (Baru / Direview / Diterima / Ditolak), sizes columns.
- Columns: `Timestamp · Nama · Email · WhatsApp · Kota · Judul · Kategori ·
  Est. Halaman · Sinopsis · Link Naskah · Status`.
- Config block at top: `SHEET_NAME`, `DRIVE_FOLDER_NAME`, `ADMIN_EMAIL`,
  `NOTIFY_EMAIL` (bool), `HONEYPOT_FIELD`.
- `doGet()`: returns a small health-check JSON (so visiting the URL confirms deploy).

### 2. Client (`src/pages/penulis.astro`)

- Add `name` attributes + `id="naskah-form"` to the form; add hidden honeypot field
  (`name="website"`, visually hidden, `tabindex=-1`, `autocomplete=off`).
- Inline `<script>` (module): read `import.meta.env.PUBLIC_SHEET_ENDPOINT`.
  - On submit: preventDefault, disable button → "Mengirim…".
  - Read file (if any, ≤8MB) → base64 via FileReader; else skip.
  - Build payload, `fetch` POST as text/plain, parse JSON.
  - Success → swap form node for themed success card (emerald gradient, gold ✓).
  - Error → red inline message above button, re-enable button.
  - File >8MB → inline note: "File terlalu besar, kirim via email".

### 3. Config

- `.env` → `PUBLIC_SHEET_ENDPOINT="https://script.google.com/macros/s/.../exec"`.
- `.env.example` committed; `.env` git-ignored already.
- Component falls back gracefully if unset (logs + still shows email instructions).

### 4. Deploy doc (`apps-script/README.md`)

Step-by-step: create Sheet → Extensions ▸ Apps Script → paste Code.gs → run
`setupSheet` once (authorize) → Deploy ▸ Web App, execute as "Me", access "Anyone" →
copy `/exec` URL → paste into `.env` → `bun run build`.

## File upload rule

- Field optional. Client base64-encodes only if file present and ≤ 8MB (base64 inflates
  ~33%, stays well under Apps Script ~50MB payload). Over 8MB or empty → email fallback
  (note already in form copy).

## Error handling

- Network/parse error → inline red message, button re-enabled, form preserved.
- Apps Script error → `{ok:false,error}` surfaced as inline message.
- Honeypot tripped → Apps Script returns ok:true silently (don't tip off bots) but
  skips the append. (Decision: return ok to bot, no row written.)

## Testing

- Manual: deploy, submit valid form → row appears + styled; submit with file → Drive link;
  bot fills honeypot → no row; >8MB file → email note shown.
- `bun run build` must pass with and without `.env` set.

## Out of scope

- Server-side validation beyond honeypot; rate limiting; captcha; DB.
