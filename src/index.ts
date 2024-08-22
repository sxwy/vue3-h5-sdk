import type { App } from 'vue'
import Button from './components/Button'

export const install = (app: App) => {
  const components = [Button]
  components.forEach((compoment) => {
    app.use(compoment)
  })
}

export { version } from '../package.json'

export * from './components/Button'
export * from './constants'
export * from './utils'

export default install
