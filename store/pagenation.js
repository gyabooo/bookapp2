export const state = () => ({
  current: 1,
  maxResults: 10
})

export const getters = {
  current(state) {
    return state.current
  },
  maxResults(state) {
    return state.maxResults
  }
}

export const mutations = {
  setCurrent(state, current) {
    state.current = current
  },
  setMaxResults(state, maxResults) {
    state.maxResults = maxResults
  },
  destroy(state) {
    state.current = 0
    state.pageSize = 10
  }
}

export const actions = {
  setCurrent({ commit }, current) {
    commit('setCurrent', current)
  },
  setMaxResults({ commit }, maxResults) {
    commit('setMaxResults', maxResults)
  },
  destroy({ commit }) {
    commit('destroy')
  }
}
