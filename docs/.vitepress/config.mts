import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  title: 'H5-SDK',
  description: '基于 Vue3 的开发工具包',
  lastUpdated: true,
  themeConfig: {
    search: {
      provider: 'local'
    },
    nav: [
      { text: '开发指南', link: '/guide/introduce' },
      { text: 'components', link: '/components/button' }
    ],
    sidebar: {
      '/guide/': [{ text: '介绍', link: '/guide/introduce' }],
      '/components/': [
        { text: 'Button', link: '/components/button' },
        { text: 'Loading', link: '/components/loading' }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/sxwy/vue3-h5-sdk' }
    ],
    footer: {
      message: 'Released under the MIT License',
      copyright: 'Copyright © 2024-present chenjie'
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
