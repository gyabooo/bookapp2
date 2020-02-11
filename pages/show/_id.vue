<template lang="pug">
  section.p-show
    a-layout-header.c-heading.p-show__header
      h1.p-show__title 本の詳細
    a-layout-content.c-container.p-show__contents
      a-row(type="flex" :gutter="16")
        a-col(:xs="24" :sm="24" :md="12" :lg="12" :xl="6").a-book
          h2.p-show__bookTitle {{ title }}
          h4.p-show__bookSubtitle {{ subtitle }}
          p.p-show__author 著者：{{ author }}
        a-col(:xs="24" :sm="24" :md="12" :lg="12" :xl="6").a-book
          BookImage(:book="book")
        a-col(:xs="24" :sm="24" :md="12" :lg="12" :xl="6").a-book
          h2.p-show__info 情報
          hr
          div.p-show__infoArea
            div
              span ISBN
              span {{ isbn }}
            div
              span 出版社
              span 
            div
              span 半型
              span 
            div
              span ページ数
              span 
            div
              span 定価
              span 
            div
              span 発行日
              span
        a-col(:xs="24" :sm="24" :md="12" :lg="12" :xl="6").a-book
          h2.p-show__reviwer 評価
          hr
          div.p-show__reviwerArea
            div 準備中
</template>

<script>
import BookImage from '@/components/atoms/BookImage'

export default {
  components: {
    BookImage
  },
  computed: {
    book() {
      console.log(this.$store.state.books.items)
      console.log(this.$route.params.id)
      return this.$store.state.books.items.filter(function(item) {
        if (item.id === this.$route.params.id) return true
      }, this)[0]
    },
    books() {
      return this.$store.state.books.items
    },
    title() {
      return this.book.volumeInfo.title
    },
    subtitle() {
      return this.book.volumeInfo.subtitle ? this.book.volumeInfo.subtitle : ''
    },
    author() {
      console.log(this.book)
      return this.book.volumeInfo.authors
        ? this.book.volumeInfo.authors.join(', ')
        : 'なし'
    }
  }
}
</script>

<style lang="scss" scoped>
.p-show {
  &__contents {
    @include desktop {
    }
  }
}
</style>
