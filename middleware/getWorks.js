export default async ({ store, $worksClient }) => {
  if (!store.getters['works/getCategories'].length) {
    const categories = await $worksClient.get({
      endpoint: 'works-categories',
      queries: {
        limit: 100,
      }
    })
    store.commit('works/setCategories', categories.contents)
  }

  if (!store.getters['works/getTags'].length) {
    const tags = await $worksClient.get({
      endpoint: 'works-tags',
      queries: {
        limit: 100,
      }
    })
    store.commit('works/setTags', tags.contents)
  }

  if (!store.getters['works/getPosts'].length) {
    const posts = await $worksClient.get({
      endpoint: 'works',
      queries: {
        limit: 1000,
      }
    })
    store.commit('works/setPosts', posts.contents)
  }

}
