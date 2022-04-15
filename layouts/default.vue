<template>
  <div class="site-wrapper">
    <Header class="site-header"></Header>
      <div class="site-content">
        <b-container>
          <Nuxt></Nuxt>
        </b-container>
      </div>
    <Footer class="site-footer"></Footer>
  </div>
</template>

<script>

export default {
  name: 'default',

  async fetch () {

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
.site-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

$site-header-height: 3rem;

.site-header {
  position: fixed;
  width: 100%;
  z-index: 100;
  height: $site-header-height;
}

.site-content {
  flex-grow: 1;
  padding-top: $site-header-height;
}
</style>
