import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({ 
    registerType: 'autoUpdate',
    /* enable sw on development */
    devOptions: {
      enabled: true
      /* other options */
    },
    manifest: {
      name: 'WKB PWA',
      short_name: 'WKB P',
      theme_color: '#01bd7e',
      start_url: '/',
      discription: 'standalone',
      background_color: "#fff",
      icons: [
      ]
    }
  })],
})
