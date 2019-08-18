import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

Vue.use(Router)
import Home from './views/Home'
import createUserPosts from './components/User/CreateUserPosts.js'


const router = new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/signin',
      name: 'signin',
      component: () => import( /* webpackChunkName: "Signin" */ './views/Signin.vue')
    }, {
      path: '/signup',
      name: 'signup',
      component: () => import( /* webpackChunkName: "Signup" */ './views/Signup.vue')
    },
    {
      path: '/category/signup',
      name: 'category_signup',
      component: () => import( /* webpackChunkName: "CategorySignup" */ './views/Category.vue'),
      props: {
        nextPage: 'signup'
      }
    },
    {
      path: '/category/post',
      name: 'category_post',
      component: () => import( /* webpackChunkName: "CategoryPost" */ './views/Category.vue'),
      props: {
        nextPage: 'post'
      }
    },
    {
      path: '/post',
      name: 'post',
      component: () => import( /* webpackChunkName: "Post" */ './views/Post')
    },
    {
      path: '/search',
      name: 'search',
      mode: 'hash',
      component: () => import( /* webpackChunkName: "Search" */ './views/Search')
    },
    {
      path: '/user/:userId',
      component: () => import( /* webpakcChunkName: "User" */ './views/User.vue'),
      children: [{
        path: '',
        name: 'userPosts',
        component: createUserPosts('UserPostList', 'reviews')
      }, {
        path: 'likes',
        name: 'userLikes',
        component: createUserPosts('UserLikeList', 'likes')
      }]
    }
  ]
})
export default router