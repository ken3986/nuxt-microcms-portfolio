require('dotenv').config()

exports.handler = async (event) => {
  const { password } = event.queryStringParameters
  if (!password) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        error: 'パスワードが入力されていません。'
      })
    }
  }

  if (password === process.env.BASIC_PASSWORD) {
    return {
      statusCode: 200,
      body: 'OK',
    }
  } else {
    return {
      statusCode: 503,
      body: 'パスワードが違います。'
    }
  }
}
