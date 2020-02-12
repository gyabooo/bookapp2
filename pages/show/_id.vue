<template lang="pug">
  section.p-show
    a-layout-content.p-show__return
      nuxt-link(to='/').p-show__returnBtn 戻る
    a-layout-header.c-heading.p-show__header
      h1.p-show__title 本の詳細
    a-layout-content.c-container.p-show__contents
      a-row(type="flex" justify="center" :gutter="16")
        a-col(:xs="24" :sm="24" :md="12" :lg="12" :xl="12").p-show__col
          h2.p-show__bookTitle {{ title }}
          h4.p-show__bookSubtitle {{ subtitle }}
          p.p-show__author 著者：{{ author }}
        a-col(:xs="24" :sm="24" :md="12" :lg="12" :xl="12").p-show__col
          a(:href="link" target="_blank")
            BookImage(:book="book")
        a-col(:xs="24" :sm="24" :md="12" :lg="12" :xl="12").p-show__col
          h2.p-show__info 情報
          hr
          div.p-show__infoArea
            div.p-show__infoRow
              span ISBN13
              span {{ isbn13 }}
            div.p-show__infoRow
              span ISBN10
              span {{ isbn10 }}
            div.p-show__infoRow
              span その他
              span {{ otherIdent }}
            div.p-show__infoRow
              span 出版社
              span {{ publisher }}
            div.p-show__infoRow
              span 半型
              span {{ printType }}
            div.p-show__infoRow
              span ページ数
              span {{ pageCount }}
            div.p-show__infoRow
              span 定価
              span {{ listPrice }}
            div.p-show__infoRow
              span 発行日
              span {{ publishedDate }}
        a-col(:xs="24" :sm="24" :md="12" :lg="12" :xl="6").p-show__col
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
      return this.$store.state.books.items.filter(function(item) {
        if (item.id === this.$route.params.id) return true
      }, this)[0]
    },
    volumeInfo() {
      return this.book.volumeInfo
    },
    title() {
      return this.volumeInfo.title
    },
    subtitle() {
      return this.volumeInfo.subtitle ? this.book.volumeInfo.subtitle : ''
    },
    author() {
      return this.volumeInfo.authors
        ? this.volumeInfo.authors.join(', ')
        : 'なし'
    },
    link() {
      return this.volumeInfo.infoLink
    },
    publisher() {
      return this.volumeInfo.publisher ? this.volumeInfo.publisher : '不明'
    },
    printType() {
      return this.volumeInfo.printType ? this.volumeInfo.printType : '不明'
    },
    isbn13() {
      const isbns = this.volumeInfo.industryIdentifiers.find(
        (item) => item.type === 'ISBN_13'
      )
      return isbns ? isbns.identifier : 'なし'
    },
    isbn10() {
      const isbns = this.volumeInfo.industryIdentifiers.find(
        (item) => item.type === 'ISBN_10'
      )
      return isbns ? isbns.identifier : 'なし'
    },
    otherIdent() {
      const isbns = this.volumeInfo.industryIdentifiers.find(
        (item) => item.type === 'OTHER'
      )
      return isbns ? isbns.identifier : 'なし'
    },
    pageCount() {
      return this.volumeInfo.pageCount ? this.volumeInfo.pageCount : '不明'
    },
    listPrice() {
      return this.book.saleInfo.listPrice
        ? this.book.saleInfo.listPrice.amount + '円'
        : '不明'
    },
    publishedDate() {
      return this.volumeInfo.publishedDate
        ? this.volumeInfo.publishedDate
        : '不明'
    }
  }
}
</script>

<style lang="scss" scoped>
.p-show {
  &__return {
    text-align: center;
  }
  &__contents {
    padding: 0 20px;
  }
  &__col {
    margin-bottom: 20px;
    @include desktop {
      width: 50%;
    }
  }
  &__info {
    &Row {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
