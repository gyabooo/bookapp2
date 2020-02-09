<template lang="pug">
  a-col(:xs="24" :sm="24" :md="8" :lg="8").a-book
    a-card(hoverable)
      a(:href="link" target="_blank").a-book__link
        img(img :src="image" alt="画像").a-book__image
      a-card-meta(:title="title").a-book__title
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
.a-book {
  &__link {
    text-align: center;
  }
}
</style>
