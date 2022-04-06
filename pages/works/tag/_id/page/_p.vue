<template>
  <div class="category">

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
            :tag="currentTaxonomy"
          ></Pagination>
        </b-col>
      </b-row>

  </div>
</template>


<script>
import { mapGetters } from 'vuex'
import WorksMixin from '@/mixins/works'

export default {
  layout: 'works',

  mixins: [ WorksMixin ],

  async fetch () {
    const result = await this.getData({
      tagId: this.$route.params.id,
      postsForPage: this.$config.worksApiConfig.postsForPage,
      page: this.$route.params.p || 1,
    })

    this.posts = result.contents
    this.postsTotalCount = result.totalCount
  },


  data () {
    return {
      posts: [],
      postsTotalCount: 0,
    }
  },

  computed: {
    ...mapGetters({
      worksTags: 'works/getTags',
    }),

    page () {
      const page = this.$route.params.p || '1'
      return page
    },
    pager () {
      return [...Array(Math.ceil(this.postsTotalCount / this.$config.postsForPage)).keys()]
    },


    currentTaxonomy () {
      const currentId = this.$route.params.id
      const currentTag =
      currentId !== undefined
        ? this.worksTags.find((content) => content.id === currentId)
        : undefined
      return currentTag
    }

  },

  methods: {

  }, /* methods */

}
</script>




<style lang="scss" scoped>

</style>
