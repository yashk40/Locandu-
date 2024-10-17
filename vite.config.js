// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/sitemap.xml': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
});
