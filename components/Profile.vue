<template>
  <!-- 簡易プロフィールコンポーネント -->
  <div class="wrapper">
    <b-row>
      <b-col cols="4" lg="12">
        <NuxtLink
          to="/about"
        >
          <img src="~/assets/image/shibanyan.png" alt="">
        </NuxtLink>
      </b-col>
      <b-col cols="8" lg="12">
        <p>東京都在住、デザイナー/コーダーです。お仕事募集中。</p>
        <p>naka_ken8686@yahoo.co.jp</p>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'Profile',

  props: {

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


</style>
