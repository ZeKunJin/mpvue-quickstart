import Vue from 'vue'
import App from './App'
import MpvueRouterPatch from 'mpvue-router-patch'
import request from './utils/request'
import store from '@/store'
import navigate from '@/utils/navigate'
import { validate } from '@/utils/validate'

import Dialog from '../static/vant/dialog/dialog'

Vue.use(MpvueRouterPatch)

Vue.prototype.$fly = request
Vue.prototype.$dialog = Dialog
Vue.prototype.$navigate = navigate
Vue.prototype.$validate = validate

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
  store,
  ...App
})
app.$mount()
