import type { App } from 'vue'
import { createBaseApi, createWxApi } from './api'
import { h5SDKConfig, type H5SDKConfig } from './config'
import Button from './components/button'
import Loading from './components/loading'

export { version } from '../package.json'

export * from './api'
export * from './constants'
export * from './services'
export * from './store'
export * from './types'
export * from './utils'
export * from './config'

export * from './components/button'
export * from './components/loading'

export default (config: H5SDKConfig) => {
  Object.assign(h5SDKConfig, config)
  if (typeof h5SDKConfig.isRegisterComponents === 'undefined') {
    h5SDKConfig.isRegisterComponents = true
  }

  const createApi = () => {
    createBaseApi()
    createWxApi()
  }

  const registerComponents = (app: App) => {
    const components = [Button, Loading]
    components.forEach((compoment) => {
      app.use(compoment)
    })
  }

  return {
    install(app: App) {
      createApi()
      if (h5SDKConfig.isRegisterComponents) {
        registerComponents(app)
      }
    }
  }
}
