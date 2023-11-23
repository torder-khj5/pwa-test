import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa';

const pwaOptions: Partial<VitePWAOptions> = {
  includeAssets: ['**/*.{js,css,html,ico,png,svg}', 'favicon.ico'],
  manifest: {
    name: 'table-orderhae',
    short_name: 'orderhae',
    theme_color: '#FF4545',
    icons: [
      {
        src: 'icons/pwa-64x64.png',
        sizes: '64x64',
        type: 'image/png',
      },
      {
        src: 'icons/pwa-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: 'icons/pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  },
  manifestFilename: 'manifest.json',
  devOptions: {
    enabled: true,
    type: 'module',
    navigateFallback: 'index.html',
  },
  registerType: 'autoUpdate',
  workbox: {
    globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
    swDest: 'dist/sw.js',
  },
  strategies: 'injectManifest',
  srcDir: 'src',
  filename: 'src-sw.ts',
};

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    global: 'window',
  },
  resolve: {
    alias: {
      timers: 'rollup-plugin-node-polyfills/polyfills/timers',
    },
  },
  assetsInclude: ['@assets/**'],
  build: {
    rollupOptions: {
      external: ['http', 'msw'],
      output: {
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
  },
  plugins: [
    react({ jsxImportSource: '@emotion/react' }),
    tsconfigPaths(),
    // , VitePWA(pwaOptions)
  ],
});
