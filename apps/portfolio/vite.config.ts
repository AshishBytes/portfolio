import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // Point the bare package name to its TypeScript source so Vite can
      // transpile it directly — no build step needed for packages/config.
      "@repo/config": resolve(
        import.meta.dirname,
        "../../packages/config/src/index.ts",
      ),
    },
  },
  server: {
    host: "0.0.0.0",
  },
});
