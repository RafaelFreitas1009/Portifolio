// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    // ❌ mode === "development" && componentTagger(),
  ], // sem .filter(Boolean) agora
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
