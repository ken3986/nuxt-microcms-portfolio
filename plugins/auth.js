export default async ({ app, store, $axios }) => {
  app.router.beforeEach(async (to, from, next) => {
    console.log(store.state.loggedIn)
    if (to.path !== '/login') {
      next({ path: '/login' })
    }
    next()
    // if (to.path === '/login' && store.state.loggedIn) {
    //   next({ path: '/' })
    // }

    // if (to.path === '/login' && !store.state.loggedIn) {
    //   if (app.$cookies.get('teten-portfolio')) {
    //     const response = await $axios.post('/.netlify/functions/authentication', {
    //       hashedPassword: app.$cookies.get('teten-portfolio')
    //     })
    //     if (response.status === 200) {
    //       store.commit('login')
    //       next({ path: '/' })
    //     }
    //   }
    //   next()
    // }

    // if (to.path !== '/login' && store.state.loggedIn) {
    //   next()
    // }

    // if (to.path !== '/login' && !store.state.loggedIn) {
    //   if (app.$cookies.get('teten-portfolio')) {
    //     const response = await $axios.post('/.netlify/functions/authentication', {
    //       hashedPassword: app.$cookies.get('teten-portfolio')
    //     })
    //     if (response.status === 200) {
    //       store.commit('login')
    //       next()
    //     }
    //   }
    //   next({ path: '/login' })
    // }

  })

}
