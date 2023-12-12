// import { defineConfig } from 'vite';
// // import react from '@vitejs/plugin-react'

// // // https://vitejs.dev/config/
// // export default defineConfig({
// //   plugins: [react()],
// // })
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     host: '0.0.0.0',
//   },
//   build: {
//     rollupOptions: {
//       external: ['@emailjs/browser'],
//     },
//   },
//   assetsDir: 'assets',
// });
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
  },
  build: {
    rollupOptions: {
      external: ['@emailjs/browser'],
    },
    // Specify the input file for Rollup
    input: {
      main: path.resolve(__dirname, 'index.html'),
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Adjust the path accordingly
    },
  },
  assetsDir: 'assets',
  base: '/', // Set the base path for your application
});
