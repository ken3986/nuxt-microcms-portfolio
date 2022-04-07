/*------------------------------*/
/* WorksService */
/*------------------------------*/
const { createClient } = require('microcms-js-sdk')

const worksApiConfig = {
  endpoint: 'works',
  getPostsLimit: 100,
  postsForPage: 6,
}

// console.log($config)

export default {
  methods: {
    async getData ({
      categoryId: categoryId,
      tagId: tagId,
      postsForPage: postsForPage,
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
        queries.limit = postsForPage ? postsForPage : worksApiConfig.postsForPage
        queries.offset = page ? page : 0
        // if (postsForPage) {
        //   queries.limit = postsForPage
        //   // 現在のページにある投稿を反映
        //   if (page) {
        //     queries.offset = (page - 1) * postsForPage
        //   }
        // }
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
    }
  }
}
