const getDomain = href =>
  href.replace(/https?:\/\/(.*?)\/.*/, '$1').replace(/:\d+/, '')

export const getUrl = (env, req, href = '') => {
  const { NODE_ENV, API_PROTOCOL, API_PORT } = env
  const { host, path } =
    NODE_ENV === 'production'
      ? {
          host: req ? req.headers.host : getDomain(href),
          path: '/api/blog'
        }
      : {
          host: req ? req.headers.host : getDomain(href),
          path: ''
        }
  return `${API_PROTOCOL}://${host}${API_PORT}${path}`
}
