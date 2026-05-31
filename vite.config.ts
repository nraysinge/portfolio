import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",   // root path for custom domain deployment on portfolio.page
  plugins: [react()],
  server: {
    open: true,
  },
  build: {
    outDir: "dist",      // make sure build output goes to dist/
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
