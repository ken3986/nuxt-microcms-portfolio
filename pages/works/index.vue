<template>
  <div class="works-index">
    実績
    <div v-for="categorisedPostsList in categorisedPostsLists" :key="categorisedPostsList.id">
      <h2>{{ categorisedPostsList.category.name }}</h2>
      <div v-for="post in categorisedPostsList.posts.contents" :key="post.id">
        {{ post.title }}
      </div>

    </div>
  </div>
</template>


<script>
import { mapGetters } from 'vuex'
import Mixin from '~/mixins/mixin'

export default {
  mixins: [Mixin],
  // layout: 'works',

  async fetch () {
    this.fetchData()
  },

  data () {
    return {
      posts: [],
      postsTotalCount: 0,
      categoryId: '',
      tagId: '',

      category: {},
      categorisedPostsLists: [],
    }
  },

  computed: {
    ...mapGetters({
      // worksPosts: 'works/getPosts',
      worksCategories: 'works/getCategories',
      worksTags: 'works/getTags',
    }),
  },

  mounted () {

  },

  methods: {
    async fetchData () {
      // 投稿を取得
      let array = []
      for (const [index, category] of this.worksCategories.entries()) {
        const posts = await this.getData({
          categoryId: category.id
        })
        const item = {
          category: category,
          posts: posts,
          id: index,
        }
        array.push(item)
      }

      this.categorisedPostsLists = array

    }
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
