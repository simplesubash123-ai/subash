# Anbu Creation Portfolio (Next.js)

A clean, modern portfolio website for a photography and videography brand with:

- Home page with hero + services
- About page
- Contact page with inquiry form UI

## Tech Stack

- Next.js (App Router)
- TypeScript
- Plain CSS

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Build for production

```bash
npm run build
npm run start
```

## Deploy instructions

### Option 1: Vercel (recommended)
1. Push this repo to GitHub.
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. Keep default settings (Framework: Next.js).
4. Click **Deploy**.

### Option 2: Self-host
1. Build the app: `npm run build`
2. Start production server: `npm run start`
3. Put Nginx/Caddy in front of port `3000`.

## Customization notes

- Replace portfolio copy and service text in `app/page.tsx`.
- Update your brand story in `app/about/page.tsx`.
- Connect the contact form to an API route/service later for real submissions.
- Keep Instagram link updated: `https://www.instagram.com/anbu.creation26/`.
