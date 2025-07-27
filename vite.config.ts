import { defineConfig } from 'vite'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    open: true,
    host: true,
    cors: true,
    allowedHosts: [
      "devserver-preview--largerest.netlify.app"
    ]
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
})