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
      path: '/search',
      name: 'search',
      component:()=> import(/* webpackChunkName: "Search" */ './views/Search.vue')
    }
  ]
})