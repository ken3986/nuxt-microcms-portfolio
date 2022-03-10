<template>
  <!-- タグリストコンポーネント -->
  <div class="wrapper">
    <h2>タグ</h2>
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



<style lang="scss" scoped>

  li {
    display: inline-block;
    a {
      background-color: #ccc;
      color: #fff;
      padding: 0.2em 0.5em;
      margin: 0 0.2em 0.5em;
      border-radius: 2px;
      font-size: 12px;
    }
  }
</style>
