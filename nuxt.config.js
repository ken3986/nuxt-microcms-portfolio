import Sass from 'sass'
import Fiber from 'fibers'

import {
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
    "~assets/scss/common.scss",
    {
      src: '~/node_modules/highlight.js/styles/monokai-sublime.css',
      lang: 'css',
    },
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '@/plugins/microcmsPlugins',
      mode: process.env.NODE_ENV === 'production' ? 'server' : 'all',
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxt/http',
    'bootstrap-vue/nuxt',
    '@nuxtjs/proxy',
  ],

  bootstrapVue: {
    icons: true
  },

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
    WORKS_SERVICE_DOMAIN: process.env.WORKS_SERVICE_DOMAIN,
    WORKS_API_KEY: process.env.WORKS_API_KEY,
    GENERAL_SERVICE_DOMAIN: process.env.GENERAL_SERVICE_DOMAIN,
    GENERAL_API_KEY: process.env.GENERAL_API_KEY,
  },
  publicRuntimeConfig: {
    siteName: 'ポートフォリオ',
    worksApiConfig: worksApiConfig,
    WORKS_SERVICE_DOMAIN: process.env.NODE_ENV !== 'production' ? process.env.WORKS_SERVICE_DOMAIN : undefined,
    WORKS_API_KEY: process.env.NODE_ENV !== 'production' ? process.env.WORKS_API_KEY : undefined,
    GENERAL_SERVICE_DOMAIN: process.env.NODE_ENV !== 'production' ? process.env.GENERAL_SERVICE_DOMAIN : undefined,
    GENERAL_API_KEY: process.env.NODE_ENV !== 'production' ? process.env.GENERAL_API_KEY : undefined,
  },

  generate: {

  }, /* generate */


  router: {

  },

  proxy: {
    '/.netlify': 'http://localhost:9000'
  },
}
