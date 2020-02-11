export const state = () => ({
  list: []
})

export const mutations = {
  set(state, list) {
    state.list = list
  },
  reset(state) {
    state.list.splice(0, state.list.length)
  }
}
