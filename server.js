const express = require('express')
const next = require('next')
const minimist = require('minimist')

const args = minimist(process.argv.slice(2), {
  alias: {
    p: 'port'
  },
  default: {
    port: 2000
  }
})
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()

    server.get('/blog/:slug', (req, res) => {
      const queryParams = { slug: req.params.slug }

      app.render(req, res, '/blog', queryParams)
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(args.port, err => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${args.port}`)
    })
  })
  .catch(err => {
    console.error('err', err)
    process.exit(1)
  })
