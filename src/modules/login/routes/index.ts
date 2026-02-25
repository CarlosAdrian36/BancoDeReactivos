import type { RouteRecordRaw } from 'vue-router'
import loginPrincipal from '../layout/loginPrincipal.vue'

export const loginGenerico: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    component: loginPrincipal,
    children: [
      {
        path: 'ingresar',
        name: 'Ingresar',
        component: () => import('../views/ingreso.vue'),
      },
      {
        path: 'enviar-correo',
        name: 'EnviarCorreo',
        component: () => import('../views/enviodecorreo.vue'),
      },
    ],
  },
]
