<template lang="pug">
  a-layout.l-default
    a-layout-header.c-heading
      Header
    a-layout-content
      nuxt
    a-layout-footer.c-footing
      Footer
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss" scoped>
.l-default {
  min-height: 100vh;
  background-color: white;
}
</style>
