const { createClient } = require('microcms-js-sdk')
require('dotenv').config()

/*------------------------------*/
/* GeneralService */
/*------------------------------*/
// const { GENERAL_API_KEY, GENERAL_SERVICE_DOMAIN } = process.env
// export const general_client = createClient({
//   serviceDomain: GENERAL_SERVICE_DOMAIN,
//   apiKey: GENERAL_API_KEY,
// })

// export const pageApiConfig = {
//   endpoint: 'page',
//   getPostsLimit: 100,
//   postsForPage: 1,
// }


/*------------------------------*/
/* WorksService */
/*------------------------------*/
// const { WORKS_API_KEY, WORKS_SERVICE_DOMAIN } = process.env
// export const worksClient = createClient({
//   serviceDomain: WORKS_SERVICE_DOMAIN,
//   apiKey: WORKS_API_KEY,
// })

export const worksApiConfig = {
  endpoint: 'works',
  getPostsLimit: 100,
  postsForPage: 6,
}
