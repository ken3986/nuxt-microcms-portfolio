const axios = require('axios')

const fakeBasicAuth = async () => {
  const whiteURL = ['192.168.86.87:3000', 'example.com']

  const htmlElStyle = document.querySelector('html').style
  htmlElStyle.opacity = 0


  if (whiteURL.includes(location.host)) {
    htmlElStyle.opacity = 1
    return
  }

  let password = ''

  // const localPassword = localStorage.getItem('fakeAuthStr')
  // if (localPassword !== null) {
  //   password = localPassword
  //   const result = await axios
  //     .get(`/.netlify/functions/basicAuth?password=${password}`)
  //     .catch((error) => ({ error }))
  //   if (result.status === 200) {
  //     // window.alert('ローカルからパスワードを読み込み')
  //     htmlElStyle.opacity = 1
  //     return
  //   }
  // }

  const inputPassword = window.prompt('パスワードを入力してください', '')
  password = inputPassword

  const result = await axios
    // .get(`/.netlify/functions/basicAuth?password=${inputPassword}`)
    .get(`/api/basicAuth.js?password=${inputPassword}`)
    .catch((error) => ({ error }))
  console.log(result)

  if (result.status === 200) {
    localStorage.setItem('fakeAuthStr', inputPassword)
    window.alert('パスワードは合っています')
    htmlElStyle.opacity = 1
  } else {
    htmlElStyle.opacity = 0
    htmlElStyle.pointerEvents = 'none'
    window.alert('パスワードが違います')
  }


}
fakeBasicAuth()
