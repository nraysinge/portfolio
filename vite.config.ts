import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/portfolio/",   // important for GitHub Pages
  plugins: [react()],
  build: {
    outDir: "dist",      // make sure build output goes to dist/
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
