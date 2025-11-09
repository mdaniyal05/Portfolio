import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  optimizeDeps: {
    include: [
      "three",
      "three-globe",
      "@react-three/fiber",
      "@react-three/drei",
    ],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          three: [
            "three",
            "three-globe",
            "@react-three/fiber",
            "@react-three/drei",
          ],
        },
      },
    },
  },
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
