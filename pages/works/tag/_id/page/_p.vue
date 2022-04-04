<template>
  <div class="category">

    <h2>{{ currentTaxonomy.name }}</h2>

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
