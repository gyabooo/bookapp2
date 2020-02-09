<template lang="pug">
  section.o-header
    router-link(to='/')
    font-awesome-icon(:icon="['fas', 'book-open']").o-header__icon
    h1.o-header__title とある本検索サイト
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.o-header {
  display: flex;
  align-items: center;
  justify-content: center;
  &__icon {
    width: 34px;
    height: 26px;
  }
}
</style>
