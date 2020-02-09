<template lang="pug">
  section
    router-link(to='/').o-header__link
      font-awesome-icon(:icon="['fas', 'book-open']").o-header__icon
      h1.o-header__title とある本検索サイト
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.o-header {
  &__link {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    padding: 0 auto;
  }
  &__icon {
    width: 34px;
    height: 26px;
  }
}
</style>
