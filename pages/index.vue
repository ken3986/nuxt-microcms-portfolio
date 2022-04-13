<template>
  <div id="home">
    <Works></Works>
    <About></About>


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

  },

  methods: {

  } /* methods */
}
</script>




<style lang="scss" scoped>

</style>
