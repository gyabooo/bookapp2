<template lang="pug">
  a-row(type="flex" :gutter="16").m-booklist
    Book(v-for="book in books" :key="book.id" :book="book").m-booklist__books
</template>

<script>
import Book from '@/components/molecules/Book'

export default {
  components: {
    Book
  },
  props: {
    books: {
      type: Object,
      default: Object
    }
  }
}
</script>

<style lang="scss" scoped>
.m-booklist {
  &__books {
    margin-bottom: 20px;
  }
}
</style>
