import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@/scss': resolve(__dirname, 'src/scss'),
      '@/assets': resolve(__dirname, 'src/assets'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
  additionalData: `@use "@/scss/global/variable/_colors.scss" as *; @use "@/scss/global/variable/_fontWeight.scss" as *; @use "@/scss/global/variable/_className.scss" as *;`,
      },
    },
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/ts/index.ts'),
      },
      output: {
        entryFileNames: 'bundle.js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) {
            return 'build.css'
          }
          return '[name].[ext]'
        },
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
})
