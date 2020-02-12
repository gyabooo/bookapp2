export const state = () => ({
  items: [],
  totalItems: 0,
  keyword: ''
})

export const mutations = {
  setItems(state, items) {
    state.items = items
  },
  setTotalItems(state, totalItems) {
    state.totalItems = totalItems
  },
  setKeyword(state, keyword) {
    state.keyword = keyword
  },
  reset(state) {
    state.items.splice(0, state.items.length)
    state.totalItems = 0
    state.keyword = ''
  }
}
