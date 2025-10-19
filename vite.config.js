import react from "@vitejs/plugin-react"
import path from "path"

/** @type {import("vite").UserConfig} */
export default {
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@fixtures": path.resolve(__dirname, "./.fixtures"),

      $mixins: path.resolve(__dirname, "./src/shared/styles/mixins"),
    },
  },
  server: {
    port: 3000,
  },
  build: {
    outDir: "dist",
  },
}
