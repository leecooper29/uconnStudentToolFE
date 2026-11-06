import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Intercept any request starting with /api
      '/api': {
        target: 'http://localhost:8000', // Your FastAPI backend address
        changeOrigin: true,
        secure: false
        // Optional: Keep this if your FastAPI paths also start with /api. 
        // If your FastAPI endpoints don't have '/api' in them, uncomment the line below:
        // rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
