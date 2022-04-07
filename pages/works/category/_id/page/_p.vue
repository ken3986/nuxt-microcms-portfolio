<template>
  <div>
    <h2>{{ currentTaxonomy.name }}</h2>

      <!-- 記事リスト -->
      <PostList
        :posts="posts"
      ></PostList>

      <!-- ページネーション -->
      <b-row>
        <b-col>
          <Pagination
            :pager="pager"
            :current="Number(page)"
            :category="currentTaxonomy"
          ></Pagination>
        </b-col>
      </b-row>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import worksMixin from '~/mixins/worksMixin'

export default {
  layout: 'works',

  mixins: [ worksMixin, ],

  async fetch () {
    // console.log(this.$route)
    // const result = await this.getData({
    //   categoryId: this.$route.params.id,
    //   postsForPage: this.$config.worksApiConfig.postsForPage,
    //   page: this.$route.params.p || 1,
    // })

    // this.posts = result.contents
    // this.postsTotalCount = result.totalCount
  },

  data () {
    return {
      posts: [],
      postsTotalCount: 0,
    }
  }, /* data */

  computed: {
    // ...mapGetters({
    //   worksCategories: 'works/getCategories',
    // }),

    page () {
      const page = this.$route.params.p || '1'
      return page
    },
    pager () {
      return [...Array(Math.ceil(this.postsTotalCount / this.$config.postsForPage)).keys()]
    },

    currentTaxonomy () {
      const currentId = this.$route.params.id
      const currentCategory =
      currentId !== undefined
        ? this.worksCategories.find((content) => content.id === currentId)
        : undefined
      return currentCategory
    }

  }, /* computed */

  methods: {

  } /* methods */

}
</script>





<style lang="scss" scoped>

</style>
