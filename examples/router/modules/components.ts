import { type RouteRecordRaw } from 'vue-router'

/** 组件相关页面 */
export default {
  name: 'Components',
  path: '/components',
  redirect: '/components/button',
  children: [
    {
      name: 'ComponentsButton',
      path: 'button',
      meta: { title: '按钮' },
      component: () => import('@/pages/components/button.vue')
    },
    {
      name: 'ComponentsLoading',
      path: 'loading',
      meta: { title: '加载' },
      component: () => import('@/pages/components/loading.vue')
    }
  ]
} as RouteRecordRaw
