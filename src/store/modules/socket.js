const state = {
  socketOpen: false,
  message: []
}

const mutations = {
  SET_SOCKET_OPEN: (state, socketOpen) => {
    state.socketOpen = socketOpen
  },

  SET_MESSAGE: (state, message) => {
    state.message.push(message)
  },

  CLEAR_MESSAGE: (state) => {
    state.message = []
  }
}

const actions = {
  connect ({ commit, dispatch }) {
    return new Promise((resolve, reject) => {
      commit('SET_SOCKET_OPEN', true)
      wx.connectSocket({
        url: process.env.SOCKET_API,
        success () {
          dispatch('message')
          resolve()
        },
        fail (err) {
          dispatch('error')
          reject(err)
        }
      })
    })
  },

  message ({ commit }) {
    wx.onSocketMessage(function (res) {
      debugger
      commit('SET_MESSAGE', res.data)
    })
  },

  error ({ dispatch }) {
    wx.onSocketError(function (res) {
      dispatch('close')
    })
  },

  close ({ commit }) {
    wx.onSocketClose(function () {
      commit('CLEAR_MESSAGE')
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
