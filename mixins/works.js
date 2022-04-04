export default {
  methods: {

    async getData ({
      categoryId: categoryId,
      tagId: tagId,
      postsForPage: postsForPage,
      page: page,
    } = {}) {

      // 投稿の絞り込み
      let queries = {}
        // 1ページごとの投稿数設定を反映
        if (postsForPage) {
          queries.limit = postsForPage
          // 現在のページにある投稿を反映
          if (page) {
            queries.offset = (page - 1) * postsForPage
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
