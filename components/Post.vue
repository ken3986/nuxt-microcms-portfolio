<template>
  <div>
    <NuxtLink
      :to="`/`"
    >HOME</NuxtLink>
    <p>個別</p>
    <!-- タイトル -->
    <h1 class="title" v-if="data.title">{{ data.title }}</h1>
    <!-- 公開日 -->
    <p class="publishedAt" v-if="data.publishedAt">{{ data.publishedAt }}</p>
    <!-- 本文 -->
    <div class="richText" v-if="data.richText" v-html="data.richText"></div>
  </div>
</template>

<script>
export default {
  name: 'Post',

  props: {
    post:  {
      type: Object,
      require: true,
    }
  },

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

<style>

</style>
