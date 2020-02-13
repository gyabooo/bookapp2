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

export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.default {
  min-height: 100vh;
  background-color: $site_bgColor;
}
</style>
