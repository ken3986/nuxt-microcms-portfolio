<template>
  <!-- タグリストコンポーネント -->
  <div class="wrapper">
    <h1 class="pageTitle">タグ</h1>
    <ul class="list">
      <li class="listItem" v-for="tag in tags" :key="tag.id">
        <NuxtLink
         :to="`/tag/${tag.id}/page/1`"
         class="link"
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
    })
  }, /* computed */

  mounted () {

  }, /* mounted */

  methods: {

  } /* methods */

}
</script>



<style>

</style>
