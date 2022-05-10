require('dotenv').config()
const bcrypt = require('bcryptjs')

// パスワード認証
exports.handler = async (event) => {
  const { hashedPassword } = JSON.parse(event.body)

  let pwCheck = await bcrypt.compare(process.env.BASIC_PASSWORD, hashedPassword)
  if (pwCheck) {
    return {
      statusCode: 200,
      body: JSON.stringify({
        error: '認証に成功しました。'
      })
    }
  } else {
    return {
      statusCode: 401,
      body: JSON.stringify({
        error: 'パスワードの再入力が必要です。'
      })
    }
  }
}
