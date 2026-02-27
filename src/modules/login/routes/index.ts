import type { RouteRecordRaw } from 'vue-router'
import loginPrincipal from '../layout/loginPrincipal.vue'

export const loginGenerico: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    redirect: '/login/ingresar',
    component: loginPrincipal,
    children: [
      {
        path: 'ingresar',
        name: 'Ingresar',
        component: () => import('../views/ingreso.vue'),
        meta: { order: 1 }
      },
      {
        path: 'enviar-correo',
        name: 'EnviarCorreo',
        component: () => import('../views/enviodecorreo.vue'),
        meta: { order: 2 }
      }
    ]
  }
]
