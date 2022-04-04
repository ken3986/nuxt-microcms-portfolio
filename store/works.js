
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
    let categories = []

    for (const post of state.posts) {
      if (post.category) {
        const existCategory = categories.find((category) => {
          if (category.id) {
            return category.id == post.category.id
          } else {
            return false
          }
        })
        if(!existCategory) {
          categories.push(Object.assign({referenced: 1}, post.category))
        } else {
          existCategory.referenced++
        }
      }
    }

    categories.sort((a, b) => {
      if (a.referenced > b.referenced) {
        return -1
      } else {
        return 1
      }
    })
    return categories
  },

  getReferencedTags (state) {
    let tags = []

    for (const post of state.posts) {
      if (post.tags) {
        for (const postTag of post.tags) {
          const existTag = tags.find((tag) => {
            if (tag.id) {
              return tag.id === postTag.id
            } else {
              return false
            }
          })
          if (!existTag) {
            tags.push(Object.assign({referenced: 1}, postTag))
          } else {
            existTag.referenced++
          }
        }
      }
    }

    tags.sort((a, b) => {
      if (a.referenced > b.referenced) {
        return -1
      } else {
        return 1
      }
    })
    return tags
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
