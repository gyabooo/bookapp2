<template lang="pug">
  div.m-pagination
    a-pagination(v-model="currentPage" :total="totalItems" :pageSize.sync="maxResults" @change="onChange")
</template>

<script>
export default {
  props: {
    totalItems: {
      type: Number,
      default: 10
    },
    current: {
      type: Number,
      default: 1
    },
    maxResults: {
      type: Number,
      default: 10
    }
  },
  data() {
    return {
      currentPage: this.current
    }
  },
  methods: {
    onChange(pageNumber) {
      this.$emit('pagenation-changed', pageNumber)
    }
  }
}
</script>

<style lang="scss" scoped>
.m-pagination {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
</style>
