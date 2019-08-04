import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Home from './views/Home'
import Search from './views/Search'


export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/category',
      name: 'category',
      component: () => import( /* webpackChunkName: "Category" */ './views/Category.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import( /* webpackChunkName: "Search" */ './views/Search')
    },
    {
      path: '/user',
      name: 'user',
      component: () => import( /* webpakcChunkName: "User" */ './views/User.vue')
    }
  ]
})