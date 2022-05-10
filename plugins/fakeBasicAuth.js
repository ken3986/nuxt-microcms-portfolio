export default async ({ store, $axios }) => {  // const whiteURL = ['192.168.86.87:3000', 'example.com']
  const app_name = 'teten-portfolio'
  let password = ''

  // if (whiteURL.includes(location.host)) {
  //   htmlElStyle.opacity = 1
  //   return
  // }

  if (store.state.loggedIn) {
    return
  }

  if (localStorage.getItem(app_name)) {
    password = localStorage.getItem(app_name)

    const response = await $axios
      .post('/.netlify/functions/authentication', {
        hashedPassword: password
      })
      .catch((error) => ({ error }))

    if (response.status === 200) {
      store.commit('login')
      return
    }
  }


  const htmlElStyle = document.querySelector('html').style
  htmlElStyle.opacity = 0


  window.setTimeout(async () => {
    const inputPassword = window.prompt('パスワードを入力してください', '')

    if (inputPassword) {
      password = inputPassword
      const response = await $axios
        .post('/.netlify/functions/login', {
          password: inputPassword
        })
        .catch((error) => ({ error }))

      if (response.status === 200) {
        store.commit('login')
        localStorage.setItem('teten-portfolio', response.data.hashedPassword)
        htmlElStyle.opacity = 1
      } else {
        window.alert('パスワードをご確認ください。')
        location.reload()
      }
    } else {
      window.alert('パスワードが入力されていません。')
      location.reload()
    }

  }, 500)


}
