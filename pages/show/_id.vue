<template lang="pug">
  section.p-show
    SearchBook(:url="url")
    a-layout-header.c-heading.p-show__header
      h1.p-show__title 本の詳細
    
</template>

<script>
import SearchBook from '@/components/molecules/SearchBook'

export default {
  components: {
    SearchBook
  },
  data() {
    return {
      url: '/.netlify/functions/search?title='
    }
  }
}
</script>

<style lang="scss" scoped>
.p-show {
}
</style>
