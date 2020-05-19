import Fly from 'flyio/dist/npm/wx'
import store from '@/store'
import navigate from '@/utils/navigate'

const request = new Fly()

request.interceptors.request.use((request) => {
  request.headers['AUTH-TOKEN'] = store.getters.token
  wx.showNavigationBarLoading()
  return request
})

request.interceptors.response.use(
  (response, promise) => {
    wx.hideNavigationBarLoading()
    return promise.resolve(response.data)
  },
  async (err, promise) => {
    wx.hideNavigationBarLoading()

    const res = err.response.data
    const code = res.code

    if (code === 1502 || code === 1503) {
      await store.dispatch('user/logout')
      navigate.to('/pages/login/index')
    } else {
      wx.showToast({
        title: res.message,
        icon: 'none'
      })
    }

    return promise.reject()
  }
)

export default request
