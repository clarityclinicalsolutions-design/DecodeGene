import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    port: 5173,
    open: false,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true,
      },
      '/health': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    chunkSizeWarningLimit: 950,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor-react';
          }
          if (id.includes('src/data/demo_associations.json')) {
            return 'genes-data';
          }
          if (id.includes('src/i18n/genes/') || id.includes('src/i18n/enRecordsAll.js')) {
            return 'en-genes';
          }
        },
      },
    },
  },
});
