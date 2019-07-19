import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// component: () => import(/* webpackChunkName: "about" */ './views/About.vue')

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
  ]
})
