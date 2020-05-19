import Vue from 'vue'
import store from '@/store'

const tabs = [
  '/pages/home/index',
  '/pages/require/index',
  '/pages/mine/index'
]

const whiteList = [
  '/pages/home/index',
  '/pages/home/ad/index',
  '/pages/require/index',
  '/pages/mine/index',
  '/pages/register/index',
  '/pages/register/agreement/index',
  '/pages/require/detail/index',
  '/pages/mine/help/index'
]

const navigate = (path, query = {}, reLaunch = false) => {
  Vue.prototype.$router.push({
    path,
    query,
    isTab: tabs.join(',').indexOf(path) > -1,
    reLaunch
  })
}

export default {
  to (path, query = {}, reLaunch = false) {
    if (store.getters.token || whiteList.join(',').indexOf(path.split('?')[0]) > -1) {
      navigate(path, query, reLaunch)
    } else {
      navigate('/pages/login/index')
    }
  },

  back (n = 1) {
    Vue.prototype.$router.go(n)
  }
}
