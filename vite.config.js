import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    tailwindcss(),
    react({
      jsxRuntime: 'automatic', // ✅ Enables React 17+ JSX (no need to import React)
    })
  ],
})