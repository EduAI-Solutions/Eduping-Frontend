import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `@use '../abstracts/functions' as *;`,
      },
    },
  },
  server: {
    open: true,
    port: 3000,
  },
  build: {
    sourcemap: true,
    outDir: 'dist',
  },
});
