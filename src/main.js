import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import {
  Select,
  Option
} from 'element-ui';
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
import '@/assets/css/index.scss'
// configure language
locale.use(lang)

// import components
Vue.component(Select.name, Select)
Vue.component(Option.name, Option)

import TheButton from './components/Button/BaseButton'
Vue.component('the-button', TheButton)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')