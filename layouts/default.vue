<template>
  <div class="site-wrapper">
    <Header class="site-header"></Header>

    <transition name="mv">
      <MV v-show="$route.name == 'index'" class="site-mv"></MV>
    </transition>

    <div class="site-content">
      <b-container>
        <b-row>
          <b-col lg="9" class="mb-4">
            <Nuxt></Nuxt>
          </b-col>
          <b-col lg="3">
            <Sidebar></Sidebar>
          </b-col>
        </b-row>
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

$site-header-height: 50px;

.site-header {
  position: fixed;
  width: 100%;
  z-index: 100;
  // height: $site-header-height;
}

.site-content {
  flex-grow: 1;
  padding-top: $site-header-height + 30px;
}

.site-mv {
  overflow: hidden;
  height: 400px;
  @include mq (map-get($breakpoints, 'md')) {
    height: 200px;
  }
  position: relative;
  margin-top: $site-header-height;
  margin-bottom: -2rem;
}


.mv-enter-active {
  transition: all .3s ease;
}
.mv-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.mv-enter, .mv-leave-to {
  height: 0;
  opacity: 0;
}
</style>
