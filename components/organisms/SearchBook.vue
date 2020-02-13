<template lang="pug">
  div.m-searchbook.c-container
    div.m-searchbook__wrapper
      h1.m-searchbook__title
        font-awesome-icon(:icon="['fas', 'book']").m-searchbook__titleLogo
        span.m-searchbook__titleText 本を探す
      a-form(:form="form" @submit="handleSubmit").m-searchbook__form
        a-form-item(label="タイトル" :label-col="{ span: 5 }" :wrapper-col="{ span: 18 }")
          a-input(v-decorator="['search', { rules: [{ required: true, whitespace: true , message: '何か入力してください' }] }]" placeholder="タイトルを入力してください")
        a-form-item(label="件数" :label-col="{ span: 5 }" :wrapper-col="{ span: 18 }")
          SelectBox(:defaultValue="maxResults" @selectbox-changed="selectBoxChanged")
        a-form-item
          a-button(type="primary" html-type="submit" :disabled="isSearching").m-searchbook__btn
            a-icon(type="search").m-searchbook__searchIcon
      div.m-searchbook__info
        font-awesome-icon(:icon="['fas', 'info-circle']").m-searchbook__infoIcon
        span.m-searchbook__infoText {{ infoText }}
      Loading(v-show="isSearching")
</template>

<script>
import Loading from '@/components/atoms/Loading'
import SelectBox from '@/components/atoms/SelectBox'
import { mapGetters, mapActions } from 'vuex'

const axios = require('axios')

export default {
  components: {
    Loading,
    SelectBox
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
      tempMaxResults: 0
    }
  },
  computed: {
    ...mapGetters('search', [
      'isSearched',
      'keyword',
      'infoText',
      'isSearching'
    ]),
    ...mapGetters('pagenation', ['current', 'maxResults'])
  },
  mounted() {
    this.form.setFieldsValue({
      search: this.keyword
    })
  },
  methods: {
    ...mapActions('books', {
      setItems: 'setItems',
      setTotalItems: 'setTotalItems',
      booksDestroy: 'destroy'
    }),
    ...mapActions('pagenation', {
      setCurrent: 'setCurrent',
      setMaxResults: 'setMaxResults',
      pagenationDestroy: 'destroy'
    }),
    handleSubmit(e) {
      e.preventDefault()
      this.$store.commit('search/enableSearching')
      this.booksDestroy()

      this.form.validateFields((err, values) => {
        if (!err) {
          if (this.tempMaxResults === 0) {
            this.tempMaxResults = this.maxResults
          } else {
            this.setMaxResults(this.tempMaxResults)
          }

          const p = {
            q: values.search,
            Country: 'JP',
            maxResults: this.maxResults,
            startIndex: 0
          }

          axios
            .get(this.url, { params: p })
            .then((res) => {
              this.setItems(res.data.items)
              this.setTotalItems(res.data.totalItems)
              this.$store.commit('search/setKeyword', values.search)
            })
            .catch((e) => {
              this.error = e.message
            })
            .finally(() => {
              this.$store.commit('search/disableSearching')
              this.$store.commit('search/enableSearched')
            })
        }
      })
    },
    selectBoxChanged(e) {
      this.tempMaxResults = e
    }
  }
}
</script>

<style lang="scss" scoped>
.m-searchbook {
  &__wrapper {
    width: 80%;
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
  &__info {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__infoIcon {
    color: $site_color;
    width: 28px;
    height: 28px;
    margin-right: 5px;
  }
  &__infoText {
    font-size: 18px;
  }
}
</style>
