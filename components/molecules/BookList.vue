<template lang="pug">
  a-row(:gutter="16").m-booklist
    Book(v-for="book in books" :key="book.id" :book="book").m-booklist__books
</template>

<script>
import Book from '@/components/atoms/Book'

export default {
  components: {
    Book
  },
  props: ['books'],
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.m-booklist {
}
</style>
