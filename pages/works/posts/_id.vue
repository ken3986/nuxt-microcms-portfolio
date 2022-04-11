<template>
<!-- 記事詳細ページ -->

  <main class="main">

    <!-- タイトル -->
    <h1 class="title" v-if="title">{{ title }}</h1>


    <div v-if="body" class="post-body">
      <div v-for="item in body" :key="item.id">
        <div v-if="item.richText" v-html="item.richText"></div>

        <div v-if="item.modal_picture">
          <img v-b-modal="'my-modal'" :src="item.modal_picture.url" alt="">
        </div>
      </div>
      <!-- <div class="post-body-richText" v-if="body" v-html="body.richText"></div> -->
      <!-- {{ body }} -->
    </div>

    <b-modal id="my-modal">Hello</b-modal>
  </main>
</template>

<script>
import cheerio from 'cheerio'
import hljs from 'highlight.js'

export default {
  name: '',

  layout: 'works',

  async asyncData(context) {
    const post = await context.$worksClient.getListDetail({
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

    let body = ''
    if (post.body) {
      body = post.body.map(item => ({...item}))
      body.map((item, i) => {
        item.id = i
        return item
      })
    }

    return {
      ...post,
      richText: richText,
      body: body
    }
  },

  mounted () {

  },

  data () {
    return {

    }
  }, /* data */

  computed: {

  }, /* computed */

  methods: {

  } /* methods */

}
</script>


<style lang="scss" scoped>
.main {
  // width: 960px;
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
