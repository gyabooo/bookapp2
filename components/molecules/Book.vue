<template lang="pug">
  transition
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
  props: ['book'],
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
  // created() {
  //   const isbn = this.book.elements.filter(function(el) {
  //     if (
  //       el.name === 'dc:identifier' &&
  //       el.attributes['xsi:type'] === 'dcndl:ISBN'
  //     )
  //       return true
  //   })

  //   if (isbn.length === 0) {
  //     this.image = noImagePath
  //     return true
  //   }

  //   axios
  //     .get(path + isbn[0].elements[0].text)
  //     .then((res) => {
  //       this.image = url + isbn[0].elements[0].text
  //     })
  //     .catch((e) => {
  //       this.image = noImagePath
  //     })
  // }
}
</script>

<style lang="scss" scoped>
.a-book {
  text-align: center;
  &__card {
    min-height: 300px;
  }
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s;
}
.v-enter,
.v-leave-to {
  opacity: 0;
}
</style>
