<template>
  <div id="about-page">
    <section>
      <About></About>
    </section>
    <section>
      <Skill></Skill>
    </section>
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
section {
  margin-bottom: 2rem;
}
</style>
