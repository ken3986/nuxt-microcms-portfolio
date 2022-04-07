<template>
  <!-- Worksレイアウト -->
  <div>
    <Header></Header>
      <div class="site-content">
        <b-container>
          <b-row>
            <b-col lg="9" class="mb-4">
              <Nuxt></Nuxt>
            </b-col>
            <b-col lg="3">
              <Sidebar></Sidebar>
            </b-col>
          </b-row>
        </b-container>
      </div>
    <Footer></Footer>
  </div>
</template>

<script>
// console.log($config)

export default {
  name: 'works',

  async fetch () {
    // // カテゴリーリストの取得
    // const categories = await this.$worksClient.get({
    //   endpoint: `works-categories`,
    //   queries: {
    //     limit: 1000,
    //   }
    // })
    // console.log(categories)
    // // カテゴリーリストの登録
    // this.$store.commit('works/setCategories', categories.contents)

    // // タグリストの取得
    // const tags = await this.$config.works_client.get({
    //   endpoint: `works-tags`,
    //   queries: {
    //     limit: 1000,
    //   }
    // })
    // // タグリストの登録
    // this.$store.commit('works/setTags', tags.contents)

    // // 投稿リストの取得
    // const posts = await this.$config.works_client.get({
    //   endpoint: `works`,
    //   queries: {
    //     limit: 1000,
    //   }
    // })
    // // タグリストの登録
    // this.$store.commit('works/setPosts', posts.contents)
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



<style lang="scss">
  .post {
    padding-bottom: 1em;
  }
  .post-card {
    height: 100%;
  }
</style>
