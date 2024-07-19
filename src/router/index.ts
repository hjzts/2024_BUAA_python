import { createRouter, createWebHistory } from 'vue-router'
import Auth from '../views/Auth/AuthView.vue'
import Home from '../views/Home/HomeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/auth',
      name: 'auth',
      component: Auth,
      children:[
        {
          path: '/auth/login',
          name: 'login',
          component: () => import('../views/Auth/Login.vue')
        },
        {
          path: '/auth/register',
          name: 'register',
          component: () => import('../views/Auth/Register.vue')
        },
        {
          path : 'auth/adminLogin',
          name : 'adminLogin',
          component:() => import ('../views/Auth/AdminLogin.vue')
        }
      ]
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path :'/',
      redirect:'/home'
    }
  ]
})

export default router
