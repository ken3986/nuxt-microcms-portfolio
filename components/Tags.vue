<template>
  <!-- タグリストコンポーネント -->
  <div class="wrapper">
    <h2 class="widget-title">タグ</h2>
    <ul class="list">
      <li class="listItem" v-for="tag in referencedTags" :key="tag.id">
        <NuxtLink
          :to="{
            path: `/works/tag/${tag.id}/page/1`,
            }"
          class="link"
          :class="{active: $route.params.id == tag.id}"
        >{{ tag.name }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Tags',

  props: {

  },

  data () {
    return {

    }
  }, /* data */

  computed: {
    ...mapGetters({
      tags: 'works/getTags',
      referencedTags: 'works/getReferencedTags',
    })
  }, /* computed */

  mounted () {

  }, /* mounted */

  methods: {

  } /* methods */

}
</script>



<style lang="scss" scoped>

  li {
    display: inline-block;
    margin-right: 0.4em;
    margin-bottom: 0.3em;
    a {
      background-color: $secondary;
      color: #fff;
      padding: 0.2em 0.5em;
      border-radius: 2px;
      font-size: fz(13);
      text-decoration: none;
      &.active {
        // background-color: $primary;
        background-color: map-get($theme-colors, primary);
      }
    }
  }
.link:hover {
  background-color: $primary;
}
</style>
