<template>
  <div id="works-index">
    <!-- パンくずリスト -->
    <b-breadcrumb>
      <b-breadcrumb-item to="/">
        <b-icon icon="house-fill" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
      </b-breadcrumb-item>
      <b-breadcrumb-item active="true">
        Works
      </b-breadcrumb-item>
    </b-breadcrumb>

    <CategorisedPostsLists></CategorisedPostsLists>

  </div>
</template>


<script>
import Meta from '~/mixins/metaMixin'

export default {

  // layout: 'works',

  mixins: [
    Meta,
  ],

  async fetch () {

  },

  data () {
    return {
      meta: {
        title: 'Works',
      }
    }
  },

  computed: {

  },

  mounted () {

  },

  methods: {

  } /* methods */
}
</script>




<style lang="scss" scoped>




</style>
