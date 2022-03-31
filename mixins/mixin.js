export default {
  created () {
    this.hello()
  },

  methods: {
    hello (message = 'hello!') {
      console.log('hello from mixin!')
      console.log(message)
    },

    async getData ({
      categoryId: categoryId,
      tagId: tagId,
      postForPage: postForPage,
      page: page,
    } = {}) {
      // 投稿の絞り込み
      let queries = {}
        // 1ページごとの投稿数設定を反映
        if (postForPage) {
          queries.limit = postForPage
          // 現在のページにある投稿を反映
          if (page) {
            queries.offset = (page - 1) * postForPage
          }
        }
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
        endpoint: 'works',
        queries: queries,
      })
      // console.log(data)
      return data
    }
  }
}
