
export const state = () => ({
  posts: [],
  noteCategories: [],
  noteTags: [],
})

export const getters = {
  getPosts (state) {
    return state.posts
  },
  getNoteCategories (state) {
    return state.noteCategories
  },
  getNoteTags (state) {
    return state.noteTags
  },
}

export const mutations = {
  setPosts (state, payload) {
    state.posts = payload
  },
  setNoteCategories (state, payload) {
    state.noteCategories = payload
  },
  setNoteTags (state, payload) {
    state.noteTags = payload
  },
}

export const actions = {
  async fetchNoteCategories (context, { $config }) {
    const queries = {
      limit: 20,
    }
    const categories = await context.$microcms.get({
      endpoint: 'note-categories',
      queries: queries,
    })
    context.commit('setNoteCategories', categories.contents)
  },

  async fetchNotePosts (context, data) {
    await context.commit('setPosts', data)
  },

  // async nuxtServerInit(context, { $config }) {
  //   // const resPosts = await this.$axios.$get(`${$config.apiUrl}` + 'note', {
  //   //   headers: { "X-MICROCMS-API-KEY": $config.apiKey }
  //   // })
  //   // console.log($config)
  //   // const resPosts = await $config.client
  //   //   .get({
  //   //     endpoint: 'note',
  //   //     queries: {
  //   //       limit: $config.noteLimit,
  //   //     }
  //   //   })
  //   // context.commit('setPosts', resPosts.contents)

  //   const resCategories = await $config.client
  //     .get({
  //       endpoint: 'note-categories',
  //       queries: {
  //         limit: 20,
  //       }
  //     })
  //   // const resCategories = await this.$axios.$get(`${$config.apiUrl}` + 'note-categories', {
  //   //     headers: { "X-MICROCMS-API-KEY": $config.apiKey }
  //   //   })
  //   //   console.log(resCategories)
  //   context.commit('setNoteCategories', resCategories.contents)

  //   // const resTags = await this.$axios.$get(`${$config.apiUrl}` + 'note-tags', {
  //   //     headers: { "X-MICROCMS-API-KEY": $config.apiKey }
  //   //   })
  //   //   console.log(resCategories)
  //   // context.commit('setNoteTags', resTags.contents)


  //   const resTags = await $config.client
  //     .get({
  //       endpoint: 'note-tags',
  //       queries: {
  //         limit: 100,
  //       }
  //     })
  //   context.commit('setNoteTags', resTags.contents)
  // },

}
