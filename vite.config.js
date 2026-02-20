import { defineConfig } from 'vite'
import { resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    minify: 'esbuild',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        portal: resolve(__dirname, 'student_document_portal/index.html')
      }
    }
  },
  server: {
    port: 3000
  }
})
