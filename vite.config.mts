import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig((config) => {
  return {
    base: config.command === 'serve' ? '/' : './',
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./examples', import.meta.url)),
        '@sxwy/h5-sdk': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    plugins: [vue(), vueJsx()],
    server: {
      host: true
    },
    build: {
      outDir: './dist',
      copyPublicDir: false,
      lib: {
        entry: './src',
        name: 'H5SDK',
        fileName: () => 'h5-sdk.js',
        formats: ['umd']
      },
      rollupOptions: {
        external: ['vue'],
        output: {
          exports: 'named',
          globals: {
            vue: 'Vue'
          }
        }
      }
    }
  }
})
