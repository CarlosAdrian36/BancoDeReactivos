import type { RouteRecordRaw } from 'vue-router'
import loginPrincipal from '../layout/loginPrincipal.vue'

export const loginGenerico: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    component: loginPrincipal,
    // children: []
  },
]
