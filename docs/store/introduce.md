# 介绍

`SDK ` 中基于 `Pinia2` 封装了业务常用的 `user` 模块，所有登录、用户信息等基础功能都由此模块提供

## State

```ts
/** 会话信息 */
export interface Session {
  /** token */
  token: string
}

/** 用户信息 */
export interface User {
  /** id */
  id: string
  /** 头像 */
  avatar: string
  /** 名称 */
  name: string
}

export interface UserState {
  session: Session | null
  current: User | null
}
```

## Action

```ts
/**
 * 登录初始化
 * @param payload 参数
 */
async loginInit(payload: LoginQuery) {
  const result = await login(payload)
  this.session = result
}
/**
 * 更新会话信息
 */
async updateSession() {
  const result = await refreshToken()
  this.session = result
}
/**
 * 获取用户信息
 */
async userInit() {
  const result = await getUserInfo()
  this.current = result
}
/**
 * 退出登录
 */
logout() {
  this.session = null
  this.current = null
}
```

## 使用示例

```vue
<script lang="ts" setup>
  import { useUserStore } from '@sxwy/h5-sdk'

  const user = useUserStore()

  console.log('user', user)
</script>
```
