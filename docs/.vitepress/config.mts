import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  title: 'h5-sdk',
  description: '基于 Vue3 的开发工具包',
  lastUpdated: true,
  themeConfig: {
    search: {
      provider: 'local'
    },
    nav: [{ text: '组件', link: '/components/button' }],
    sidebar: [
      { text: 'Button', link: '/components/button' },
      { text: 'Loading', link: '/components/loading' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/sxwy/vue3-h5-sdk' }
    ],
    footer: {
      message: 'Released under the MIT License',
      copyright: 'Copyright © 2024-present ChenJie'
    }
  },
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('../../examples', import.meta.url)),
        '@sxwy/h5-sdk': fileURLToPath(new URL('../../src', import.meta.url))
      }
    },
    plugins: [vueJsx()],
    server: {
      host: true
    }
  }
})
