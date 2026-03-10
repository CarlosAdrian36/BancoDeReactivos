import { authRoutes } from '@/modules/auth/routes'
import { loginGenerico } from '@/modules/login/routes'
import LayoutPrincipal from '@/modules/principal/layout/layoutPrincipal.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    ...authRoutes,
    ...loginGenerico,

    {
      path: '/home',
      name: 'home',
      redirect: '/home/todo',
      component: LayoutPrincipal,
      children: [
        {
          path: 'todo',
          name: 'Todo',
          component: () => import('@/modules/principal/views/inicio.vue')
        },
        {
          path: 'carpetas',
          name: 'Carpetas',
          component: () => import('@/modules/principal/views/misBancos.vue')
        },
        {
          path: 'gestionMiembros',
          name: 'Gestion de Miembros',
          component: () => import('@/modules/principal/views/gestionDeMiembros.vue')
        }
      ]
    }
  ]
})

export default router
