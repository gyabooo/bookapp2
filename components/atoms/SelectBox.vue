<template lang="pug">
  div
    a-select(:defaultValue="defaultValue" @change="handleChange").a-select__contents
      a-select-option(v-for="value in values" :key="value.id" :value="value") {{ value }}
</template>

<script>
export default {
  props: {
    values: {
      type: Array,
      default() {
        return [10, 20, 30, 40]
      }
    },
    defaultValue: {
      type: Number,
      default: 0
    }
  },
  methods: {
    handleChange(value) {
      this.$emit('selectbox-changed', value)
    }
  }
}
</script>

<style lang="scss" scoped>
.a-select {
  &__contents {
    @include desktop {
      width: 50%;
    }
  }
}
</style>
