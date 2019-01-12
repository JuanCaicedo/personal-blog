export const getUrl = (process, req, window) => {
  const { host, path } =
    process.env.NODE_ENV === 'production'
      ? {
          host: req ? req.headers.host : window.location.href,
          path: '/api/blog'
        }
      : {
          host: 'localhost',
          path: ''
        }
  return `${process.env.API_PROTOCOL}://${host}${process.env.API_PORT}${path}`
}
