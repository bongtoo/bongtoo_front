import Vue from 'vue'

import {
  Select,
  Option
} from 'element-ui';
import lang from 'element-ui/lib/locale/lang/ko'
import locale from 'element-ui/lib/locale'
import 'element-ui/lib/theme-chalk/index.css';
// configure language
locale.use(lang)

// import components
Vue.component(Select.name, Select)
Vue.component(Option.name, Option)

// my global components
import BaseButton from '@/components/Button/BaseButton.vue'
import BaseSelect from '@/components/Select/BaseSelect.vue'
Vue.component('base-button', BaseButton)
Vue.component('base-select', BaseSelect)