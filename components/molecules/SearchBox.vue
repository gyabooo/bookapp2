<template lang="pug">
  div.m-searchbox.c-container
    div.m-searchbox__wrapper
      h1.m-searchbox__title
        font-awesome-icon(:icon="['fas', 'book']").m-searchbox__titleLogo
        span.m-searchbox__titleText 本を探す
      a-form(:form="form" @submit="handleSubmit").m-searchbox__form
        a-form-item(label="タイトル" :label-col="{ span: 5 }" :wrapper-col="{ span: 18 }")
          a-input(v-decorator="['search', { rules: [{ required: true, whitespace: true , message: '何か入力してください' }] }]" placeholder="タイトルを入力してください")
        a-form-item
          a-button(type="primary" html-type="submit").m-searchbox__btn
            a-icon(type="search").m-searchbox__searchIcon
    // 仮設置
    Book(v-for="book in this.contents" :key="book.id" :book="book")
</template>

<script>
import Book from '@/components/molecules/Book'

const axios = require('axios')

export default {
  components: {
    Book
  },
  props: {
    url: {
      type: String,
      default: '/.netlify/functions/search?title='
    }
  },
  data() {
    return {
      form: this.$form.createForm(this, { name: 'coordinated' }),
      isSearching: false,
      contents: []
    }
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      console.log(this.url)
      this.isSearch = true
      this.contents.splice(0, this.contents.length)

      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values.search)
          axios
            .get(this.url + values.search)
            .then((res) => {
              this.contents = res.data.content
            })
            .catch((e) => {
              this.error = e.message
            })
            .finally(() => {
              // if(this.contents.length === 0) {
              //   this.error = '検索結果が0件です'
              // }
              this.isSearch = false
              console.log(this.contents)
            })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.m-searchbox {
  &__wrapper {
    width: 80%;
    @include desktop {
      width: 60%;
    }
    text-align: center;
    border: 1px solid $site_borderColor;
    border-radius: 20px;
    position: relative;
    padding: 30px 0;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 40px;
  }
  &__title {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%) translateY(-50%);
    background-color: $site_bgColor;
    padding: 10px;
    width: 200px;
    &Logo {
      color: $site_color;
      width: 24px;
      height: 30px;
      margin-right: 5px;
    }
    &Text {
      font-size: 18px;
    }
  }
  &__form {
    margin: 0 10px;
  }
  &__btn {
    background-color: white;
    border: 1px solid $site_borderColor;
    border-radius: 40%;
    padding: 0 8px;
    width: 46px;
    height: 46px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
    &:hover {
      opacity: 0.7;
    }
  }
  &__searchIcon {
    color: $site_color;
    font-size: 30px;
  }
}
</style>
