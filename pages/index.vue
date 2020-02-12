<template lang="pug">
  section.p-contents
    SearchBook(:url="url")
    a-layout-header.c-heading.p-result
      h1.p-result__title 検索結果
    BookList(:books="books").p-result__books
</template>

<script>
import SearchBook from '@/components/organisms/SearchBook'
import BookList from '@/components/molecules/BookList'

export default {
  components: {
    SearchBook,
    BookList
  },
  data() {
    return {
      url: 'https://www.googleapis.com/books/v1/volumes'
    }
  },
  computed: {
    books() {
      return this.$store.state.books.items
    }
  },
  created() {
    console.log('Index created')
  },
  mounted() {
    console.log('Index mounted')
  },
  destroyed() {
    console.log('Index desttoyed')
  }
}
</script>

<style lang="scss" scoped>
.p-result {
}
.p-link {
}
</style>
