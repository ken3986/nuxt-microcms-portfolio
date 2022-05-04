export default async ({ store, redirect, route, $axios, app }) => {
// console.log(store.commit)
  // ログインしている場合
  if (store.state.loggedIn) {
    // ログインしていてログインページにいる場合
    if (route.path === '/login') {
      return redirect({
        path: '/'
      })
    }
    return false
  }

  console.log(app.$cookies.get('teten-portfolio'))
console.log('authenticated')
// const hello = await $axios.get('/.netlify/functions/hello')
// console.log(hello)
  // 認証パスを持っている場合
  // if (app.$cookies.get('teten-portfolio')) {
  //   const response = await $axios.post('/.netlify/functions/authentication', {
  //     hashedPassword: app.$cookies.get('teten-portfolio')
  //   })
  //   if (response.status == 200) {
  //     store.commit('login')

  //     if (route.path === '/login') {
  //       return redirect({
  //         path: '/'
  //       })
  //     }
  //     return false
  //   }
  // }

  // // ログインしておらず、認証パスを持っていない場合

  //   // ログインページにいる場合
  //   if (route.path === '/login') {
  //     return false
  //   }

  //   // ログインページ以外にいる場合
  //   return redirect({
  //     path: '/login',
  //     query: {
  //       showMessage: true,
  //       redirect: route.path,
  //     }
  //   })


}
