import { authRoutes } from '@/modules/auth/routes'
import LayoutPrincipla2 from '@/modules/home/layout/layoutPrincipla2.vue'
import { loginGenerico } from '@/modules/login/routes'
import LayoutPrincipal from '@/modules/principal/layout/layoutPrincipal.vue'
import { createRouter, createWebHistory } from 'vue-router'

import navSideBar from '@/modules/home/sidebars/navSideBar.vue'
import Carpetassidebar from '@/modules/home/sidebars/carpetassidebar.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...authRoutes,
    ...loginGenerico,
    {
      path: '/',
      name: 'root',
      component: LayoutPrincipla2,
      children: [
        {
          path: 'contenedor',
          name: 'Contenedor',
          redirect: '/contenedor/misBancos',
          component: () => import('@/modules/home/views/contenedor.vue'),
          meta: { sidebar: navSideBar, requiresAuth: true },
          children: [
            {
              path: 'inicio',
              name: 'Inicio',
              component: () => import('@/modules/home/views/inicio.vue')
            },
            {
              path: 'misBancos',
              name: 'MisBancos',
              component: () => import('@/modules/home/views/misBancos.vue')
            },
            {
              path: 'misBancos/:carpetaId',
              name: 'CarpetaBanco',
              component: () => import('@/modules/carpeta/carpetaBanco.vue'),
              meta: { sidebar: Carpetassidebar }
            },
            {
              path: 'gestionMiembros',
              name: 'Gestion de Miembros',
              component: () => import('@/modules/home/views/gestionDeMiembros.vue')
            }
          ]
        }
      ]
    }
    // {
    //   path: '/home',
    //   name: 'home',
    //   // redirect: '/home/misBancos',
    //   component: LayoutPrincipal,
    //   children: [
    //     {
    //       path: 'inicio',
    //       name: 'Inicio',
    //       component: () => import('@/modules/principal/views/inicio.vue')
    //     },
    //     {
    //       path: 'misBancos',
    //       name: 'MisBancos',
    //       component: () => import('@/modules/principal/views/misBancos.vue')
    //     },
    //     {
    //       path: 'gestionMiembros',
    //       name: 'Gestion de Miembros',
    //       component: () => import('@/modules/principal/views/gestionDeMiembros.vue')
    //     }
    //   ]
    // }
  ]
})

export default router
