<template>
  <div id="home">

    <section>
      <About></About>
    </section>
    <section>
      <CategorisedPostsLists></CategorisedPostsLists>
    </section>

  </div>
</template>


<script>
import meta from '~/mixins/metaMixin'

export default {
  // layout: 'works',

  // middleware: 'authenticated',

  mixins: [
    meta,
  ],

  async fetch () {

  },

  data () {
    return {
      meta: {
        title: this.$SITE_NAME,
        titleTemplate: '%s',
        ogType: 'website',
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
section {
  margin-bottom: 2rem;
}

</style>
