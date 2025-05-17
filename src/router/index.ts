import { createRouter, createWebHistory } from 'vue-router'
import { ROUTE } from '@/router/route'

const router = createRouter({
  history: createWebHistory(),
  routes: ROUTE,
})

export default router
