<template>
  <div id="mv">
    <img src="~/assets/img/shibahu.jpg" alt="">
    <h1 class="mv-title">{{ $SITE_NAME }}</h1>
    <p class="mv-subTitle"></p>
  </div>
</template>

<script>
export default {
  name: '',

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
#mv {
  img {
    max-height: none;
    width: 100%;
  }
  .mv-title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-family: $font-ubuntu;
  }
}
</style>
