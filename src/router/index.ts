import { authRoutes } from '@/modules/auth/routes'
import LayoutPrincipal from '@/modules/principal/layout/layoutPrincipal.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...authRoutes,

    {
      path: '/home',
      name: 'home',
      component: LayoutPrincipal,
    },
  ],
})

export default router
