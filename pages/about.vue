<template>
  <div id="about">
    <article v-if="Object.keys(page).length">
      <h2 class="page-title">{{ page.title }}</h2>
      <div class="page-content">
        <div v-html="page.richText"></div>
      </div>
    </article>
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
  #about::v-deep {
    .page-content {
      padding: 1em;
      border: 1px solid #aaa;
      box-shadow: 1px 1px 3px #aaa;
      background-color: #fff;
      h3 {
        font-size: fz(18);
      }
    }
  }
</style>
