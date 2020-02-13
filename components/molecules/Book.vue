<template lang="pug">
    a-col(:xs="24" :sm="24" :md="12" :lg="12" :xl="6").a-book
      a-card(:title="title").a-book__card
        nuxt-link(:to="link").a-book__link
          BookImage(:book="book")
</template>

<script>
import BookImage from '@/components/atoms/BookImage'
const noImagePath = '/images/no-image.png'

export default {
  components: {
    BookImage
  },
  props: {
    book: {
      type: Object,
      default: Object
    }
  },
  computed: {
    title() {
      return this.book.volumeInfo.title
    },
    link() {
      return `/show/${this.book.id}`
    },
    image() {
      return this.book.volumeInfo.imageLinks
        ? this.book.volumeInfo.imageLinks.thumbnail
        : noImagePath
    }
  }
}
</script>

<style lang="scss" scoped>
.a-book {
  text-align: center;
  &__card {
    min-height: 300px;
  }
}
</style>
