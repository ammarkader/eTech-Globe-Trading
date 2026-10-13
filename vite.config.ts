import { reactRouter } from '@react-router/dev/vite'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), reactRouter()],
  define: {
    // Lets the footer hydrate with the year that was prerendered into the HTML.
    __BUILD_YEAR__: new Date().getFullYear(),
  },
})
