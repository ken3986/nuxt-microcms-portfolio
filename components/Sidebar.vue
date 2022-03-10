<template>
<!-- サイドバーコンポーネント -->
  <div class="sidebar">
    <div class="sidebar-inner">
      <Categories></Categories>
      <Tags></Tags>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Sidebar',

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
  @import "~assets/scss/common.scss";

  .sidebar {
    position: sticky;
    top: $site-header-space;
  }

</style>
