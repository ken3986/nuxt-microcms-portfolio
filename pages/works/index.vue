<template>
  <div class="works-index">
    実績

  </div>
</template>


<script>
import { mapGetters } from 'vuex'

export default {

  // layout: 'works',

  async fetch () {
    // 1ページごとの投稿数設定を取得
    const postsForPage = this.$config.worksApiConfig.postsForPage
    // 現在のページ番号を取得
    const page = this.$route.query.page || '1'
    // カテゴリーIDを取得
    const categoryId = this.$route.params.categoryId
    // タグIDを取得
    const tagId = this.$route.params.tagId

    // 投稿の絞り込み
    let queries = {}
      // 1ページごとの投稿数設定を反映
      queries.limit = postsForPage
      // 現在のページにある投稿を反映
      queries.offset = (page - 1) * postsForPage
      // カテゴリーまたはタグで絞り込み
      const postsFilter =
        categoryId !== undefined
          ? `category[equals]${categoryId}`
          : tagId !== undefined
          ? `tags[contains]${tagId}`
          : undefined
      queries.filters = postsFilter

    // 投稿を取得
    const data = await this.$microcms.get({
      endpoint: `works`,
      queries: queries
    })

    // 投稿一覧を反映
    this.posts = data.contents
    // 投稿数を反映
    this.postsTotalCount = data.totalCount



    // カテゴリー情報を取得
    const category = await this.$microcms.get({
      endpoint: 'works-categories',
      queries: {
        ids: categoryId
      }
    })
    this.category = category.contents[0]
  },

  data () {
    return {
      posts: [],
      postsTotalCount: 0,
      categoryId: '',
      tagId: '',

      category: {},
    }
  },

  computed: {
    ...mapGetters({
      worksCategories: 'works/getCategories',
      worksTags: 'works/getTags',
    }),

    page () {
      const page = this.$route.params.p || '1'
      return page
    },
    pager () {
      return [...Array(Math.ceil(this.postsTotalCount / this.$config.postsForPage)).keys()]
    },

    currentCategory () {
      const categoryId = this.$route.params.categoryId
      const currentCategory =
      categoryId !== undefined
        ? this.worksCategories.find((content) => content.id === categoryId)
        : undefined
      return currentCategory
    },
    currentTag () {
      const tagId = this.$route.params.tagId
      const currentTag =
      tagId !== undefined
        ? this.worksTags.find((content) => content.id === tagId)
        : undefined
      return currentTag
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
  .post {
    padding-bottom: 1em;
  }
  .post-card {
    height: 100%;

  }

</style>
