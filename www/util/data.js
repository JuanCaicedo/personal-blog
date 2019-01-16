const getDomain = href => {
  return href.replace(/https?:\/\/(.*?)\/.*/, '$1').replace(/:\d+/, '')
}

export const getUrl = (env, req, location) => {
  const { host, path } =
    env.NODE_ENV === 'production'
      ? {
          host: req ? getDomain(req.headers.host) : getDomain(location.href),
          path: '/api'
        }
      : {
          host: req ? getDomain(req.headers.host) : getDomain(location.href),
          path: ''
        }
  return `${env.API_PROTOCOL}://${host}${env.API_PORT}${path}`
}
