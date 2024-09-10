# 介绍

`SDK ` 中提供了几套对应的 `API` 请求域名，大家可直接导出使用，无需重复定义

- 支持请求增加对应 `token`
- 支持无痛刷新 `token`
- 支持各个业务的返回结构体

> 对应的环境就是上一章初始化时传递给 `SDK` 的 `ENV` 参数，`SDK` 会根据环境自动切换 `baseUrl`

## baseApi

| mock                                              | test                   | rc                    | prod               |
| ------------------------------------------------- | ---------------------- | --------------------- | ------------------ |
| `http://localhost:${h5SDKConfig.mockerPort}/base` | http://test-api.xxx.cn | https://rc-api.xxx.cn | https://api.xxx.cn |

## wxApi

| mock                                            | test                   | rc                   | prod              |
| ----------------------------------------------- | ---------------------- | -------------------- | ----------------- |
| `http://localhost:${h5SDKConfig.mockerPort}/wx` | https://test-wx.xxx.cn | https://rc-wx.xxx.cn | https://wx.xxx.cn |

## 使用示例

::: tip
所有的 `API` 都是基于 `axios` 封装的，对应的使用方法也可参照 `axios` 官网
:::

```ts
import { baseApi } from '@sxwy/h5-sdk'

export const getUserInfo = (data: { type: string }) => {
  return baseApi.request<{
    token: string
  }>({
    method: 'POST',
    url: '/api/getUserInfo/v1.0',
    data
  })
}
```
