import _Button from './Button'
import { withInstall } from '../../utils'

export const Button = withInstall(_Button)

export * from './types'

export default Button

declare module 'vue' {
  export interface GlobalComponents {
    SxwyButton: typeof Button
  }
}
