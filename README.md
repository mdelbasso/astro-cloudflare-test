# PeakCore — sitio Astro (estático) en Cloudflare Workers

Portfolio bilingüe: español en `/` y `/404`, inglés en `/en/` y `/en/404`. Se genera 100 % estático (sin adaptador).

## Correrlo

```bash
npm install
npm run dev
```

Abre http://localhost:4321.

## Build

```bash
npm run build
```

Genera `dist/` (`index.html`, `404.html`, `en/index.html`, `en/404.html`). Para probarlo como lo sirve Cloudflare:

```bash
npm run cf:dev
```

## Deploy

```bash
npm run deploy
```

Usa `wrangler.jsonc`: assets estáticos desde `dist/` y `404.html` propia (`not_found_handling: "404-page"`; bajo `/en/` se sirve `en/404.html`).

## Estructura

- `src/i18n/ui.ts` — textos ES/EN compartidos y datos de proyectos.
- `src/layouts/Base.astro` — head común (meta, hreflang, canonical, fuentes).
- `src/styles/global.css` — variables (`:root`), base y reveals.
- `src/components/` — header, footer (colofón), botones y una sección por componente.
- `src/scripts/` — menú, docbar, reveals, medidores, contadores, filas de proyectos y peso de página.
- `original/` — los 4 HTML originales, fuera del build, para comparar.

## Pendiente

- Falta `public/maia-del-basso-photo.webp` (la referencia `/maia-del-basso-photo.webp` está en `src/components/Author.astro`).
