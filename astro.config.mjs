// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: 'https://largerest.com',
  integrations: [mdx(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: [
        'devserver-master--largerest.netlify.app',
        '.netlify.app',
        "4321-dorkinhorkin-largererst-z78s59lg3or.ws-us120.gitpod.io",
        'gitpod.io'
      ],
    }
  },

  redirects: {
    "/": "/home",
  },

  adapter: netlify(),

});
