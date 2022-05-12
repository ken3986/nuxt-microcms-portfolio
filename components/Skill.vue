<template>
  <div id="skill">
    <article v-if="Object.keys(page).length">
      <h2 class="page-title">{{ page.title }}</h2>
      <b-container class="page-content">
        <b-row class="lists">
          <b-col v-for="list in $numberIndex(page.lists)" :key="list.id" sm="6" md="4" class="list">
            <div class="list-box">
              <div v-html="list.richText"></div>
            </div>
          </b-col>

        </b-row>
      </b-container>
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
    .lists {
      $col-padding: 5px;
      margin-left:-($col-padding + 15px);
      margin-right:-($col-padding + 15px);

      > div{
          padding-right:$col-padding;
          padding-left:$col-padding;
      }
    }
    .list {
      margin-bottom: 1rem;
      // background-color: yellow;
    }
    .list-box {
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
