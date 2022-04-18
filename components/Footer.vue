<template>
  <footer class="footer">
      <p class="text-center">Copyright © {{ $SITE_NAME }}, all right reserved.</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',

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

<style lang="scss">
/* Sticky footer styles
-------------------------------------------------- */
html {
  position: relative;
  min-height: 100%;
}
body {
  /* Margin bottom by footer height */
  margin-bottom: 60px;
}

.footer {
  width: 100%;
  height: 5em;
  padding: 1em;
  background-color: #7e6752;
  font-size: fz(14);
  font-family: $font-ubuntu;
  color: #8d8d8d;
  display: flex;
  align-items: center;
  p {
    margin: 0 auto;
  }
}


</style>
