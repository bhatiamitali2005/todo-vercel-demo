import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ Correct base for GitHub Pages
export default defineConfig({
  base: '/todo-vercel-demo/',
  plugins: [react()],
})
