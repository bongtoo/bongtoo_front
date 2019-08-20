import Vue from 'vue'
import Vuex from 'vuex'
import cookie from 'vue-cookie'
import axios from './utility/axios'
import jwtDecoder from 'jwt-decode'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    jwt: false,
    isAuth: false,
    subject: false,
    activity: false,
    post: false,
    comments: false
  },
  getters: {
    getAuth(state) {
      return state.isAuth;
    },
    getJwt(state) {
      return state.jwt;
    },
    getPost(state) {
      return state.post
    },
    getComments(state) {
      return state.comments
    },
    getUsername(state) {
      if (state.jwt) {
        const ret = jwtDecoder(state.jwt)
        return ret.username;
      } else {
        return false;
      }
    },
    getMyId(state) {
      if (state.jwt) {
        const ret = jwtDecoder(state.jwt)
        return ret.user_id;
      } else {
        return false;
      }
    },
    getCategory(state) {
      if (state.subject || state.activity) {
        return {
          subject: state.subject,
          activity: state.activity
        }
      }
      return false
    },
    getSubject(state) {
      return state.subject
    },
    getActivity(state) {
      return state.activity
    }
  },
  mutations: {
    setJwt(state, payload) {
      cookie.set('jwt', payload)
      state.jwt = payload
    },
    setAuth(state, payload) {
      state.isAuth = payload
    },
    setCategory(state, {
      activity,
      subject
    }) {
      state.activity = activity
      state.subject = subject
    },
    setPost(state, payload) {
      state.post = payload
    },
    setComments(state, payload) {
      state.comments = payload
    }
  },
  actions: {
    asynGetAuth({
      commit
    }) {
      const jwt = cookie.get('jwt')
      if (jwt && jwt !== "null") {
        console.log('not null asyncGetAuth', jwt)
        commit('setJwt', jwt);
        commit('setAuth', true)
      } else {
        console.log('jwt :', jwt)
      }
    },
    // jwt를 확인한다.
    asyncVerifyJwt({
      state,
      commit
    }) {
      if (state.jwt) {
        console.log(state.jwt)
        axios.post('/jwt/verify/', {
          token: state.jwt
        }).then((res) => {
          commit('setAuth', true)
          commit('setJwt', res.data.token)
        }).catch(err => console.log(err))
      } else {
        console.log('jwt :', state.jwt)
      }
    }
  }
})