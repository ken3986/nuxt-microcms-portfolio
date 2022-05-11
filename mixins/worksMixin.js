/*------------------------------*/
/* WorksService */
/*------------------------------*/
const { createClient } = require('microcms-js-sdk')

const worksApiConfig = {
  endpoint: 'works',
  getPostsLimit: 100,
  postsForPage: 9,
}

export default {
  methods: {
    async getWorksPosts ({
      categoryId: categoryId,
      tagId: tagId,
      page: page,
    } = {}) {
      const { WORKS_SERVICE_DOMAIN, WORKS_API_KEY } = this.$config
      const worksClient = createClient({
        serviceDomain: WORKS_SERVICE_DOMAIN,
        apiKey: WORKS_API_KEY,
      })

      // 投稿の絞り込み
      let queries = {}
        // 1ページごとの投稿数設定を反映
        const limit = worksApiConfig.postsForPage
        const offset = page ? (page - 1) * limit : 0
        queries.limit = limit
        queries.offset = offset

        // カテゴリーまたはタグで絞り込み
        const postsFilter =
          categoryId !== undefined
            ? `category[equals]${categoryId}`
            : tagId !== undefined
            ? `tags[contains]${tagId}`
            : undefined
        queries.filters = postsFilter
      // 投稿を取得
      const data = await worksClient.get({
        endpoint: 'works',
        queries: queries,
      })

      return data
    }, /* getWorksPosts */
  }, /* methods */

  computed: {
    // 現在のページ数
    page () {
      const page = this.$route.params.p || '1'
      return page
    },
    // 全てのページ番号
    pager () {
      return [...Array(Math.ceil(this.postsTotalCount / worksApiConfig.postsForPage)).keys()]
    },
    // 総ページ数
    pageNum () {
      return Math.ceil(this.postsTotalCount / worksApiConfig.postsForPage)
    },

  }, /* computed */
}
