import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
    react({
      jsxRuntime: 'automatic', // ✅ Enables React 17+ JSX (no need to import React)
    })
  ],
})