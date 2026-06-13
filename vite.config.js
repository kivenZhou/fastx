import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { APP_VERSION } from './src/release-meta.js'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    {
      name: 'brand-favicon-version',
      transformIndexHtml(html) {
        const v = `v=${APP_VERSION}`
        return html
          .replaceAll('/icon.svg"', `/icon.svg?${v}"`)
          .replaceAll('/icon.png"', `/icon.png?${v}"`)
      },
    },
  ],
})
