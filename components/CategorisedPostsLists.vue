<template>
  <div id="categorisedPostsLists">

      <section v-if="categorisedPostsLists.length !== 0">
        <h2 class="page-title">実績</h2>

        <div v-for="categorisedPostsList in categorisedPostsLists" :key="categorisedPostsList.id">
          <div class="category-block mb-3">
            <div class="category-block-header">
              <h2 class="category-block-title">{{ categorisedPostsList.category.name }}</h2>
            </div>

            <div class="category-block-body">
              <!-- カテゴリー解説 -->
              <div v-if="categorisedPostsList.category.description" v-html="categorisedPostsList.category.description"></div>

              <!-- カテゴリー投稿 -->
              <div v-for="post in categorisedPostsList.posts.contents" :key="post.id" class="category-block-posts">
                <article class="category-block-post">
                  <NuxtLink
                    :to="`/works/posts/${post.id}`"
                  >
                    <b-row class="no-gutters">
                      <b-col md="3" class="category-block-post-thumbnail">
                        <!-- サムネイル -->
                        <figure
                          class="category-block-post-thumbnail-wrapper"
                        >
                          <img
                            class="category-block-post-thumbnail-image"
                            :src="post.thumbnail ? post.thumbnail.url : 'https://picsum.photos/600/300/?image=25'" alt=""
                          >
                        </figure>
                      </b-col>
                      <b-col md="9" class="category-block-post-text">
                        <!-- タイトル -->
                          <h4 v-if="post.title" class="category-block-post-title">{{ post.title }}</h4>
                          <!-- 抜粋 -->
                          <p v-if="post.excerpt">{{ post.excerpt }}</p>
                      </b-col>
                    </b-row>
                  </NuxtLink>
                </article>


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

        </div> <!-- categorisedPostsList -->
      </section> <!-- categorisedPostsLists -->

  </div>
</template>


<script>
import { mapGetters } from 'vuex'

export default {

  async fetch () {
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
    border: 1px solid #000;
    background-color: #fff;
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

  .category-block-posts {
    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }
  .category-block-post {
    $height: 100px;
    border: 1px solid #000;

    &:hover {
      filter: drop-shadow(5px 5px 5px rgba(0,0,0,0.6));
      background-color: $primary;
      transform: translate(0, -5px);
      transition: transform, 0.2s
    }

    &-thumbnail {
      height: 100%;
    }
    &-thumbnail-wrapper {
      height: $height;
      text-align: center;
      background-color: rgb(222, 226, 218);
    }


    &-text {
      padding: 1em;
      p {
        font-size: fz(14);;
      }
    }

    &-title {
      font-size: fz(18);
    }

    a {
      text-decoration: none;
    }
  }

  .category-block-footer {
    background-color: $secondary;
    text-align: right;
    .category-block-more {
      padding: 0.5em 1em;
      display: block;
      text-decoration: none;
      &:hover {
        background-color: lighten($secondary, 10%);
      }
    }
  }



</style>
