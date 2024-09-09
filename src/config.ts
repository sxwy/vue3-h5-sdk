import { ENV } from './constants'

export interface H5SDKConfig {
  /** 环境 */
  env: ENV
  /** mocker 服务启动的端口 */
  mockerPort: number
  /** 是否需要注册组件 */
  isRegisterComponents?: boolean
}

/**
 * 配置
 */
export const h5SDKConfig: H5SDKConfig = {} as H5SDKConfig
