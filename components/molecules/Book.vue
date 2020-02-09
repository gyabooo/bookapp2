<template>
  <div class="column is-4 book-content">
    <div class="card">
      <div class="card-header">
        <div class="card-header-title">{{ title }}</div>
      </div>
      <div class="card-image">
        <figure class="image is-1by1">
          <a :href="link" target="_blank">
            <img :src="image" alt="画像" />
          </a>
        </figure>
      </div>
      <div class="card-content" v-html="description"></div>
    </div>
  </div>
</template>

<script>
const axios = require('axios')
const noImagePath = '/no-image.png'
const path = '/.netlify/functions/thumbnail?isbn='
const url = 'https://iss.ndl.go.jp/thumbnail/'

export default {
  props: ['book'],
  data() {
    return {
      image: '',
      title: this.book.elements.filter((v) => v.name === 'title')[0].elements[0]
        .text,
      description: this.book.elements.filter(function(el) {
        if (el.name === 'description') return true
      })[0].elements[0].cdata,
      link: this.book.elements.filter(function(el) {
        if (el.name === 'link') return true
      })[0].elements[0].text
    }
  },
  created() {
    const isbn = this.book.elements.filter(function(el) {
      if (
        el.name === 'dc:identifier' &&
        el.attributes['xsi:type'] === 'dcndl:ISBN'
      )
        return true
    })

    if (isbn.length === 0) {
      this.image = noImagePath
      return true
    }

    axios
      .get(path + isbn[0].elements[0].text)
      .then((res) => {
        this.image = url + isbn[0].elements[0].text
      })
      .catch((e) => {
        this.image = noImagePath
      })
  }
}
</script>

<style lang="scss" scoped>
.book-content {
  margin-bottom: 40px;
}
.card {
  height: 100%;
}
</style>
