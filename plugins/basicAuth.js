// const axios = require('axios')

export default async ( { store, redirect, route, $axios, app, nuxtState } ) => {
  app.router.beforeEach((to, from, next) => {

    if (to.path !== '/login' && !store.state.loggedIn) {
      // app.methods.setLayout('default')
      // route.matched[0].components.default.options.layout = "default"
      next({ path: '/login' })
      // redirect({ path: '/login' })
    } else {
      next()
    }

  })

//     if (route.path !== '/about') {
//       app.router.push({
//         path: '/about'
//       }, () => {
//         console.log('success')
//       },
//       (err) => {
//         console.log(err)
//       })
//       // redirect({
//       //   path: '/about',
//       // }).catch((err) => {
//       //   console.log(err);
//       // })
//     }
//     // .catch((err) => {
//     //   console.log(err)
//     // })
//   // }

//   // window.location.href = ('/about')
// //   app.router.push({
// //     name: 'about'
// //   })
// if (route.path==='/login') {
//   console.log('login')
//   console.log(app.router.push)
// }
//   const app_name = 'teten-portfolio'
//   // ログインしている場合
//   if (store.state.loggedIn) {
//     // ログインしていてログインページにいる場合
//     if (route.path === '/login') {
//       return redirect({
//         path: '/'
//       })
//     }
//     return false
//   }

//   // 認証パスがある場合
//   if (app.$cookies.get(app_name)) {
//     const response = await $axios.post('/.netlify/functions/authentication', {
//       hashedPassword: app.$cookies.get(app_name)
//     })

//     if (response.status == 200) {
//       store.commit('login', )

//       if (route.path === '/login') {
//         return redirect({
//           path: '/'
//         })
//       }
//     }
//   }
// // console.log('どこ')
//   // ログインしておらず、認証パスを持っていない場合

//     // ログインページにいる場合
//     if (route.path === '/login') {
//       return false
//     }
// // console.log('ここ')
// // console.log(redirect)
// // redirect('/login')
//     // ログインページ以外にいる場合
//     window.location.href = ('/login')
//     redirect({
//       path: '/login',
//       query: {
//         showMessage: true,
//         redirect: route.path,
//       }
//     })


}

