import { type App } from 'vue'
import Button from './components/Button'

export const components = [Button]

const install = (app: App) => {
  components.forEach((compoment) => {
    app.component(compoment.name!, compoment)
  })
}

export { version } from '../package.json'

export * from './components/Button'
export * from './constants'
export * from './utils'

export default install
