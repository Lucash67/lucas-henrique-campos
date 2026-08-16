import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages serves this repo from a subpath; `npm run build:pages` passes it via --base.
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
