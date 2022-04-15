<template>
  <div>
    <div v-if="Object.keys(page).length">
      <h2>{{ page.title }}</h2>
      <div v-html="page.richText"></div>
    </div>
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
    this.loading = false
  },

  data () {
    return {
      page: {},
      tran: false,
    }
  },

  computed: {

  }, /* computed */

  mounted () {

  }, /* mounted */

  methods: {

  } /* methods */

}
</script>





<style lang="scss" scoped>

</style>
