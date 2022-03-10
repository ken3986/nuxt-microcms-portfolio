<template>
  <div>
    <Header></Header>
    <Nuxt></Nuxt>
      <!-- <b-container>
        <b-row>
          <b-col cols="9">
            <Nuxt></Nuxt>
          </b-col>
          <b-col>
            <Sidebar></Sidebar>
          </b-col>
        </b-row>
      </b-container> -->
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue"
import Footer from '@/components/Footer.vue'

export default {
  name: '',

  components: {
    Header: Header,
    Footer: Footer,
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

<style>

</style>
