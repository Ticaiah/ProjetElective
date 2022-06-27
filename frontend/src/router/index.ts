import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import shop from '../views/shopView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path:'/',
    name: 'home',
    component: () => import('../views/clientViews/HomeView.vue')
  },
  {
    path:'/register',
    name: 'register',
    component: () => import('../views/clientViews/RegisterView.vue')
  },
  {
    path:'/login',
    name: 'login',
    component: () => import('../views/clientViews/LoginView.vue')
  },
  {
    path:'/restaurant/register',
    name: 'restaurant-register',
    component: () => import('../views/restaurantViews/RegisterView.vue')
  },
  {
    path:'/restaurant/login',
    name: 'restaurant-login',
    component: () => import('../views/restaurantViews/LoginView.vue')
  },
  {
    path:'/create-restaurant',
    name: 'Créer un restaurant',
    component: () => import('../views/guestViews/CreateRestaurantView.vue')
  },
  {
    path:'/restaurants',
    name: 'Liste des restaurants',
    component: () => import('../views/guestViews/RestaurantsView.vue')
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
