import Vue from 'vue'
import Vuex from 'vuex'
import cookie from 'vue-cookie'
import axios from './utility/axios'
import jwtDecoder from 'jwt-decode'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    jwt: null,
    isAuth: false
  },
  getters: {
    getAuth(state) {
      return state.isAuth
    },
    getUsername(state) {
      const ret = jwtDecoder(state.jwt)
      console.log(ret.username)
      return ret.username;
    }
  },
  mutations: {
    setJwt(state, payload) {
      cookie.set('jwt', payload)
      state.jwt = payload
    },
    setAuth(state, payload) {
      state.auth = payload
    }
  },
  actions: {
    asynGetAuth({
      commit
    }) {
      commit('setJwt', cookie.get('jwt'));
    },
    asyncVerifyJwt({
      state,
      commit
    }) {
      console.log(state.jwt)
      axios.post('/jwt/verify/', {
        token: state.jwt
      }).then((res) => {
        commit('setAuth', true)
        commit('setJwt', res.data.token)
      }).catch(err => console.log(err))
    }
  }
})