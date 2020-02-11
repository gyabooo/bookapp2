export const state = () => ({
  items: [],
  totalItems: 0
})

export const mutations = {
  setItems(state, items) {
    state.items = items
  },
  setTotalItems(state, totalItems) {
    state.totalItems = totalItems
  },
  reset(state) {
    state.items.splice(0, state.items.length)
    state.totalItems = 0
  }
}
