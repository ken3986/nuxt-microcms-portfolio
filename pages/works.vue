<template>
  <div class="home">
    <b-container class="px-0">
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
                  <b-button :to="`/posts/${post.id}`" variant="primary" class="stretched-link">Read more</b-button>
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
            :category="selectedCategory"
            :tag="selectedTag"
          ></Pagination>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>


<script>
import { mapGetters } from 'vuex'

export default {

  layout: 'works',

  async fetch () {
    // 1ページごとの投稿数設定を取得
    const postsForPage = this.$config.worksApiConfig.postsForPage
    // 現在のページ番号を取得
    const page = this.$route.params.p || '1'
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
      worksTags: 'works/getTags',
    }),

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
  .post {
    padding-bottom: 1em;
  }
  .post-card {
    height: 100%;

  }

</style>
