import Vue from 'vue'


// libaray
import VueCookie from 'vue-cookie'
import {
  Select,
  Option,
  Upload,
  InfiniteScroll,
  Dialog
} from 'element-ui';
import lang from 'element-ui/lib/locale/lang/ko'
import locale from 'element-ui/lib/locale'
import 'element-ui/lib/theme-chalk/index.css';
// configure language
locale.use(lang)
// import components
Vue.use(InfiniteScroll);
Vue.use(VueCookie);
Vue.component(Select.name, Select)
Vue.component(Dialog.name, Dialog)
Vue.component(Option.name, Option)
Vue.component(Upload.name, Upload)
import 'vue-glide-js/dist/vue-glide.css'

// my global components
import BaseButton from '@/components/Button/BaseButton.vue'
import BaseSelect from '@/components/Select/BaseSelect.vue'
Vue.component('base-button', BaseButton)
Vue.component('base-select', BaseSelect)