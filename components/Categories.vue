<template>
<!-- カテゴリーリストコンポーネント -->
  <div class="wrapper">
    <h2 class="widget-title">カテゴリー</h2>
    <!-- {{referencedCategories}} -->
    <ul>
      <li class="list" v-for="category in referencedCategories" :key="category.id">
        <NuxtLink
          :to="{
            path: `/works/category/${category.id}/page/1`,
            }"
          class="link"
          :class="{active: $route.params.id == category.id}"
        >{{ category.name }}（{{ category.referenced }}）</NuxtLink>
        <!-- <NuxtLink
          :to="{
            path: `/works/category/${category.id}/page/1`,
            }"
          class="link"
        >{{ category.name }}</NuxtLink> -->
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Categories',

  props: {

  },

  data () {
    return {

    }
  }, /* data */

  computed: {
    ...mapGetters({
      categories: 'works/getCategories',
      referencedCategories: 'works/getReferencedCategories'
    })
  }, /* computed */

  mounted () {

  }, /* mounted */

  methods: {

  } /* methods */

}
</script>







<style lang="scss" scoped>
.active {
  color: $primary;
}
</style>
