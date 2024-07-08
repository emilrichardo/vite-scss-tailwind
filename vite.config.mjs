import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "./public",
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[ext]/[name].[ext]`,
      },
    },
  },
});
