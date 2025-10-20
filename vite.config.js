import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'  // 👈 este es el correcto

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // ✅ usa el oficial de Tailwind, no el core
  ],
})

