export const getUrl = ({ NODE_ENV, API_PROTOCOL, API_PORT }, req, window) => {
  const { host, path } =
    NODE_ENV === 'production'
      ? {
          host: req ? req.headers.host : window.location.href,
          path: '/api/blog'
        }
      : {
          host: 'localhost',
          path: ''
        }
  return `${API_PROTOCOL}://${host}${API_PORT}${path}`
}
