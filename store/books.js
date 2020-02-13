export const state = () => ({
  items: [],
  totalItems: 0
})

export const getters = {
  items(state) {
    return state.items
  },
  totalItems(state) {
    return state.totalItems
  }
}

export const mutations = {
  setItems(state, items) {
    state.items = items
  },
  setTotalItems(state, totalItems) {
    state.totalItems = totalItems
  },
  destroy(state) {
    state.items.splice(0, state.items.length)
    state.totalItems = 0
    state.keyword = ''
  }
}

export const actions = {
  setItems({ commit }, items) {
    commit('setItems', items)
  },
  setTotalItems({ commit }, totalItems) {
    commit('setTotalItems', totalItems)
  },
  destroy({ commit }) {
    commit('destroy')
  }
}
