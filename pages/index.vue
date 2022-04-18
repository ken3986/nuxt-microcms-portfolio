<template>
  <div id="home">
    <section class="site-mv">
      <img src="~/assets/img/shibahu.png" alt="">
      <h1 class="site-mv-title">Portfolio</h1>
      <p class="site-mv-sbuTitle"></p>
    </section>
    <b-container>
      <b-row>
        <b-col lg="9">
          <section>
            <Works></Works>
          </section>
          <section>
            <About></About>
          </section>
        </b-col>
        <b-col lg="3">
          <Sidebar></Sidebar>
        </b-col>
      </b-row>
    </b-container>


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

  async fetch () {

  },

  data () {
    return {

    }
  },

  computed: {

  },

  mounted () {
    console.log(this.$route)
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
