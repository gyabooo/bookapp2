<template lang="pug">
  img(:src="image" alt="画像").a-book__image
</template>

<script>
const noImagePath = '/images/no-image.png'

export default {
  props: ['book'],
  computed: {
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
