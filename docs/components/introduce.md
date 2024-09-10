# 介绍

通过本章节你可以了解到 `components` 的使用方法

## 常规用法

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

// 4. 注册完成后，在模板中通过 <sxwy-button> 或 <SxwyButton> 标签来使用按钮组件
```

::: tip
`SDK` 默认支持 `Tree Shaking`，因此你不需要配置任何插件，通过 `Tree Shaking` 即可移除不需要的 `JS` 代码，但 `CSS` 样式无法通过这种方式优化，如果需要按需引入 `CSS` 样式，请参考下面的按需引入组件
:::

## 按需引入

按需引入的使用方式不需要引入全局的样式文件，也不需要全局注册组件

```ts
import { createApp } from 'vue'
// 1. 引入 SDK
import SXWYH5SDK, { ENV } from '@sxwy/h5-sdk'

const app = createApp()

// 2. 初始化 SDK
app.use(
  SXWYH5SDK({
    env: ENV.PROD,
    mockerPort: 8090,
    isRegisterComponents: false // 关闭自动全局注册组件
  })
)
```

使用哪个组件导入哪个组件，并需要导入对应的样式文件

> .vue

```vue
<template>
  <Button />
</template>

<script lang="ts" setup>
  import { Button } from '@sxwy/h5-sdk'
  import '@sxwy/h5-sdk/components/button/styles'
</script>
```

> .tsx

```tsx
import { Button } from '@sxwy/h5-sdk'
import '@sxwy/h5-sdk/components/button/styles'

export default {
  render() {
    return <Button />
  }
}
```

::: tip
相比于常规用法，这种方式可以按需引入组件的 `CSS` 样式，从而减少一部分代码体积，但使用起来会变得繁琐一些，如果业务对 `CSS` 的体积要求不是特别极致，我们推荐使用更简便的常规用法
:::
