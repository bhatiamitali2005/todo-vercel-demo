import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ Final version for GitHub Pages
export default defineConfig({
  base: '/todo-vercel-demo/',
  build: {
    outDir: 'build',
  },
  plugins: [react()],
})
