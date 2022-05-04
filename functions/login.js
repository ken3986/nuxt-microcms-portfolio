require('dotenv').config()
const bcrypt = require('bcryptjs')


exports.handler = async (event) => {
  console.log(JSON.parse(event.body).password)
  const { password } = JSON.parse(event.body)

  if (!password) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        error: 'パスワードが入力されていません。'
      })
    }
  }

  if (password === process.env.BASIC_PASSWORD) {
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    console.log(hashedPassword)
    return {
      statusCode: 200,
      // body: 'OK',
      body: JSON.stringify({ hashedPassword })
    }
  }
  else {
    return {
      statusCode: 401,
      body: 'パスワードが違います。'
    }
  }

  return {
    statusCode: 200,
    body: 'test'
  }

}
