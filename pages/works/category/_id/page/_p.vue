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
    const result = await this.getWorksPosts({
      categoryId: this.$route.params.id,
      page: this.$route.params.p
    })

    this.posts = result.contents
    this.postsTotalCount = result.totalCount
  },

  data () {
    return {
      posts: [],
      postsTotalCount: 0,
    }
  }, /* data */

  computed: {
    ...mapGetters({
      worksCategories: 'works/getCategories',
    }),

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
