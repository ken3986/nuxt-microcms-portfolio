require('dotenv').config()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
// const saltRounds = 10

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

  const payload = {
    password: password,
  }
  // const token = jwt.sign(payload, 'secret')
  const salt = await bcrypt.genSalt(10)
  const token = await bcrypt.hash(password, salt)
  // const token = bcrypt.hashSync(event.body.password, saltRounds)
  console.log(token)
  // const token2 = jwt.verify(token, 'secret', (err, decoded) => {
  //   if (err) {
  //     console.log('err')
  //   } else {
  //     console.log('else')
  //   }
  // })
  let pwCheck = await bcrypt.compare(process.env.BASIC_PASSWORD, token)
  // .then(() => {
  //   console.log('compare')
  //   return {
  //     statusCode: 200,
  //     body:  JSON.stringify('compare')
  //   }
  // })
  // .catch((error) => {
  //   console.log(error)
  // })
  console.log(pwCheck)
  if (pwCheck) {
    return {
      statusCode: 200,
      body: 'compared'
    }
  }
  // console.log(token2)

  // if (password === process.env.BASIC_PASSWORD) {
  //   return {
  //     statusCode: 200,
  //     // body: 'OK',
  //     body: JSON.stringify({ token })
  //   }
  // }
  //  else {
  //   return {
  //     statusCode: 401,
  //     body: 'パスワードが違います。'
  //   }
  // }

  return {
    statusCode: 200,
    body: 'test'
  }

}
