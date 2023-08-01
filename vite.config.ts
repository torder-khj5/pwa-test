import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa';

const pwaOptions: Partial<VitePWAOptions> = {
  includeAssets: ['**/*.{js,css,html,ico,png,svg}'],
  manifest: {
    name: 'Hubtorder',
    short_name: 'Hubt',
    theme_color: '#FF4545',
    icons: [
      {
        src: 'icons/logo-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable',
      },
      {
        src: 'icons/favicon-128.png',
        sizes: '128x128',
        type: 'image/png',
        purpose: 'any maskable',
      },
      {
        src: 'icons/apple-touch-icon-152x152.png',
        sizes: '152x152',
        type: 'image/png',
        purpose: 'any maskable',
      },
    ],
  },
  devOptions: {
    enabled: true,
    type: 'module',
    navigateFallback: 'index.html',
  },

  injectRegister: false,
  registerType: 'autoUpdate',
  workbox: {
    globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
  },
  strategies: 'injectManifest',
  filename: 'sw.js',
};

// https://vitejs.dev/config/
export default defineConfig({
  base: '/pwa-test',
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        sw: './sw.js',
      },
    },
  },
  plugins: [react({ jsxImportSource: '@emotion/react' }), tsconfigPaths(), VitePWA(pwaOptions)],
});
