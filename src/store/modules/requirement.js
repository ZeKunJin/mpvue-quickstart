const state = {
  id: '',
  title: '',
  desc: ''
}

const mutations = {
  SET_ID: (state, id) => {
    state.id = id
  },

  SET_TITLE: (state, title) => {
    state.title = title
  },

  SET_DESC: (state, desc) => {
    state.desc = desc
  }
}

const actions = {
  setRequirement ({ commit }, info) {
    commit('SET_ID', info.id || '')
    commit('SET_TITLE', info.title || '')
    commit('SET_DESC', info.presentDescription || '')
  },

  remove ({ commit }) {
    commit('SET_ID', '')
    commit('SET_TITLE', '')
    commit('SET_DESC', '')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
