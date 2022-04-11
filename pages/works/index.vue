<template>
  <div class="works-index">
    実績
    <div v-for="categorisedPostsList in categorisedPostsLists" :key="categorisedPostsList.id">
      <div class="category-block mb-3">
        <div class="category-block-header">
          <NuxtLink
            :to="`/works/category/${categorisedPostsList.category.id}/page/1`"
          >
            <h2 class="category-block-title">{{ categorisedPostsList.category.name }}</h2>
          </NuxtLink>
        </div>
        <div class="category-block-body">
          <p>{{categorisedPostsList.category.description}}</p>
          <div v-for="post in categorisedPostsList.posts.contents.slice(0,3)" :key="post.id">
              <b-row class="category-block-post no-gutters">
                <b-col md="3" class="category-block-post-thumbnail">
                  <NuxtLink
                    :to="`/works/posts/${post.id}`"
                  >
                    <figure
                      class="category-block-post-thumbnail-wrapper"
                    >
                      <img
                        class="category-block-post-thumbnail-image"
                        :src="post.thumbnail ? post.thumbnail.url : 'https://picsum.photos/600/300/?image=25'" alt=""
                      >
                    </figure>
                  </NuxtLink>
                </b-col>
                <b-col md="9" class="category-block-post-body">
                  <NuxtLink
                    :to="`/works/posts/${post.id}`"
                  >
                    <h4>{{ post.title }}</h4>
                  </NuxtLink>
                </b-col>
              </b-row>


          </div>

        </div> <!-- .category-block-body -->

        <div class="category-block-footer">
          <NuxtLink
            :to="`/works/category/${categorisedPostsList.category.id}/page/1`"
            class="category-block-more"
          >
            more
          </NuxtLink>
        </div> <!-- .category-block-footer -->



      </div> <!-- .category-block -->

    </div>
  </div>
</template>


<script>
import { mapGetters } from 'vuex'

export default {

  layout: 'works',

  async fetch () {
    // console.log(this.$test)
    // 投稿を取得
    let array = []
    for (const [index, category] of this.referencedCategories.entries()) {
      const posts = await this.$worksClient.get({
        endpoint: 'works',
        queries: {
          filters: `category[equals]${category.id}`
        }
      })
      const item = {
        category: category,
        posts: posts,
        id: index,
      }
      array.push(item)
    }

    this.categorisedPostsLists = array
  },

  data () {
    return {
      categorisedPostsLists: [],
    }
  },

  computed: {
    ...mapGetters({
      referencedCategories: 'works' + '/getReferencedCategories',
    }),
  },

  mounted () {

  },

  methods: {

  } /* methods */
}
</script>




<style lang="scss" scoped>
  .category-block {
    border-bottom: 1px solid #000;
    // padding: 1em 0;
    border: 1px solid #000;
    border-radius: 5px;
    &-header {
      background-color: rgb(48, 187, 106);
      padding: 1em 0.5em;
    }
    &-title {
      margin: 0;
      color: #fff;
      font-size: 16px;
    }

    &-body {
      padding: 1em;
    }
  }

  .category-block-post {
    height: 100px;
    &:not(:last-child) {
      margin: 1em 0;
    }
    &-thumbnail {
      height: 100%;
    }
    &-thumbnail-wrapper {
      height: 100%;
      overflow: hidden;
      text-align: center;
      background-color: rgb(222, 226, 218);
      &:hover {
        filter: drop-shadow(5px 5px 5px rgba(0,0,0,0.6));
      }
    }
    &-thumbnail-image {
      object-fit: cover;
      height: 100%;
    }

    &-body {
      background-color: #fff;
    }
  }
  .category-block-footer {
    background-color: #fff;
    padding: 0.5em;
    text-align: right;
    .category-block-more {
      margin-right: 1em;
    }
  }

</style>
