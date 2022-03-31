
export const state = () => ({
  posts: [],
  categories: [],
  tags: [],
})

export const getters = {
  getPosts (state) {
    return state.posts
  },

  filteredPosts: (state, getters) => ({
    categoryId: categoryId,
    tagId: tagId,
  } ={}) => {
    if (categoryId) {
      const result = getters.getPosts.filter((post) => {
        if (post.category) {
          return post.category.id == categoryId
        }
      })
      return result
    }
    else if (tagId) {
      const result = getters.getPosts.filter((post) => {
        if (post.tag) {
          return post.tag.id == tagId
        }
      })
      return result
    }
    return getters.getPosts
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
