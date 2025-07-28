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
    vite: {
      server: {
        allowedHosts: ['devserver-master--largerest.netlify.app'],
        // OR to allow all Netlify previews:
        // allowedHosts: ['.netlify.app'],
        // OR to disable host checks (less secure):
        // allowedHosts: 'all',
      }
    }
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
