# FudByte React App

A React (Vite) rebuild of the FudByte food-ordering website
(https://github.com/Thanooz45/fudbyte.com / https://thanooz45.github.io/fudbyte.com/).

## Pages
- `/` – Sign in / sign up page
- `/mainpage` – Landing page (why choose us, explore menu preview, delivery info, follow us, feedback form)
- `/menu` – Full menu with category filters and "Add to Cart"
- `/cart` – Cart with quantity controls, bill breakdown, and delivery/payment placeholders

Cart state is shared across pages via React Context and persisted in `localStorage`,
matching the original site's behavior.

## Run locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Tech
- React 19 + Vite
- react-router-dom for client-side routing
- Bootstrap 4.5.2 (via CDN, loaded in index.html) for layout/components, matching the original site
