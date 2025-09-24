// @ts-check
import { defineConfig } from 'astro/config';

import solidJs from '@astrojs/solid-js';
import svelte from '@astrojs/svelte';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  build: {
    inlineStylesheets: 'never'
  },
  integrations: [
    solidJs({ include: ['**/solid/*'], }), 
    svelte({ extensions: [".svelte"] })
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});