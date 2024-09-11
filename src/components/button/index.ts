import _Button from './Button'
import { withInstall } from '../../utils'

export const Button = withInstall(_Button)

export default Button

export * from './types'
export * from './Button'

declare module 'vue' {
  export interface GlobalComponents {
    SxwyButton: typeof Button
  }
}
