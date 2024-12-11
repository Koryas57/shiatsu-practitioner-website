import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Permet l'accès via l'adresse IP locale
    port: 5173, // Assurez-vous que le port est correct
    strictPort: true, // Empêche Vite de changer automatiquement de port
  },
})
