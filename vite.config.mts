import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig((config) => {
  const env = loadEnv(config.mode, process.cwd(), '')
  return {
    base: config.command === 'serve' ? '/' : './',
    define: {
      __APP_ENV__: `'${env.VITE_APP_ENV}'`
    },
    resolve: {
      alias: {
        '@sxwy/mobile-sdk': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    plugins: [vue(), vueJsx()]
  }
})
