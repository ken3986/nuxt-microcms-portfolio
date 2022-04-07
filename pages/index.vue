<template>
  <div class="home">

      <h1>トップページ</h1>


        <!-- <b-row>
          <b-col v-for="category in worksCategories" :key="category.id" cols="12">
            {{ category.name }}
            {{ category }}
          </b-col>
        </b-row> -->



  </div>
</template>


<script>
// import { mapGetters } from 'vuex'

export default {

  layout: 'works',

  async fetch () {
    console.log('index')
    console.log(this.$config.nodeEnv)

    // // 1ページごとの投稿数設定を取得
    // const postsForPage = this.$config.worksApiConfig.postsForPage
    // // 現在のページ番号を取得
    // const page = this.$route.params.p || '1'
    // // カテゴリーIDを取得
    // const categoryId = this.$route.params.categoryId
    // // タグIDを取得
    // const tagId = this.$route.params.tagId

    // // 投稿の絞り込み
    // let queries = {}
    //   // 1ページごとの投稿数設定を反映
    //   queries.limit = postsForPage
    //   // 現在のページにある投稿を反映
    //   queries.offset = (page - 1) * postsForPage
    //   // カテゴリーまたはタグで絞り込み
    //   const postsFilter =
    //     categoryId !== undefined
    //       ? `category[equals]${categoryId}`
    //       : tagId !== undefined
    //       ? `tags[contains]${tagId}`
    //       : undefined
    //   queries.filters = postsFilter

    // // 投稿を取得
    // const data = await this.$config.works_client.get({
    //   endpoint: `works`,
    //   queries: queries
    // })

    // // 投稿一覧を反映
    // this.posts = data.contents
    // // 投稿数を反映
    // this.postsTotalCount = data.totalCount
  },

  data () {
    return {
      posts: [],
      postsTotalCount: 0,
      categoryId: '',
      tagId: '',
    }
  },

  computed: {
    // ...mapGetters({
    //   worksCategories: 'works/getCategories',
    //   worksTags: 'works/getTags',
    // }),

    page () {
      const page = this.$route.params.p || '1'
      return page
    },
    pager () {
      return [...Array(Math.ceil(this.postsTotalCount / this.$config.postsForPage)).keys()]
    },

    selectedCategory () {
      const categoryId = this.$route.params.categoryId
      const selectedCategory =
      categoryId !== undefined
        ? this.worksCategories.find((content) => content.id === categoryId)
        : undefined
      return selectedCategory
    },
    selectedTag () {
      const tagId = this.$route.params.tagId
      const selectedTag =
      tagId !== undefined
        ? this.worksTags.find((content) => content.id === tagId)
        : undefined
      return selectedTag
    },
  },

  mounted () {
    // console.log('index')
    // console.log(this.pager)
  },

  methods: {

  } /* methods */
}
</script>




<style lang="scss" scoped>

</style>
