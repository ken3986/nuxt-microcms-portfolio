export default ({ store, route, redirect, app })  => {
  // if(!context.store.state.loggedIn) {
  // if(route.path !== '/login') {
  //  //storeのgettersにtokenがなかったら、ログインページに飛ばしているよ！
  //  redirect('/login')
  // }
  console.log('middle-auth')
  if (store.state.loggedIn) {
    // ログインしていてログインページにいる場合
    if (route.path === '/login') {
      return redirect({
        path: '/'
      })
    }
    return false
  }
    // ログインしておらず、認証パスを持っていない場合

    // ログインページにいる場合
    if (route.path === '/login') {
      return false
    }
    console.log('ログインページ以外')
    // ログインページ以外にいる場合
    app.router.push({
      path: '/login',
      query: {
        showMessage: true,
        redirect: route.path,
      }
    },
    // 完了時（失敗時も動く）
    () => {},
    // 失敗時
    (err) => {
      console.log(err)
    })
 }
