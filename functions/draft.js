const { client, worksApiConfig } = require('../utils/microcms')

exports.handler = async (event) => {
  const { id, draftKey } = event.queryStringParameters
  if (!id) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        error: 'Missing "id" query parameter',
      })
    }
  }

  const queries = {
    draftKey: draftKey,
  }

  return client
    .getListDetail({
      endpoint: 'works',
      contentId: id,
      queries: queries,
    })
      .then((res) => {
        return {
          statusCode: 200,
          body: JSON.stringify(res)
        }
      })
      .catch((error) => {
        console.log(error)
        return {
          statusCode: error.response.status,
          body: JSON.stringify(error.response.data)
        }
      })
}
