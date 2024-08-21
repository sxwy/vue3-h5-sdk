import { type App } from 'vue'
import Button from './Button'

Button.install = (app: App) => {
  app.component(Button.name!, Button)
}

export * from './types'

export { Button as default, Button }

declare module 'vue' {
  export interface GlobalComponents {
    SxwyButton: typeof Button
  }
}
