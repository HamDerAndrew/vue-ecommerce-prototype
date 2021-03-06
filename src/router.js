import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import RegisterPage from './views/RegisterPage.vue'
import Brand from './views/Brand.vue'
import ProductView from './views/ProductView.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    
    {
      path: '/registerpage',
      name: 'register',
      component: RegisterPage
    },

    {
      path: '/brand',
      name: 'brand',
      component: Brand
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/Brand.vue')
    },

    {
      path: '/productview/:id',
      name: 'productview',
      component: ProductView
    }
  ]
})
