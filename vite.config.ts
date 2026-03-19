import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'icons/*.svg'],
      manifest: {
        name: 'Solana Mobile - Reference PWA',
        short_name: 'SM Reference',
        description:
          'Reference progressive web application for Solana Mobile: Mobile Wallet Adapter, TWA/Bubblewrap guidance, and mobile-first layout patterns.',
        theme_color: '#070b12',
        background_color: '#070b12',
        display: 'standalone',
        orientation: 'portrait-primary',
        scope: '/',
        start_url: '/',
        categories: ['finance', 'utilities'],
        icons: [
          {
            src: '/icons/pwa-192.svg',
            sizes: '192x192',
            type: 'image/svg+xml',
            purpose: 'any',
          },
          {
            src: '/icons/pwa-512.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
            purpose: 'any',
          },
          {
            src: '/icons/maskable-512.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
            purpose: 'maskable',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,svg,png,webp,woff2}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/api\.devnet\.solana\.com\/.*/i,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'solana-rpc-devnet',
              expiration: { maxEntries: 32, maxAgeSeconds: 60 },
            },
          },
        ],
      },
    }),
  ],
})
