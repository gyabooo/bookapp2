<template lang="pug">
  section.o-footer.c-container
    span.o-footer__text Created by <br>パインブック
    span.o-footer__twitter
      a(href="https://twitter.com/seita_matsumoto?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-size="large" data-show-screen-name="false" data-lang="ja" data-show-count="false")
      script(async src="https://platform.twitter.com/widgets.js" charset="utf-8")
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.o-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 6px;
  @include desktop {
    font-size: 18px;
  }
  &__twitter {
    height: 28px;
  }
}
</style>
