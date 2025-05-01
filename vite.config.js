import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/repo-name/', // 👈 yeh yahan hona chahiye
  plugins: [react()],
})
