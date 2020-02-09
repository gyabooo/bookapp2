<template lang="pug">
  a-col(:xs="8" :sm="8" :md="8" :lg="8")
    a-card(hoverable)
      a(:href="link" target="_blank")
        img(img :src="image" alt="画像" slot="cover")
      a-card-meta(:title="title")
</template>

<script>
const axios = require('axios')
const noImagePath = '/images/no-image.png'
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
