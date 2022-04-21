<template>
  <div id="home">

    <section>
      <About></About>
    </section>
    <section>
      <Works></Works>
    </section>

  </div>
</template>


<script>
import Works from '~/pages/works/index.vue'
import About from '~/pages/about.vue'

export default {

  components: {
    Works,
    About,
  },

  layout: 'works',

  async fetch () {

  },

  data () {
    return {

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
.site-mv {
  overflow: hidden;
  height: 600px;
  position: relative;
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
</style>
