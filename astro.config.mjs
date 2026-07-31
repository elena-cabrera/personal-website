// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://elenacabrera.xyz',
  // Keep whitespace between inline tags (e.g. "from <span>")
  compressHTML: false,
  vite: {
    plugins: [tailwindcss()],
  },
});
