<template lang="pug">
  section.p-contents
    SearchBox
    a-layout-header.c-heading
      h1.p-result__title 検索結果
    div.p-result__info
      font-awesome-icon(:icon="['fas', 'info-circle']").p-result__icon
      span.p-result__text {{resultText}}
</template>

<script>
import SearchBox from '@/components/SearchBox'

export default {
  components: {
    SearchBox
  },
  data: () => {
    return {
      resultText: '検索してください'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/common.scss';
.p-result {
  &__info {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__icon {
    color: $site_color;
    width: 28px;
    height: 28px;
    margin-right: 5px;
  }
  &__text {
    font-size: 18px;
  }
}
</style>
