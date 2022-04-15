<template>
<!-- サイドバーコンポーネント -->
  <div id="sidebar">
      <aside>
        <Profile></Profile>
      </aside>

      <!-- 検索 -->
      <aside>
        <Search></Search>
      </aside>

      <!-- カテゴリー -->
      <aside>
        <Categories></Categories>
      </aside>

      <!-- タグ -->
      <aside>
        <Tags></Tags>
      </aside>

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

  #sidebar {
    position: sticky;
    // top: $site-header-space;
    // border: 1px solid #aaa;
    padding: 15px;
    background-color: #f4eec0;

    aside {
      padding: 15px 0;
      &:first-child {
        padding-top: 0;
      }
      &:not(:last-child) {
        border-bottom: 1px solid #aaa;
      }
    }
  }

</style>
