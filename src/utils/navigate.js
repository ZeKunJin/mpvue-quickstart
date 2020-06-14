import Vue from 'vue'
import store from '@/store'
import { TABS, WHITE_LIST, AUTH_LIST } from '@/config'

const navigate = (path, query = {}, reLaunch = false) => {
  Vue.prototype.$router.push({
    path,
    query,
    isTab: TABS.join(',').indexOf(path) > -1,
    reLaunch
  })
}

export default {
  to (path, query = {}, reLaunch = false) {
    const [page] = path.split('?')
    if (store.getters.token || !AUTH_LIST.includes(page)) {
      navigate(path, query, reLaunch)
    } else {
      navigate('/pages/login/index')
    }
  },

  back (n = 1) {
    Vue.prototype.$router.go(n)
  }
}
