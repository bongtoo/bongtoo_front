import Vue from 'vue'
import Vuex from 'vuex'
import cookie from 'vue-cookie'
import axios from './utility/axios'
import jwtDecoder from 'jwt-decode'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    jwt: false,
    isAuth: false
  },
  getters: {
    getAuth(state) {
      return state.isAuth;
    },
    getJwt(state) {
      return state.jwt;
    },
    getUsername(state) {
      if (state.jwt) {
        console.log('getAuth', state.jwt)
        const ret = jwtDecoder(state.jwt)
        console.log(ret.username)
        return ret.username;
      } else {
        return false;
      }

    }
  },
  mutations: {
    setJwt(state, payload) {
      cookie.set('jwt', payload)
      state.jwt = payload
    },
    setAuth(state, payload) {
      state.isAuth = payload
    }
  },
  actions: {
    asynGetAuth({
      commit
    }) {
      const jwt = cookie.get('jwt')
      if (jwt !== "null") {
        console.log(typeof (jwt))
        console.log('not null asyncGetAuth', jwt)
        commit('setJwt', jwt);
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