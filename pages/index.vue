<template lang="pug">
  section.p-contents
    SearchBook(:url="url")
    a-layout-header.c-heading
      h1.p-result__title 検索結果
</template>

<script>
// import { mapMutations } from 'vuex'
import SearchBook from '@/components/molecules/SearchBook'
// import Book from '@/components/molecules/Book'

export default {
  components: {
    SearchBook
  },
  data: () => {
    return {
      url: '/.netlify/functions/search?title='
    }
  },
  computed: {}
}
</script>

<style lang="scss" scoped>
.p-result {
}
</style>
