import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: true,
    allowedHosts: [
      "", // no https:// here
    ],
  },
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-router-dom",
      "gsap",
      "@gsap/react",
      "three",
      "@react-three/fiber",
      "@react-three/drei",
      "framer-motion",
      "motion",
      "lenis"
    ],
  },
  build: {
    minify: "terser",
    cssCodeSplit: true,
    sourcemap: false,
    chunkSizeWarningLimit: 900,
    rollupOptions: {
      output: {
        compact: true,
        manualChunks: {
          react: ["react", "react-dom", "react-router-dom"],
          gsap: ["gsap", "@gsap/react"],
          three: [
            "three",
            "@react-three/fiber",
            "@react-three/drei",
            "@react-three/postprocessing",
            "@react-three/rapier",
            "three-stdlib",
            "troika-three-text",
            "postprocessing"
          ],
          motion: ["framer-motion", "motion"],
        },
      },
    },
  },
})
