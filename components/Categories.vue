<template>
<!-- カテゴリーリストコンポーネント -->
  <div class="wrapper">
    <h2 class="widget-title">カテゴリー</h2>
    <ul>
      <li class="list" v-for="category in categories" :key="category.id">
        <NuxtLink
          :to="`/category/${category.id}/page/1`"
          class="link"
        >{{ category.name }}</NuxtLink>
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
    })
  }, /* computed */

  mounted () {

  }, /* mounted */

  methods: {

  } /* methods */

}
</script>







<style lang="scss" scoped>

</style>
