import { getToken, setToken, removeToken } from '@/utils/auth'
import { login, info } from '@/api/user'
import { openid } from '@/api/common'

const state = {
  token: getToken() || '',
  id: '',
  name: '',
  phone: '',
  openid: ''
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },

  SET_ID: (state, id) => {
    state.id = id
  },

  SET_NAME: (state, name) => {
    state.name = name
  },

  SET_PHONE: (state, phone) => {
    state.phone = phone
  },

  SET_OPENID: (state, openid) => {
    state.openid = openid
  }
}

const actions = {
  login ({ commit, dispatch }, LoginForm) {
    return new Promise((resolve, reject) => {
      login(LoginForm).then(res => {
        const data = res.data
        setToken(data.token)
        commit('SET_TOKEN', data.token)
        dispatch('getInfo')
        resolve()
      }).catch(err => {
        reject(err)
      })
    })
  },

  getInfo ({ commit, dispatch }) {
    return new Promise(resolve => {
      info().then(res => {
        const data = res.data
        commit('SET_ID', data.id)
        commit('SET_NAME', data.name)
        commit('SET_PHONE', data.phone)

        if (!data.openId) {
          dispatch('getOpenId')
        }

        resolve()
      })
    })
  },

  getOpenId () {
    wx.login({
      async success (res) {
        if (res.code) {
          await openid({ code: res.code })
        }
      }
    })
  },

  logout ({ commit }) {
    return new Promise((resolve) => {
      removeToken()

      commit('SET_TOKEN', '')
      commit('SET_ID', '')
      commit('SET_NAME', '')
      commit('SET_PHONE', '')
      resolve()
    }).catch(err => {
      console.log(err)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
