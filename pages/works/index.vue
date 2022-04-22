<template>
  <div id="works-index">

    <CategorisedPostsLists></CategorisedPostsLists>

  </div>
</template>


<script>
import Meta from '~/mixins/metaMixin'

export default {

  layout: 'works',

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
