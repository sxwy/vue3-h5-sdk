import { createRouter, createWebHashHistory } from 'vue-router'
import { BASE_SITE } from '@/constants'
import guard from './guard'
import { basicsRoutes, exceptionRoutes, componentsRoutes } from './modules'

const routes = [componentsRoutes, exceptionRoutes, ...basicsRoutes]

const router = createRouter({
  history: createWebHashHistory(BASE_SITE),
  routes
})

guard(router)

export default router
