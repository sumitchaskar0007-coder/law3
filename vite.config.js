import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return undefined;

          if (id.includes('react-quill') || id.includes('quill')) {
            return 'editor';
          }

          if (id.includes('framer-motion')) {
            return 'motion';
          }

          if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
            return 'react';
          }

          if (id.includes('lucide-react') || id.includes('react-icons')) {
            return 'icons';
          }

          if (id.includes('axios') || id.includes('xlsx')) {
            return 'data';
          }

          return 'vendor';
        },
      },
      onwarn(warning, warn) {
        if (warning.code === 'MODULE_LEVEL_DIRECTIVE') return;
        warn(warning);
      },
    },
  },
});
