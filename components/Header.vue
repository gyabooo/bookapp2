<template lang="pug">
  section.p-header
    font-awesome-icon(:icon="['fas', 'book-open']").p-header__icon
    h1.p-header__title とある本検索サイト
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.p-header {
  display: flex;
  align-items: center;
  justify-content: center;
  &__icon {
    width: 34px;
    height: 26px;
  }
}
</style>
