# Lumen Atelier Portfolio (Next.js + Tailwind CSS)

A clean, minimal, Apple-inspired photography and videography portfolio website with:

- Home, About, Portfolio, and Contact sections
- Fullscreen hero image
- Responsive gallery grid
- Contact form UI
- Smooth-scroll navigation
- Dark/Light mode toggle

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000).

## Build for Production

```bash
npm run build
npm run start
```

## Deployment Instructions

### Option 1: Deploy to Vercel (recommended)

1. Push the project to a Git repository.
2. Import the repository in [Vercel](https://vercel.com/new).
3. Vercel auto-detects Next.js settings.
4. Click **Deploy**.

### Option 2: Deploy on your own server (Node.js)

1. Ensure Node.js 18.17+ is installed.
2. Build the app:

```bash
npm run build
```

3. Start the production server:

```bash
npm run start
```

4. Put a reverse proxy (Nginx/Caddy) in front of port `3000`.
