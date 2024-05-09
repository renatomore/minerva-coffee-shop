import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

const port = 3000;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    cssCodeSplit: false,
    modulePreload: false,
  },
  server: {
    port,
  },
  preview: {
    port,
  },
});