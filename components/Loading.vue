<template>
  <div id="loading">
    <p class="loading-text">Loading...</p>
  </div>
</template>

<script>
export default {
  name: '',

  data () {
    return {
      loading: false,
    }
  }, /* data */

  computed: {

  }, /* computed */

  mounted () {

  }, /* mounted */

  methods: {
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    },
  } /* methods */

}
</script>

<style>
#loading {
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 100;
  /* background-color: #fff; */
  top: 0;
  left: 0;
  display: flex;
}
.loading-text {
  position: absolute;
  bottom: 0.5em;
  right: 1em;
}
</style>
