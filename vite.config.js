import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  base: "/pet-clinicial-portal/",
  plugins: [react(), tailwindcss()],
  build: {
    assetsInclude: ["**/*.png", "**/*.svg"],
    outDir: "dist",
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@slices": path.resolve(__dirname, "./src/store/slices"),
    },
  },
});
