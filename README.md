# Besse Gonzalez Campaign Site

Next.js 14 (App Router) + Tailwind CSS.

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Editable content
- `data/platform.json` — campaign pillars
- `data/testimonials.json` — voter quotes
- `data/events.json` — calendar
- `data/config.json` — candidate name, Venmo URL, video embed URL

## Venmo donation integration
Set `venmo` in `data/config.json` to your Venmo profile URL. Donate buttons append `?txn=pay&amount=X` (placeholder integration — replace with ActBlue or a real processor before launch).

## Deploy to Vercel
1. Push this repo to GitHub.
2. Go to https://vercel.com/new and import the repo.
3. Framework preset: **Next.js** (auto-detected). No env vars required.
4. Click **Deploy**.
