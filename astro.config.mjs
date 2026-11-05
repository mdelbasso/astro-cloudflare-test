import { defineConfig } from 'astro/config';

// Sitio 100% estático (sin adaptador) → dist/
export default defineConfig({
  site: 'https://peakcore.dev',
  output: 'static',
  trailingSlash: 'ignore',
  build: {
    // Un archivo por ruta tal como está en src/pages: /404 → 404.html, /en/ → en/index.html, /en/404 → en/404.html
    format: 'preserve',
    // CSS inline en el HTML: sin request extra de hoja de estilos (igual que el original, un solo archivo)
    inlineStylesheets: 'always',
  },
});
