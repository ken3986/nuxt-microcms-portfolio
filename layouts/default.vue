<template>
  <div class="site-wrapper">
    <Header class="site-header"></Header>

    <transition name="mv">
      <div class="site-mv" v-show="$route.name == 'index'">
        <img src="~/assets/img/shibahu.jpg" alt="">
        <h1 class="site-mv-title">Portfolio</h1>
        <p class="site-mv-sbuTitle"></p>
      </div>
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

$site-header-height: 3rem;

.site-header {
  position: fixed;
  width: 100%;
  z-index: 100;
  height: $site-header-height;
}

.site-content {
  flex-grow: 1;
  padding-top: $site-header-height + 2rem;
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
  img {
    max-height: none;
    width: 100%;
  }
  &-title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-family: $font-ubuntu;
  }
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
