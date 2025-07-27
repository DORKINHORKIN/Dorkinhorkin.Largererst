import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    allowedHosts: [
      'devserver-preview--largerest.netlify.app',
      'localhost'
    ]
  }
})
