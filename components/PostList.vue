<template>
  <b-row>
    <b-col v-for="post in posts" :key="post.id" class="post" cols="12" md="6" lg="4">
      <div class="post-card mb-2">
        <NuxtLink
          :to="`/works/posts/${post.id}`"
          class="post-card-to"
        >
            <div class="post-card-header">

            </div>
            <div class="post-card-thumbnail">
              <figure class="post-card-thumbnail-wrapper">
                <img
                  class="post-card-thumbnail-image"
                  :src="post.thumbnail ? post.thumbnail.url : 'https://picsum.photos/600/300/?image=25'"
                  alt="">
              </figure>
            </div>
            <div class="post-card-body">
              <h5 class="card-title">{{ post.title }}</h5>
              <!-- <b-button :to="`/works/posts/${post.id}`" variant="primary" class="stretched-link">Read more</b-button> -->
            </div>
            <div class="post-card-footer">

            </div>
        </NuxtLink>
      </div>
      <!-- <b-card
        :title="post.title || 'No title'"

        tag="article"
        no-body
        class="mb-2 post-card"
      >

        <b-row no-gutters>
          <b-col cols="4" md="12">
            <figure class="post-thumbnail-wrapper">
              <b-card-img
                class="post-thumbnail"
                :src="post.thumbnail ? post.thumbnail.url : 'https://picsum.photos/600/300/?image=25'"
              ></b-card-img>
            </figure>
          </b-col>
          <b-col cols="8" md="12">
            <b-card-body>
              <h5 class="card-title">{{ post.title }}</h5>
              <b-button :to="`/works/posts/${post.id}`" variant="primary" class="stretched-link">Read more</b-button>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card> -->
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'PostList',

  props: {
    posts: {
      type: Array,
      required: true,
      default: () => [],
    }
  },

  data () {
    return {

    }
  }, /* data */

  computed: {

  }, /* computed */

  mounted () {

  }, /* mounted */

  methods: {

  } /* methods */

}
</script>





<style lang="scss" scoped>
  .post-card {
    background-color: #fff;
    border-radius: 5px;
    height: 230px;
      &:hover {
        filter: drop-shadow(5px 5px 5px rgba(0,0,0,0.6));
        transform: rotateZ(15deg);
      }
    &-to {
      color: inherit;
      text-decoration: none;
    }
    &-thumbnail {
      height: 70%;
      &-wrapper {
        overflow: hidden;
        height: 100%;
        background-color: #eee;
        text-align: center;
      }
      &-image {
        object-fit: cover;
        height: 100%;
      }
    }
    &-body {
      padding: 0.5em 1em ;
    }
  }
  .post-thumbnail-wrapper {
    height: 50%;
  }
  .post-thumbnail {
    height: 100%;
    object-fit: cover;
  }
</style>
