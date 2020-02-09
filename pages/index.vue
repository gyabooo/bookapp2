<template lang="pug">
  section.p-contents
    SearchBook(:url="url")
    a-layout-header.c-heading
      h1.p-result__title 検索結果
    Book(v-for="book in books" :key="book.id" :book="book")
</template>

<script>
import SearchBook from '@/components/molecules/SearchBook'
import Book from '@/components/molecules/Book'

export default {
  components: {
    SearchBook,
    Book
  },
  data: () => {
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

<style lang="scss" scoped></style>
