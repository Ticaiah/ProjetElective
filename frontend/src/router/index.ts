import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import shop from '../views/shopView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path:'/register',
    name: 'register',
    component: () => import('../views/guestViews/SignInView.vue')
  },
  {
    path:'/log-in',
    name: 'login',
    component: () => import('../views/guestViews/LogInView.vue')
  },
  {
    path:'/',
    name: 'home',
    component: () => import('../views/guestViews/HomeView.vue')
  },
  {
    path:'/shop',
    name: 'shop',
    component: shop
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
