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
      component: () => import( /* webpackChunkName: "Category" */ './views/Category.vue'),
      props: {
        nextPage: 'signup'
      }
    },
    {
      path: '/category/post',
      name: 'category_post',
      component: () => import( /* webpackChunkName: "Category" */ './views/Category.vue'),
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
      path: '/user',
      component: () => import( /* webpakcChunkName: "User" */ './views/User.vue'),
      children: [{
        path: '/',
        name: 'userPosts',
        component: createUserPosts('UserPostList'),
        props: {
          'url': 'http://www.kbsecuritynews.com/imgdata/kbsecuritynews_com/201904/2019041740338784.jpg'
        }
      }, {
        path: 'likes',
        name: 'userLikes',
        component: createUserPosts('UserLikeList'),
        props: {
          'url': 'https://pds.joins.com/news/component/newsis/201710/31/NISI20171031_0000061276_web.jpg'
        }
      }]
    }
  ]
})
export default router