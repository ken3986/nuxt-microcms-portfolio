<template>
  <main class="main" v-if="post">
    <h1>下書き</h1>
    <h1 class="title">{{ post.title }}</h1>
    <p class="publishedAt">{{ post.publishedAt }}</p>
    <div class="post" v-html="post.content"></div>
  </main>
</template>

<script>
import axios from 'axios'

export default {
  name: '',

  data () {
    return {
      post: {}
    }
  }, /* data */

  computed: {

  }, /* computed */

  async created() {
    const query = this.$route.query
    if (query.id === undefined || query.draftKey === undefined) {
      return
    }
    const result = await axios.get(
      `/.netlify/functions/draft?id=${query.id}&draftKey=${query.draftKey}`
    )
    .catch((err) => {
      console.log(err)
    })

    this.post = result.data
  },

  mounted () {

  }, /* mounted */

  methods: {

  } /* methods */

}
</script>

<style>

</style>
