import type { App } from 'vue'
import Button from './components/button'
import Loading from './components/loading'

export const install = (app: App) => {
  const components = [Button, Loading]
  components.forEach((compoment) => {
    app.use(compoment)
  })
}

export { version } from '../package.json'

export * from './components/button'
export * from './components/loading'

export * from './constants'
export * from './utils'

export default install
