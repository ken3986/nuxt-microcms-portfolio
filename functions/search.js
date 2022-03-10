const { client, worksApiConfig } = require('../utils/microcms')

exports.handler = async (event) => {
  const { q } = event.queryStringParameters
  if (!q) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        error: 'Missing "q" query parameter'
      })
    }
  }

  const query = {
    q: q,
    limit: worksApiConfig.getPostsLimit,
  }

  return client
    .get({
      endpoint: 'works',
      queries:  query,
    })
    .then((data) => {
      return {
        statusCode: 200,
        body: JSON.stringify(data)
      }
    })
    .catch((error) => ({
      statusCode: 400,
      body: String(error)
    }))
}
