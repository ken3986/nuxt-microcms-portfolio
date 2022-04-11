<template>
  <div>
    <h2>{{ page.title }}</h2>
    <div v-html="page.richText"></div>
    <!-- {{ page }} -->
  </div>
</template>

<script>
export default {
  name: 'about',

  layout: 'works',

  async fetch () {
    const page = await this.$generalClient.get({
      endpoint: 'page',
      queries: {
        ids: 'about'
      }
    })
    this.page = page.contents[0]
  },

  data () {
    return {
      page: {}
    }
  },

  computed: {

  }, /* computed */

  mounted () {
    // console.log(this.$route)
  }, /* mounted */

  methods: {

  } /* methods */

}
</script>





<style lang="scss" scoped>

</style>
