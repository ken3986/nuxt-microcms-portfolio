<template>
  <div id="about-page">
    <!-- パンくずリスト -->
    <b-breadcrumb>
      <b-breadcrumb-item to="/">
        <b-icon icon="house-fill" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
      </b-breadcrumb-item>
      <b-breadcrumb-item active="true">
        About
      </b-breadcrumb-item>
    </b-breadcrumb>

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

  // layout: 'works',

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
