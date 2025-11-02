

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 👇 Add this base line
export default defineConfig({
  base: '/todo-vercel-demo/',
  plugins: [react()],
})

