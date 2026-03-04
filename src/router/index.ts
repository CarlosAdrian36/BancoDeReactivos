import { authRoutes } from '@/modules/auth/routes'
import { loginGenerico } from '@/modules/login/routes'
import LayoutPrincipal from '@/modules/principal/layout/layoutPrincipal.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login' // 👈 ESTA ES LA CLAVE
    },
    ...authRoutes,
    ...loginGenerico,

    {
      path: '/home',
      name: 'home',
      component: LayoutPrincipal
    }
  ]
})

export default router
