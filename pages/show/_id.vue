<template lang="pug">
  section.p-show
    SearchBook(:url="url")
    a-layout-header.c-heading.p-show__header
      h1.p-show__title 本の詳細
    p {{ book }}
</template>

<script>
import SearchBook from '@/components/molecules/SearchBook'

export default {
  components: {
    SearchBook
  },
  data() {
    return {
      url: '/.netlify/functions/search?title=',
      author: this.book.elements.filter(function(el) {
        if (el.name === 'author') return true
      })[0].elements[0].text,
      book: this.$store.state.books.list[this.$route.params.id]
    }
  }
}
</script>

<style lang="scss" scoped>
.p-show {
}
</style>
