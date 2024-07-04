import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

const basenameProd = '/react-shadcn-starter/'; // Ensure it ends with a slash

export default defineConfig(({ command }) => {
  const isProd = command === 'build'

  return {
    base: isProd ? basenameProd : '/', // Ensure base path is correct
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      outDir: 'dist', // Ensure output directory is set
      assetsDir: 'assets', // Ensure assets directory is set
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom'],
          },
        },
      },
    },
  }
})