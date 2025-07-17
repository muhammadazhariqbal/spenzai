import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      includeAssets: ["favicon.ico", "robots.txt", "icons/*.png"],
      manifest: {
        name: "Spenzai - Personal Finance Tracker",
        short_name: "Spenzai",
        theme_color: "#000000",
        background_color: "#f8fafc",
        display: "standalone",
        scope: "/",
        start_url: "/",
        icons: [
          // Standard icons (from public/icons)
          { src: "icons/72.png", sizes: "72x72", type: "image/png" },
          { src: "icons/96.png", sizes: "96x96", type: "image/png" },
          { src: "icons/128.png", sizes: "128x128", type: "image/png" },
          { src: "icons/144.png", sizes: "144x144", type: "image/png" },
          { src: "icons/152.png", sizes: "152x152", type: "image/png" },
          { src: "icons/167.png", sizes: "167x167", type: "image/png" },
          { src: "icons/180.png", sizes: "180x180", type: "image/png" },
          { src: "icons/192.png", sizes: "192x192", type: "image/png" },
          { src: "icons/256.png", sizes: "256x256", type: "image/png" },
          { src: "icons/384.png", sizes: "384x384", type: "image/png" },
          { src: "icons/512.png", sizes: "512x512", type: "image/png" },
          { src: "icons/1024.png", sizes: "1024x1024", type: "image/png" },
          // Maskable icons (from public/)
          {
            src: "maskable_icon_x72.png",
            sizes: "72x72",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "maskable_icon_x96.png",
            sizes: "96x96",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "maskable_icon_x128.png",
            sizes: "128x128",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "maskable_icon_x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "maskable_icon_x384.png",
            sizes: "384x384",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "maskable_icon_x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "maskable_icon.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
          // Fallback/logo
          { src: "logo-512.png", sizes: "512x512", type: "image/png" },
          { src: "logo-pwa.png", sizes: "512x512", type: "image/png" },
        ],
      },
    }),
  ],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
