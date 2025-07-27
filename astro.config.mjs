// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },

  redirects: {
    "/": "/home",
  },

  adapter: netlify(),

  server: {
    allowedHosts: [
      'localhost', 
      'devserver-preview--largerest.netlify.app'
    ],
  }
});