import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

const manifestIcons = [
  {
    src: "/Logo.png",
    sizes: "192*192",
    type: "image/png",
  },
];

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Tic Tac Toe",
        short_name: "T T T",
        icons: manifestIcons,
      },
    }),
  ],
});
