<template>
  <footer class="footer">
    <div class="container">
      <p class="text-muted text-right">Place sticky footer content here.</p>
    </div>
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
  position: absolute;
  bottom: 0;
  width: 100%;
  /* Set the fixed height of the footer here */
  height: 60px;
  background-color: #f5f5f5;
    /* Custom page CSS
    -------------------------------------------------- */
    /* Not required for template or sticky footer method. */

    .container {
      width: auto;
      padding: 0 15px;
    }
    .container .text-muted {
      margin: 20px 0;
    }
}


</style>
