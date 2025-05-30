import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "react-parallax-tilt": "react-parallax-tilt/dist/index.esm.js",
    },
  },
  server: {
    host: "0.0.0.0",
    port: 5173,
    strictPort: true,
    cors: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    allowedHosts: [
      "0d8a-103-102-85-2.ngrok-free.app", // <-- Add EXACT ngrok URL
      "localhost",
    ],
    hmr: {
      host: "localhost",
      protocol: "ws",
      clientPort: 5173,
    },
  },
});
