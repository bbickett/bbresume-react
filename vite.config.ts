import { fileURLToPath, URL } from 'url';

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      "@": fileURLToPath(new URL('./src', import.meta.url))
    }
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
            @import "./src/scss/variables.scss";
            @import "node_modules/bootstrap/scss/_functions.scss";
            @import "node_modules/bootstrap/scss/_mixins.scss";
          `
      }
    }
  },
})
