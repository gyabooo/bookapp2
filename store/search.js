export const state = () => ({
  keyword: '',
  infoText: '検索してください',
  isSearched: false,
  isSearching: false
})

export const getters = {
  isSearched(state) {
    return state.isSearched
  },
  keyword(state) {
    return state.keyword
  },
  infoText(state) {
    return state.infoText
  },
  isSearching(state) {
    return state.isSearching
  }
}

export const mutations = {
  setKeyword(state, keyword) {
    state.keyword = keyword
  },
  enableSearched(state) {
    state.isSearched = true
  },
  disableSearched(state) {
    state.isSearched = false
  },
  enableSearching(state) {
    state.isSearching = true
    state.infoText = '検索中'
  },
  disableSearching(state) {
    state.isSearching = false
    state.infoText = '検索してください'
  },
  setInfoText(state, text) {
    state.infoText = text
  },
  destroy(state) {
    state.keyword = ''
    state.infoText = '検索してください'
    state.isSearched = false
  }
}
