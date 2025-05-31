import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { visualizer } from 'rollup-plugin-visualizer';
import critical from 'rollup-plugin-critical';

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';
  const criticalUrl = "https://www.agapeplumbinginc.com"; // Use Vercel URL or fallback to localhost

  return {
    plugins: [
      react(),
      isProduction &&
        critical({
          criticalBase: 'dist/',
          criticalUrl: criticalUrl, // Use the dynamically set URL
          criticalPages: [
            { uri: '/', template: 'index' },
            // { uri: 'about', template: 'about/index' },
            // { uri: 'contact', template: 'contact/index' },
            // { uri: 'services', template: 'services/index' },
          ],
          criticalConfig: {
            inline: true,
            extract: true,
            // minify: true, 
            ignore: ['@font-face'],
            width: 1300,
            height: 900,
          },
        }),
      isProduction &&
        visualizer({
          open: true,
          filename: 'dist/stats.html',
          gzipSize: true,
          brotliSize: true,
        }),
    ].filter(Boolean),
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  };
});
