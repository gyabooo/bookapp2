<template lang="pug">
  section.p-footer
    span.p-footer__text Created by seita_matsumoto
    span.p-footer__twitter
      a(href="https://twitter.com/seita_matsumoto?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-size="large" data-show-screen-name="false" data-lang="ja" data-show-count="false")
      script(async src="https://platform.twitter.com/widgets.js" charset="utf-8")
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.p-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  &__text {
    font-size: 18px;
  }
  &__twitter {
    height: 28px;
  }
}
</style>
