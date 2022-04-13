<template>
  <footer class="footer">
      <p class="text-muted text-center">@2022 {{ $SITE_NAME }}</p>
    <!-- <div class="container">
    </div> -->
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
  height: 3em;
  padding: 1em;
  background-color: #f5f5f5;
  font-size: fz(14);
  font-family: $font-ubuntu;
}


</style>
