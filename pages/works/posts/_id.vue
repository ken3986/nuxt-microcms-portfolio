<template>
<!-- 記事詳細ページ -->

  <main id="post-detail">



    <!-- タイトル -->
    <h1 class="post-title" v-if="title">{{ title }}</h1>

    <!-- タグ -->
    <ul class="post-tag-list">
      <li v-for="tag in tags" :key="tag.id" class="post-tag-list-item">
        <NuxtLink
          :to="{
            path: `/works/tag/${tag.id}/page/1`,
          }"
        >{{ tag.name }}</NuxtLink>
      </li>
    </ul>

    <div v-if="body" class="post-body">
      <div v-for="item in body" :key="item.id">
        <div
          v-if="item.richText" v-html="item.richText"
          class="post-body-text"
        ></div>

        <div
          v-if="item.gallery"
        >
          <b-row>
            <b-col
              v-for="picture in $numberIndex(item.gallery)"
              :key="picture.id"
              class="mb-4"
              lg="6"
            >
              <enlargeable-image
                :src="picture.modal_picture.url"
                :src_large="picture.modal_picture.url"
              ></enlargeable-image>
              <!-- <figure v-if="picture.modal_picture">
                <img :src="picture.modal_picture.url" alt="">
              </figure> -->
            </b-col>
          </b-row>
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

import metaMixin from '~/mixins/metaMixin'

export default {
  name: '',

  // layout: 'works',

  mixins: [
    metaMixin,
  ],

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

    let body = []
    if (post.body) {
      body = context.$numberIndex(post.body)
    }

    // メタデータの設定
    const headMeta = {}
    if (post.title) {
      headMeta.title = post.title
    }
    if (post.thumbnail) {
      headMeta.image = post.thumbnail.url
    }


    return {
      ...post,
      richText: richText,
      body: body,
      meta: headMeta,
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
.post-tag-list {
  &-item {
    display: inline-block;
    margin-right: 0.4em;
    margin-bottom: 0.5em;
    a {
      padding: 0.2em 0.5em;
      background-color: $secondary;
      font-size: fz(12);
      color: #fff;
      border-radius: 2px;
    }
  }
}

.post-title {
  margin-bottom: 0.5rem;
  background-color: #88c34b;
  color: #fff;
  padding: 0.75em 0.5em;
  font-size: fz(30);
}

.publishedAt {
  margin-bottom: 40px;
}

.post-body-text ::v-deep{
  border: 1px solid #000;
  background-color: #fff;
  border-radius: 5px;
  padding: 1em;
  margin-bottom: 1em;

  h1 {
    font-size: 30px;
    margin: 40px 0 20px;
    background-color: #eee;
    padding: 10px 20px;
    border-radius: 5px;
  }

  h2 {
    font-size: fz(24);
    border-left: 7px solid map-get($theme-colors, primary);
    // background-color: #f5e7bb;
    padding: 0.2em 0.5em;
    margin-bottom: 1em;
  }

  h3 {
    font-size: fz(20);
  }

  p {
    line-height: 1.8;
    letter-spacing: 0.2px;
  }

  ol {
    list-style-type: decimal;
    list-style-position: inside;
  }

  a {
    color: $blue;
    text-decoration: underline;
  }
}





</style>
