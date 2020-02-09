<template lang="pug">
  section.p-contents
    SearchBox(:url="url")
    a-layout-header.c-heading
      h1.p-result__title 検索結果
    div.p-result__info.c-container
      font-awesome-icon(:icon="['fas', 'info-circle']").p-result__icon
      span.p-result__text {{resultText}}
</template>

<script>
import SearchBox from '@/components/molecules/SearchBox'

// const axios = require('axios')
// const path = '/.netlify/functions/search?title='
// const url = '/.netlify/functions/search?title='

export default {
  components: {
    SearchBox
  },
  data: () => {
    return {
      url: '/.netlify/functions/search?title=',
      resultText: '検索してください'
    }
  }
}
</script>

<style lang="scss" scoped>
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
