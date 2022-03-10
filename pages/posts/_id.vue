<template>
<!-- 記事詳細ページ -->

  <main class="main">
    <NuxtLink
      :to="`/`"
    >HOME</NuxtLink>
    <p>個別</p>
    <!-- タイトル -->
    <h1 class="title" v-if="title">{{ title }}</h1>
    <!-- 公開日 -->
    <p class="publishedAt" v-if="publishedAt">{{ publishedAt }}</p>
    <!-- 本文 -->
    <div class="content" v-if="content" v-html="content"></div>
  </main>
</template>

<script>
import cheerio from 'cheerio'
import hljs from 'highlight.js'

export default {
  name: '',

  layout: 'works',

  async asyncData(context) {
    const post =
     context.payload ||
     await context.$microcms.getListDetail({
      endpoint: 'works',
      contentId: context.params.id
    })

    if (!post) {
      return context.error({ statusCode: '404', message: 'お探しのページは見つかりませんでした' })
    }

    // シンタックスハイライト処理
    let richText = ''
    if (post.richText) {
      const $ = cheerio.load(post.richText)
      $('pre code').each((__, elm) => {
        const result = hljs.highlightAuto($(elm).text())
        $(elm).html(result.value)
        $(elm).addClass('hljs')
      })
      richText = $.html()
    }

    return {
      ...post,
      richText: richText,
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


<style lang="scss" scoped>
.main {
  width: 960px;
  margin: 0 auto;
}

.title {
  margin-bottom: 20px;
}

.publishedAt {
  margin-bottom: 40px;
}

.richText ::v-deep {
  & > h1 {
    font-size: 30px;
    font-weight: bold;
    margin: 40px 0 20px;
    background-color: #eee;
    padding: 10px 20px;
    border-radius: 5px;
  }

  & > h2 {
    font-size: 24px;
    font-weight: bold;
    margin: 40px 0 16px;
    border-bottom: 1px solid #ddd;
  }

  & > p {
    line-height: 1.8;
    letter-spacing: 0.2px;
  }

  & > ol {
    list-style-type: decimal;
    list-style-position: inside;
  }
}


</style>
