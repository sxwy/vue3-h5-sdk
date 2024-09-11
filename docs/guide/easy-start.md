# 快速上手

通过本章节你可以了解到 `SDK` 的安装方法和初始化配置

## 安装

`Node.js` >= `20`，并安装以下依赖

```json
 "peerDependencies": {
    "axios": "^1.7.7",
    "pinia": "^2.2.2",
    "vue": "^3.5.3"
  }
```

安装命令

```shell
# npm
npm i @sxwy/h5-sdk -S

# yarn
yarn add @sxwy/h5-sdk -S

# pnpm
pnpm i @sxwy/h5-sdk -P
```

## 初始化

### SDK 接收的参数

```ts
export enum ENV {
  MOCK = 'mock',
  TEST = 'test',
  RC = 'rc',
  PROD = 'prod'
}

export interface H5SDKConfig {
  /** 环境 */
  env: ENV
  /** mocker 服务启动的端口 */
  mockerPort: number
  /** 是否需要注册组件（默认是 true） */
  isRegisterComponents?: boolean
}
```

### 初始化示例

```ts
import { createApp } from 'vue'
// 1. 引入 SDK
import SXWYH5SDK, { ENV } from '@sxwy/h5-sdk'
// 2. 引入组件样式
import '@sxwy/h5-sdk/styles/index.css'

const app = createApp()

// 3. 初始化 SDK
app.use(
  SXWYH5SDK({
    env: ENV.PROD,
    mockerPort: 8090
  })
)
```

通过以上步骤，已经可以正常使用 `SDK` 的功能了，具体使用方法请点击下方文档链接阅读

- [api](../api/introduce.md)
- [components](../components/introduce.md)
