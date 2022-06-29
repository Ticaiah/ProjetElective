import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import shop from '../views/shopView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path:'/',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path:'/register',
    name: 'register',
    component: () => import('@/views/clientViews/RegisterView.vue')
  },
  {
    path:'/login',
    name: 'login',
    component: () => import('@/views/clientViews/LoginView.vue')
  },
  {
    path:'/restaurant/register',
    name: 'restaurant-register',
    component: () => import('@/views/restaurantViews/RegisterView.vue')
  },
  {
    path:'/restaurant/login',
    name: 'restaurant-login',
    component: () => import('@/views/restaurantViews/LoginView.vue')
  },
  {
    path:'/create-restaurant',
    name: 'create-restaurant',
    component: () => import('@/views/restaurantViews/CreateRestaurantView.vue')
  },
  {
    path:'/restaurants-list',
    name: 'restaurants-list',
    component: () => import('@/views/restaurantViews/RestaurantsView.vue')
  },
  {
    path:'/client',
    name: 'client-home',
    component: () => import('@/views/clientViews/ClientHomeView.vue')
  },
  {
    path:'/restaurant',
    name: 'restaurant-home',
    component: () => import('@/views/restaurantViews/RestaurantHomeView.vue')
  },
  {
    path:'/restaurant/:id',
    name: 'restaurant-view',
    component: () => import('@/views/restaurantViews/RestaurantView.vue')
  },
  {
    path:'/delivery',
    name: 'delivery-home',
    component: () => import('@/views/deliveryViews/DeliveryHomeView.vue')
  },
  {
    path:'/shop',
    name: 'shop',
    component: shop
  },
  {
    path: '/delivery/register',
    name: '/delivery-register',
    component: () => import('@/views/deliveryViews/RegisterView.vue')
  },
  {
    path:'/orders',
    name: 'orders',
    component: () => import('@/views/orderView/OrderView.vue')
  },
  {
    path: '/my-account',
    name: 'myAccount',
    component: () => import('../views/UserAccountView.vue')
  },
  {
    path: '/my-cart',
    name: 'myCart',
    component: () => import('../views/clientViews/CartView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
