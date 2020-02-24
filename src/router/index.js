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
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/detail',
    name: 'MovieDetail',
    component: () => import(/* webpackChunkName: "about" */ '../views/MovieDetail.vue')
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: () => import(/* webpackChunkName: "about" */ '../views/Checkout.vue')
  },
  {
    path: '/movielist',
    name: 'MovieList',
    component: () => import(/* webpackChunkName: "about" */ '../views/MovieList.vue')
  },
  {
    path: '/watchmovie',
    name: 'WatchMovie',
    component: () => import(/* webpackChunkName: "about" */ '../views/WatchMovie.vue')
  },
  {
    path: '/topup',
    name: 'TopUp',
    component: () => import(/* webpackChunkName: "about" */ '../views/TopUp.vue')
  },
  {
    path: '/review',
    name: 'Review',
    component: () => import(/* webpackChunkName: "about" */ '../views/Review.vue')
  },
  {
    path: '/genre',
    name: 'Genre',
    component: () => import(/* webpackChunkName: "about" */ '../views/Genre.vue')
  },
  {
    path: '/transaction',
    name: 'Transaction',
    component: () => import(/* webpackChunkName: "about" */ '../views/Transaction.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
