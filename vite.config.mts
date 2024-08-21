import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig((config) => {
  return {
    base: config.command === 'serve' ? '/' : './',
    resolve: {
      alias: {
        '@sxwy/h5-sdk': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    plugins: [vue(), vueJsx()]
  }
})
