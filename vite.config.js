import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Hostinger deploys the repository root, so Apache/LiteSpeed serves the
  // production bundle from /dist while the root rewrite routes pages there.
  base: '/dist/',
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        if (warning.code === 'MODULE_LEVEL_DIRECTIVE') return;
        warn(warning);
      },
    },
  },
});
