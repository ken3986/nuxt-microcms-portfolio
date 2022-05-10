<template>
  <div>
    <template v-if="error.statusCode === 404">
      <h2>ページが見つかりません。</h2>
      <p>URLに間違いがないかご確認ください。</p>
      <NuxtLink to="/">TOP</NuxtLink>
    </template>
    {{ error }}
  </div>
</template>

<script>
export default {
  name: '',

  props: [ 'error' ],

  data () {
    return {

    }
  }, /* data */

  computed: {

  }, /* computed */

  mounted () {
    console.log(this.error)
  }, /* mounted */

  methods: {

  } /* methods */

}
</script>

<style>

</style>
