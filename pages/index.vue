<template lang="pug">
  section.p-contents
    SearchBook(:url="url")
    a-layout-header.c-heading.p-result
      h1.p-result__title 検索結果
    BookList(:books="books").p-result__books
</template>

<script>
import SearchBook from '@/components/molecules/SearchBook'
import BookList from '@/components/molecules/BookList'

export default {
  components: {
    SearchBook,
    BookList
  },
  data() {
    return {
      url: '/.netlify/functions/search?title='
    }
  },
  computed: {
    books() {
      return this.$store.state.books.list
    }
  }
}
</script>

<style lang="scss" scoped>
.p-result {
  &__books {
  }
}
</style>
