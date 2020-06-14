import Vue from 'vue'
import App from './App'
import MpvueRouterPatch from 'mpvue-router-patch'
import request from './utils/request'
import store from '@/store'
import navigate from '@/utils/navigate'

Vue.use(MpvueRouterPatch)

Vue.prototype.$fly = request
Vue.prototype.$navigate = navigate

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
  store,
  ...App
})
app.$mount()
