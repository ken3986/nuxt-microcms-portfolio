<template>
  <div class="home">
    <b-container>
      <b-row>
        <b-col>
          <h1 class="pageTitle">Works</h1>
        </b-col>
      </b-row>

      <b-row>
        <!-- 記事リスト -->
        <b-col>
          <!-- <b-container> -->
            <b-row v-for="groupedPosts in groupArrayWithId(posts, 3)" :key="groupedPosts.id">
              <b-col v-for="post in groupedPosts.body" :key="post.id">
                <b-card
                  :title="post.title || 'No title'"
                  :img-src="post.thumbnail ? post.thumbnail.url : 'https://picsum.photos/600/300/?image=25'"
                  img-alt="Image"
                  img-middle
                  tag="article"
                  style="max-width: 20rem;"
                  class="mb-2 post-card"
                >
                  <!-- <b-card-text v-show="post.content">
                    {{ post.content }}
                  </b-card-text> -->

                  <b-button :to="`/posts/${post.id}`" variant="primary">Read more</b-button>
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
          <!-- </b-container> -->

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
    // 配列をcount個ごとに分割した配列を作る
    groupArrayWithId(array, count) {
      const split_cnt = count // 何個ずつに分割するか
      const grouped_array = []
      for (let i=0; i<Math.ceil(array.length/split_cnt); i++) {
        let multiple_cnt = i * split_cnt //3の倍数
        // (i * 3)番目から(i * 3 + 3)番目まで取得
        let result = array.slice(multiple_cnt, multiple_cnt + split_cnt)

        let split_array = {}
        split_array.id = i
        split_array.body = result
        grouped_array.push(split_array)
      }
      return grouped_array
      // [
      //   {id: 0, body: ["AMETHYST", "BLUE-SAPPHIRE", "CITRIN"]},
      //   {id: 1, body: ["DIAMOND", "EMERALD", "FIRE-OPAL"]}, ...
      // ]
    }
  } /* methods */
}
</script>


<style lang="scss" scoped>
  .post-card {
    height: 100%;
    margin-bottom: 1em;
  }

</style>
