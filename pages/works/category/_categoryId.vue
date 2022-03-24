<template>
  <div class="category">

      <h2>{{ currentCategory.name }}</h2>
      <!-- 記事リスト -->
      <b-row>
        <b-col v-for="post in posts" :key="post.id" class="post" cols="12" md="6" lg="4">
          <b-card
            :title="post.title || 'No title'"

            tag="article"
            no-body
            class="mb-2 post-card"
          >
            <!-- <b-card-text v-show="post.content">
              {{ post.content }}
            </b-card-text> -->

            <b-row no-gutters>
              <b-col cols="4" md="12">
                <b-card-img :src="post.thumbnail ? post.thumbnail.url : 'https://picsum.photos/600/300/?image=25'"></b-card-img>
              </b-col>
              <b-col cols="8" md="12">
                <b-card-body>
                  <h5 class="card-title">{{ post.title }}</h5>
                  <b-button :to="`/works/posts/${post.id}`" variant="primary" class="stretched-link">Read more</b-button>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>

      <!-- ページネーション -->
      <b-row>
        <b-col>
          <Pagination
            :pager="pager"
            :current="Number(page)"
            :category="currentCategory"
            :tag="currentTag ? currentTag : null"
          ></Pagination>
        </b-col>
      </b-row>

  </div>
</template>


<script>
import { mapGetters } from 'vuex'

export default {

  // layout: 'works',

  async fetch () {
    this.fetchData()



    // カテゴリー情報を取得
    // const category = await this.$microcms.get({
    //   endpoint: 'works-categories',
    //   queries: {
    //     ids: categoryId
    //   }
    // })
    // this.category = category.contents[0]
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
    ...mapGetters({
      worksCategories: 'works/getCategories',
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
      return {}
    }

  },


  methods: {
    async fetchData () {
    // 1ページごとの投稿数設定を取得
    const postsForPage = this.$config.worksApiConfig.postsForPage
    // 現在のページ番号を取得
    const page = this.$route.query.page || '1'
    // const page = this.$route.params.page || '1'
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
    }
  }, /* methods */

  watch: {
    $route () {
      this.fetchData()
    }
  }
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
