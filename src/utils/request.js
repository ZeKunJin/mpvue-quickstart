import Fly from 'flyio/dist/npm/wx'
import store from '@/store'
import { API_CODE } from '@/config'

const fly = new Fly()

fly.interceptors.request.use(request => {
  request.headers['AUTH-TOKEN'] = store.getters.token
  return request
})

fly.interceptors.response.use(
  (response, promise) => {
    return promise.resolve(response.data)
  },

  (err, promise) => {
    console.log(err)
    const code = 500

    console.log(API_CODE[code])

    return promise.reject()
  }
)

export default fly
