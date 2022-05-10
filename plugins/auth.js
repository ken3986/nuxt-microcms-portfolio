export default async ({ app, store, $axios }) => {
  app.router.beforeEach(async (to, from, next) => {
    console.log(store.state.loggedIn)
    console.log('to' + to.path)
    // if (to.path !== '/login') {
    //   next({ path: '/login' })
    //   return
    // }

    if (to.path === '/login' && store.state.loggedIn) {
      console.log('2')
      next({ path: '/' })
      return
    }

    if (to.path === '/login' && !store.state.loggedIn) {
      if (app.$cookies.get('teten-portfolio')) {
        const response = await $axios.post('/.netlify/functions/authentication', {
          hashedPassword: app.$cookies.get('teten-portfolio')
        })
        if (response.status === 200) {
          store.commit('login')
          next({ path: '/' })
          return
        }
      }
      next()
      return
    }

    if (to.path !== '/login' && store.state.loggedIn) {
      console.log('4')
      next()
      return
    }

    if (to.path !== '/login' && !store.state.loggedIn) {
      if (app.$cookies.get('teten-portfolio')) {
        const response = await $axios.post('/.netlify/functions/authentication', {
          hashedPassword: app.$cookies.get('teten-portfolio')
        })
        if (response.status === 200) {
          store.commit('login')
          next()
          return
        }
      }
      next({ path: '/login' })
      return
    }

  })

}
