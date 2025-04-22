import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  optimizeDeps: {
    include: ["react-helmet-async"],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@/styles/base/colors";
          @import "@/styles/base/variables";
          @import "@/styles/base/media-queries";
          @import "@/styles/base/styleguide";
        `,
      },
    },
  },
});
