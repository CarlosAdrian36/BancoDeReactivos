import type { RouteRecordRaw } from 'vue-router'
import Login from '../layout/login.vue'
import Login2 from '../layout/login2.vue'

export const authRoutes: RouteRecordRaw[] = [
  {
    path: '/auth',
    name: 'auth',
    component: Login,
    children: [
      {
        path: 'ingresar',
        name: 'Ingresar',
        component: () => import('../views/formularioIngreso.vue'),
      },
      {
        path: 'recuperar',
        name: 'Recuperar',
        component: () => import('../views/recuperarConstrasena.vue'),
      },
      {
        path: 'restaurar',
        name: 'Restaurar',
        component: () => import('../views/restaurarContrasena.vue'),
      },
    ],
  },
  {
    path: '/auth2',
    name: 'auth2',
    component: Login2,
    children: [
      {
        path: 'ingresar',
        name: 'Ingresar',
        component: () => import('../views/formularioIngreso.vue'),
      },
      {
        path: 'recuperar',
        name: 'Recuperar',
        component: () => import('../views/recuperarConstrasena.vue'),
      },
      {
        path: 'restaurar',
        name: 'Restaurar',
        component: () => import('../views/restaurarContrasena.vue'),
      },
    ],
  },
]
