import type { RouteRecordRaw } from 'vue-router'

/** 基础相关路由 */
export default [
  {
    name: 'Index',
    path: '/index',
    meta: {
      title: '首页'
    },
    component: () => import('@/pages/index.vue')
  },
  // 首页路由
  {
    path: '/',
    redirect: '/index'
  },
  // 兜底路由
  {
    path: '/:catchAll(.*)',
    redirect: '/exception/not-found'
  }
] as RouteRecordRaw[]
