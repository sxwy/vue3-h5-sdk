import _Loading from './Loading'
import { withInstall } from '../../utils'

export const Loading = withInstall(_Loading)

export * from './types'

export default Loading

declare module 'vue' {
  export interface GlobalComponents {
    SxwyLoading: typeof Loading
  }
}
