import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config.mjs'

export default defineConfig((configEnv) => {
  return mergeConfig(
    viteConfig(configEnv),
    defineConfig({
      test: {
        include: ['**/__tests__/**'],
        exclude: [...configDefaults.exclude, 'e2e/**'],
        environment: 'jsdom',
        root: fileURLToPath(new URL('./', import.meta.url)),
        watch: false
      }
    })
  )
})
