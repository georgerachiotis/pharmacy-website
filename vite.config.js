import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/pharmacy-website/',
  plugins: [react()],
});
