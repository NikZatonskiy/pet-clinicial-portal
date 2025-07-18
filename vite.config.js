import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/pet-clinicial-portal/",
  plugins: [react(), tailwindcss()],
  build: {
    assetsInclude: ["**/*.png", "**/*.svg"],
    outDir: "dist",
    emptyOutDir: true,
  },
});
