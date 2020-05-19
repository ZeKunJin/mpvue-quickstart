import { msgRequirement } from '@/api/require'

const state = {
  notice: []
}

const mutations = {
  SET_NOTICE: (state, notice) => {
    state.notice = notice
  }
}

const actions = {
  setNotice ({ commit }) {
    return new Promise(async resolve => {
      const res = await msgRequirement({
        page: 1,
        limit: 10
      })
      commit('SET_NOTICE', res.data.rows)
      resolve(res.data.row)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
