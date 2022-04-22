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
            v-show="pageNum > 1"
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
import worksMixin from '~/mixins/worksMixin'
import meta from '~/mixins/metaMixin'

export default {
  layout: 'works',

  mixins: [
    worksMixin,
    meta,
  ],

  async fetch () {
    const result = await this.getWorksPosts({
      tagId: this.$route.params.id,
      page: this.$route.params.p
    })

    this.posts = result.contents
    this.postsTotalCount = result.totalCount

    this.$set(this.meta, 'title', this.currentTaxonomy.name)
  },

  // head () {
  //   return {
  //     title: this.currentTaxonomy.name,
  //   }
  // },


  data () {
    return {
      posts: [],
      postsTotalCount: 0,

      meta: {},
    }
  },

  computed: {
    ...mapGetters({
      worksTags: 'works/getTags',
    }),

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
