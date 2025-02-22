import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';
import { splitVendorChunkPlugin } from 'vite';

export default defineConfig({
  plugins: [
    react(),
    splitVendorChunkPlugin(),
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz'
    }),
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br'
    })
  ],
  build: {
    // Enable minification and tree shaking
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      },
      format: {
        comments: false
      }
    },
    rollupOptions: {
      output: {
        // Split vendor chunks
        manualChunks(id) {
          // Create separate chunks for large dependencies
          if (id.includes('node_modules')) {
            if (id.includes('react')) {
              return 'react-vendor';
            }
            if (id.includes('lucide')) {
              return 'icons-vendor';
            }
            if (id.includes('firebase')) {
              return 'firebase-vendor';
            }
            // Group remaining node_modules into a shared vendor chunk
            return 'vendor';
          }
        },
        // Optimize chunk size
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]'
      }
    },
    // Generate source maps for production debugging
    sourcemap: true,
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    // Ensure proper asset handling
    assetsInlineLimit: 4096,
    // Improve CSS handling
    cssCodeSplit: true,
    // Enable module preload polyfill
    modulePreload: {
      polyfill: true
    }
  },
  server: {
    // Enable compression
    compress: true,
    // Enable HMR
    hmr: {
      overlay: false
    }
  },
  // Add base URL for production
  base: '/',
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'lucide-react']
  }
});