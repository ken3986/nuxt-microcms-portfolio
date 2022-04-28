<template>
  <!-- 簡易プロフィールコンポーネント -->
  <div class="wrapper">
    <b-row>
      <b-col cols="4" lg="12">
        <NuxtLink
          to="/about"
          title="Aboutページへ"
        >
          <img src="~/assets/img/shibanyan.png" alt="">
        </NuxtLink>
      </b-col>
      <b-col cols="8" lg="12">
        <p>東京都在住、デザイナー/コーダーです。お仕事募集中。</p>
        <div>
          <a href="https://github.com/ken3986" title="github" target="_blank">
            <b-icon icon="github" font-scale="2"></b-icon> Github
          </a>
          <p></p>
        </div>
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
