<template>
<!-- サイドバーコンポーネント -->
  <div>
    サイドバー
    <Categories></Categories>
    <Tags></Tags>
    <button @click.prevent="test">
      test
    </button>
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
    test () {
      console.log('test')
      this.$store.dispatch('test')
    }
  } /* methods */

}
</script>

<style>

</style>
