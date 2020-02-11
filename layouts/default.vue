<template lang="pug">
  a-layout.default
    a-layout-header.c-heading
      Header
    a-layout-content
      nuxt
    a-layout-footer.c-footing
      Footer
</template>

<script>
import Header from '@/components/organisms/Header'
import Footer from '@/components/organisms/Footer'
// import SearchBook from '@/components/organisms/SearchBook'

export default {
  components: {
    Header,
    Footer
    // SearchBook
  },
  data() {
    return {
      url: 'https://www.googleapis.com/books/v1/volumes?q='
    }
  }
}
</script>

<style lang="scss" scoped>
.default {
  min-height: 100vh;
  background-color: $site_bgColor;
}
</style>
