<template>
  <div id="skill">
    <article v-if="Object.keys(page).length">
      <h2 class="page-title">{{ page.title }}</h2>
      <div class="page-content">
        <b-row class="lists no-gutters">
          <b-col v-for="list in $numberIndex(page.lists)" :key="list.id" cols="4" class="list">
            <div v-html="list.richText"></div>
          </b-col>

        </b-row>
      </div>
    </article>
  </div>
</template>

<script>

export default {
  name: 'skill',

  async fetch () {
    const page = await this.$generalClient.get({
      endpoint: 'pages',
      contentId: 'skill',
    })
    this.page = page
  },

  data () {
    return {
      page: {},
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
  ::v-deep {
    .page-content {
      .list {
        padding: 1em;
        border: 1px solid #aaa;
        box-shadow: 1px 1px 3px #aaa;
        background-color: #fff;
        margin-bottom: 1rem;
        h3 {
          font-size: fz(18);
        }
      }
    }

    // .list {
    //   margin-bottom: 1rem;
    // }
  }
</style>
