
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

  getReferencedCategories (state) {
    let categories = state.categories.map((category) => ({...category}))
    let referencedCategories = categories.map((category) => {
      return Object.assign({referenced: 0}, category)
    })

    for (const post of state.posts) {
      if (post.category) {
        const existCategory = referencedCategories.find((category) => {
          return category.id == post.category.id
        })
        if(existCategory) {
          existCategory.referenced++
        }
      }
    }

    referencedCategories = referencedCategories.filter((category) => category.referenced > 0)

    return referencedCategories
  },

  getReferencedTags (state) {
    let tags = state.tags.map((tag) => ({...tag}))
    let referencedTags = tags.map((tag) => {
      return Object.assign({referenced: 0}, tag)
    })

    for (const post of state.posts) {
      if (post.tags) {
        for (const postTag of post.tags) {
          const existTag = referencedTags.find((tag) => {
            return tag.id === postTag.id
          })
          if (existTag) {
            existTag.referenced++
          }
        }
      }
    }

    referencedTags = referencedTags.filter((tag) => tag.referenced > 0)

    referencedTags.sort((a, b) => {
      if (a.referenced > b.referenced) {
        return -1
      } else {
        return 1
      }
    })
    return referencedTags
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
