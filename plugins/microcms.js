const { createClient } = require('microcms-js-sdk')

export default function ({ $config }, inject) {
  const { WORKS_SERVICE_DOMAIN, WORKS_API_KEY } = $config
  const worksClient = createClient({
    serviceDomain: WORKS_SERVICE_DOMAIN,
    apiKey: WORKS_API_KEY,
  })

  inject('worksClient', worksClient)

  const { GENERAL_SERVICE_DOMAIN, GENERAL_API_KEY } = $config
  const generalClient = createClient({
    serviceDomain: GENERAL_SERVICE_DOMAIN,
    apiKey: GENERAL_API_KEY,
  })

  inject('generalClient', generalClient)
}
