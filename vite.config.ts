import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import critical from "rollup-plugin-critical";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
    mode === 'production' &&
    critical({
      // Critical CSS configuration to address render-blocking resources
      criticalUrl: 'http://localhost:4173', // Preview server URL
      criticalPages: [
        { uri: '/', template: 'index' },
        { uri: '/services', template: 'services' },
        { uri: '/about', template: 'about' },
        { uri: '/contact', template: 'contact' }
      ],
      criticalConfig: {
        // Viewport dimensions for critical CSS extraction
        width: 1300,
        height: 900,
        // Include critical CSS inline
        inline: true,
        // Extract and defer non-critical CSS
        extract: true,
        // Minify critical CSS - REMOVED THIS LINE
        // ignore font-face rules to prevent Google Fonts blocking
        ignore: {
          atrule: ['@font-face'],
          rule: [/\.font/]
        },
        // Penthouse options for better critical CSS detection
        penthouse: {
          timeout: 30000,
          pageLoadSkipTimeout: 5000,
          maxEmbeddedBase64Length: 1000
        }
      }
    })
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Build configuration for production
  build: {
    rollupOptions: {
      output: {
        // Ensure CSS is extracted to separate files
        assetFileNames: 'assets/[name]-[hash][extname]'
      }
    }
  }
}));
