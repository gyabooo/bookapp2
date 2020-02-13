<template lang="pug">
  section.p-contents
    SearchBook(:url="url")
    a-layout-header.c-heading.p-result
      h1.p-result__title 検索結果
    BookList(:books="items").p-result__books
    Pagenation(v-show="isSearched" :totalItems="totalItems" :current="current" :maxResults="maxResults" @pagenation-changed="pagenationChanged")
</template>

<script>
import SearchBook from '@/components/organisms/SearchBook'
import BookList from '@/components/molecules/BookList'
import Pagenation from '@/components/molecules/Pagenation'
import { mapGetters, mapActions } from 'vuex'

const axios = require('axios')

export default {
  components: {
    SearchBook,
    BookList,
    Pagenation
  },
  data() {
    return {
      url: 'https://www.googleapis.com/books/v1/volumes'
    }
  },
  computed: {
    ...mapGetters('books', ['items', 'totalItems']),
    ...mapGetters('pagenation', ['current', 'maxResults']),
    ...mapGetters('search', ['keyword', 'isSearched'])
  },
  methods: {
    ...mapActions('pagenation', {
      setCurrent: 'setCurrent'
    }),
    ...mapActions('books', {
      setItems: 'setItems',
      setTotalItems: 'setTotalItems',
      booksDestroy: 'destroy'
    }),
    pagenationChanged(e) {
      this.setCurrent(e)

      const calcStartIndex =
        this.current > 0 ? (this.current - 1) * this.maxResults + 1 : 0

      const p = {
        q: this.keyword,
        Country: 'JP',
        maxResults: this.maxResults,
        startIndex: calcStartIndex
      }

      axios
        .get(this.url, { params: p })
        .then((res) => {
          this.setItems(res.data.items)
          this.setTotalItems(res.data.totalItems)
        })
        .catch((e) => {
          this.error = e.message
        })
        .finally(() => {})
    }
  }
}
</script>

<style lang="scss" scoped>
.p-result {
}
.p-link {
}
</style>
