import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA, VitePWAOptions } from "vite-plugin-pwa";

const pwaOptions: Partial<VitePWAOptions> = {
  includeAssets: ["**/*.{js,css,html,ico,png,svg}", "favicon.ico", "manifest"],
  manifest: {
    name: "table-orderhae",
    short_name: "orderhae",
    theme_color: "#FF4545",
    icons: [
      {
        src: "icons/logo-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any"
      },
      {
        src: "icons/favicon-128.png",
        sizes: "128x128",
        type: "image/png",
        purpose: "maskable"
      },
      {
        src: "icons/apple-touch-icon-152x152.png",
        sizes: "152x152",
        type: "image/png"
      }
    ]
  },
  manifestFilename: "manifest.json",
  devOptions: {
    enabled: true,
    type: "module",
    navigateFallback: "index.html"
  },
  injectRegister: false,
  registerType: "autoUpdate",
  workbox: {
    globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
    swDest: 'dist/sw.js',
  },
  strategies: "injectManifest",
  srcDir: 'src',
  filename: "src-sw.ts",
};

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      timers: "rollup-plugin-node-polyfills/polyfills/timers"
    }
  },
  assetsInclude: ["@assets/**"],
  build: {
    rollupOptions: {
      external: ["http", "msw"],
      output: {
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js"
      }
    }
  },
  plugins: [react({ jsxImportSource: "@emotion/react" }), tsconfigPaths(), VitePWA(pwaOptions)]
});
