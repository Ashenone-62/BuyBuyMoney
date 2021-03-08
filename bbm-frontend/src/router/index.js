import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/me',
    name: 'Me',
    component: () => import('../views/Me.vue'),
  },
  {
    path: '/category/:type',
    name: 'Category',
    component: () => import('../views/Category.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/goodsList/:category',
    name: 'GoodsList',
    component: () => import('../views/List.vue')
  },
  {
    path: '/hotBtn/:type',
    name: 'HotBtn',
    component: () => import('../views/List.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
