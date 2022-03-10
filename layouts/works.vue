<template>
  <!-- Worksレイアウト -->
  <div>
    <Header></Header>
      <b-container>
        <b-row>
          <b-col cols="9">
            <Nuxt></Nuxt>
          </b-col>
          <b-col>
            <Sidebar></Sidebar>
          </b-col>
        </b-row>
      </b-container>
    <Footer></Footer>
  </div>
</template>

<script>

export default {
  name: 'works',

  async fetch () {
    // カテゴリーリストの取得
    const categories = await this.$microcms.get({
      endpoint: `works-categories`,
    })
    // カテゴリーリストの登録
    this.$store.commit('works/setCategories', categories.contents)

    // タグリストの取得
    const tags = await this.$microcms.get({
      endpoint: `works-tags`,
    })
    // タグリストの登録
    this.$store.commit('works/setTags', tags.contents)
  },

  data () {
    return {

    }
  }, /* data */

  computed: {

  }, /* computed */

  mounted () {

  }, /* mounted */

  methods: {

  } /* methods */

}
</script>



<style>

</style>
