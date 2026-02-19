import type { RouteRecordRaw } from 'vue-router'
import Login from '../views/login.vue'

export const authRoutes: RouteRecordRaw = {
  path: '/auth',
  name: 'auth',
  component: Login,
}
