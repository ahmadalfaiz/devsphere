//Pahle ka vite.config code hai ye - neeche checking wala code hai
/*import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})*/

// Ye code abhi 18 sept ke testing ke liye hai - isme PWA ka plugin add kiya hai
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),

    VitePWA({
      registerType: 'autoUpdate',

      manifest: false,

      workbox: {
        maximumFileSizeToCacheInBytes: 15 * 1024 * 1024,

        globPatterns: [
          '**/*.{js,css,html,ico,png,svg,webp,woff2}'
        ],
      },
    }),
  ],
});