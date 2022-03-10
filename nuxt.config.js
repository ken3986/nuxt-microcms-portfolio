import Sass from 'sass'
import Fiber from 'fibers'
import axios from 'axios'

import {
  client,
  worksApiConfig,
 } from './utils/microcms.js'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-microcms-test',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    {
      src: '~/node_modules/highlight.js/styles/monokai-sublime.css',
      lang: 'css',
    },
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // '@/plugins/constants',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxt/http',
    'bootstrap-vue/nuxt',
    '@nuxtjs/proxy'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      scss: {
        implementation: Sass,
        sassOptions: {
          fiber: Fiber
        }
      }
    },
    babel: {
      babelrc: false,
      compact: false,
      plugins: [
        [
          '@babel/plugin-proposal-private-methods', {
            loose: true,
          }
        ]
      ]
    },
    extend: function (config, {isDev, isClient}) {
      config.node = {
        fs: "empty"
      }
    }
  },

  privateRuntimeConfig: {
    // client: client,
    // apiKey: process.env.API_KEY,
  },
  publicRuntimeConfig: {
    siteName: 'nuxt-microcms-test',
    apiUrl: process.env.API_URL,
    worksApiConfig: worksApiConfig,
    postsForPage: worksApiConfig.postsForPage,
  },

  buildModules: ['nuxt-microcms-module'],

  microcms: {
    options: {
      serviceDomain: process.env.SERVICE_DOMAIN,
      apiKey: process.env.API_KEY,
    },
    mode: process.env.NODE_ENV === 'production' ? 'server' : 'all',
  },

  generate: {
    async routes () {
      let routes = []

      // 記事詳細ページの生成
      const posts = await client
        .get({
          endpoint: worksApiConfig.endpoint,
          queries: {
            limit: worksApiConfig.limit,
          }
        })
          .then((res) => {
            return res.contents.map((content) => ({
              route: `/posts/${content.id}`,
              payload: content,
            }))
          })


      // ページングページの生成
      const range = (start, end) =>
        [...Array(end - start + 1)].map((_, i) => start + i)
      const postsForPage = worksApiConfig.postsForPage

      const pages = await client
        .get({
          endpoint: worksApiConfig.endpoint,
          queries: {
            limit: 0,
          }
        })
          .then((res) => {
            return range(1, Math.ceil(res.totalCount / postsForPage)).map((p) => ({
              route: `/page/${p}`
            }))
          })


      // カテゴリーページの生成
      const categories = await client
          .get({
            endpoint: 'works-categories',
            queries: {
              fields: 'id',
            }
          })
            .then((res) => {
              return res.contents.map((content) => content.id)
            })

      const categoryPages = await Promise.all(
        categories.map((category) => {
          return client.get({
              endpoint: worksApiConfig.endpoint,
              queries: {
                limit: 0,
                filters: `category[equals]${category}`
              }

          })
            .then((res) => {
              return range(1, Math.ceil(res.totalCount / postsForPage)).map((p) => ({
                route: `/category/${category}/page/${p}`,
              }))
            })
        })
      )
      const flattenCategoryPages = [].concat.apply([], categoryPages)

      // タグページの生成
      const tags = await client
          .get({
            endpoint: 'works-tags',
            queries: {
              fields: 'id',
            }
          })
            .then((res) => {
              return res.contents.map((content) => content.id)
            })

      const tagPages = await Promise.all(
        tags.map((tag) => {
          return client.get({
              endpoint: worksApiConfig.endpoint,
              queries: {
                limit: 0,
                filters: `tags[contains]${tag}`
              }

          })
            .then((res) => {
              return range(1, Math.ceil(res.totalCount / postsForPage)).map((p) => ({
                route: `/tag/${tag}/page/${p}`,
              }))
            })
        })
      )
      const flattenTagPages = [].concat.apply([], tagPages)

      routes = [
        ...posts,
        ...pages,
        ...flattenCategoryPages,
        ...flattenTagPages,
      ]

      return routes
    },
  },

  router: {
    extendRoutes(routes, resolve) {
      // ページングルート
      routes.push({
        path: '/page/:p',
        component: resolve(__dirname, 'pages/index.vue'),
        name: 'page',
      })
      // カテゴリールート
      routes.push({
        path: '/category/:categoryId/page/:p',
        component: resolve(__dirname, 'pages/index.vue'),
        name: 'category',
      })
      // タグルート
      routes.push({
        path: '/tag/:tagId/page/:p',
        component: resolve(__dirname, 'pages/index.vue'),
        name: 'tag',
      })

    }
  },

  proxy: {
    '/.netlify': 'http://localhost:9000'
  },
}
