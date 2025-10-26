// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/my-website/', // replace REPO with your repository name
  plugins: [react()],
});
