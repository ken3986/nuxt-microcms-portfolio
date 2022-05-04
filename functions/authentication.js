require('dotenv').config()
const bcrypt = require('bcryptjs')

// パスワード認証
exports.handler = async (event) => {
  const { hashedPassword } = JSON.parse(event.body)
  console.log(hashedPassword)

  let pwCheck = await bcrypt.compare(process.env.BASIC_PASSWORD, hashedPassword)
  if (pwCheck) {
    return {
      statusCode: 200,
      body: '認証に成功しました。'
    }
  } else {
    return {
      statusCode: 401,
      body: 'パスワードの再入力が必要です。'
    }
  }
}
