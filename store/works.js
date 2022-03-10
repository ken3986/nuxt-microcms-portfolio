
export const state = () => ({
  posts: [],
  categories: [],
  tags: [],
})

export const getters = {
  getPosts (state) {
    return state.posts
  },
  getCategories (state) {
    return state.categories
  },
  getTags (state) {
    return state.tags
  },
}

export const mutations = {
  setPosts (state, payload) {
    state.posts = payload
  },
  setCategories (state, payload) {
    state.categories = payload
  },
  setTags (state, payload) {
    state.tags = payload
  },
}

export const actions = {

}
