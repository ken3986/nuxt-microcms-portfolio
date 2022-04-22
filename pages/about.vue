<template>
  <div id="about-page">
    <About></About>
  </div>
</template>

<script>
import meta from '~/mixins/metaMixin'

export default {
  name: 'about',

  layout: 'works',

  mixins: [
    meta,
  ],


  data () {
    return {
      meta: {
        title: 'About',
      },
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
