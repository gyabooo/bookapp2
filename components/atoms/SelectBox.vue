<template lang="pug">
  div
    a-select(:defaultValue="values[0]" @change="handleChange").a-select__contents
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
    }
  },
  methods: {
    handleChange(value) {
      console.log(`selected ${value}`)
      this.$emit('selectbox-changed', value)
    }
  },
  mounted() {
    this.$emit('selectbox-changed', this.values[0])
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
