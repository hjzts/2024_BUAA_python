import { createRouter, createWebHashHistory } from 'vue-router'
import Auth from '@/views/Auth/AuthView.vue'
import Login from '@/views/Auth/Login.vue'
import Register from '../views/Auth/Register.vue'
import AdminLogin from '../views/Auth/AdminLogin.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/auth',
    },
    {
      path: '/auth',
      name: 'auth',
      component: Auth,
      children:[
        {
          path: '/auth/login',
          name: 'login',
          component: Login
        },
        {
          path: '/auth/register',
          name: 'register',
          component: Register
        },
        {
          path : 'auth/adminLogin',
          name : 'adminLogin',
          component: AdminLogin
        }
      ]
    }
  ]
})

export default router
